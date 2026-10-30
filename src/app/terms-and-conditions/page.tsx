import React from "react";
import { Metadata } from "next";
import TermsAndConditionsClient from "./TermsAndConditionsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions | UROANDROGUY",
  description:
    "Terms of use and clinical disclaimer for UROANDROGUY and Dr. Rakesh Vamsi's official medical portal.",
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsClient />;
}
