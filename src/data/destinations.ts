import girImg from "@/assets/dest-gir.jpeg";
import somnathImg from "@/assets/dest-somnath.jpg";
import dwarkaImg from "@/assets/dest-dwarka.jpg";
import kutchImg from "@/assets/dest-kutch.jpg";
import saputaraImg from "@/assets/dest-saputara.jpg";
import diuImg from "@/assets/dest-diu.jpg";

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    slug: "gir",
    name: "Gir National Park",
    tagline: "Land of the Asiatic Lion",
    image: girImg,
    description:
      "The only home of the majestic Asiatic Lion. Experience thrilling jungle safaris through dry deciduous forests and meet Gujarat's roaring royalty.",
    highlights: ["Lion Safari", "Devaliya Park", "Wildlife Photography", "Crocodile Breeding Centre"],
  },
  {
    slug: "somnath",
    name: "Somnath",
    tagline: "First among the Twelve Jyotirlingas",
    image: somnathImg,
    description:
      "An eternal shrine on the Arabian Sea coast. Witness the divine evening aarti and the timeless temple kissed by ocean breeze.",
    highlights: ["Somnath Temple", "Light & Sound Show", "Triveni Sangam", "Beachside Aarti"],
  },
  {
    slug: "dwarka",
    name: "Dwarka",
    tagline: "Kingdom of Lord Krishna",
    image: dwarkaImg,
    description:
      "The sacred city of Krishna where mythology meets the sea. Visit Dwarkadhish, Bet Dwarka and the mystical Nageshwar Jyotirling.",
    highlights: ["Dwarkadhish Temple", "Bet Dwarka", "Nageshwar", "Rukmini Temple"],
  },
  {
    slug: "kutch",
    name: "Kutch — White Rann",
    tagline: "Where the desert turns to silver",
    image: kutchImg,
    description:
      "An endless white salt desert under a full moon sky. Stay in luxury tents, witness handicrafts and the legendary Rann Utsav.",
    highlights: ["White Rann", "Rann Utsav", "Handicraft Villages", "Kalo Dungar"],
  },
  {
    slug: "saputara",
    name: "Saputara",
    tagline: "Gujarat's only hill station",
    image: saputaraImg,
    description:
      "Misty hills, lush valleys and a serene lake. The perfect royal escape for couples and families seeking nature's calm.",
    highlights: ["Sunset Point", "Saputara Lake", "Tribal Museum", "Ropeway"],
  },
  {
    slug: "diu",
    name: "Diu",
    tagline: "Portuguese charm by the sea",
    image: diuImg,
    description:
      "A coastal jewel of golden beaches, colonial forts and quiet evenings. Slow travel at its most regal.",
    highlights: ["Diu Fort", "Nagoa Beach", "St. Paul's Church", "Sunset Point"],
  },
];