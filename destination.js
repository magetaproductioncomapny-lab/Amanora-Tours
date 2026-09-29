const destinationDetails = {
  serengeti: {
    title: "Serengeti National Park",
    region: "The northern circuit · Endless plains",
    summary: "A vast landscape of open grasslands, woodland and river country, shaped by the movement of wildlife.",
    description: "The Serengeti is part of a wider ecosystem whose seasonal wildlife movements cross the plains and neighboring conservation areas. The Great Migration is one of its best-known natural events, while resident wildlife makes the park rewarding beyond migration season.",
    landscape: "Open grasslands give way to rocky kopjes, acacia-dotted savannah and river corridors. The scenery changes across the park, so where you travel and stay can shape what you see.",
    experience: "Game drives offer time to search for wildlife and take in the scale of the plains. Your route can focus on the central Serengeti or connect different regions according to your dates and interests.",
    landscapeTitle: "Plains, kopjes and river country",
    experienceTitle: "Follow the wildlife",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=90",
    alt: "Elephants moving across the Serengeti landscape",
    source: "UNESCO World Heritage Centre",
    sourceUrl: "https://whc.unesco.org/en/list/156/",
    ctaTitle: "Explore Serengeti safari journeys",
    cta: "safaris.html"
  },
  ngorongoro: {
    title: "Ngorongoro Conservation Area",
    region: "The northern circuit · Crater highlands",
    summary: "Highland plains, forests and volcanic landscapes come together around the famous Ngorongoro Crater.",
    description: "The Conservation Area stretches from the Serengeti plains toward the Great Rift Valley. It is a multiple-use landscape where wildlife and Maasai pastoral communities live alongside one another. Ngorongoro Crater, the world's largest intact caldera, is one of its defining features.",
    landscape: "The area includes grasslands, savannah woodland, forest and highland terrain. Within the crater rim, a distinct landscape surrounds the crater floor and its wildlife.",
    experience: "A crater game drive is a natural highlight, often paired with time in the surrounding highlands. Olduvai Gorge and other sites add archaeological and cultural context to the wider area.",
    landscapeTitle: "A crater within the highlands",
    experienceTitle: "Wildlife and human history",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=90",
    alt: "Wildlife and open savannah in northern Tanzania",
    source: "UNESCO World Heritage Centre",
    sourceUrl: "https://whc.unesco.org/en/list/39/",
    ctaTitle: "Pair Ngorongoro with a northern circuit safari",
    cta: "safaris.html"
  },
  tarangire: {
    title: "Tarangire National Park",
    region: "The northern circuit · Baobab country",
    summary: "A quieter-feeling stretch of the northern circuit, known for its baobab-dotted scenery and elephant herds.",
    description: "Tarangire's character is closely tied to its river and the surrounding dry-country landscape. During the dry season, wildlife gathers around remaining water sources, creating strong opportunities for game viewing.",
    landscape: "Baobab trees, open savannah and the Tarangire River give the park a distinctive look. The river is an important water source for wildlife moving through the area.",
    experience: "Game drives take in elephants and other wildlife among the baobabs and along the river. Tarangire works well as an opening or closing stop on a northern Tanzania safari.",
    landscapeTitle: "River and baobab landscapes",
    experienceTitle: "A classic game-drive park",
    image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=2000&q=90",
    alt: "Elephant and baobab scenery in Tanzania",
    source: "Tanzania National Parks",
    sourceUrl: "https://www.tanzaniaparks.go.tz/tarangire/about",
    ctaTitle: "Explore Tarangire safari journeys",
    cta: "safaris.html"
  },
  kilimanjaro: {
    title: "Mount Kilimanjaro",
    region: "The mountain · Above the clouds",
    summary: "Africa's highest mountain rises above the surrounding plains, with routes passing through several distinct environments.",
    description: "Mount Kilimanjaro reaches 5,895 metres and is the world's tallest free-standing mountain. Climbing is a multi-day trek rather than a technical climb, but the altitude makes a gradual itinerary and proper preparation important.",
    landscape: "The climb moves through changing terrain, from cultivated foothills and montane forest to open high-altitude slopes and the summit zone. Each route offers its own scenery and rhythm.",
    experience: "Summit treks usually take several days and are led by licensed mountain teams. A Kilimanjaro climb can be planned on its own or combined with time on safari before or after the trek.",
    landscapeTitle: "A mountain of changing habitats",
    experienceTitle: "A guided multi-day trek",
    image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=2000&q=90",
    alt: "Mount Kilimanjaro above the Tanzanian plains",
    source: "Tanzania National Parks",
    sourceUrl: "https://www.tanzaniaparks.go.tz/kilimanjaro",
    ctaTitle: "Plan a Kilimanjaro and safari trip",
    cta: "custom-safari.html"
  },
  manyara: {
    title: "Lake Manyara National Park",
    region: "The northern circuit · Great Rift Valley",
    summary: "A compact park at the foot of the Rift Valley escarpment, with a lake, forest and open habitats close together.",
    description: "Lake Manyara's variety is one of its defining qualities. The park brings together groundwater forest, open grassland, lakeshore and the steep escarpment of the Great Rift Valley in a relatively small area.",
    landscape: "Evergreen forest fed by groundwater contrasts with open areas beside the soda lake. Depending on water levels and season, the lake can attract large numbers of waterbirds, including flamingos.",
    experience: "A day game drive can move between forest and lakeside scenery, with chances to look for elephants, birds and the park's well-known tree-climbing lions. It is often combined with Tarangire or Ngorongoro.",
    landscapeTitle: "Forest, lake and escarpment",
    experienceTitle: "A varied day in the park",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=90",
    alt: "Lake and landscape in Tanzania's Great Rift Valley",
    source: "Tanzania National Parks",
    sourceUrl: "https://www.tanzaniaparks.go.tz/lake-manyara",
    ctaTitle: "Add Lake Manyara to a northern circuit safari",
    cta: "safaris.html"
  },
  zanzibar: {
    title: "Zanzibar Archipelago",
    region: "The Indian Ocean · Island time",
    summary: "A coastal pause after safari, with Indian Ocean shores and the layered Swahili heritage of Stone Town.",
    description: "Zanzibar offers a change of pace after time on the mainland. The historic streets of Stone Town reflect centuries of Swahili coastal trade and cultural exchange, while the wider archipelago is known for its beaches and Indian Ocean setting.",
    landscape: "Stone Town's narrow lanes, carved doors and historic buildings sit alongside palm-lined shores and warm coastal waters. Island stays can focus on the beach, heritage, or a mix of both.",
    experience: "Take time to explore Stone Town on foot, enjoy a slower beach stay, or use Zanzibar as the final chapter of a bush-and-beach itinerary.",
    landscapeTitle: "Historic streets and ocean shores",
    experienceTitle: "A slower island chapter",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=90",
    alt: "Indian Ocean water along the Zanzibar coast",
    source: "UNESCO World Heritage Centre",
    sourceUrl: "https://whc.unesco.org/en/list/173/",
    ctaTitle: "Combine Zanzibar with a Tanzania safari",
    cta: "custom-safari.html"
  }
};

const place = new URLSearchParams(window.location.search).get("place");
const destination = destinationDetails[place] || destinationDetails.serengeti;

if (destination) {
  document.title = `${destination.title} | Amanora Tours & Safari`;
  document.querySelector("#destination-image").src = destination.image;
  document.querySelector("#destination-image").alt = destination.alt;
  document.querySelector("#destination-region").textContent = destination.region;
  document.querySelector("#destination-title").textContent = destination.title;
  document.querySelector("#destination-summary").textContent = destination.summary;
  document.querySelector("#destination-description").textContent = destination.description;
  document.querySelector("#destination-landscape-title").textContent = destination.landscapeTitle;
  document.querySelector("#destination-landscape").textContent = destination.landscape;
  document.querySelector("#destination-experience-title").textContent = destination.experienceTitle;
  document.querySelector("#destination-experience").textContent = destination.experience;
  document.querySelector("#destination-cta-title").textContent = destination.ctaTitle;
  const cta = document.querySelector("#destination-cta");
  cta.href = destination.cta;
  cta.innerHTML = `${destination.cta === "safaris.html" ? "Explore safari journeys" : "Plan your trip"} <span aria-hidden="true">→</span>`;
  const sourceLink = document.querySelector("#destination-source-link");
  sourceLink.href = destination.sourceUrl;
  sourceLink.textContent = destination.source;
} else {
  document.querySelector("#destination-title").textContent = "Choose your Tanzania destination";
  document.querySelector("#destination-summary").textContent = "Browse the places we visit and find the setting that feels right for your journey.";
  document.querySelector("#destination-description").textContent = "Each part of Tanzania has its own character. Explore our destination guide to compare landscapes and experiences, then start shaping your route.";
}
