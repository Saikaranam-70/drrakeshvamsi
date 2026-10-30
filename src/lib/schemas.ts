import { z } from "zod";

export const appointmentBookingSchema = z.object({
  consultationType: z.enum(["in-person", "video", "phone"], {
    required_error: "Please select a consultation type",
  }),
  department: z.string().min(1, "Please select the department or reason for visit"),
  description: z.string().max(500, "Description cannot exceed 500 characters").optional(),
  date: z.string().min(1, "Please select an appointment date"),
  timeSlot: z.string().min(1, "Please select an available time slot"),
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit mobile number")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  age: z
    .string()
    .min(1, "Please specify patient age")
    .regex(/^\d{1,3}$/, "Please enter a valid age"),
  gender: z.enum(["Male", "Female", "Other"], {
    required_error: "Please select gender",
  }),
});

export type AppointmentBookingData = z.infer<typeof appointmentBookingSchema>;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  preferredDate: z.string().optional(),
  preferredTimeSlot: z.string().optional(),
  message: z.string().max(1000, "Message cannot exceed 1000 characters").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
