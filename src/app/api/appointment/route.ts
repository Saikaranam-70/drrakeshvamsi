import { NextResponse } from "next/server";
import { appointmentBookingSchema } from "@/lib/schemas";
import { generateAppointmentId } from "@/lib/utils";

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

    // In production, this would trigger an SMS via hospital gateway or save to database.
    return NextResponse.json({
      success: true,
      reference: appointmentReference,
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
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
