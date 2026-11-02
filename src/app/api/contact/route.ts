import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";
import { sendContactEmails } from "@/lib/emailService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Send contact emails (to clinic notification recipient and visitor acknowledgement)
    const emailResult = await sendContactEmails({
      fullName: validation.data.fullName,
      phone: validation.data.phone,
      email: validation.data.email,
      preferredDate: validation.data.preferredDate,
      preferredTimeSlot: validation.data.preferredTimeSlot,
      message: validation.data.message,
    }).catch((err) => {
      console.error("[Contact Route] Error dispatching email:", err);
      return { success: false, providerUsed: "None", error: err?.message };
    });

    return NextResponse.json({
      success: true,
      emailDispatched: emailResult.success,
      providerUsed: emailResult.providerUsed,
      message: "Contact message received successfully.",
    });
  } catch (err) {
    console.error("[Contact Route] Server error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

