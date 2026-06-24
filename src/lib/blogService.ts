import girImg from "@/assets/dest-gir.jpeg";
import kutchImg from "@/assets/dest-kutch.jpg";
import somnathImg from "@/assets/dest-somnath.jpg";
import diuImg from "@/assets/dest-diu.jpg";
import saputaraImg from "@/assets/dest-saputara.jpg";
import dwarkaImg from "@/assets/dest-dwarka.jpg";

export interface BlogPost {
  id: string; // Slug used as unique identifier
  title: string;
  excerpt: string;
  content: string; // Markdown/HTML detailed content
  img: string; // Image path or URL
  tag: string;
  date: string;
  author: string;
  readTime: string;
}

export const DEFAULT_POSTS: BlogPost[] = [
  {
    id: "the-complete-gir-safari-guide",
    title: "The Complete Gir Safari Guide",
    excerpt: "How to plan, book and make the most of your lion safari in Gir National Park.",
    img: girImg,
    tag: "Wildlife",
    date: "Updated 2026",
    author: "Rajesh Varma",
    readTime: "6 min read",
    content: `### Welcome to the Land of the Asiatic Lion

Gir National Park and Wildlife Sanctuary, situated in the Kathiawar peninsula of Gujarat, is the sole remaining natural habitat of the majestic Asiatic Lion. Spanning over 1,412 square kilometers of deciduous forest, grasslands, and rocky hills, Gir offers an unparalleled wildlife experience in India.

This comprehensive guide will help you plan your safari adventure, ensuring you have the highest chance of spotting these regal cats in their natural habitat.

---

### Understanding the Safari Zones

Gir offers two primary safari options:

1. **Gir Jungle Trail (GJT)**: This is the core sanctuary safari. Jeeps take you deep into the forest across 8 distinct routes. It offers a raw wilderness experience, where you can spot lions, leopards, deer, antelope, and over 300 species of birds.
2. **Devaliya Safari Park (Gir Interpretation Zone)**: A fenced, 412-hectare zone that replicates the wild. It guarantees sightings of Asiatic Lions within a shorter, 30-45 minute safari in closed buses or open jeeps. Ideal for families and quick visits.

---

### Booking Your Safari: Essential Tips

Safaris sell out months in advance, especially during peak seasons (November to March).

* **Official Portal**: Book only through the official Gujarat Forest Department website. Avoid third-party scams.
* **Timing**: Morning safaris (6:00 AM - 9:00 AM) and late afternoon safaris (3:00 PM - 6:00 PM) offer the best chances of spotting lions, as they are active during cooler hours.
* **Permits**: Keep your government-approved photo ID handy. The name on the permit must match your ID exactly.
* **Sanctuary Closure**: The core Gir Jungle Trail is closed from **June 16 to October 15** every year due to the monsoons. Devaliya remains open year-round.

---

### Best Time to Visit

* **Winter (November to February)**: The weather is pleasant and comfortable for safari rides.
* **Summer (March to May)**: Extremely hot, but excellent for lion sightings as animals congregate around the remaining water holes.

---

### Safari Packing Checklist

* Light, earth-toned clothing (khaki, olive green, beige) to blend with the forest.
* High-quality binoculars and a zoom camera lens (300mm+ recommended).
* Sunglasses, a wide-brimmed hat, and sunscreen to protect against the Gujarat sun.
* Plenty of water to stay hydrated during the 3-hour forest ride.`
  },
  {
    id: "rann-utsav-royal-festival-white-desert",
    title: "Rann Utsav: A Royal Festival in the White Desert",
    excerpt: "Everything you need to know about Kutch's flagship festival — luxury tents, dates and cultural evenings.",
    img: kutchImg,
    tag: "Heritage",
    date: "2026 Edition",
    author: "Meera Shah",
    readTime: "8 min read",
    content: `### The Magic of the White Salt Desert

Every winter, the salt marshes of the Great Rann of Kutch transform into a shimmering white wonderland. Spanning over 7,500 square kilometers, the salt desert is one of the most surreal landscapes on earth.

During **Rann Utsav**, a three-month-long celebration of Kutchi art, craft, food, and culture, the quiet village of Dhordo becomes a vibrant canvas of colors, lights, and folklore.

---

### Key Highlights of the Festival

* **Full Moon Nights**: The desert shines like diamonds under the glow of a full moon. Viewing the Rann under a full moon is a bucket-list experience.
* **Tent City**: A luxury township built in the middle of the desert, offering air-conditioned Swiss tents, multi-cuisine dining, and premium hospitality.
* **Kutchi Handicrafts**: Shop directly from local artisans for exquisite Ajrakh block prints, Rogan art, copper bells, and mirror-work embroidery.
* **Adventure Sports**: Paramotoring, ATV rides, and camel cart excursions across the white expanse.

---

### Exploring Beyond Tent City

While Dhordo is the center of activities, a trip to Kutch is incomplete without visiting:

1. **Kalo Dungar (Black Hill)**: The highest point in Kutch, offering a panoramic view of the salt desert merging with the sky. Famous for the ancient Dattatreya Temple.
2. **Bhuj**: Explore the Aina Mahal (Mirror Palace), Prag Mahal, and the local markets.
3. **Craft Villages**: Visit Nirona, Hodka, and Bhirandiyara to witness traditional artisan crafts being practiced.

---

### How to Reach Dhordo

* **By Air/Rail**: The nearest airport and railway station are in Bhuj, approximately 85 km from the Tent City at Dhordo.
* **Road Trip**: Roads are well-maintained. Taxis and luxury coaches are easily available from Bhuj.`
  },
  {
    id: "somnath-dwarka-spiritual-journey",
    title: "Somnath & Dwarka: A 5-Day Spiritual Journey",
    excerpt: "A gentle pilgrimage itinerary combining Gujarat's two most sacred coasts.",
    img: somnathImg,
    tag: "Spiritual",
    date: "Travel Guide",
    author: "Amit Trivedi",
    readTime: "5 min read",
    content: `### A Journey of Faith and Devotion

Gujarat's western coastline is home to two of the most significant pilgrimage sites in Hinduism: the **Somnath Temple** (the first of the 12 Jyotirlingas of Lord Shiva) and the **Dwarkadhish Temple** (the ancient kingdom of Lord Krishna and one of the Chardham sites).

This curated 5-day itinerary balances spiritual exploration, beachside tranquility, and comfortable travel.

---

### The 5-Day Itinerary Outline

#### Day 1: Arrival in Somnath
* Arrive at Somnath (nearest airport is Rajkot, 180 km away, or Veraval railway station, 5 km away).
* Evening visit to the magnificent seaside Somnath Temple.
* Witness the sound and light show (*Jay Somnath*) which narrate the history of the temple's destruction and reconstruction.

#### Day 2: Exploring Somnath
* Visit Triveni Sangam (confluence of three holy rivers: Hiran, Kapila, and Saraswati).
* Visit Bhalka Tirth, the sacred site where Lord Krishna is believed to have left his mortal body.
* Drive to Porbandar (130 km) in the afternoon, visit Kirti Mandir (birthplace of Mahatma Gandhi) and Sudama Temple, then proceed to Dwarka.

#### Day 3: Entering Dwarkadhish
* Participate in the morning Aarti at the Dwarkadhish Temple (Jagat Mandir).
* Explore the ancient architecture of the 5-story temple, built on 72 pillars.
* Take a boat ride to **Bet Dwarka**, an island believed to be the original residence of Lord Krishna.
* Visit Nageshwar Jyotirlinga on the way back.

#### Day 4: Dwarka Coastal Attractions
* Visit Rukmini Devi Temple, dedicated to Krishna's queen.
* Watch the sunset at the Dwarka Beach and Lighthouse.
* Walk across the Sudama Setu, a suspension bridge over the Gomti River.

#### Day 5: Departure
* Morning prayers and departure from Dwarka (nearest airport is Jamnagar, 125 km away, or Rajkot).`
  },
  {
    id: "diu-beyond-the-beach",
    title: "Diu Beyond the Beach",
    excerpt: "Portuguese forts, sunset cliffs and the slow-travel charm of India's quietest island.",
    img: diuImg,
    tag: "Beaches",
    date: "Insider Tips",
    author: "Sarah D'Souza",
    readTime: "4 min read",
    content: `### The Hidden Gem of the Saurashtra Coast

Diu is a tiny, peaceful island off the southern coast of Gujarat's Kathiawar peninsula. For over 400 years, it was a Portuguese colony, leaving behind a unique architectural heritage, quiet streets, and a relaxed, laid-back vibe that sets it apart from mainland Gujarat.

---

### Beyond the Beaches: Historical Landmarks

While Nagoa Beach is famous for its watersports and unique Hoka trees, Diu's real charm lies in its history:

1. **Diu Fort**: Built by the Portuguese in 1535, this colossal sandstone fortress stands on the edge of the sea. Walk along its ancient ramparts, look at the old cannons, and enjoy panoramic ocean views.
2. **St. Paul’s Church**: A gorgeous example of Baroque architecture, featuring intricate wood carving and white stuccowork.
3. **Naida Caves**: Located just outside the city wall, these natural rock caves are a photographer's paradise, famous for their unique sunbeam patterns filtering through the cavern ceilings.

---

### Insider Travel Tips

* **Getting Around**: The best way to explore Diu is by renting a scooter or bicycle. The roads are exceptionally clean and traffic is minimal.
* **Best Time to Visit**: October to March. The weather is cool and breezy.
* **Dining**: Don't miss the local seafood, cooked with a Portuguese touch.`
  },
  {
    id: "saputara-monsoon-weekend-escape",
    title: "Saputara: A Monsoon Weekend Escape",
    excerpt: "Gujarat's only hill station shines brightest from June to October.",
    img: saputaraImg,
    tag: "Nature",
    date: "Seasonal",
    author: "Nikhil Joshi",
    readTime: "4 min read",
    content: `### Gujarat's Only Hill Station

Nestled in the Sahyadri range (Western Ghats), Saputara is a picturesque hill town situated at an altitude of 1,000 meters in the Dang district of Gujarat.

While it is a popular year-round getaway, Saputara truly comes alive during the monsoon season (June to October), when the valleys turn lush green, waterfalls cascade with full force, and clouds descend to touch the ground.

---

### Must-Visit Attractions in Saputara

* **Gira Waterfalls**: Located 50 km from Saputara, this seasonal waterfall is a sight to behold during the rains, plunging into the Ambica River.
* **Sunset Point**: Offers a breathtaking view of the Dang forest and valleys under a crimson sky. Reachable by a scenic cable car ride.
* **Saputara Lake**: A peaceful lake in the center of the town, perfect for rowing and paddle boating amidst the misty hills.
* **Artist Village**: A creative hub where you can watch local tribal artisans create Warli paintings and bamboo crafts, and even try your hand at crafting.

---

### Tips for Monsoon Travel

* **Road Safety**: Fog can be dense during monsoon afternoons. Drive slowly with hazard lights.
* **Trekking**: Wear shoes with good grip, as hiking trails around the hills can get slippery.`
  },
  {
    id: "dwarkadhish-living-legend-of-krishna",
    title: "Dwarkadhish: The Living Legend of Krishna",
    excerpt: "History, architecture and the daily rhythm of one of India's holiest temples.",
    img: dwarkaImg,
    tag: "Spiritual",
    date: "Long Read",
    author: "Pandit Shastri",
    readTime: "7 min read",
    content: `### Jagat Mandir: The Gateway to Dwarka

The Dwarkadhish Temple, also known as the Jagat Mandir, stands as a grand tribute to Lord Krishna, who is worshipped here as the "King of Dwarka". Archaeological excavations suggest that the temple's foundation is over 2,000 years old, with the current structure constructed in the 15th–16th century in the beautiful Solanki style.

---

### Architectural Marvels of the Temple

* **The Shikhara**: The main temple rises to a height of 51.8 meters, supported by 72 exquisitely carved pillars.
* **The Flag (Dhvaja)**: The flag of the temple is made of 52 yards of fabric and features symbols of the sun and moon. It is changed five times a day, a grand ritual watched by thousands of devotees.
* **Two Gateways**:
  1. *Swarga Dwar* (Gateway to Heaven): The entrance where pilgrims enter.
  2. *Moksha Dwar* (Gateway to Salvation): The exit leading down 56 steps to the banks of the holy Gomti River.

---

### The Daily Rituals and Aarti Timings

Experiencing the temple's daily cycle is spiritually uplifting:

* **Mangla Aarti (6:30 AM)**: The first aarti of the day, greeting the deity as he wakes.
* **Shringar Aarti (10:30 AM)**: The deity is dressed in exquisite royal robes and jewelry.
* **Sandhya Aarti (7:30 PM)**: The evening prayers, accompanied by temple bells and traditional chants.

---

### Important Rules for Visitors

* **Mobile Phones & Cameras**: Not allowed inside the temple premises. Free cloakrooms are available near both entrances.
* **Dress Code**: Modest and traditional attire is recommended. Avoid short clothing.
* **Accessibility**: Wheelchairs and helpers are available for elderly and disabled pilgrims at the entrance.`
  }
];

export function getBlogPosts(): BlogPost[] {
  if (typeof window === "undefined") return DEFAULT_POSTS;
  
  const saved = localStorage.getItem("gujarat_royal_tours_blogs");
  if (!saved) {
    localStorage.setItem("gujarat_royal_tours_blogs", JSON.stringify(DEFAULT_POSTS));
    return DEFAULT_POSTS;
  }
  
  try {
    return JSON.parse(saved);
  } catch (e) {
    console.error("Failed to parse blogs from local storage", e);
    return DEFAULT_POSTS;
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((p) => p.id === slug);
}

export function saveBlogPost(post: BlogPost): void {
  if (typeof window === "undefined") return;
  
  const posts = getBlogPosts();
  const index = posts.findIndex((p) => p.id === post.id);
  
  if (index >= 0) {
    posts[index] = post;
  } else {
    posts.unshift(post); // Add new post to the top
  }
  
  localStorage.setItem("gujarat_royal_tours_blogs", JSON.stringify(posts));
}

export function deleteBlogPost(slug: string): void {
  if (typeof window === "undefined") return;
  
  const posts = getBlogPosts();
  const filtered = posts.filter((p) => p.id !== slug);
  localStorage.setItem("gujarat_royal_tours_blogs", JSON.stringify(filtered));
}
