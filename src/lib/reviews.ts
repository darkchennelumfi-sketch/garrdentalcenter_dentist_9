export type Review = {
  name: string;
  initials: string;
  quote: string;
  source: "Google";
};

export const reviews: Review[] = [
  {
    name: "Diane Haugen",
    initials: "DH",
    quote:
      "Great place there so patient and kind take there time and explain what there going to do thanks for everything I'll keep coming back",
    source: "Google",
  },
  {
    name: "Mel",
    initials: "M",
    quote:
      "I met Dr Garr and his staf for the first time today to discuss my future dental plans. In no time at all, I had a consultation and 3D scan. Dr. Garr and I decided on a plan.\n\nFrom the moment I nervously wrote I needed an appointment, to the time I walked out of the office, l was given respect and for me personally, hope. Lots of hope.",
    source: "Google",
  },
  {
    name: "Chris Di Liberti",
    initials: "CD",
    quote: "Had a cleaning today and the staff was very professional.",
    source: "Google",
  },
  {
    name: "Bob Opp",
    initials: "BO",
    quote:
      "Very impressed. Everyone was friendly and helpful. Explained thoroughly what needed to be done and how much it would cost. Very satisfied and happy that I chose Garr Dental.",
    source: "Google",
  },
  {
    name: "Sharon Whitmer",
    initials: "SW",
    quote: "Always a great experience and genuine care for their patient.",
    source: "Google",
  },
  {
    name: "Nathan T. Orr",
    initials: "NO",
    quote: "Friendly. Precise. Eazzy peazzy! Great staff.",
    source: "Google",
  },
];

export const faqs = [
  {
    question: "What is supra-gingival dentistry?",
    answer:
      "At Garr Dental Center, we've found that the healthiest approach in dentistry uses supra-gingival minimally invasive techniques. Work is completed above the gum line, which makes it a healthier form of dentistry.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes. Connect with us today and get all of your questions answered for free in three easy steps: upload a close-up smile or selfie smile, receive a personalized video with recommendations, then schedule an in-person appointment to review your plan.",
  },
  {
    question: "What services does Garr Dental Center offer?",
    answer:
      "Our care spans cosmetic dentistry, dental implants, laser dentistry, full mouth reconstruction, sleep, snoring and airway treatments, supra-gingival dentistry, general and family dentistry, and more.",
  },
  {
    question: "How do I request an appointment?",
    answer:
      "Call our Carrington office at 701-652-2300 or send a message through the contact form. You can also start with a free virtual cosmetic consultation.",
  },
  {
    question: "Where is the office located?",
    answer:
      "Garr Dental Center is located at 740 4th Ave S, Suite 201, Carrington, ND 58421. We welcome patients from Jamestown, Cooperstown, Harvey, Bismarck and the surrounding communities.",
  },
] as const;
