export type ServiceCategory =
  | "cosmetic"
  | "restorative"
  | "general"
  | "comfort";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  featured: boolean;
  description: string | null;
  icon:
    | "sparkles"
    | "implant"
    | "laser"
    | "reconstruction"
    | "airway"
    | "gumline"
    | "orthodontics"
    | "whitening"
    | "crown"
    | "veneer"
    | "denture"
    | "smile"
    | "family"
    | "gum"
    | "emergency"
    | "root"
    | "sedation"
    | "restorative"
    | "tmj"
    | "wisdom";
};

export const serviceCategories: {
  id: ServiceCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "cosmetic",
    label: "Cosmetic & Smile",
    description: "Shape, shade and alignment, considered as a whole.",
  },
  {
    id: "restorative",
    label: "Implants & Reconstruction",
    description: "Rebuilding comfort, function and confidence.",
  },
  {
    id: "general",
    label: "General & Family",
    description: "Everyday care for every stage of life.",
  },
  {
    id: "comfort",
    label: "Comfort & Airway",
    description: "Calmer visits, healthier breathing, gentler techniques.",
  },
];

export const services: Service[] = [
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    category: "cosmetic",
    featured: true,
    description:
      "We offer a wide range of dental cosmetic procedures to address your dental cosmetic concerns or to improve your dental health. For example, we provide healthy supra-gingival and minimally invasive porcelain and composite veneers, bonding, onlays, crowns, and tooth whitening.",
    icon: "sparkles",
  },
  {
    slug: "clear-aligner-orthodontics",
    name: "Clear Aligner Orthodontics",
    category: "cosmetic",
    featured: false,
    description: null,
    icon: "orthodontics",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "cosmetic",
    featured: false,
    description: null,
    icon: "whitening",
  },
  {
    slug: "dental-veneers",
    name: "Dental Veneers",
    category: "cosmetic",
    featured: false,
    description: null,
    icon: "veneer",
  },
  {
    slug: "suresmile-aligners",
    name: "SureSmile",
    category: "cosmetic",
    featured: false,
    description: null,
    icon: "smile",
  },
  {
    slug: "dental-crowns-and-bridges",
    name: "Dental Crowns and Bridges",
    category: "restorative",
    featured: false,
    description: null,
    icon: "crown",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "restorative",
    featured: true,
    description:
      "Using dental implants, we can give you the comfort and convenience that natural teeth can bring. Imagine being able to chew, smile and talk without the worry of discomfort or embarrassment! Dental implants are a modern way to replace missing teeth or even secure a loose fitting denture, so you can smile with confidence!",
    icon: "implant",
  },
  {
    slug: "implant-supported-dentures",
    name: "Implant-Supported Dentures",
    category: "restorative",
    featured: false,
    description: null,
    icon: "denture",
  },
  {
    slug: "dentures",
    name: "Dentures",
    category: "restorative",
    featured: false,
    description: null,
    icon: "denture",
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    category: "restorative",
    featured: false,
    description: null,
    icon: "restorative",
  },
  {
    slug: "full-mouth-reconstruction",
    name: "Full Mouth Reconstruction",
    category: "restorative",
    featured: true,
    description:
      "We offer a wide range of dental services to address complex dental issues. Many patients enjoy coming to one location to get their mouth rebuilt. From digital design and implant planning, to the surgical phase, to the delivery of final smile prosthesis, we're confident that you will say, \"I wish I would have done that years ago.\"",
    icon: "reconstruction",
  },
  {
    slug: "general-and-family-dentistry",
    name: "General and Family Dentistry",
    category: "general",
    featured: false,
    description: null,
    icon: "family",
  },
  {
    slug: "gum-disease-treatment",
    name: "Gum Disease Treatment",
    category: "general",
    featured: false,
    description: null,
    icon: "gum",
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    category: "general",
    featured: false,
    description: null,
    icon: "emergency",
  },
  {
    slug: "root-canals",
    name: "Root Canals",
    category: "general",
    featured: false,
    description: null,
    icon: "root",
  },
  {
    slug: "wisdom-teeth-removal",
    name: "Wisdom Teeth Removal",
    category: "general",
    featured: false,
    description: null,
    icon: "wisdom",
  },
  {
    slug: "lasers",
    name: "LASER Dentistry",
    category: "comfort",
    featured: true,
    description:
      "THIS CHANGES EVERYTHING. Our practice is now offering reliably anesthesia-free and pain-free procedures using the SOLEA dental laser. The SOLEA laser takes the drill, the needle, the noise, and the pain out of dental visits. Get ready for comfortable, stress-free dentistry with Dr. Garr!",
    icon: "laser",
  },
  {
    slug: "sedation-dentistry",
    name: "Sedation Dentistry",
    category: "comfort",
    featured: false,
    description: null,
    icon: "sedation",
  },
  {
    slug: "snoring-sleep-apnea",
    name: "Sleep, Snoring & Airway Treatments",
    category: "comfort",
    featured: true,
    description:
      "Do you suffer from sleep apnea? Does snoring affect your sleep or the sleep of your partner? Sleep and airway problems can begin at a young age and can even affect newborns. We offer a variety of services to help prevent airway problems in kids as well as treatments for adults who suffer with sleep, snoring, and airway challenges.",
    icon: "airway",
  },
  {
    slug: "tmj-therapy",
    name: "TMJ/TMD Therapy",
    category: "comfort",
    featured: false,
    description: null,
    icon: "tmj",
  },
  {
    slug: "supra-gingival-dentistry",
    name: "Supra-Gingival Dentistry",
    category: "comfort",
    featured: true,
    description:
      "All procedures in medicine and dentistry can be provided with a variety of approaches: some aggressive, and some much less extreme, like scope micro-surgery. Here at Garr Dental Center, we've found that the healthiest approach in dentistry uses supra-gingival minimally invasive techniques. Come see the difference today!",
    icon: "gumline",
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service, limit = 4): Service[] {
  const sameCategory = services.filter(
    (item) => item.category === service.category && item.slug !== service.slug,
  );
  const fill = services.filter(
    (item) =>
      item.category !== service.category && item.slug !== service.slug,
  );
  return [...sameCategory, ...fill].slice(0, limit);
}

export function getCategoryLabel(category: ServiceCategory): string {
  return (
    serviceCategories.find((item) => item.id === category)?.label ?? category
  );
}
