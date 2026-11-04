import React from "react";
import { Metadata } from "next";
import TermsAndConditionsClient from "./TermsAndConditionsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions | Urologist and Andrologist",
  description:
  "Terms of use and clinical disclaimer for Dr. Rakesh Vamsi - Consultant Urologist and Andrologist official medical portal.",
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsClient />;
}
