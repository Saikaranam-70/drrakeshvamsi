export interface TestimonialItem {
  id: string;
  patientInitials: string;
  location: string;
  treatmentCategory: string;
  story: string;
  date: string;
  verified: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    patientInitials: "S. K. R.",
    location: "Nellore, AP",
    treatmentCategory: "Kidney Stones (Laser RIRS)",
    story:
      "I was suffering from severe renal colic on my right side. Dr. Rakesh Vamsi diagnosed an 11mm stone and performed laser RIRS at KIMS Hospital. I was discharged within 24 hours with negligible pain and returned to my regular routine within 3 days. Dr. Vamsi's calm explanations gave my family tremendous peace of mind.",
    date: "September 2024",
    verified: true,
  },
  {
    id: "t2",
    patientInitials: "M. V. N.",
    location: "Tirupati, AP",
    treatmentCategory: "Prostate Care (Laser Prostatectomy)",
    story:
      "For over a year I had to get up 4-5 times every night to pass urine, which was draining my energy. Dr. Rakesh Vamsi thoroughly evaluated my enlarged prostate and performed laser surgery. My flow is completely restored and I now sleep peacefully through the night.",
    date: "August 2024",
    verified: true,
  },
  {
    id: "t3",
    patientInitials: "A. P.",
    location: "Kavali, AP",
    treatmentCategory: "Minimally Invasive Laparoscopic Surgery",
    story:
      "Dr. Rakesh Vamsi performed laparoscopic pyeloplasty for my pelvi-ureteric junction obstruction. His precision and expertise with minimally invasive techniques meant I had tiny keyhole marks and recovered far quicker than open surgery. Highly recommended.",
    date: "July 2024",
    verified: true,
  },
  {
    id: "t4",
    patientInitials: "K. R.",
    location: "Gudur, AP",
    treatmentCategory: "Male Reproductive Health",
    story:
      "Finding a specialist who handles sensitive men's health concerns with such professionalism and confidentiality is rare. Dr. Rakesh Vamsi listened patiently, conducted accurate diagnostics, and provided treatment that made an immense difference in my life.",
    date: "June 2024",
    verified: true,
  },
];
