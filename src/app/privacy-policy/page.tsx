import React from "react";
import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Urologist and Andrologist",
  description:
  "Patient privacy policy and health data protection guidelines for Urologist and Andrologist clinical practice and Dr. Rakesh Vamsi at KIMS Hospital, Nellore.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
