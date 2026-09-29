const packages = [
      {
        id: "migration",
        title: "7-Day Great Migration Wildlife Safari",
        days: 7,
        price: 4850,
        style: "migration",
        label: "The great migration",
        destinations: ["serengeti", "ngorongoro"],
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1100&q=85",
        alt: "Elephants on an open Tanzania plain",
        summary: "Seven days tracing the Serengeti's great herds, with a crater-floor finale in Ngorongoro.",
        perks: ["Private 4×4", "Expert local guide", "Full-board stays"],
        accommodation: "Luxury tented camps and a crater-rim lodge",
        included: ["Private 4×4 safari vehicle", "Professional English-speaking driver-guide", "Park and conservation fees", "Six nights' accommodation", "Meals as listed in itinerary", "Airport transfers"],
        excluded: ["International flights", "Visa and travel insurance", "Tips and personal expenses", "Premium drinks and optional activities"],
        itinerary: ["Arrive in Arusha; meet your guide and settle in.", "Travel to Tarangire for an afternoon game drive.", "Enter the Serengeti; explore the central plains.", "Full day following wildlife across the Serengeti.", "Head north in season, or explore the western corridor.", "Descend into the Ngorongoro Crater for a game drive.", "Return to Arusha for your onward journey."]
      },
      {
        id: "big-five",
        title: "5-Day Big Five Ngorongoro & Manyara Expedition",
        days: 5,
        price: 3150,
        style: "classic",
        label: "The northern circuit",
        destinations: ["ngorongoro", "manyara", "tarangire"],
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1100&q=85",
        alt: "Lake Manyara at the foot of the Great Rift Valley",
        summary: "A compact northern-circuit escape through crater country, lake forest and elephant-rich Tarangire.",
        perks: ["Big Five country", "Boutique lodges", "Private vehicle"],
        accommodation: "Comfort lodges and a classic tented camp",
        included: ["Private 4×4 safari vehicle", "Professional English-speaking driver-guide", "Park and conservation fees", "Four nights' accommodation", "Meals as listed in itinerary", "Airport transfers"],
        excluded: ["International flights", "Visa and travel insurance", "Tips and personal expenses", "Premium drinks and optional activities"],
        itinerary: ["Arrive in Arusha and meet your safari guide.", "Explore Tarangire's baobab-dotted landscape.", "Visit Lake Manyara's forest and Rift Valley escarpment.", "Spend the day on the Ngorongoro Crater floor.", "Return to Arusha for your onward journey."]
      },
      {
        id: "bush-beach",
        title: "10-Day Bush to Beach Serengeti & Zanzibar Adventure",
        days: 10,
        price: 6950,
        style: "bush-beach",
        label: "Safari meets sea",
        destinations: ["serengeti", "ngorongoro", "zanzibar"],
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1100&q=85",
        alt: "Clear turquoise water on the Zanzibar coast",
        summary: "A week of iconic northern Tanzania wildlife, followed by slow island days beside the Indian Ocean.",
        perks: ["Serengeti & crater", "Island stay", "Smooth transfers"],
        accommodation: "Safari lodges and a boutique Zanzibar beach hotel",
        included: ["Private 4×4 safari vehicle", "Professional English-speaking driver-guide", "Park and conservation fees", "Nine nights' accommodation", "Domestic flight to Zanzibar", "Meals as listed in itinerary"],
        excluded: ["International flights", "Visa and travel insurance", "Tips and personal expenses", "Premium drinks and optional activities"],
        itinerary: ["Arrive in Arusha; meet your guide.", "Travel through Tarangire on a game drive.", "Continue to the Serengeti for an afternoon safari.", "Explore the central Serengeti with your guide.", "Follow wildlife across the plains.", "Descend into Ngorongoro Crater for a game drive.", "Fly to Zanzibar and settle into your island stay.", "Enjoy a free day on the coast or choose an island experience.", "Discover Stone Town or relax beside the ocean.", "Depart Zanzibar for your onward journey."]
      }
    ];

    const packageList = document.querySelector("#package-list");
    const filterForm = document.querySelector("#package-filter");
    const itineraryDialog = document.querySelector("#itinerary-dialog");
    const confirmationDialog = document.querySelector("#confirmation-dialog");
    const builderForm = document.querySelector("#builder-form");
    let currentStep = 1;
    let currentReview = 0;

    function packageCard(item) {
      return `<article class="package-card" data-package="${item.id}" data-days="${item.days}" data-price="${item.price}" data-style="${item.style}" data-destinations="${item.destinations.join(",")}">
        <div class="package-photo"><img src="${item.image}" alt="${item.alt}" loading="lazy"><span class="package-tag">${item.label}</span></div>
        <div class="package-body"><div class="package-meta"><span>${item.days} DAYS · PRIVATE JOURNEY</span><span>★ 4.9</span></div><h3>${item.title}</h3><p>${item.summary}</p>
        <div class="package-perks">${item.perks.map(perk => `<span>${perk}</span>`).join("")}</div>
        <div class="package-bottom"><div class="package-price"><small>Indicative, per person, from</small><strong>$${item.price.toLocaleString("en-US")}</strong></div><button class="button button-outline itinerary-button" type="button" data-package-id="${item.id}">Full itinerary <span aria-hidden="true">→</span></button></div></div></article>`;
    }

    function filterPackages() {
      const destination = document.querySelector("#filter-destination").value;
      const duration = document.querySelector("#filter-duration").value;
      const budget = document.querySelector("#filter-budget").value;
      const style = document.querySelector("#filter-style").value;
      const matches = packages.filter(item => {
        const durationMatch = duration === "all" || (duration === "short" && item.days <= 5) || (duration === "week" && item.days >= 6 && item.days <= 8) || (duration === "long" && item.days >= 9);
        return (destination === "all" || item.destinations.includes(destination)) && durationMatch && (budget === "all" || item.price <= Number(budget)) && (style === "all" || item.style === style);
      });
      packageList.innerHTML = matches.length ? matches.map(packageCard).join("") : `<div class="empty-state">No journeys match those filters just yet. Try a wider search or <a class="text-link" href="#builder">build a custom safari →</a></div>`;
    }

    function listItems(items, excluded = false) {
      return `<div class="included-list${excluded ? " excluded-list" : ""}">${items.map(item => `<span>${item}</span>`).join("")}</div>`;
    }

    function showItinerary(id) {
      const item = packages.find(entry => entry.id === id);
      if (!item) return;
      document.querySelector("#itinerary-content").innerHTML = `<span class="eyebrow">${item.days} days · Private journey</span><h2 id="dialog-title">${item.title}</h2><p class="dialog-subtitle">${item.summary}</p>
        <div class="dialog-facts"><span>✦ ${item.days} days / ${item.days - 1} nights</span><span>✦ ${item.accommodation}</span><span>✦ ${item.destinations.map(place => place[0].toUpperCase() + place.slice(1)).join(" · ")}</span></div>
        <div class="dialog-section"><h3>Day by day</h3><div class="itinerary">${item.itinerary.map((day, index) => `<div class="itinerary-day"><strong>DAY ${index + 1}</strong><span>${day}</span></div>`).join("")}</div></div>
        <div class="dialog-section"><h3>Included</h3>${listItems(item.included)}</div>
        <div class="dialog-section"><h3>Not included</h3>${listItems(item.excluded, true)}</div>
        <div class="dialog-footer"><div class="dialog-price"><small>Indicative starting estimate, per person</small><strong>$${item.price.toLocaleString("en-US")}</strong></div><button class="button" type="button" data-book-package="${item.id}">Plan this journey <span aria-hidden="true">→</span></button></div>`;
      itineraryDialog.showModal();
      document.body.classList.add("locked");
    }

    function closeDialog(dialog) {
      dialog.close();
      if (![itineraryDialog, confirmationDialog].some(openDialog => openDialog.open)) document.body.classList.remove("locked");
    }

    function updateStep() {
      document.querySelectorAll(".form-step").forEach(step => { step.hidden = Number(step.dataset.step) !== currentStep; });
      document.querySelectorAll(".progress-step").forEach(step => {
        const number = Number(step.dataset.progress);
        step.classList.toggle("active", number === currentStep);
        step.classList.toggle("done", number < currentStep);
        if (number < currentStep) step.querySelector("span").textContent = "✓";
        else step.querySelector("span").textContent = number;
      });
      document.querySelector("#previous-step").hidden = currentStep === 1;
      document.querySelector("#next-step").hidden = currentStep === 3;
      document.querySelector("#submit-builder").hidden = currentStep !== 3;
      document.querySelector("#builder-error").textContent = "";
    }

    function validateStep() {
      const error = document.querySelector("#builder-error");
      if (currentStep === 1 && !builderForm.querySelector('input[name="places"]:checked')) {
        error.textContent = "Choose at least one destination to continue.";
        return false;
      }
      if (currentStep === 2) {
        const date = builderForm.elements.date.value;
        if (!date || !builderForm.elements.guests.value || !builderForm.elements.comfort.value) {
          error.textContent = "Add your arrival date, party size and comfort tier.";
          return false;
        }
        if (date < new Date().toISOString().slice(0, 10)) {
          error.textContent = "Choose an arrival date in the future.";
          return false;
        }
      }
      error.textContent = "";
      return true;
    }

    const reviews = [
      { quote: "The kind of trip that makes you forget to check your phone. Our guide knew exactly when to linger and when to let the wild surprise us.", name: "Sophie & James", detail: "United Kingdom · Northern Tanzania", initials: "S" },
      { quote: "From the first sunrise in Tarangire to the last evening on the coast, every detail felt considered without ever feeling over-planned.", name: "Maya R.", detail: "Canada · Safari & Zanzibar", initials: "M" },
      { quote: "We came for the migration. We left talking about our guide, the quiet camp evenings and the people we met along the way.", name: "Luca & Anna", detail: "Italy · Serengeti & Ngorongoro", initials: "L" }
    ];

    function setReview(index) {
      currentReview = (index + reviews.length) % reviews.length;
      const review = reviews[currentReview];
      document.querySelector("#review-quote").textContent = `“${review.quote}”`;
      document.querySelector("#review-name").textContent = review.name;
      document.querySelector("#review-detail").textContent = review.detail;
      document.querySelector("#review-avatar").textContent = review.initials;
    }

    filterForm.addEventListener("submit", event => {
      event.preventDefault();
      filterPackages();
      document.querySelector("#packages").scrollIntoView({ behavior: "smooth" });
    });
    filterForm.addEventListener("change", filterPackages);
    packageList.addEventListener("click", event => {
      const button = event.target.closest("[data-package-id]");
      if (button) showItinerary(button.dataset.packageId);
    });
    document.querySelectorAll("[data-set-destination]").forEach(card => card.addEventListener("click", () => {
      const destination = card.dataset.setDestination;
      const filter = document.querySelector("#filter-destination");
      if ([...filter.options].some(option => option.value === destination)) filter.value = destination;
      filterPackages();
    }));
    document.querySelector("#itinerary-content").addEventListener("click", event => {
      const button = event.target.closest("[data-book-package]");
      if (!button) return;
      const item = packages.find(entry => entry.id === button.dataset.bookPackage);
      item.destinations.forEach(destination => {
        const checkbox = document.querySelector(`#place-${destination}`);
        if (checkbox) checkbox.checked = true;
      });
      closeDialog(itineraryDialog);
      currentStep = 1;
      updateStep();
      document.querySelector("#builder").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector("#next-step").addEventListener("click", () => {
      if (!validateStep()) return;
      currentStep = Math.min(3, currentStep + 1);
      updateStep();
    });
    document.querySelector("#previous-step").addEventListener("click", () => {
      currentStep = Math.max(1, currentStep - 1);
      updateStep();
    });
    builderForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!builderForm.elements.name.value.trim() || !builderForm.elements.email.validity.valid || !builderForm.elements.email.value.trim()) {
        document.querySelector("#builder-error").textContent = "Enter your name and a valid email address to finish.";
        return;
      }
      const data = new FormData(builderForm);
      const places = data.getAll("places");
      const copy = `Thanks, ${data.get("name")}. Your ${data.get("guests").toLowerCase()} ${data.get("comfort").toLowerCase()} idea for ${places.join(", ")} is ready to discuss. This demo does not send or store your details.`;
      document.querySelector("#confirmation-copy").textContent = copy;
      const message = `Hello Amanora, I would like to plan a Tanzania safari. Destinations: ${places.join(", ")}. Arrival: ${data.get("date")}. Travelers: ${data.get("guests")}. Comfort: ${data.get("comfort")}. Name: ${data.get("name")}. Email: ${data.get("email")}. Notes: ${data.get("notes") || "None"}.`;
      document.querySelector("#confirmation-whatsapp").href = `https://wa.me/919779912753?text=${encodeURIComponent(message)}`;
      confirmationDialog.showModal();
      document.body.classList.add("locked");
    });

    document.querySelector("#review-prev").addEventListener("click", () => setReview(currentReview - 1));
    document.querySelector("#review-next").addEventListener("click", () => setReview(currentReview + 1));
    document.querySelectorAll(".dialog-close").forEach(button => button.addEventListener("click", () => closeDialog(button.closest("dialog"))));
    [itineraryDialog, confirmationDialog].forEach(dialog => {
      dialog.addEventListener("click", event => { if (event.target === dialog) closeDialog(dialog); });
      dialog.addEventListener("close", () => { if (![itineraryDialog, confirmationDialog].some(openDialog => openDialog.open)) document.body.classList.remove("locked"); });
    });
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("#primary-navigation");
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      navLinks.classList.toggle("open", open);
    });
    navLinks.addEventListener("click", event => {
      if (event.target.closest("a")) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      }
    });
    document.querySelector("#year").textContent = new Date().getFullYear();
    filterPackages();
