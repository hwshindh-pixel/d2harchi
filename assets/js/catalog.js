window.D2H_CATALOG = {
  saasDemos: [
    {
      id: "codeaudit",
      tab: "01 / CodeAudit AI (MVP)",
      title: "Target Workflow: Automated Building Code & Zoning Pre-Check",
      desc: "In development on Google Vertex AI & Gemini: a structured legal RAG pipeline covering the Korean Building Act, National Land Planning Act, and municipal zoning ordinances to help architects screen parcel FAR/BCR, setback limits, and permit risks early.",
      kpis: [
        { v: "Phase 01", k: "Current Development Stage (MVP)" },
        { v: "Vertex AI", k: "Planned Gemini Legal RAG Engine" },
        { v: "FAR / BCR", k: "Automated Parcel Envelope Check" },
        { v: "JSON / PDF", k: "Target Feasibility Report Output" }
      ],
      sample: `// Illustrative Target Schema (In Development)
{
  "module": "d2h-codeaudit-mvp (Vertex AI / Gemini)",
  "sample_parcel_input": {
    "zone": "General Commercial / Urban Self-Sufficiency District",
    "site_area_m2": 3148.00,
    "proposed_gfa_m2": 23310.46,
    "floors": "B4 / 6F"
  },
  "planned_diagnostic_output": {
    "bcr_check": "69.98% vs 70.0% Max -> Within Limit",
    "far_check": "400.72% vs 450.0% Max -> Within Limit",
    "daylight_setback": "North Boundary Envelope Screening",
    "status": "Beta Pilot Under Active Development"
  }
}`
    },
    {
      id: "thermoflux",
      tab: "02 / ThermoFlux BPS (R&D)",
      title: "Target Workflow: Cloud Wrapper for EnergyPlus, Radiance & CFD",
      desc: "R&D prototype designed for Google Cloud Run & Cloud Batch: automates geometry translation from early massing models into DOE EnergyPlus thermal runs, Radiance/FluxDL daylight & solar maps, and OpenFOAM wind studies.",
      kpis: [
        { v: "Phase 02", k: "Current Development Stage (R&D)" },
        { v: "DOE + Radiance", k: "Open-Source Physics Solvers" },
        { v: "Cloud Batch", k: "On-Demand Serverless Compute" },
        { v: "3D Heatmap", k: "Solar, VSC & Wind Comfort Export" }
      ],
      sample: `// Illustrative Target Schema (R&D Prototype)
{
  "module": "d2h-thermoflux-cloud (Google Cloud Batch)",
  "target_solvers": ["EnergyPlus", "Radiance / FluxDL", "OpenFOAM"],
  "sample_study": "High-Rise R&D Massing — Shading Fin Comparison",
  "planned_outputs": {
    "annual_solar_exposure": "Facade kWh/m2·yr Heatmap",
    "daylight_autonomy": "Workplane Daylight Factor >= 2.0% Grid",
    "pedestrian_wind": "Ground Plaza Comfort Velocity Map",
    "status": "Physics Pipeline Integration in Progress"
  }
}`
    },
    {
      id: "spatialgen",
      tab: "03 / SpatialGen Studio (Planned)",
      title: "Target Workflow: Diagram-to-Massing & Area Schedule Assistant",
      desc: "Planned studio tool bridging early concept diagrams and program tables with structured 3D massing schemas (IngeCAD / IngeTrazo open-source interoperability) and automated review layouts.",
      kpis: [
        { v: "Phase 03", k: "Current Development Stage (Planned)" },
        { v: "Multimodal", k: "Gemini Diagram & Table Ingestion" },
        { v: "IFC / JSON", k: "Open-Source CAD Interoperability" },
        { v: "Auto-Table", k: "Net-to-Gross Area & Core Summary" }
      ],
      sample: `// Illustrative Target Schema (Planned Release)
{
  "module": "d2h-spatialgen-studio (Planned)",
  "input_artifacts": ["concept_mass_diagram.png", "program_table.csv"],
  "planned_outputs": {
    "area_efficiency": "Automated Net-to-Gross Ratio Summary",
    "circulation_check": "Core-to-Perimeter Travel Distance Check",
    "open_space_ratio": "Public Plaza & Setback Area Calculation",
    "export_formats": ["massing_schema.json", "area_schedule.xlsx"]
  }
}`
    }
  ],

  projects: [
    {
      id: "01_pangyo2",
      folder: "01_pangyo2",
      title: "제2판교 테크노밸리",
      group: "commercial",
      groupLabel: "Commercial & R&D",
      year: "2018 — 2022",
      badge: "Gyeonggi Architecture Award — Gold",
      isWinner: true,
      location: "26, Geumto-ro 40beon-gil, Sujeong-gu, Seongnam-si, Gyeonggi-do",
      summary: "A flagship R&D and corporate office complex in Pangyo 2nd Techno Valley, featuring an articulated terracotta-toned louver facade, sunken landscaped courtyard, and high-efficiency collaborative workspace floors.",
      specs: [
        ["Location", "26, Geumto-ro 40beon-gil, Sujeong-gu, Seongnam-si, Gyeonggi-do"],
        ["Program / Type", "Office & Education/Research Facility"],
        ["Gross Floor Area", "26,482.25 m²"],
        ["Building Scale", "6 Basement Floors / 12 Above-Ground Floors"],
        ["Design / Completion", "2018 / 2022"],
        ["Client", "ISC Consortium"],
        ["Awards", "28th Gyeonggi Architecture Culture Award — Gold Prize; District Supply Proposal Winner (2018)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Twilight aerial perspective of the completed Pangyo 2nd Techno Valley E8-4 complex" },
        { file: "02_aerial.jpg", caption: "Dusk drone overview highlighting the central courtyard and stepped massing" },
        { file: "03_facade.jpg", caption: "Vertical shading fin rhythm and warm mineral facade articulation" },
        { file: "04_courtyard.jpg", caption: "Sunken garden plaza connecting ground-level retail and R&D circulation" },
        { file: "05_soffit.jpg", caption: "Cantilevered entrance soffit and daylight reflection study" },
        { file: "06_entrance.jpg", caption: "Main drop-off canopy and streetscape integration" },
        { file: "07_lounge.jpg", caption: "Double-height collaborative tenant lounge and stair core" },
        { file: "08_atrium.jpg", caption: "Interior atrium daylighting and acoustic baffle ceiling" }
      ]
    },
    {
      id: "02_daeyou",
      folder: "02_daeyou",
      title: "대유그룹 R&D센터 증축",
      group: "commercial",
      groupLabel: "Commercial & R&D",
      year: "2019 — 2022",
      badge: "R&D Headquarters",
      isWinner: false,
      location: "Jungwon-gu, Seongnam-si, Gyeonggi-do",
      summary: "High-rise R&D headquarters expansion uniting vertical research laboratories, executive amenities, and a transparent curtain-wall podium engineered for solar control and urban skyline presence.",
      specs: [
        ["Location", "Jungwon-gu, Seongnam-si, Gyeonggi-do"],
        ["Program / Type", "R&D & Industrial Research Facility"],
        ["Site Area", "10,900.03 m²"],
        ["Building Area", "5,089.00 m²"],
        ["Gross Floor Area", "44,221.99 m²"],
        ["BCR / FAR", "46.69% / 321.05%"],
        ["Building Scale", "2 Basement Floors / 21 Above-Ground Floors"],
        ["Client", "Dayou Winia Group"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Full-height exterior view of the 21-story R&D tower" },
        { file: "02_street.jpg", caption: "Pedestrian-level street elevation and entry plaza" },
        { file: "03_aerial.jpg", caption: "Aerial massing showing integration with existing campus facilities" },
        { file: "04_context.jpg", caption: "Urban context view across Seongnam industrial corridor" },
        { file: "05_lobby.jpg", caption: "Main entrance lobby with natural stone and linear lighting" },
        { file: "06_lounge.jpg", caption: "Second-floor collaborative lounge and exhibition gallery" },
        { file: "07_wellness.jpg", caption: "Employee wellness and fitness amenity floor" }
      ]
    },
    {
      id: "03_godeok",
      folder: "03_godeok",
      title: "고덕 비즈밸리",
      group: "commercial",
      groupLabel: "Commercial & R&D",
      year: "2019 — 2024",
      badge: "District Proposal Winner",
      isWinner: true,
      location: "45, Godeokbizvalley-ro 2-gil, Gangdong-gu, Seoul",
      summary: "Boryung Biopharma's Global R&D Center in Godeok Biz Valley, organized around a multi-story biophilic atrium and diagonal structural exoskeleton expression.",
      specs: [
        ["Location", "45, Godeokbizvalley-ro 2-gil, Gangdong-gu, Seoul"],
        ["Program / Type", "Corporate Office & Biotech R&D Facility"],
        ["Site Area", "1,297.00 m²"],
        ["Building Area", "708.13 m²"],
        ["Gross Floor Area", "10,091.24 m²"],
        ["BCR / FAR", "54.60% / 399.67%"],
        ["Building Scale", "5 Basement Floors / 9 Above-Ground Floors"],
        ["Design / Completion", "2019 / 2024"],
        ["Client", "Boryung Biopharma"],
        ["Awards", "1st Prize — Godeok Gangil Self-Sufficiency District Supply Proposal (2019)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main street corner perspective of the Godeok Global R&D Center" },
        { file: "02_aerial.jpg", caption: "Bird's-eye architectural rendering within Godeok Biz Valley" },
        { file: "03_rear.jpg", caption: "Completed rear facade and landscaped setback terrace" },
        { file: "04_context.jpg", caption: "Completed streetscape elevation along Godeokbizvalley-ro" },
        { file: "05_atrium.jpg", caption: "Central sunlit atrium connecting research floors" },
        { file: "06_lounge.jpg", caption: "Upper-level collaboration lounge and sky garden" },
        { file: "07_elevation.jpg", caption: "Four-sided architectural elevation drawings (Front, Rear, Left, Right)" }
      ]
    },
    {
      id: "04_gwacheon",
      folder: "04_gwacheon",
      title: "과천 지식정보타운",
      group: "commercial",
      groupLabel: "Commercial & R&D",
      year: "2020 — 2025",
      badge: "Knowledge Industry Center",
      isWinner: false,
      location: "Knowledge Plot 1-A-3, Gwacheon Knowledge Information Town, Gyeonggi-do",
      summary: "A consortium-led Knowledge Industry Center engineered with deep horizontal sunshades, stepped rooftop terraces, and modular floorplates for 11 participating technology enterprises.",
      specs: [
        ["Location", "Knowledge Plot 1-A-3, Gwacheon Knowledge Information Town, Gyeonggi-do"],
        ["Program / Type", "Knowledge Industry & Office Complex"],
        ["Site Area", "3,148.00 m²"],
        ["Building Area", "2,203.00 m²"],
        ["Gross Floor Area", "23,310.46 m²"],
        ["BCR / FAR", "69.98% / 400.72%"],
        ["Building Scale", "4 Basement Floors / 6 Above-Ground Floors"],
        ["Design / Construction", "2020 / Groundbreaking 2023"],
        ["Client", "Gwacheon Platform Co., Ltd. (11 Consortium Enterprises)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Daylight main corner perspective showing horizontal solar louvers" },
        { file: "02_aerial.jpg", caption: "Aerial overview of the terraced courtyard and roof decks" },
        { file: "03_night.jpg", caption: "Evening illumination highlighting transparent ground-floor amenities" },
        { file: "04_side.jpg", caption: "Side street perspective and pedestrian arcade" },
        { file: "05_dusk.jpg", caption: "Dusk skyline view across Gwacheon Knowledge Information Town" },
        { file: "06_siteplan.jpg", caption: "Master site plan and vehicular/pedestrian circulation layout" },
        { file: "07_elevations.jpg", caption: "Four-sided architectural elevation drawings (East, North, West, South)" }
      ]
    },
    {
      id: "05_pangyo3",
      folder: "05_pangyo3",
      title: "제3판교 테크노밸리",
      group: "commercial",
      groupLabel: "Commercial & R&D",
      year: "2024 — 2026",
      badge: "Semiconductor R&D Campus",
      isWinner: false,
      location: "Self-Sufficiency District 1-4, Geumto Public Housing District, Seongnam-si",
      summary: "Next-generation semiconductor and AI hardware R&D headquarters designed around an interconnected multi-level sunken forum, high-bay clean research suites, and biophilic sky bridges.",
      specs: [
        ["Location", "Self-Sufficiency District 1-4, Geumto District, Seongnam-si, Gyeonggi-do"],
        ["Program / Type", "Corporate Office & Semiconductor R&D Center"],
        ["Gross Floor Area", "55,036.09 m²"],
        ["Building Scale", "6 Basement Floors / 10 Above-Ground Floors"],
        ["Design Period", "2024 — 2026"],
        ["Client", "ASICLAND Consortium"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main aerial perspective of the Pangyo 3rd Techno Valley R&D campus" },
        { file: "02_perspective.jpg", caption: "Street-level perspective showing stepped podium terraces" },
        { file: "03_dusk.jpg", caption: "Twilight rendering of the illuminated curtain wall and public plaza" },
        { file: "04_atrium.jpg", caption: "Multi-story interior atrium and timber-clad collaboration tiers" },
        { file: "05_lounge.jpg", caption: "Executive lounge and panoramic terrace gallery" },
        { file: "06_sunken.jpg", caption: "Landscaped sunken amphitheater and subterranean retail court" }
      ]
    },
    {
      id: "06_wollae",
      folder: "06_wollae",
      title: "동해 남부선 복선전철 월내역사",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2016 — 2021",
      badge: "Design Competition Winner",
      isWinner: true,
      location: "Jangan-eup, Gijang-gun, Busan",
      summary: "Coastal commuter rail station on the Donghae Line inspired by East Sea wave rhythms, utilizing rhythmic metal fins to frame ocean breezes and natural daylight across the concourse.",
      specs: [
        ["Location", "Jangan-eup, Gijang-gun, Busan"],
        ["Program / Type", "Railway Transit Station"],
        ["Site Area", "8,000.00 m²"],
        ["Building Area", "2,074.64 m²"],
        ["Gross Floor Area", "2,430.84 m²"],
        ["BCR / FAR", "25.93% / 30.39%"],
        ["Building Scale", "1 Above-Ground Floor (Elevated Track Deck)"],
        ["Opened", "December 2021 (Donghae Line Busan–Ulsan Opening)"],
        ["Client", "Korea National Railway"],
        ["Awards", "1st Prize — Donghae Nambu Line Wollae Station Design Competition (2016)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Completed station exterior and wave-inspired cantilevered roof canopy" },
        { file: "02_facade.jpg", caption: "Rhythmic vertical louver facade filtering coastal sunlight" },
        { file: "03_plaza.jpg", caption: "Station forecourt plaza and multimodal transit drop-off" },
        { file: "04_louver_bw.jpg", caption: "Monochrome architectural study of the aluminum louver rhythm" },
        { file: "05_canopy.jpg", caption: "Entrance canopy soffit and structural steel framing" },
        { file: "06_concourse.jpg", caption: "Daylit passenger concourse and ticketing hall" },
        { file: "07_platform.jpg", caption: "Elevated boarding platform with coastal horizon views" }
      ]
    },
    {
      id: "07_yeongju",
      folder: "07_yeongju",
      title: "도담~영천 복선전철 영주변전소",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2016",
      badge: "Design Competition Winner",
      isWinner: true,
      location: "Jeokdong-ri, Munsu-myeon, Yeongju-si, Gyeongsangbuk-do",
      summary: "Competition-winning traction power substation and six auxiliary railway infrastructure facilities along the Dodam–Yeongcheon double-track line, harmonizing industrial power housing with Yeongju's rural landscape.",
      specs: [
        ["Location", "Jeokdong-ri, Munsu-myeon, Yeongju-si, Gyeongsangbuk-do"],
        ["Program / Type", "Railway Traction Substation & Infrastructure Complex (7 Buildings)"],
        ["Site Area", "6,320.00 m²"],
        ["Building Area", "1,202.21 m²"],
        ["Gross Floor Area", "2,168.00 m²"],
        ["BCR / FAR", "19.02% / 34.30%"],
        ["Building Scale", "1 Basement Floor / 4 Above-Ground Floors"],
        ["Client", "Korea National Railway"],
        ["Awards", "1st Prize — Dodam–Yeongcheon Double-Track Railway Substation Design Competition (2016)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main perspective of the Yeongju Traction Substation" },
        { file: "02_upper_view.jpg", caption: "Elevated view of the sloped metal roof and ventilated facade panels" },
        { file: "03_siteplan.jpg", caption: "Site layout integrating transformer bays and acoustic buffer planting" },
        { file: "04_rear.jpg", caption: "Rear service elevation and high-voltage equipment yard" },
        { file: "05_aerial.jpg", caption: "Aerial perspective nestled within the Munsu-myeon valley topography" }
      ]
    },
    {
      id: "08_inje",
      folder: "08_inje",
      title: "인제역사",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2021",
      badge: "Design Competition Winner",
      isWinner: true,
      location: "Wontong-ri, Buk-myeon, Inje-gun, Gangwon-do",
      summary: "First-prize design for Inje Station on the Chuncheon–Sokcho high-speed railway, featuring a timber-accented mountain gateway roof, panoramic ridge observation deck, and seamless snow-country passenger circulation.",
      specs: [
        ["Location", "Wontong-ri, Buk-myeon, Inje-gun, Gangwon-do"],
        ["Program / Type", "High-Speed Railway Passenger Station"],
        ["Site Area", "8,640.00 m²"],
        ["Building Area", "1,420.72 m²"],
        ["BCR / FAR", "16.44% / 17.88%"],
        ["Building Scale", "2 Above-Ground Floors & Elevated Platform Level"],
        ["Client", "Korea National Railway"],
        ["Awards", "1st Prize — Chuncheon–Sokcho Railway Inje Station Design Competition (2021)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Twilight main perspective of Inje Station framed by Gangwon mountain ridges" },
        { file: "02_day.jpg", caption: "Daytime station plaza and timber-ribbed entry canopy" },
        { file: "03_winter_aerial.jpg", caption: "Winter aerial perspective demonstrating snow-shedding roof geometry" },
        { file: "04_concourse.jpg", caption: "Main passenger concourse with warm glulam ceiling ribs" },
        { file: "05_atrium.jpg", caption: "Double-height waiting hall with clerestory mountain views" },
        { file: "06_terrace.jpg", caption: "Public observation deck overlooking the Naerincheon valley" },
        { file: "07_plan_1f.jpg", caption: "Ground-floor plaza and passenger circulation plan" },
        { file: "08_plan_2f.jpg", caption: "Second-floor concourse and platform transfer plan" }
      ]
    },
    {
      id: "09_railway2",
      folder: "09_railway2",
      title: "제2철도교통관제센터 신축 설계공모",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2021",
      badge: "Design Competition Winner",
      isWinner: true,
      location: "Osong, Cheongju-si, Chungcheongbuk-do",
      summary: "Competition-winning national mission-critical railway traffic control center in Osong, combining a column-free high-security operations hall with geothermal/solar net-zero infrastructure and a central ecological courtyard.",
      specs: [
        ["Location", "Osong, Cheongju-si, Chungcheongbuk-do (Korea National Railway Complex)"],
        ["Program / Type", "National Mission-Critical Railway Control Center"],
        ["Gross Floor Area", "29,744.26 m²"],
        ["Building Scale", "Control Center: B1 / 4F; Auxiliary Facility: 4F"],
        ["Client", "Korea National Railway"],
        ["Awards", "1st Prize — 2nd Railway Traffic Control Center Design Competition (2021)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main perspective of the 2nd Railway Traffic Control Center in Osong" },
        { file: "02_front.jpg", caption: "Ceremonial front elevation with solar-shading kinetic louver screen" },
        { file: "03_aerial.jpg", caption: "Aerial complex overview showing secure perimeter and green roofs" },
        { file: "04_courtyard.jpg", caption: "Internal landscaped courtyard providing daylight to operations wings" },
        { file: "05_control_room.jpg", caption: "Mission-critical nationwide train dispatch and control theater" },
        { file: "06_eco_aerial.jpg", caption: "Sustainability masterplan integrating BIPV, geothermal, and rainwater retention" },
        { file: "07_sequence.jpg", caption: "Approach sequence and secure visitor screening pavilion" },
        { file: "08_sub_pers.jpg", caption: "Auxiliary engineering and training facility perspective" }
      ]
    },
    {
      id: "10_banwol",
      folder: "10_banwol",
      title: "반월체육센터",
      group: "public",
      groupLabel: "Public & Civic",
      year: "2017 — 2019",
      badge: "Design Competition Winner",
      isWinner: true,
      location: "209, Banwol-dong, Hwaseong-si, Gyeonggi-do",
      summary: "Competition-winning community aquatic and indoor sports center anchored by a reflective rear water garden ('Banwoljeong'), tiered library lounge, and long-span natatorium roof.",
      specs: [
        ["Location", "209, Banwol-dong, Hwaseong-si, Gyeonggi-do"],
        ["Program / Type", "Public Aquatic & Indoor Sports Facility"],
        ["Site Area", "52,684.00 m²"],
        ["Building Area", "3,476.00 m²"],
        ["Gross Floor Area", "4,622.00 m²"],
        ["Building Scale", "1 Basement Floor / 2 Above-Ground Floors"],
        ["Completion / Opening", "November 2019 / March 2020"],
        ["Client", "Hwaseong City Hall"],
        ["Awards", "1st Prize — Hwaseong Eastern District (Banwol) Sports Center Design Competition (2017)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Completed aerial view with the rear reflecting water court 'Banwoljeong'" },
        { file: "02_entrance.jpg", caption: "Main public entrance plaza and cantilevered canopy" },
        { file: "03_facade.jpg", caption: "Aluminum composite and low-E glazing facade articulation" },
        { file: "04_plaza.jpg", caption: "Community park interface and stepped seating" },
        { file: "05_pool.jpg", caption: "25m competition swimming pool and children's pool with clerestory daylight" },
        { file: "06_gym.jpg", caption: "Multi-purpose indoor gymnasium with spectator gallery" },
        { file: "07_lobby.jpg", caption: "Central community lobby and stepped book-cafe library" },
        { file: "08_plan_1f.jpg", caption: "Ground-floor architectural plan (Pool, Gymnasium, Lobby, Water Court)" },
        { file: "09_section.jpg", caption: "Transverse architectural section across natatorium and gymnasium" }
      ]
    },
    {
      id: "11_husteel",
      folder: "11_husteel",
      title: "휴스틸 군산공장",
      group: "industrial",
      groupLabel: "Industrial & Remodeling",
      year: "2021 — 2025",
      badge: "Heavy Industrial Campus",
      isWinner: false,
      location: "Gunsan 2nd National Industrial Complex, Gunsan-si, Jeonbuk",
      summary: "Large-scale SAW steel pipe manufacturing plant and administrative complex on a 230,360 m² coastal industrial site, engineered for heavy crane spans, logistics flow, and coastal wind resilience.",
      specs: [
        ["Location", "Gunsan 2nd National Industrial Complex, Gunsan-si, Jeonbuk"],
        ["Program / Type", "Large-Diameter SAW Steel Pipe Manufacturing Plant"],
        ["Site Area", "230,360.90 m²"],
        ["Gross Floor Area", "50,999.31 m²"],
        ["Building Scale", "1 Basement Floor / 3 Above-Ground Floors"],
        ["Completion", "2025"],
        ["Client", "Husteel Co., Ltd."]
      ],
      images: [
        { file: "01_aerial_photo.jpg", caption: "Aerial construction and site progress photography at Gunsan 2nd Industrial Complex" },
        { file: "02_aerial_cg.jpg", caption: "Masterplan aerial rendering of the main SAW pipe bays and logistics yard" }
      ]
    },
    {
      id: "12_kwater",
      folder: "12_kwater",
      title: "K-water 본사 주차빌딩 건립사업 설계공모",
      group: "public",
      groupLabel: "Public & Civic",
      year: "2025",
      badge: "Design Competition",
      isWinner: false,
      location: "200, Sintanjin-ro, Daedeok-gu, Daejeon (K-water Headquarters)",
      summary: "Biophilic mobility hub and 232-bay smart parking structure at K-water Daejeon Headquarters, integrating solar-canopy EV charging courts, stepped rain gardens, and an elevated skybridge to the main building.",
      specs: [
        ["Location", "200, Sintanjin-ro, Daedeok-gu, Daejeon (K-water HQ)"],
        ["Program / Type", "Smart Mobility & Eco-Parking Facility (232 Spaces)"],
        ["Site Area", "26,989.00 m²"],
        ["Building Area", "2,540.36 m²"],
        ["Gross Floor Area", "6,545.23 m²"],
        ["Building Scale", "3 Above-Ground Floors (Max Height 15.8m, SRC Structure)"],
        ["Design Year", "2025"],
        ["Client", "K-water (Korea Water Resources Corporation)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main aerial perspective of the K-water HQ Mobility & Parking Hub" },
        { file: "02_night.jpg", caption: "Nighttime facade lighting and illuminated pedestrian skybridge" },
        { file: "03_perspective.jpg", caption: "Eye-level perspective showing perforated aluminum louver screen" },
        { file: "04_front.jpg", caption: "Primary entrance elevation and landscaped buffer court" },
        { file: "05_ev_charging.jpg", caption: "Solar-canopy EV fast-charging plaza" },
        { file: "06_step_garden.jpg", caption: "Biophilic step garden and stormwater retention terrace" },
        { file: "07_gate.jpg", caption: "Campus gateway monument and smart access control plaza" }
      ]
    },
    {
      id: "13_bukcheongju",
      folder: "13_bukcheongju",
      title: "천안~청주공항 북청주역사",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2019",
      badge: "Design Competition Winner",
      isWinner: true,
      location: "Cheongju-si, Chungcheongbuk-do",
      summary: "First-prize airport-rail link station on the Cheonan–Cheongju Airport double-track line, reinterpreting traditional Cheongju pavilion ('Cheonggakru') roof eaves into a contemporary cantilevered transit concourse.",
      specs: [
        ["Location", "Cheongju-si, Chungcheongbuk-do"],
        ["Program / Type", "Airport-Link Railway Station"],
        ["Client", "Korea National Railway"],
        ["Awards", "1st Prize — Cheonan–Cheongju Airport Railway Bukcheongju Station Design Competition (2019)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main perspective of Bukcheongju Station with floating pavilion roof" },
        { file: "02_pavilion.jpg", caption: "Forecourt civic pavilion inspired by Cheongju's historic architecture" },
        { file: "03_aerial.jpg", caption: "Aerial view showing multimodal bus and airport rail transfer plaza" },
        { file: "04_side.jpg", caption: "Side elevation and elevated track enclosure" },
        { file: "05_interior.jpg", caption: "Main concourse interior with timber coffered ceiling and skylights" }
      ]
    },
    {
      id: "14_hoejeong",
      folder: "14_hoejeong",
      title: "경원선 회정역사",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2020 — 2021",
      badge: "Design Competition Winner",
      isWinner: true,
      location: "Yangju-si, Gyeonggi-do (Gyeongwon Line)",
      summary: "Competition-winning suburban commuter rail station and integrated park-and-ride parking deck on the Gyeongwon Line, designed for barrier-free neighborhood connectivity.",
      specs: [
        ["Location", "Yangju-si, Gyeonggi-do"],
        ["Program / Type", "Commuter Railway Station & Integrated Parking Facility"],
        ["Client", "Korea National Railway"],
        ["Awards", "1st Prize — Gyeongwon Line Hoejeong Station Design Competition"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main aerial perspective of Hoejeong Station and integrated parking deck" },
        { file: "02_sunset.jpg", caption: "Sunset perspective highlighting warm soffit lighting and glazed concourse" },
        { file: "03_elevation_pers.jpg", caption: "Trackside elevation perspective and platform canopy" },
        { file: "04_plaza.jpg", caption: "Station entrance plaza and pedestrian bridge connection" },
        { file: "05_concourse1.jpg", caption: "Daylit ticket hall and barrier-free vertical circulation core" },
        { file: "06_concourse2.jpg", caption: "Elevated cross-track waiting concourse" }
      ]
    },
    {
      id: "15_baekdam",
      folder: "15_baekdam",
      title: "춘천~속초 백담역사",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2021",
      badge: "Design Competition Winner",
      isWinner: true,
      location: "Buk-myeon, Inje-gun, Gangwon-do (Seoraksan Gateway)",
      summary: "First-prize gateway station serving Seoraksan National Park and Baekdamsa Temple, sculpted with engineered timber trusses and a cantilevered mountain viewing terrace.",
      specs: [
        ["Location", "Buk-myeon, Inje-gun, Gangwon-do"],
        ["Program / Type", "High-Speed Railway Station (Seoraksan National Park Gateway)"],
        ["Client", "Korea National Railway"],
        ["Awards", "1st Prize — Chuncheon–Sokcho Railway Baekdam Station Design Competition (2021)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Twilight perspective of Baekdam Station beneath Seoraksan peaks" },
        { file: "02_canopy.jpg", caption: "Engineered timber structural canopy framing the main entrance" },
        { file: "03_deck.jpg", caption: "Elevated scenic viewing deck oriented toward the mountain valley" }
      ]
    },
    {
      id: "16_punggi",
      folder: "16_punggi",
      title: "중앙선 도담~영천 풍기역사",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2021",
      badge: "Design Competition Winner",
      isWinner: true,
      location: "Punggi-eup, Yeongju-si, Gyeongsangbuk-do",
      summary: "First-prize railway station on the Jungang Line near Sobaeksan National Park, celebrating regional wooden architecture through deeply overhanging eaves and a civic festival square.",
      specs: [
        ["Location", "Punggi-eup, Yeongju-si, Gyeongsangbuk-do"],
        ["Program / Type", "High-Speed Railway Passenger Station"],
        ["Client", "Korea National Railway"],
        ["Awards", "1st Prize — Jungang Line Punggi Station Design Competition (2021)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main perspective of Punggi Station and curved timber-inspired roof" },
        { file: "02_aerial.jpg", caption: "Aerial overview of the station plaza and Sobaeksan foothills" },
        { file: "03_plaza.jpg", caption: "Pedestrian forecourt and community gathering canopy" }
      ]
    },
    {
      id: "17_yeongam_police",
      folder: "17_yeongam_police",
      title: "영암경찰서",
      group: "public",
      groupLabel: "Public & Civic",
      year: "2019",
      badge: "Excellence Award — PPS Competition",
      isWinner: true,
      location: "Yeongam-gun, Jeollanam-do",
      summary: "Excellence-awarded public safety headquarters in Yeongam, balancing approachable civic transparency on the lower public service floors with secure administrative wings.",
      specs: [
        ["Location", "Yeongam-gun, Jeollanam-do"],
        ["Program / Type", "Public Safety & Civic Headquarters"],
        ["Client", "Public Procurement Service (PPS) / National Police Agency"],
        ["Awards", "Excellence Award — Yeongam Police Station Design Competition (2019)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Daytime front elevation and civic entrance court" },
        { file: "02_night_aerial.jpg", caption: "Evening aerial perspective showing landscaped campus zoning" }
      ]
    },
    {
      id: "18_indukwon_109_110",
      folder: "18_indukwon_109_110",
      title: "인덕원~동탄 복선전철 109·110역사",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2019",
      badge: "Excellence Award — Rail Competition",
      isWinner: true,
      location: "Suwon-si / Hwaseong-si, Gyeonggi-do",
      summary: "Excellence-awarded underground transit stations (Stations 109 & 110) on the Indeogwon–Dongtan double-track line, featuring top-lit sunken rotundas, sculptural steel canopies, and intuitive wayfinding.",
      specs: [
        ["Location", "Indeogwon–Dongtan Double-Track Railway Corridor, Gyeonggi-do"],
        ["Program / Type", "Underground Commuter Railway Stations (2 Stations)"],
        ["Client", "Korea National Railway"],
        ["Awards", "Excellence Award — Indeogwon–Dongtan Railway Stations 109 & 110 Design Competition (2019)"]
      ],
      images: [
        { file: "01_109_atrium.jpg", caption: "Station 109 multi-level sunken atrium and daylight shaft" },
        { file: "02_110_rotunda.jpg", caption: "Station 110 circular sunken plaza and vertical light well" },
        { file: "03_110_escalator.jpg", caption: "High-capacity escalator bank beneath acoustic ceiling baffles" },
        { file: "04_canopy.jpg", caption: "Street-level sculptural glass-and-steel station entrance canopy" },
        { file: "05_concourse_gate.jpg", caption: "Fare-gate concourse with linear LED spatial guidance" },
        { file: "06_paid_zone.jpg", caption: "Paid-zone transfer gallery and tactile wayfinding" },
        { file: "07_concourse_main.jpg", caption: "Main underground civic concourse and exhibition wall" },
        { file: "08_split_atrium.jpg", caption: "Split-level structural vault connecting concourse and platform" }
      ]
    },
    {
      id: "19_hyangdong_dmc",
      folder: "19_hyangdong_dmc",
      title: "고양 향동동 DMC 퍼스트시티 업무시설",
      group: "commercial",
      groupLabel: "Commercial & R&D",
      year: "2022",
      badge: "Commercial & Media Hub",
      isWinner: false,
      location: "477, Hyangdong-dong, Deogyang-gu, Goyang-si, Gyeonggi-do",
      summary: "Large-scale media and knowledge-industry office complex in Goyang Hyangdong District near Digital Media City, featuring a terraced retail promenade and panoramic rooftop sky gardens.",
      specs: [
        ["Location", "477, Hyangdong-dong, Deogyang-gu, Goyang-si, Gyeonggi-do"],
        ["Program / Type", "Knowledge Industry, Office & Neighborhood Retail Complex"],
        ["Completion / Approval", "2022"],
        ["Client", "I&I D&C / Kyobo Asset Trust"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main tower perspective of DMC First City in Goyang Hyangdong" },
        { file: "02_plaza.jpg", caption: "Ground-level public plaza and retail colonnade" },
        { file: "03_rooftop_terrace.jpg", caption: "Stepped rooftop terrace garden overlooking Bukhansan" },
        { file: "04_rooftop_top.jpg", caption: "Upper sky-deck lounge and landscape pavilion" },
        { file: "05_aerial_context.jpg", caption: "Regional aerial context linking Hyangdong and Seoul DMC" },
        { file: "06_retail_street.jpg", caption: "Pedestrian retail street and sunken courtyard entry" }
      ]
    },
    {
      id: "20_janggun1",
      folder: "20_janggun1",
      title: "세종~안성 장군1터널관리소 등 11개소",
      group: "public",
      groupLabel: "Public & Civic",
      year: "2023 — 2025",
      badge: "Expressway Infrastructure",
      isWinner: false,
      location: "Sejong — Anseong Expressway Corridor (11 Sites)",
      summary: "Comprehensive architectural design of 11 expressway tunnel operation centers, ventilation shafts, and substation buildings along the Sejong–Anseong Expressway.",
      specs: [
        ["Location", "Sejong — Anseong Expressway Corridor (11 Facilities)"],
        ["Program / Type", "Expressway Tunnel Control & Infrastructure Facilities"],
        ["Design Period", "2023 — 2025"],
        ["Client", "Korea Expressway Corporation"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main perspective of the Janggun 1 Tunnel Management Center" },
        { file: "02_aerial_render.jpg", caption: "Aerial integration with expressway portal and slope stabilization" },
        { file: "03_front.jpg", caption: "Primary control building elevation and operations courtyard" },
        { file: "04_side.jpg", caption: "Side facade articulation with weather-resistant metal cladding" },
        { file: "05_substation.jpg", caption: "Auxiliary tunnel power substation and emergency equipment bay" }
      ]
    },
    {
      id: "21_jeongdongjin",
      folder: "21_jeongdongjin",
      title: "동해선 정동진역사",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2020",
      badge: "Coastal Landmark Station",
      isWinner: false,
      location: "Jeongdongjin-ri, Gangdong-myeon, Gangneung-si, Gangwon-do",
      summary: "Coastal railway station design at Korea's iconic sunrise landmark Jeongdongjin, framing the East Sea horizon through a sweeping horizon-line roof and elevated ocean-view concourse.",
      specs: [
        ["Location", "Jeongdongjin-ri, Gangdong-myeon, Gangneung-si, Gangwon-do"],
        ["Program / Type", "Coastal Tourism & Passenger Railway Station"],
        ["Design Year", "2020"],
        ["Client", "Korea National Railway"]
      ],
      images: [
        { file: "01_sunrise_aerial.jpg", caption: "Sunrise aerial perspective overlooking the East Sea shoreline" },
        { file: "02_night_aerial.jpg", caption: "Moonlit coastal aerial rendering and illuminated concourse" },
        { file: "03_sea_elevation.jpg", caption: "Seaward elevation framing panoramic ocean views" },
        { file: "04_bridge_aerial.jpg", caption: "Elevated pedestrian bridge linking station plaza to coastal park" },
        { file: "05_coast_overview.jpg", caption: "Coastal landscape masterplan along the Donghae Line" }
      ]
    },
    {
      id: "22_radiation_center",
      folder: "22_radiation_center",
      title: "생활방사선 안전센터",
      group: "public",
      groupLabel: "Public & Civic",
      year: "2020",
      badge: "National Research Facility",
      isWinner: false,
      location: "Daejeon / National Research Complex",
      summary: "Specialized national radiation safety testing and public inspection research center, balancing high-containment laboratory wings with a welcoming public science education atrium.",
      specs: [
        ["Location", "Daejeon Metropolitan City"],
        ["Program / Type", "National Radiation Safety & Testing Research Center"],
        ["Design Year", "2020"],
        ["Client", "Korea Institute of Nuclear Safety (KINS)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main street perspective of the Living Radiation Safety Center" },
        { file: "02_perspective.jpg", caption: "Corner perspective highlighting layered sun-shading louvers" },
        { file: "03_rear.jpg", caption: "Rear laboratory wing and secure testing service court" },
        { file: "04_aerial.jpg", caption: "Aerial campus overview showing solar roof array and green buffer" }
      ]
    },
    {
      id: "23_kw_ulsan",
      folder: "23_kw_ulsan",
      title: "K-water 울산권 관리동 확보사업",
      group: "public",
      groupLabel: "Public & Civic",
      year: "2025",
      badge: "Public Operations HQ",
      isWinner: false,
      location: "Ulsan Metropolitan City",
      summary: "Regional water infrastructure management headquarters for K-water Ulsan, organized around a sunlit central atrium, timber-lined staff lounge, and low-carbon envelope.",
      specs: [
        ["Location", "Ulsan Metropolitan City"],
        ["Program / Type", "Regional Water Infrastructure Operations Headquarters"],
        ["Design Year", "2025"],
        ["Client", "K-water (Korea Water Resources Corporation)"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main exterior perspective of the K-water Ulsan Operations Building" },
        { file: "02_atrium.jpg", caption: "Daylit multi-story central atrium and open circulation stair" },
        { file: "03_lounge.jpg", caption: "Collaborative staff lounge and terrace overlook" }
      ]
    },
    {
      id: "24_kt_masan",
      folder: "24_kt_masan",
      title: "KT 마산통신국사 리모델링",
      group: "industrial",
      groupLabel: "Industrial & Remodeling",
      year: "2024 — 2026",
      badge: "Adaptive Facade Remodeling",
      isWinner: false,
      location: "Masan, Changwon-si, Gyeongsangnam-do",
      summary: "Architectural facade modernization and spatial repositioning of an existing telecom switching center in Masan, upgrading thermal envelope performance while activating the urban street frontage.",
      specs: [
        ["Location", "Masan, Changwon-si, Gyeongsangnam-do"],
        ["Program / Type", "Telecommunications Center Facade & Spatial Remodeling"],
        ["Project Period", "2024 — 2026"],
        ["Client", "KT Estate / KT Corporation"]
      ],
      images: [
        { file: "01_street_cg.jpg", caption: "Street-level perspective of the modernized curtain-wall and fin facade" },
        { file: "02_perspective.jpg", caption: "Selected design alternative highlighting corner transparency and signage" }
      ]
    },
    {
      id: "25_dalseong_police",
      folder: "25_dalseong_police",
      title: "대구달성경찰서 청사 제안공모",
      group: "public",
      groupLabel: "Public & Civic",
      year: "2020",
      badge: "Design Competition Proposal",
      isWinner: false,
      location: "Dalseong-gun, Daegu",
      summary: "Civic-oriented police headquarters competition proposal in Dalseong-gun, separating public civil-service gardens from operational command wings.",
      specs: [
        ["Location", "Dalseong-gun, Daegu Metropolitan City"],
        ["Program / Type", "Public Safety Headquarters (Design Competition)"],
        ["Year", "2020"],
        ["Client", "Public Procurement Service / Daegu Police Agency"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main civic plaza and front elevation perspective" }
      ]
    },
    {
      id: "26_buseong",
      folder: "26_buseong",
      title: "부성역사",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2020",
      badge: "Rail Transit Proposal",
      isWinner: false,
      location: "Buseong-dong, Seobuk-gu, Cheonan-si, Chungcheongnam-do",
      summary: "Urban commuter rail station proposal on the Gyeongbu Line serving Cheonan's northern university and innovation district.",
      specs: [
        ["Location", "Buseong-dong, Seobuk-gu, Cheonan-si, Chungcheongnam-do"],
        ["Program / Type", "Commuter Railway Station"],
        ["Client", "Korea National Railway"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Elevated concourse and station forecourt perspective" }
      ]
    },
    {
      id: "27_jumunjin",
      folder: "27_jumunjin",
      title: "주문진변전소",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "2020",
      badge: "Rail Infrastructure",
      isWinner: false,
      location: "Jumunjin-eup, Gangneung-si, Gangwon-do",
      summary: "Coastal railway traction power substation designed with salt-air-resistant architectural cladding and low-profile coastal terrain integration.",
      specs: [
        ["Location", "Jumunjin-eup, Gangneung-si, Gangwon-do"],
        ["Program / Type", "Railway Traction Power Substation"],
        ["Client", "Korea National Railway"]
      ],
      images: [
        { file: "01_hero.jpg", caption: "Main perspective of Jumunjin Traction Substation" }
      ]
    },
    {
      id: "28_cheonan_tp",
      folder: "28_cheonan_tp",
      title: "충남 테크노파크 천안밸리청사",
      group: "commercial",
      groupLabel: "Commercial & R&D",
      year: "Completed",
      badge: "Regional Innovation Campus",
      isWinner: false,
      location: "Jiksan-eup, Seobuk-gu, Cheonan-si, Chungcheongnam-do",
      summary: "Regional technology incubation and R&D complex in Cheonan Valley, uniting a main administrative tower, pilot production labs, and enterprise accelerator suites.",
      specs: [
        ["Location", "Jiksan-eup, Seobuk-gu, Cheonan-si, Chungcheongnam-do"],
        ["Program / Type", "Technology Innovation & R&D Incubation Campus"],
        ["Status", "Completed"],
        ["Client", "Chungnam Technopark"]
      ],
      images: [
        { file: "01_overview.jpg", caption: "Campus overview of Chungnam Technopark Cheonan Valley" },
        { file: "02_production.jpg", caption: "Pilot production and clean-tech engineering wing" },
        { file: "03_campus.jpg", caption: "Central landscaped campus spine" },
        { file: "04_prosperity1.jpg", caption: "Enterprise incubation hall exterior" },
        { file: "05_prosperity2.jpg", caption: "Curtain-wall elevation and entrance plaza" },
        { file: "06_interior1.jpg", caption: "Main atrium lobby and exhibition gallery" },
        { file: "07_interior2.jpg", caption: "Conference auditorium and tenant commons" }
      ]
    },
    {
      id: "29_donganyang_tax",
      folder: "29_donganyang_tax",
      title: "동안양세무서",
      group: "public",
      groupLabel: "Public & Civic",
      year: "Completed",
      badge: "Civic Public Office",
      isWinner: false,
      location: "Dongan-gu, Anyang-si, Gyeonggi-do",
      summary: "Public tax administration building featuring a stone-and-glass civic facade, landscaped pocket park, and accessible public service halls.",
      specs: [
        ["Location", "Dongan-gu, Anyang-si, Gyeonggi-do"],
        ["Program / Type", "Public Administrative Office Building"],
        ["Status", "Completed"],
        ["Client", "National Tax Service / Public Procurement Service"]
      ],
      images: [
        { file: "01_aerial.jpg", caption: "Aerial view of Dongan-yang District Tax Office" },
        { file: "02_corner.jpg", caption: "Corner street elevation and public entry court" },
        { file: "03_front.jpg", caption: "Main symmetrical granite and curtain-wall facade" },
        { file: "04_garden.jpg", caption: "Landscaped civic garden along the perimeter setback" },
        { file: "05_detail.jpg", caption: "Facade mullion and natural stone joint detail" },
        { file: "06_dusk.jpg", caption: "Twilight exterior illumination" }
      ]
    },
    {
      id: "30_bupyeong_post",
      folder: "30_bupyeong_post",
      title: "부평우체국 및 우편물류센터",
      group: "public",
      groupLabel: "Public & Civic",
      year: "Completed",
      badge: "Civic & Logistics Hub",
      isWinner: false,
      location: "Bupyeong-gu, Incheon",
      summary: "Integrated civic postal hall and automated regional mail logistics center in Bupyeong, separating high-bay sorting docks from public customer counters.",
      specs: [
        ["Location", "Bupyeong-gu, Incheon Metropolitan City"],
        ["Program / Type", "Civic Post Office & Automated Mail Logistics Center"],
        ["Status", "Completed"],
        ["Client", "Korea Post (Ministry of Science and ICT)"]
      ],
      images: [
        { file: "01_aerial_cg.jpg", caption: "Masterplan aerial overview of the civic post office and logistics wing" },
        { file: "02_front.jpg", caption: "Completed main civic entrance facade" },
        { file: "03_angle.jpg", caption: "Three-quarter street perspective showing louver shading" },
        { file: "04_corner.jpg", caption: "Corner glazing and public forecourt" },
        { file: "05_night.jpg", caption: "Nighttime exterior lighting along Bupyeong boulevard" },
        { file: "06_hall.jpg", caption: "Double-height public postal service hall" }
      ]
    },
    {
      id: "31_daehan_ethanol",
      folder: "31_daehan_ethanol",
      title: "대한주정판매(주) 사옥",
      group: "commercial",
      groupLabel: "Commercial & R&D",
      year: "2020",
      badge: "Corporate Headquarters",
      isWinner: false,
      location: "Seoul, Republic of Korea",
      summary: "Corporate headquarters and research office expansion characterized by refined stone masonry, recessed window reveals, and a tranquil central courtyard garden.",
      specs: [
        ["Location", "Seoul, Republic of Korea"],
        ["Program / Type", "Corporate Headquarters & Office Expansion"],
        ["Completion", "2020"],
        ["Client", "Korea Ethanol Supplies Co., Ltd."]
      ],
      images: [
        { file: "01_aerial_cg.jpg", caption: "Aerial architectural rendering of the corporate headquarters" },
        { file: "02_front.jpg", caption: "Completed primary stone and glass street elevation" },
        { file: "03_corner.jpg", caption: "Corner massing and pedestrian entry" },
        { file: "04_courtyard.jpg", caption: "Internal landscaped courtyard and bamboo terrace" },
        { file: "05_facade.jpg", caption: "Architectural facade rhythm and window module" },
        { file: "06_detail.jpg", caption: "Stone cornice and metal louver detailing" }
      ]
    },
    {
      id: "32_paju_unjeong",
      folder: "32_paju_unjeong",
      title: "경의선 파주운정역사",
      group: "transit",
      groupLabel: "Rail & Transit",
      year: "Completed",
      badge: "New Town Transit Hub",
      isWinner: false,
      location: "Unjeong New Town, Paju-si, Gyeonggi-do",
      summary: "Elevated commuter railway station anchoring Paju Unjeong New Town on the Gyeongui Line, linking residential districts via an expansive pedestrian skybridge and plaza.",
      specs: [
        ["Location", "Unjeong New Town, Paju-si, Gyeonggi-do"],
        ["Program / Type", "New Town Commuter Railway Station"],
        ["Status", "Completed"],
        ["Client", "Korea National Railway"]
      ],
      images: [
        { file: "01_night.jpg", caption: "Nighttime view of the illuminated station concourse and pedestrian bridge" },
        { file: "02_aerial_photo.jpg", caption: "Completed aerial photography within Unjeong New Town" },
        { file: "03_aerial_cg.jpg", caption: "Masterplan aerial rendering of station and transit plaza" },
        { file: "04_perspective.jpg", caption: "Station forecourt and bus-rail transfer canopy" },
        { file: "05_interior.jpg", caption: "Elevated concourse interior with skylight trusses" }
      ]
    }
  ],

  energyModules: [
    {
      id: "solar_radiation_annual",
      title: "3D Annual Solar Radiation Heatmap",
      solver: "Radiance / FluxDL Engine",
      category: "Envelope Solar Load",
      metric: "kWh/m²·yr Surface Irradiance",
      image: "assets/energy/solar_radiation_annual_heatmap_3d.jpg",
      summary: "Full-year cumulative incident solar radiation mapping across complex 3D building envelopes, identifying peak summer heat-gain zones and optimal BIPV / shading fin placement prior to facade detailing.",
      specs: [
        ["Physics Engine", "Radiance / FluxDL Ray-Tracing Pipeline"],
        ["Cloud Compute", "Google Cloud Batch Parallel Ray-Cast"],
        ["Primary Output", "Annual Cumulative Irradiation (kWh/m²·yr) & Peak Facade Exposure"],
        ["Design Action", "Optimizes louver depth, glazing SHGC, and rooftop/facade BIPV yield"]
      ]
    },
    {
      id: "solar_gain_hourly",
      title: "Hourly Facade Solar Heat Gain Profile",
      solver: "EnergyPlus Thermal Solver",
      category: "Peak Cooling Load",
      metric: "8,760-Hour Dynamic Profile",
      image: "assets/energy/solar_gain_hourly_facade.png",
      summary: "8,760-hour time-series thermal simulation quantifying orientation-specific solar heat gain through curtain-wall glazing to size HVAC chillers and prevent afternoon perimeter overheating.",
      specs: [
        ["Physics Engine", "DOE EnergyPlus Dynamic Thermal Balance"],
        ["Weather Dataset", "IWEC / TMY3 Typical Meteorological Year"],
        ["Primary Output", "Hourly Transmitted Solar Gain (W/m²) by Orientation"],
        ["Design Action", "Reduces peak cooling plant capacity by 18–26% in early massing"]
      ]
    },
    {
      id: "daylight_vsc",
      title: "Vertical Sky Component (VSC) & Illuminance",
      solver: "Radiance / FluxDL Daylight",
      category: "Right-to-Light & VSC",
      metric: "BRE VSC % & Lux Grid",
      image: "assets/energy/daylight_illuminance_vsc_analysis.png",
      summary: "High-density urban obstruction and Vertical Sky Component (VSC) evaluation measuring skylight access on neighboring facades and interior workplanes under overcast CIE sky models.",
      specs: [
        ["Physics Engine", "Radiance Backward Ray-Tracer (CIE Overcast Sky)"],
        ["Regulatory Metric", "Vertical Sky Component (VSC %) & Workplane Lux"],
        ["Primary Output", "Facade Sky-Access Contours & Neighbor Impact Audit"],
        ["Design Action", "Validates solar access compliance and stepped massing setbacks"]
      ]
    },
    {
      id: "daylight_factor",
      title: "Interior Daylight Factor Threshold Audit",
      solver: "FluxDL Daylight Compliance",
      category: "Visual Comfort & Lighting",
      metric: "DF >= 2.0% Floor Coverage",
      image: "assets/energy/daylight_factor_threshold_analysis.jpg",
      summary: "Automated floorplate daylight sufficiency mapping verifying target Daylight Factor (DF) thresholds across deep R&D and office floorplates to cut artificial lighting energy.",
      specs: [
        ["Physics Engine", "FluxDL Multi-Bounce Interior Daylight Solver"],
        ["Target Benchmark", "Workplane Daylight Factor >= 2.0% (0.85m Desk Height)"],
        ["Primary Output", "Pass/Fail Spatial Zoning & Daylight Autonomy Ratio"],
        ["Design Action", "Guides atrium proportions, light-shelf geometry, and dimming zones"]
      ]
    },
    {
      id: "facade_shading_3d",
      title: "3D Parametric Facade Shading Optimization",
      solver: "ThermoFlux Generative Loop",
      category: "Kinetic & Fixed Louvers",
      metric: "Solar Cut-Off vs. View Ratio",
      image: "assets/energy/facade_shading_devices_3d.png",
      summary: "Parametric 3D evaluation of vertical fins, horizontal overhangs, and egg-crate louvers balancing summer solstice solar cut-off against winter passive solar gain and unobstructed outward views.",
      specs: [
        ["Physics Engine", "ThermoFlux Parametric Geometry + Radiance"],
        ["Variables Tested", "Fin Depth, Pitch Angle, Orientation Azimuth"],
        ["Primary Output", "Shading Mask & Net Annual Thermal/Lighting Trade-off"],
        ["Design Action", "Tailors bespoke louver rhythms per compass facade"]
      ]
    },
    {
      id: "outdoor_cfd_streamlines",
      title: "Outdoor Urban Wind Streamline Simulation",
      solver: "OpenFOAM RANS CFD",
      category: "Microclimate & Ventilation",
      metric: "3D Velocity Vector Field",
      image: "assets/energy/outdoor_cfd_wind_streamlines.png",
      summary: "Three-dimensional Computational Fluid Dynamics (CFD) wind-tunnel modeling around building clusters, visualizing wake vortices, downwash currents, and natural plaza ventilation corridors.",
      specs: [
        ["Physics Engine", "OpenFOAM Steady-State RANS (k-epsilon Turbulence)"],
        ["Cloud Compute", "Google Cloud High-CPU Multi-Core Mesh Solver"],
        ["Primary Output", "3D Velocity Streamlines & Pedestrian Wind Speed Ratios"],
        ["Design Action", "Mitigates corner wind acceleration and enhances urban air flushing"]
      ]
    },
    {
      id: "outdoor_cfd_pressure",
      title: "Facade Wind Pressure & Natural Ventilation Potential",
      solver: "OpenFOAM Surface Cp",
      category: "Envelope Wind Load",
      metric: "Surface Pressure Cp (Pa)",
      image: "assets/energy/outdoor_cfd_facade_wind_pressure.png",
      summary: "Surface wind-pressure coefficient (Cp) mapping across high-rise elevations to assess cross-ventilation driving forces, operable window viability, and localized cladding wind loads.",
      specs: [
        ["Physics Engine", "OpenFOAM Boundary-Layer Pressure Solver"],
        ["Primary Output", "Windward/Leeward Pressure Differential (ΔP / Cp)"],
        ["Engineering Use", "Mixed-mode natural ventilation & curtain-wall zone optimization"],
        ["Design Action", "Identifies optimal intake/exhaust louver elevations"]
      ]
    },
    {
      id: "indoor_cfd_airflow",
      title: "Indoor Atrium & Concourse Airflow Velocity",
      solver: "OpenFOAM HVAC CFD",
      category: "Indoor Air Quality (IAQ)",
      metric: "Airflow Velocity & Age of Air",
      image: "assets/energy/indoor_cfd_airflow_velocity.png",
      summary: "Internal airflow distribution modeling for large-volume station concourses, natatoriums, and R&D atriums to eliminate stagnant air pockets and optimize displacement diffuser throw.",
      specs: [
        ["Physics Engine", "OpenFOAM Buoyancy-Driven Indoor CFD"],
        ["Primary Output", "Occupied-Zone Velocity (m/s) & Fresh-Air Distribution"],
        ["Engineering Use", "Large-span atrium, transit hall, and clean-zone HVAC verification"],
        ["Design Action", "Prevents thermal stratification and improves occupant comfort"]
      ]
    },
    {
      id: "aerodynamic_highrise",
      title: "High-Rise Aerodynamic Massing & Vortex Shedding",
      solver: "ThermoFlux Aero-Study",
      category: "Tall Building Aerodynamics",
      metric: "Corner Softening & Tapering",
      image: "assets/energy/urban_highrise_aerodynamic_concept.jpg",
      summary: "Early-stage aerodynamic form-finding comparing chamfered, stepped, and porous tower profiles to disrupt vortex shedding and reduce cross-wind structural acceleration.",
      specs: [
        ["Physics Engine", "ThermoFlux Aerodynamic Screening + CFD"],
        ["Form Strategies", "Chamfered Corners, Sky-Notches, Tapered Crown"],
        ["Primary Output", "Drag Reduction & Pedestrian Downwash Mitigation Index"],
        ["Design Action", "Informs structural tonnage savings and comfortable ground plazas"]
      ]
    }
  ],

  artWorks: [
    {
      id: "the_ninth_gate",
      title: "The Ninth Gate",
      artist: "Yeojoo Park (MFA, Slade School of Fine Art, UCL)",
      category: "Architectural Light & Threshold Installation",
      year: "Spatial Art Archive",
      image: "assets/art/yeojoo_the_ninth_gate.jpg",
      summary: "A monumental threshold of chromatic light and reflective geometry exploring perceptual transition between physical architectural enclosure and infinite luminous space. Curated within D2H Archi_Lab's spatial research archive.",
      specs: [
        ["Artist", "Yeojoo Park (MFA, Slade School of Fine Art, University College London)"],
        ["Curatorial Division", "D2H Archi_Lab — Spatial & Light Art Research"],
        ["Medium", "Dichroic Film, Architectural Steel Frame, Daylight & Specular Reflection"],
        ["Spatial Theme", "Threshold Perception, Chromatic Shadow & Architectural Void"]
      ]
    },
    {
      id: "triumphal_gate_v",
      title: "Triumphal Gate V",
      artist: "Yeojoo Park (MFA, Slade School of Fine Art, UCL)",
      category: "Public Pavilion & Daylight Sculpture",
      year: "Spatial Art Archive",
      image: "assets/art/yeojoo_triumphal_gate_v.jpg",
      summary: "An open-air architectural portal transforming shifting solar angles into sweeping gradients of cyan, amber, and magenta across public plaza paving throughout the day.",
      specs: [
        ["Artist", "Yeojoo Park (MFA, Slade School of Fine Art, University College London)"],
        ["Curatorial Division", "D2H Archi_Lab — Spatial & Light Art Research"],
        ["Medium", "Optically Coated Glass, Structural Aluminum & Natural Sunlight"],
        ["Spatial Theme", "Diurnal Solar Choreography & Public Civic Passage"]
      ]
    },
    {
      id: "triumphal_gate_vii",
      title: "Triumphal Gate VII",
      artist: "Yeojoo Park (MFA, Slade School of Fine Art, UCL)",
      category: "Chromatic Colonnade Installation",
      year: "Spatial Art Archive",
      image: "assets/art/yeojoo_triumphal_gate_vii.jpg",
      summary: "Sequential chromatic arches calibrating visitor movement speed against overlapping spectral reflections, demonstrating how optical materiality reshapes perceived spatial depth.",
      specs: [
        ["Artist", "Yeojoo Park (MFA, Slade School of Fine Art, University College London)"],
        ["Curatorial Division", "D2H Archi_Lab — Spatial & Light Art Research"],
        ["Medium", "Spectral Acrylic Panels, Modular Portal Framing & Ambient Light"],
        ["Spatial Theme", "Sequential Perspective & Color-Field Architecture"]
      ]
    },
    {
      id: "infinite_bridge",
      title: "Infinite Bridge",
      artist: "Yeojoo Park (MFA, Slade School of Fine Art, UCL)",
      category: "Landscape & Horizon Installation",
      year: "Spatial Art Archive",
      image: "assets/art/yeojoo_infinite_bridge.jpg",
      summary: "A linear reflective walkway suspended across open water and horizon, dissolving boundaries between sky, water surface, and human promenade.",
      specs: [
        ["Artist", "Yeojoo Park (MFA, Slade School of Fine Art, University College London)"],
        ["Curatorial Division", "D2H Archi_Lab — Spatial & Light Art Research"],
        ["Medium", "Mirrored Decking, Translucent Balustrade & Environmental Reflection"],
        ["Spatial Theme", "Horizon Continuity & Environmental Immersion"]
      ]
    },
    {
      id: "magic_hour_milky_way",
      title: "Magic Hour: Milky Way",
      artist: "Yeojoo Park (MFA, Slade School of Fine Art, UCL)",
      category: "Twilight Atmospheric Installation",
      year: "Spatial Art Archive",
      image: "assets/art/yeojoo_magic_hour_milky_way.jpg",
      summary: "Captures the fleeting optical equilibrium of civil twilight, suspending luminous celestial bands within an architectural courtyard.",
      specs: [
        ["Artist", "Yeojoo Park (MFA, Slade School of Fine Art, University College London)"],
        ["Curatorial Division", "D2H Archi_Lab — Spatial & Light Art Research"],
        ["Medium", "Diffused Fiber Optics, Dichroic Veil & Twilight Sky"],
        ["Spatial Theme", "Twilight Optics & Nocturnal Placemaking"]
      ]
    },
    {
      id: "red_green_tunnel",
      title: "Red-Green Tunnel",
      artist: "Yeojoo Park (MFA, Slade School of Fine Art, UCL)",
      category: "Complementary Chromatic Passage",
      year: "Spatial Art Archive",
      image: "assets/art/yeojoo_red_green_tunnel.jpg",
      summary: "An immersive pedestrian corridor pairing complementary red and emerald translucent fins that merge into neutral white light along the central axis of movement.",
      specs: [
        ["Artist", "Yeojoo Park (MFA, Slade School of Fine Art, University College London)"],
        ["Curatorial Division", "D2H Archi_Lab — Spatial & Light Art Research"],
        ["Medium", "Complementary Tinted Glazing, Ribbed Portal Structure"],
        ["Spatial Theme", "Additive Color Synthesis & Kinetic Pedestrian Experience"]
      ]
    },
    {
      id: "shrine_within",
      title: "Shrine Within",
      artist: "Yeojoo Park (MFA, Slade School of Fine Art, UCL)",
      category: "Contemplative Spatial Sanctuary",
      year: "Spatial Art Archive",
      image: "assets/art/yeojoo_shrine_within.jpg",
      summary: "An intimate nested pavilion creating a quiet acoustic and luminous sanctuary within bustling urban or exhibition environments.",
      specs: [
        ["Artist", "Yeojoo Park (MFA, Slade School of Fine Art, University College London)"],
        ["Curatorial Division", "D2H Archi_Lab — Spatial & Light Art Research"],
        ["Medium", "Translucent Layered Screens, Warm Indirect Illumination"],
        ["Spatial Theme", "Nested Enclosure & Contemplative Interiority"]
      ]
    },
    {
      id: "twilight_zone_iii",
      title: "Twilight Zone III",
      artist: "Yeojoo Park (MFA, Slade School of Fine Art, UCL)",
      category: "Liminal Light & Shadow Study",
      year: "Spatial Art Archive",
      image: "assets/art/yeojoo_twilight_zone_iii.jpg",
      summary: "A spatial light study investigating the liminal boundary between direct daylight and deep architectural shadow through angled reflective planes.",
      specs: [
        ["Artist", "Yeojoo Park (MFA, Slade School of Fine Art, University College London)"],
        ["Curatorial Division", "D2H Archi_Lab — Spatial & Light Art Research"],
        ["Medium", "Anodized Reflective Panels & Controlled Aperture Daylight"],
        ["Spatial Theme", "Penumbra Geometry & Atmospheric Gradient"]
      ]
    }
  ]
};
