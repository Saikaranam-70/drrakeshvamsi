export interface HospitalFacility {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
}

export const hospitalData = {
  name: "KIMS Hospital",
  branch: "Nellore",
  fullAddress: "KIMS Hospital, SP Nagar, Nellore, Andhra Pradesh, India - 524002",
  phone: "+91 76740 08057",
  email: "info@uroandroguy.com",
  instagram: "@uroandroguy",
  hours: "Mon - Sat: 9:00 AM - 5:00 PM (Slot basis - as per hospital schedule)",
  googleMapsUrl: "https://maps.google.com/?q=KIMS+Hospitals+Nellore",
  embedMapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.871882171663!2d79.96576907587249!3d14.434546081119064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf328e835091f%3A0x2039ca804465dba5!2sKIMS%20Hospitals%2C%20Nellore!5e0!3m2!1sen!2sin!4v1793368188028!5m2!1sen!2sin",
  landmarks: [
    { name: "Nellore Bus Stand", distance: "Approx 3.5 km" },
    { name: "Nellore Railway Station", distance: "Approx 4.2 km" },
    { name: "National Highway 16 (NH16)", distance: "Direct connectivity" },
  ],
  facilities: [
    {
      title: "Main Hospital Building",
      subtitle: "Multi-Specialty Healthcare Infrastructure",
      icon: "Building2",
      description: "Comprehensive tertiary care hospital with 24/7 emergency and trauma support.",
    },
    {
      title: "Reception & Waiting Area",
      subtitle: "Patient Hospitality",
      icon: "Armchair",
      description: "Air-conditioned, comfortable waiting lounge with swift electronic registration.",
    },
    {
      title: "Consultation Room",
      subtitle: "Private & Confidential",
      icon: "Stethoscope",
      description: "Fully equipped private consultation chambers designed for patient comfort and thorough exams.",
    },
    {
      title: "Advanced Facilities",
      subtitle: "Laser & Laparoscopic OT Suites",
      icon: "Sparkles",
      description: "Modular surgical suites with ultra-modern Holmium lasers, 4K laparoscopy, and robotic platforms.",
    },
    {
      title: "Comfortable Environment",
      subtitle: "Inpatient Rooms",
      icon: "Bed",
      description: "Spacious private, semi-private, and deluxe recovery rooms with dedicated nursing attention.",
    },
  ],
};
