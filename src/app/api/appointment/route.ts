import { NextResponse } from "next/server";
import { appointmentBookingSchema } from "@/lib/schemas";
import { generateAppointmentId } from "@/lib/utils";
import { sendAppointmentEmails } from "@/lib/emailService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate using Zod schema
    const validation = appointmentBookingSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const appointmentReference =
      body.appointmentReference || generateAppointmentId();

    const emailPayload = {
      reference: appointmentReference,
      fullName: validation.data.fullName,
      phone: validation.data.phone,
      email: validation.data.email,
      age: validation.data.age,
      gender: validation.data.gender,
      consultationType: validation.data.consultationType,
      department: validation.data.department,
      date: validation.data.date,
      timeSlot: validation.data.timeSlot,
      description: validation.data.description,
    };

    // Send emails (to clinic notification recipient and patient confirmation copy)
    const emailResult = await sendAppointmentEmails(emailPayload).catch((err) => {
      console.error("[Appointment Route] Error dispatching email:", err);
      return { success: false, providerUsed: "None", error: err?.message };
    });

    return NextResponse.json({
      success: true,
      reference: appointmentReference,
      emailDispatched: emailResult.success,
      providerUsed: emailResult.providerUsed,
      message: "Appointment request received and queued for confirmation.",
      data: {
        reference: appointmentReference,
        patientName: validation.data.fullName,
        date: validation.data.date,
        timeSlot: validation.data.timeSlot,
        department: validation.data.department,
        consultationType: validation.data.consultationType,
      },
    });
  } catch (err) {
    console.error("[Appointment Route] Server error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

