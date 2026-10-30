import React from "react";
import { Metadata } from "next";
import BookingWizard from "@/components/booking/BookingWizard";

export const metadata: Metadata = {
  title: "Book Appointment with Dr. Rakesh Vamsi | KIMS Hospital Nellore",
  description:
    "Schedule an in-person, video, or phone consultation with Dr. Rakesh Vamsi, Consultant Urologist & Andrologist at KIMS Hospital, Nellore. Quick, easy, and confidential online appointment booking.",
};

export default function BookAppointmentPage() {
  return <BookingWizard />;
}
