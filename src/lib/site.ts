export const siteConfig = {
  name: "Garr Dental Center",
  shortName: "Garr Dental",
  doctor: "Dr. Ben Garr",
  tagline: "Supra-gingival dentistry in Carrington, North Dakota",
  description:
    "Garr Dental Center provides a comprehensive range of dental services, including cosmetic smile makeovers, implant dentistry, sleep apnea treatment & more!",
  phone: "701-652-2300",
  phoneHref: "tel:+17016522300",
  address: {
    line1: "740 4th Ave S, Suite 201",
    city: "Carrington",
    state: "ND",
    zip: "58421",
  },
  mapsUrl:
    "https://www.google.com/maps/place/Garr+Dental+Center/@47.438947,-99.117798,17z/data=!4m5!3m4!1s0x0:0xbded488bf9970654!8m2!3d47.438947!4d-99.117798",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=740+4th+Ave+S+Suite+201+Carrington+ND+58421",
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/garrdentalcenter",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@garrdentalcenter2449",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/garrdentalcenter/",
    },
  ],
  rating: {
    value: "5.0",
    count: 232,
    source: "Google",
    label: "EXCELLENT",
  },
  serviceArea:
    "Carrington dentist Dr. Ben Garr of Garr Dental Center provides exceptional cosmetic dentistry, dental implants, full-mouth reconstruction, sleep apnea treatment, TMJ therapy, and more to patients in the Carrington, North Dakota area, including from the communities of Jamestown, Cooperstown, Harvey, Bismarck, and zip codes 58241 and 58401.",
  serviceAreaPlaces: [
    "Carrington",
    "Jamestown",
    "Cooperstown",
    "Harvey",
    "Bismarck",
  ],
  smsConsent:
    "By providing my phone number, I consent to receive SMS text messages from Garr Dental Center from appointment reminders, marketing messages and general two-way communication.",
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
] as const;

export const offers = [
  {
    id: "implants",
    kicker: "New patient offer",
    title: "$100 Off Dental Implants",
    detail: "Contact us today for details.",
    value: "$100",
    action: "Ask about implants",
    href: "/services/dental-implants",
    tone: "dark" as const,
  },
  {
    id: "virtual",
    kicker: "New patient online offer",
    title: "FREE Virtual Cosmetic Consultation",
    detail: "$200 Value!",
    value: "$200",
    action: "Get started now",
    href: "/virtual-consult",
    tone: "light" as const,
  },
  {
    id: "implant-consult",
    kicker: "New patient online offer",
    title: "FREE Initial Implant Consult & CT Scan",
    detail: "$350 Value! Call 701-652-2300 today to schedule.",
    value: "$350",
    action: "Call 701-652-2300",
    href: "tel:+17016522300",
    tone: "copper" as const,
  },
] as const;

export const consultSteps = [
  {
    number: "01",
    title: "Upload a close-up smile or selfie smile.",
    detail:
      "Share a photo so your dentist can see the smile you would like to improve.",
  },
  {
    number: "02",
    title: "Receive a personalized video.",
    detail:
      "Your dentist will send you a personalized video with recommendations regarding your specific desires and concerns.",
  },
  {
    number: "03",
    title: "Review your plan and meet in person.",
    detail:
      "Once you have a chance to review your personalized plan and recommendations, you can schedule an appointment to meet in-person with your dentist.",
  },
] as const;
