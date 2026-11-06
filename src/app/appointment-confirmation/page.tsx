import React, { Suspense } from "react";
import { Metadata } from "next";
import AppointmentConfirmationClient from "./AppointmentConfirmationClient";

export const metadata: Metadata = {
  title: {
    absolute: "Appointment Confirmed | Dr. Rakesh Vamsi",
  },
  description:
    "Your appointment with Dr. Rakesh Vamsi at KIMS Hospital Nellore has been received and confirmed.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AppointmentConfirmationPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading appointment confirmation...</div>}>
      <AppointmentConfirmationClient />
    </Suspense>
  );
}
