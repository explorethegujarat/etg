export interface Pkg {
  name: string;
  duration: string;
  category: "Wildlife" | "Family" | "Couple" | "Weekend" | "Customized";
  highlights: string[];
  price: number;
  destinations: string[];
}

export const packages: Pkg[] = [
  {
    name: "Gir Lion Trail",
    duration: "3 Nights / 4 Days",
    category: "Wildlife",
    highlights: ["2 Lion Safaris", "Devaliya Park", "Luxury Jungle Resort", "Nature Walks"],
    price: 14999,
    destinations: ["Gir", "Somnath"],
  },
  {
    name: "Royal Saurashtra",
    duration: "6 Nights / 7 Days",
    category: "Family",
    highlights: ["Somnath Aarti", "Dwarka Darshan", "Diu Beaches", "Heritage Stay"],
    price: 28999,
    destinations: ["Somnath", "Dwarka", "Diu"],
  },
  {
    name: "White Rann Romance",
    duration: "3 Nights / 4 Days",
    category: "Couple",
    highlights: ["Full-moon Rann Visit", "Luxury Tent Stay", "Cultural Evening", "Kalo Dungar"],
    price: 19999,
    destinations: ["Kutch"],
  },
  {
    name: "Saputara Weekend",
    duration: "2 Nights / 3 Days",
    category: "Weekend",
    highlights: ["Hill Resort", "Boating", "Ropeway", "Sunset Point"],
    price: 8999,
    destinations: ["Saputara"],
  },
  {
    name: "Spiritual Sojourn",
    duration: "5 Nights / 6 Days",
    category: "Family",
    highlights: ["Somnath", "Dwarka", "Nageshwar", "Bet Dwarka"],
    price: 22999,
    destinations: ["Somnath", "Dwarka"],
  },
  {
    name: "Grand Gujarat",
    duration: "9 Nights / 10 Days",
    category: "Customized",
    highlights: ["Wildlife + Heritage + Beach", "Private Cab", "Premium Hotels", "Personal Guide"],
    price: 49999,
    destinations: ["Gir", "Somnath", "Dwarka", "Kutch", "Diu"],
  },
];