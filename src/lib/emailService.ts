import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export interface AppointmentEmailPayload {
  reference: string;
  fullName: string;
  phone: string;
  email?: string;
  age: string;
  gender: string;
  consultationType: string;
  department: string;
  date: string;
  timeSlot: string;
  description?: string;
}

export interface ContactEmailPayload {
  fullName: string;
  phone: string;
  email: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  message?: string;
}

interface MailConfig {
  name: "Brevo" | "Gmail";
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
}

/**
 * Get Brevo SMTP configuration
 */
function getBrevoConfig(): MailConfig | null {
  const host = process.env.BREVO_MAIL_HOST || "smtp-relay.brevo.com";
  const port = parseInt(process.env.BREVO_MAIL_PORT || "587", 10);
  const user = process.env.BREVO_MAIL_USERNAME?.replace(/^["']|["']$/g, "") || "";
  const pass = process.env.BREVO_MAIL_PASSWORD?.replace(/^["']|["']$/g, "") || "";
  const from =
    process.env.BREVO_MAIL_FROM?.replace(/^["']|["']$/g, "") ||
    process.env.CLINIC_NOTIFICATION_EMAIL ||
    user;

  if (!user || !pass) return null;

  return {
    name: "Brevo",
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    from: `Dr. Rakesh Vamsi — Clinic <${from}>`,
  };
}

/**
 * Get Gmail SMTP configuration
 */
function getGmailConfig(): MailConfig | null {
  const host = process.env.GMAIL_MAIL_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.GMAIL_MAIL_PORT || "587", 10);
  const user = process.env.GMAIL_MAIL_USERNAME?.replace(/^["']|["']$/g, "") || "";
  const pass = process.env.GMAIL_MAIL_PASSWORD?.replace(/^["']|["']$/g, "") || "";
  const from =
    process.env.GMAIL_MAIL_FROM?.replace(/^["']|["']$/g, "") ||
    user ||
    process.env.CLINIC_NOTIFICATION_EMAIL ||
    "";

  if (!user || !pass) return null;

  return {
    name: "Gmail",
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    from: `Dr. Rakesh Vamsi — Clinic <${from}>`,
  };
}

/**
 * Helper to create Nodemailer transporter
 */
function createTransporter(config: MailConfig): Transporter {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.auth.user,
      pass: config.auth.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

/**
 * Send an email with automatic fallback between Brevo and Gmail
 */
async function sendWithFallback(mailOptions: {
  to: string;
  subject: string;
  text: string;
  html: string;
}): Promise<{ success: boolean; providerUsed: string; error?: string }> {
  const useBrevoEnv = process.env.USE_BREVO_MAIL;
  const preferBrevo =
    useBrevoEnv === undefined ||
    useBrevoEnv === "true" ||
    useBrevoEnv === "1" ||
    useBrevoEnv.toLowerCase() === "yes";

  const primaryConfig = preferBrevo ? getBrevoConfig() : getGmailConfig();
  const fallbackConfig = preferBrevo ? getGmailConfig() : getBrevoConfig();

  // Try primary provider
  if (primaryConfig) {
    try {
      const transporter = createTransporter(primaryConfig);
      await transporter.sendMail({
        from: primaryConfig.from,
        to: mailOptions.to,
        subject: mailOptions.subject,
        text: mailOptions.text,
        html: mailOptions.html,
      });
      console.log(`[EmailService] Sent successfully via ${primaryConfig.name} to ${mailOptions.to}`);
      return { success: true, providerUsed: primaryConfig.name };
    } catch (primaryErr: any) {
      console.error(
        `[EmailService] Failed sending via primary (${primaryConfig.name}):`,
        primaryErr?.message || primaryErr
      );
    }
  }

  // Fallback to second provider
  if (fallbackConfig) {
    try {
      console.log(`[EmailService] Attempting fallback via ${fallbackConfig.name}...`);
      const transporter = createTransporter(fallbackConfig);
      await transporter.sendMail({
        from: fallbackConfig.from,
        to: mailOptions.to,
        subject: mailOptions.subject,
        text: mailOptions.text,
        html: mailOptions.html,
      });
      console.log(`[EmailService] Fallback sent successfully via ${fallbackConfig.name} to ${mailOptions.to}`);
      return { success: true, providerUsed: fallbackConfig.name };
    } catch (fallbackErr: any) {
      console.error(
        `[EmailService] Failed sending via fallback (${fallbackConfig.name}):`,
        fallbackErr?.message || fallbackErr
      );
      return {
        success: false,
        providerUsed: "None",
        error: fallbackErr?.message || "Both primary and fallback email providers failed.",
      };
    }
  }

  return {
    success: false,
    providerUsed: "None",
    error: "No valid email provider configuration found. Check your environment variables.",
  };
}

// ==============================================================================
// APPOINTMENT EMAILS
// ==============================================================================

export async function sendAppointmentEmails(appointment: AppointmentEmailPayload) {
  const clinicRecipient =
    process.env.CLINIC_NOTIFICATION_EMAIL || "saimanikantakaranam682@gmail.com";

  // 1. Send Notification Email to Doctor/Clinic
  const adminSubject = `🗓️ New Appointment Request: ${appointment.fullName} [${appointment.reference}]`;
  const adminText = `
NEW APPOINTMENT BOOKING REQUEST
===================================
Reference ID: ${appointment.reference}
Patient Name: ${appointment.fullName}
Age / Gender: ${appointment.age} yrs / ${appointment.gender}
Phone: ${appointment.phone}
Email: ${appointment.email || "Not provided"}

APPOINTMENT DETAILS:
-------------------
Department: ${appointment.department}
Consultation: ${appointment.consultationType.toUpperCase()}
Preferred Date: ${appointment.date}
Preferred Slot: ${appointment.timeSlot}

Patient Notes / Reason:
${appointment.description || "None provided"}
===================================
Hospital: KIMS Hospital, Nellore
Consultant: Dr. G. Rakesh Vamsi (MS, M.Ch Urology)
  `.trim();

  const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #0d9488, #0f766e); padding: 24px 30px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.9; }
    .badge { display: inline-block; background: #042f2e; color: #5eead4; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; margin-top: 10px; }
    .content { padding: 28px 30px; }
    .table { width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 20px; }
    .table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .table td.label { font-weight: 600; color: #64748b; width: 38%; }
    .table td.val { color: #0f172a; font-weight: 500; }
    .highlight-box { background: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 8px; padding: 14px 18px; margin: 18px 0; }
    .highlight-box strong { color: #0f766e; }
    .footer { background: #f8fafc; padding: 16px 30px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
    .btn { display: inline-block; background: #0d9488; color: #ffffff !important; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 13px; margin-top: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Appointment Booking Request</h1>
      <p>Dr. Rakesh Vamsi — Urologist and Andrologist (KIMS Hospital Nellore)</p>
      <div class="badge">Reference ID: ${appointment.reference}</div>
    </div>
    <div class="content">
      <h3 style="margin-top: 0; color: #0f172a; font-size: 16px;">Patient Information</h3>
      <table class="table">
        <tr><td class="label">Patient Name:</td><td class="val">${appointment.fullName}</td></tr>
        <tr><td class="label">Phone Number:</td><td class="val"><a href="tel:${appointment.phone}" style="color: #0d9488; text-decoration: none; font-weight: 600;">${appointment.phone}</a></td></tr>
        <tr><td class="label">Email Address:</td><td class="val">${appointment.email ? `<a href="mailto:${appointment.email}" style="color: #0d9488; text-decoration: none;">${appointment.email}</a>` : "Not provided"}</td></tr>
        <tr><td class="label">Age / Gender:</td><td class="val">${appointment.age} yrs / ${appointment.gender}</td></tr>
      </table>

      <h3 style="color: #0f172a; font-size: 16px; margin-top: 24px;">Appointment Request Details</h3>
      <table class="table">
        <tr><td class="label">Department / Concern:</td><td class="val" style="color: #0d9488; font-weight: 600;">${appointment.department}</td></tr>
        <tr><td class="label">Consultation Type:</td><td class="val"><span style="text-transform: capitalize; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${appointment.consultationType}</span></td></tr>
        <tr><td class="label">Preferred Date:</td><td class="val">${appointment.date}</td></tr>
        <tr><td class="label">Preferred Time Slot:</td><td class="val">${appointment.timeSlot}</td></tr>
      </table>

      ${appointment.description
      ? `<div class="highlight-box">
              <strong>Patient Clinical Notes / Reason:</strong>
              <p style="margin: 6px 0 0; color: #334155; font-size: 14px; line-height: 1.5;">${appointment.description}</p>
            </div>`
      : ""
    }

      <div style="text-align: center; margin-top: 24px;">
        <a href="tel:${appointment.phone}" class="btn">Call Patient to Confirm</a>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">Dr. Rakesh Vamsi — Urologist and Andrologist • KIMS Hospital, Nellore, Andhra Pradesh</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  const adminResult = await sendWithFallback({
    to: clinicRecipient,
    subject: adminSubject,
    text: adminText,
    html: adminHtml,
  });

  // 2. If patient provided an email address, send them a confirmation receipt
  if (appointment.email && appointment.email.includes("@")) {
    const patientSubject = `Appointment Request Confirmed — Dr. Rakesh Vamsi [${appointment.reference}]`;
    const patientText = `
Dear ${appointment.fullName},

Thank you for requesting an appointment with Dr. G. Rakesh Vamsi (Consultant Urologist & Andrologist).

Your appointment request has been received with Reference ID: ${appointment.reference}.

APPOINTMENT SUMMARY:
-------------------
Department: ${appointment.department}
Consultation Mode: ${appointment.consultationType.toUpperCase()}
Requested Date: ${appointment.date}
Time Slot: ${appointment.timeSlot}

Location:
KIMS Hospital, Nellore, Andhra Pradesh.

Our clinical coordination team will review your preferred slot and contact you shortly at ${appointment.phone} to confirm your appointment.

Need urgent assistance?
Call our clinic directly: +91 80193 74607 / +91 89783 72346

Warm regards,
Dr. G. Rakesh Vamsi (MS, M.Ch Urology)
Consultant Urologist and Andrologist — KIMS Hospital Nellore
    `.trim();

    const patientHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #0d9488, #0f766e); padding: 24px 30px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.9; }
    .badge { display: inline-block; background: #042f2e; color: #5eead4; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; margin-top: 10px; }
    .content { padding: 28px 30px; font-size: 14px; line-height: 1.6; }
    .table { width: 100%; border-collapse: collapse; margin-top: 14px; margin-bottom: 20px; }
    .table td { padding: 8px 12px; font-size: 13px; border-bottom: 1px solid #f1f5f9; }
    .table td.label { font-weight: 600; color: #64748b; width: 40%; }
    .table td.val { color: #0f172a; font-weight: 500; }
    .info-box { background: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 8px; padding: 14px 18px; margin: 20px 0; }
    .footer { background: #f8fafc; padding: 16px 30px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Appointment Request Received</h1>
      <p>Dr. G. Rakesh Vamsi — Consultant Urologist & Andrologist</p>
      <div class="badge">Reference ID: ${appointment.reference}</div>
    </div>
    <div class="content">
      <p>Dear <strong>${appointment.fullName}</strong>,</p>
      <p>Thank you for booking an appointment with <strong>Dr. G. Rakesh Vamsi</strong> at KIMS Hospital, Nellore. We have received your request and our clinical team is processing it.</p>
      
      <div class="info-box">
        <strong style="color: #0f766e; display: block; margin-bottom: 8px;">Requested Appointment Summary</strong>
        <table class="table" style="margin: 0;">
          <tr><td class="label">Reference:</td><td class="val" style="font-weight: 700; color: #0d9488;">${appointment.reference}</td></tr>
          <tr><td class="label">Department / Concern:</td><td class="val">${appointment.department}</td></tr>
          <tr><td class="label">Consultation Mode:</td><td class="val" style="text-transform: capitalize;">${appointment.consultationType}</td></tr>
          <tr><td class="label">Preferred Date:</td><td class="val">${appointment.date}</td></tr>
          <tr><td class="label">Time Slot:</td><td class="val">${appointment.timeSlot}</td></tr>
          <tr><td class="label">Hospital:</td><td class="val">KIMS Hospital, Nellore, Andhra Pradesh</td></tr>
        </table>
      </div>

      <p style="color: #475569;">Our staff will contact you at <strong>${appointment.phone}</strong> to confirm your slot. For immediate assistance or rescheduling, please contact our hospital desk directly at <strong>+91 80193 74607</strong>.</p>
    </div>
    <div class="footer">
      <p style="margin: 0;">Dr. Rakesh Vamsi — Consultant Urologist and Andrologist • KIMS Hospital Nellore</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Fire-and-forget or await patient email
    await sendWithFallback({
      to: appointment.email,
      subject: patientSubject,
      text: patientText,
      html: patientHtml,
    }).catch((err) => {
      console.warn("[EmailService] Patient confirmation copy failed:", err);
    });
  }

  return adminResult;
}

// ==============================================================================
// CONTACT INQUIRY EMAILS
// ==============================================================================

export async function sendContactEmails(contact: ContactEmailPayload) {
  const clinicRecipient =
    process.env.CLINIC_NOTIFICATION_EMAIL || "saimanikantakaranam682@gmail.com";

  // 1. Send Notification Email to Doctor/Clinic
  const adminSubject = `📩 New Contact Inquiry from ${contact.fullName}`;
  const adminText = `
NEW CONTACT INQUIRY
===================
Name: ${contact.fullName}
Email: ${contact.email}
Phone: ${contact.phone}
Preferred Date: ${contact.preferredDate || "Not specified"}
Preferred Time: ${contact.preferredTimeSlot || "Not specified"}

Message:
${contact.message || "No message provided."}
===================
Sent from Dr. Rakesh Vamsi — Urologist and Andrologist Website Contact Form.
  `.trim();

  const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #0d9488, #0f766e); padding: 22px 30px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 28px 30px; font-size: 14px; }
    .table { width: 100%; border-collapse: collapse; margin-top: 14px; margin-bottom: 20px; }
    .table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .table td.label { font-weight: 600; color: #64748b; width: 35%; }
    .table td.val { color: #0f172a; font-weight: 500; }
    .msg-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; margin: 18px 0; }
    .footer { background: #f8fafc; padding: 16px 30px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
    .btn { display: inline-block; background: #0d9488; color: #ffffff !important; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 13px; margin: 4px 6px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Website Inquiry</h1>
      <p>Dr. Rakesh Vamsi — Urologist and Andrologist (KIMS Hospital Nellore)</p>
    </div>
    <div class="content">
      <table class="table">
        <tr><td class="label">Sender Name:</td><td class="val">${contact.fullName}</td></tr>
        <tr><td class="label">Email Address:</td><td class="val"><a href="mailto:${contact.email}" style="color: #0d9488; text-decoration: none;">${contact.email}</a></td></tr>
        <tr><td class="label">Phone Number:</td><td class="val"><a href="tel:${contact.phone}" style="color: #0d9488; text-decoration: none; font-weight: 600;">${contact.phone}</a></td></tr>
        ${contact.preferredDate ? `<tr><td class="label">Preferred Date:</td><td class="val">${contact.preferredDate}</td></tr>` : ""}
        ${contact.preferredTimeSlot ? `<tr><td class="label">Preferred Time:</td><td class="val">${contact.preferredTimeSlot}</td></tr>` : ""}
      </table>

      ${contact.message
      ? `<div class="msg-box">
              <strong style="color: #0f766e; display: block; margin-bottom: 6px;">Message:</strong>
              <p style="margin: 0; color: #334155; line-height: 1.5;">${contact.message}</p>
            </div>`
      : ""
    }

      <div style="text-align: center; margin-top: 24px;">
        <a href="tel:${contact.phone}" class="btn">Call Contact</a>
        <a href="mailto:${contact.email}" class="btn" style="background: #0284c7;">Reply by Email</a>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">Dr. Rakesh Vamsi — Urologist and Andrologist • Lead Notifications</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  const adminResult = await sendWithFallback({
    to: clinicRecipient,
    subject: adminSubject,
    text: adminText,
    html: adminHtml,
  });

  // 2. Send acknowledgement email to the visitor
  if (contact.email && contact.email.includes("@")) {
    const visitorSubject = `Thank you for contacting Dr. Rakesh Vamsi's Clinic`;
    const visitorText = `
Dear ${contact.fullName},

Thank you for reaching out to Dr. G. Rakesh Vamsi (Consultant Urologist & Andrologist at KIMS Hospital, Nellore).

We have received your message and our team will get back to you shortly at ${contact.phone} or ${contact.email}.

If you require immediate medical guidance or wish to book a direct appointment, you can call us at +91 80193 74607.

Warm regards,
Dr. G. Rakesh Vamsi (MS, M.Ch Urology)
KIMS Hospital, Nellore
    `.trim();

    const visitorHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #0d9488, #0f766e); padding: 22px 30px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .content { padding: 28px 30px; font-size: 14px; line-height: 1.6; }
    .footer { background: #f8fafc; padding: 16px 30px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Inquiry Received</h1>
    </div>
    <div class="content">
      <p>Dear <strong>${contact.fullName}</strong>,</p>
      <p>Thank you for reaching out to <strong>Dr. G. Rakesh Vamsi</strong> (Consultant Urologist & Andrologist). We have received your inquiry and our team will get in touch with you shortly.</p>
      <p>For urgent inquiries or immediate appointments at KIMS Hospital Nellore, please call us directly at <strong>+91 80193 74607</strong>.</p>
    </div>
    <div class="footer">
      <p style="margin: 0;">Dr. Rakesh Vamsi — Urologist and Andrologist • KIMS Hospital Nellore</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    await sendWithFallback({
      to: contact.email,
      subject: visitorSubject,
      text: visitorText,
      html: visitorHtml,
    }).catch((err) => {
      console.warn("[EmailService] Contact acknowledgement copy failed:", err);
    });
  }

  return adminResult;
}
