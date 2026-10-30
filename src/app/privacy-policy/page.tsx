import React from "react";
import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | UROANDROGUY",
  description:
    "Patient privacy policy and health data protection guidelines for UROANDROGUY and Dr. Rakesh Vamsi's clinical practice at KIMS Hospital, Nellore.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
