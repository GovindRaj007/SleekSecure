import heroImg from "@/assets/hero-balcony-invisible-grills.jpg";
import balconyImg from "@/assets/hero-balcony-invisible-grills.jpg";
import balconyImg2 from "@/assets/balcony-invisible-grills2.jpg";
import homeAfterImg from "@/assets/home-after-installation.jpg";
import petSafetyImg from "@/assets/showcase-pet-safety.jpg";
import windowImg from "@/assets/window-invisible-grills.jpg";
import windowImg2 from "@/assets/window-invisible-grills2.jpg";
import windowImg3 from "@/assets/window-invisible-grills3.jpg";
import clothImg from "@/assets/cloth-hanger.jpg";
import clothImg2 from "@/assets/cloth-hanger2.jpg";
import clothImg3 from "@/assets/cloth-hanger3.jpg";
import balconyBeforeImg from "@/assets/balcony-before-installation.webp";
import balconyAfterImg from "@/assets/balcony-after-installation.jpg";
import windowBeforeImg from "@/assets/window-before-installation.jpg";
import childSafetyImg from "@/assets/showcase-children-safety.jpg";
import childSafety2Img from "@/assets/invisible-grills-child-safety2.jpg";
import childSafety3Img from "@/assets/invisible-grills-child-safety3.jpg";
import pigeonImg1 from "@/assets/invisible-grills-pigeons1.jpg";
import pigeonImg2 from "@/assets/invisible-grills-pigeons2.jpg";

export interface ServiceContent {
  id: string;
  slug: string; // SEO-friendly URL slug
  title: string;
  h1: string;
  badge: string;
  subtitle: string;
  emotionalHeadline: string;
  emotionalSub: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroImage: string;
  gallery: string[];
  features: string[];
  trustBadges: string[];
  trustItems: { title: string; desc: string }[];
  problems: string[];
  solutions: string[];
  beforeAfter: { before: string; after: string };
  benefits: { title: string; desc: string }[];
  installationSteps: { step: string; desc: string }[];
  whyChooseUs: { title: string; desc: string }[];
  testimonials: { name: string; location: string; text: string; rating: number }[];
  faqs: { question: string; answer: string }[];
  applications: string[];
  techDetails: string[];
  overview: string;
}

const sharedTrust = [
  { title: "Child Safety", desc: "Tested 25mm child-safe spacing." },
  { title: "Crystal Clear View", desc: "2mm SS316 wires — virtually invisible." },
  { title: "Premium SS316", desc: "Marine-grade stainless steel construction." },
  { title: "Weather Resistant", desc: "Coastal-tested. Zero rust, zero fade." },
  { title: "Pro Installation", desc: "Certified technicians. Clean & fast." },
  { title: "Trusted Across Telangana & AP", desc: "2,500+ homes & businesses served." },
];

const sharedTestimonials = [
  { name: "Priya Sharma", location: "Hyderabad", text: "Finally a balcony I can trust with my toddler. The grills are practically invisible — guests don't even notice.", rating: 5 },
  { name: "Rakesh Kumar", location: "Visakhapatnam", text: "Premium quality SS316 wires, professional install, and the view from my 14th floor is untouched. Best decision.", rating: 5 },
  { name: "Anjali Reddy", location: "Hyderabad", text: "The team was punctual, neat, and the finish looks luxurious. Worth every rupee for the peace of mind.", rating: 5 },
  { name: "Sandeep Naidu", location: "Mehboobnagar", text: "Got it installed for my parents' apartment. Mom loves that her plants get full sunlight. Highly recommended.", rating: 5 },
];

const balconyWhyChooseUs = [
  { title: "6+ Years Experience", desc: "2,500+ premium balcony installations across luxury apartments in Hyderabad, Telangana & Andhra Pradesh." },
  { title: "Transparent Pricing", desc: "No hidden costs. Free balcony assessment & fixed quote within 24 hours." },
  { title: "SS316 Marine Grade", desc: "Genuine marine-grade stainless steel — not the cheaper SS304 alternatives." },
  { title: "Aesthetic Excellence", desc: "Preserves panoramic views — clients say grills disappear from 1m away." },
  { title: "Same-week Install", desc: "Most balconies completed within 5–7 days of booking." },
  { title: "Lifetime Support", desc: "10-year warranty plus dedicated after-sales care for all balcony installations." },
];

const childSafetyWhyChooseUs = [
  { title: "ISO 13126 Certified", desc: "Every installation tested & certified to international child-safety standards with documentation." },
  { title: "Professional Safety Testing", desc: "Our technicians personally tension-test every wire to 250kg+ on-site before handover." },
  { title: "Peace of Mind Guarantee", desc: "Comprehensive safety documentation + lifetime support so parents can relax." },
  { title: "Pediatrician Recommended", desc: "Trusted by 20+ schools, hospitals & 1,000+ families across Telangana & Andhra Pradesh." },
  { title: "Quick Installation", desc: "Expert safety consultation to handover in 5–7 days without rushing quality." },
  { title: "Complete Transparency", desc: "All safety certificates, test reports & specifications provided at handover." },
];

const pigeonSafeWhyChooseUs = [
  { title: "Pigeon-Proof Guarantee", desc: "Advanced micro-mesh engineering — 500+ apartment communities trust our 100% effectiveness." },
  { title: "Expert Bird Assessment", desc: "Site analysis to determine optimal mesh configuration for your specific pigeon activity." },
  { title: "99% View Retention", desc: "Engineered specifically to block birds while minimizing visual obstruction." },
  { title: "No Mesh Sag or Fray", desc: "Premium SS316 mesh never degrades — lasts 15+ years vs common 2-3 year alternatives." },
  { title: "Easy Maintenance", desc: "Smooth mesh surface wipes clean in seconds — no accumulated bird debris buildup." },
  { title: "Apartment Community Approved", desc: "Recommended building solution for high-rise apartments managing property-wide bird issues." },
];

const windowGrillsWhyChooseUs = [
  { title: "Fire-Safe Emergency Access", desc: "Optional quick-release mechanism allows 30-second removal during emergencies." },
  { title: "Universal Window Fit", desc: "Works on sliding, casement, louvered & fixed windows — minimal drilling, zero damage." },
  { title: "Maximum Light Transmission", desc: "99% light retention vs ~70% with traditional iron grills." },
  { title: "Child Safety Certified", desc: "25mm spacing tested to international standards — approved for children aged 0-12." },
  { title: "Easy Cleaning", desc: "Smooth 2mm wires never trap dust or cobwebs — one wipe keeps them pristine." },
  { title: "Professional Installation Guarantee", desc: "Zero damage to frames or existing glass — full safety test before handover." },
];

const ceilingClothHangersWhyChooseUs = [
  { title: "Space Optimization Experts", desc: "We identify the best ceiling location for maximum drying + minimum visual impact." },
  { title: "Heavy-Duty Engineering", desc: "30kg capacity designed for wet clothes & blankets — built for daily family use." },
  { title: "Smooth Pulley System", desc: "Professional-grade nylon ropes & SS pulleys make lower/lift effortless for all ages." },
  { title: "Zero Ceiling Damage", desc: "Careful installation with professional anchors — only 4-8 small discreet mounting points." },
  { title: "5-Year Mechanism Warranty", desc: "Comprehensive warranty covers pulley system, ropes & hardware against defects." },
  { title: "Rust-Free Lifespan", desc: "Stainless steel & powder-coated aluminium rods never rust — 15+ year durability." },
];

const invisibleGrillsWhyChooseUs = [
  { title: "Genuine SS316 Flagship Brand", desc: "6+ years specializing exclusively in premium marine-grade SS316 invisible grills." },
  { title: "Material Certification Available", desc: "Full SS316 metallurgy certification on request — proven genuine material." },
  { title: "Precision Installation Process", desc: "Our proprietary tension-testing & finishing process ensures 15+ year durability." },
  { title: "Multi-Application Expertise", desc: "Expert in balconies, windows, staircases, railings & terraces across any building type." },
  { title: "Transparent Pricing & Warranty", desc: "No hidden costs. Fixed quotes. 10-year comprehensive warranty on all installations." },
  { title: "Premium Apartment Portfolio", desc: "Trusted by 2,500+ premium apartments, villas & commercial properties across AP." },
];

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "balcony-grills": {
    id: "balcony-grills",
    slug: "balcony-invisible-grills",
    title: "Invisible Grills for Balcony",
    h1: "Premium Invisible Grills for Balcony Safety",
    badge: "Balcony Safety · SS316 Grade",
    subtitle: "Apartment-grade invisible safety grills — full view, full safety.",
    emotionalHeadline: "Invisible Grills in Hyderabad – Stylish Safety & Strong Security Solutions",
    emotionalSub: "Premium SS316 invisible grills designed for modern high-rise apartments. Child-safe. Pet-safe. Practically invisible.",
    metaTitle: "Best Invisible Grills in Hyderabad | Premium Balcony Safety | Sleek Secure",
    metaDescription: "Best invisible grills for balconies in Hyderabad, Telangana & Andhra Pradesh. Premium SS316, child-safe, rust-proof. Safe, transparent, rust-free. Call 9966909927 for free quote.",
    keywords: "best invisible grills Hyderabad,invisible grill contractors near me, balcony invisible grills, invisible grills for balcony, SS316 invisible grills, premium balcony safety grills, child-safe invisible grills, apartment balcony safety, invisible grill installation Hyderabad,invisible grills mehboobanagar, invisible grills vishakapatnam,invisible grills vijayawada, invisible grills kadapa, premium SS316 grills, transparent safety grills, balcony safety solution",
    heroImage: balconyImg,
    gallery: [balconyImg2, homeAfterImg, petSafetyImg],
    features: ["Panoramic View", "Child & Pet Safe", "Weather Proof", "10-Yr Warranty"],
    trustBadges: ["SS316 Marine Steel", "Child Safe 25mm", "Rust Resistant", "Pro Installed"],
    trustItems: sharedTrust,
    problems: [
      "Open balconies pose serious child & pet safety risks",
      "Traditional iron grills block your view & natural light",
      "Pigeons, dust and debris flooding indoors",
      "Old grills rust & corrode in coastal humidity",
    ],
    solutions: [
      "Near-invisible SS316 wires — preserve panoramic views",
      "Tested child-safe 25mm spacing & 250kg per-wire strength",
      "Optional pigeon mesh add-on for full protection",
      "Marine-grade steel that lasts 15+ years rust-free",
    ],
    beforeAfter: { before: balconyBeforeImg, after: balconyAfterImg },
    benefits: [
      { title: "Unobstructed View", desc: "2mm wires disappear from 1m away — your skyline stays untouched." },
      { title: "Child & Pet Safe", desc: "25mm spacing meets international child-safety standards." },
      { title: "SS316 Marine Steel", desc: "Highest corrosion-resistant grade — ideal for coastal Vizag & humid Hyderabad." },
      { title: "Open Airflow", desc: "Full natural ventilation & sunlight — unlike solid iron grills." },
      { title: "10-Year Warranty", desc: "Comprehensive cover on materials & workmanship." },
      { title: "Premium Aesthetic", desc: "Designed for luxury apartments & boutique villas." },
    ],
    installationSteps: [
      { step: "Free Consultation", desc: "WhatsApp or call us — share photos of your balcony for instant guidance." },
      { step: "Site Visit & Quote", desc: "Our expert visits, measures & shares a transparent fixed quote." },
      { step: "Custom Fabrication", desc: "Frames are pre-cut & finished to match your balcony precisely." },
      { step: "Pro Installation", desc: "Trained technicians install in 4–6 hours with zero mess." },
      { step: "Final Safety Check", desc: "Each wire is tension-tested before handover. 10-year warranty issued." },
    ],
    whyChooseUs: balconyWhyChooseUs,
    testimonials: sharedTestimonials,
    faqs: [
      { question: "Are balcony invisible grills safe for children?", answer: "Yes. Our SS316 wires are spaced at 25mm — meeting international child-safety standards. Each wire withstands 250kg of force, far exceeding any practical impact load." },
      { question: "What is SS316 invisible grill?", answer: "SS316 is marine-grade stainless steel containing molybdenum, making it highly resistant to corrosion, salt air and chlorides. It outperforms the common SS304 grade and is ideal for coastal AP and humid climates." },
      { question: "Are invisible grills rust resistant?", answer: "Yes. Our SS316 wires are virtually rust-proof and tested for 15+ years of coastal exposure with zero corrosion." },
      { question: "What is the cost of balcony invisible grills?", answer: "Pricing is per square foot and depends on balcony size, wire spacing and frame style. Most apartments fall between ₹85–₹180 per sqft. We provide a free measurement and fixed quote." },
      { question: "Which invisible grills are best for apartments?", answer: "For high-rise apartments, choose SS316 marine-grade wires with 25mm spacing and a powder-coated aluminium frame. This combination offers the best safety, durability and aesthetics." },
      { question: "How long does installation take?", answer: "A standard balcony is completed in 4–6 hours. The full project — measurement to handover — typically takes 5–7 days." },
    ],
    applications: ["High-rise apartment balconies", "Penthouse terraces", "Open corridors", "Villa balconies", "Hotel & resort balconies"],
    techDetails: [
      "Wire: 2.0mm SS316 marine stainless steel",
      "Spacing: 25mm child-safe (customisable)",
      "Breaking strength: 250kg per wire",
      "Frame: Powder-coated aluminium / SS",
      "Wind & UV resistant",
      "10-year warranty",
    ],
    overview: "Our balcony invisible grills are engineered for modern apartment living — combining the strength of marine-grade SS316 stainless steel with a near-invisible 2mm profile. Whether you live in a high-rise in Hyderabad, a sea-facing flat in Visakhapatnam or a duplex in Vijayawada, our grills protect your loved ones without ever caging in your space.",
  },
  "child-safety-grills": {
    id: "child-safety-grills",
    slug: "child-safety-invisible-grills",
    title: "Invisible Grills for Child Safety",
    h1: "Premium Child-Safe Invisible Grills for Balconies & Windows",
    badge: "Child Protection · Safety First",
    subtitle: "Certified child-safe invisible grills — engineered for maximum protection with unobstructed views.",
    emotionalHeadline: "Your Child's Safety Without Caging In Their World",
    emotionalSub: "Premium SS316 invisible grills tested to international child-safety standards. Give your kids the freedom to play safely, indoors and outdoors.",
    metaTitle: "Best Child-Safe Invisible Grills in Hyderabad | Certified Safety | Sleek Secure",
    metaDescription: "Premium child-safe invisible grills for balconies & windows in Hyderabad, Telangana & Andhra Pradesh. Certified to 25mm child-safe spacing. 10-year warranty. Call 9966909927."
    keywords: "child-safe invisible grills, child safety window grills, balcony child safety, invisible grills kids, child-proof balcony grills, certified child safety grills, baby-safe invisible grills, child accident prevention, window child safety solutions, toddler-safe grills",
    heroImage: childSafetyImg,
    gallery: [childSafety2Img, childSafetyImg, childSafety3Img],
    features: ["Certified Child-Safe", "25mm Spacing", "250kg Per-Wire", "Hospital Grade"],
    trustBadges: ["International Certified", "Child Safety Tested", "SS316 Marine Steel", "Pro Installed"],
    trustItems: [
      { title: "Certified Child-Safe", desc: "All installations tested to ISO 13126 child-safety standards." },
      { title: "25mm Perfect Spacing", desc: "Precisely engineered to prevent heads & limbs from passing through." },
      { title: "Premium SS316", desc: "Highest grade stainless steel — marine-tested for 15+ years." },
      { title: "Zero Fall Risk", desc: "Each wire withstands 250kg force — far exceeding child impact." },
      { title: "Professional Testing", desc: "Every installation personally tested by certified technicians." },
      { title: "Parent Approved", desc: "Trusted by pediatricians, schools & 1000+ families in AP." },
    ],
    problems: [
      "Falls from balconies & open windows are leading childhood accidents",
      "Traditional iron grills are heavy, ugly and block sunlight",
      "Cheap 'child-safe' grills often don't meet international safety standards",
      "Parents sacrifice their home's aesthetics for safety",
    ],
    solutions: [
      "Certified 25mm child-safe spacing — tested and verified on every installation",
      "Invisible 2mm SS316 wires — preserve your home's premium look",
      "International safety certification on every project",
      "Combine maximum child protection with luxury aesthetics",
    ],
    beforeAfter: { before: balconyBeforeImg, after: balconyAfterImg },
    benefits: [
      { title: "Certified Child-Safe", desc: "ISO 13126 tested spacing & tensile strength — documented on every installation." },
      { title: "Peace of Mind", desc: "Know your children are protected while they enjoy fresh air & natural light." },
      { title: "Premium Aesthetics", desc: "Invisible 2mm wires that disappear — your home stays beautiful." },
      { title: "Tested Per-Wire Strength", desc: "Each wire personally tension-tested to 250kg+ before handover." },
      { title: "Hospital & School Grade", desc: "Same specification used in pediatric hospitals & international schools." },
      { title: "10-Year Guarantee", desc: "We stand behind our safety promise with comprehensive warranty." },
    ],
    installationSteps: [
      { step: "Child-Safety Consultation", desc: "Discuss your child's age, activity level & specific safety concerns." },
      { step: "Expert Site Visit", desc: "Measure & recommend optimal wire spacing for your specific needs." },
      { step: "Certified Fabrication", desc: "Each frame custom-built to exact child-safety specifications." },
      { step: "Professional Installation", desc: "Trained safety technicians install with zero shortcuts." },
      { step: "Safety Verification", desc: "Final testing on every wire & certification documentation provided." },
    ],
    whyChooseUs: childSafetyWhyChooseUs,
    testimonials: [
      { name: "Deepika Sharma", location: "Hyderabad", text: "My 2-year-old loves playing on the balcony now. I can relax knowing he's 100% protected. The grills are invisible — guests don't even know they're there.", rating: 5 },
      { name: "Arjun Patel", location: "Visakhapatnam", text: "The team explained every safety detail. We got the ISO certification document & I show it to my pediatrician. Best investment for peace of mind.", rating: 5 },
      { name: "Radha Kumar", location: "Hyderabad", text: "My kids can now play freely without me worrying. Professional, safe & beautiful. Highly recommended for every parent.", rating: 5 },
      { name: "Ravi Naidu", location: "Kompally", text: "We have three kids. These grills gave us the confidence to let them play on the balcony safely. Worth every penny.", rating: 5 },
    ],
    faqs: [
      { question: "What makes your child-safe grills better than regular grills?", answer: "Every installation is certified to ISO 13126 international child-safety standards. We test 25mm spacing & 250kg per-wire tensile strength on every project — with documentation." },
      { question: "Are the grills safe for toddlers & infants?", answer: "Yes — our 25mm spacing prevents even small heads & hands from passing through. We recommend for ages 0–12, but the engineering handles even extreme scenarios." },
      { question: "What happens if my child pulls hard on the wires?", answer: "Each SS316 wire is tested to withstand 250kg of force — roughly 30 times the pulling force of a child. They won't break or bend." },
      { question: "Do you provide certification documents?", answer: "Yes — we provide an ISO 13126 compliance certificate on every installation, plus a photo report of all safety tests." },
      { question: "Can child-safe grills be customized?", answer: "Absolutely — we can adjust wire spacing, frame colors & configurations while maintaining the 25mm child-safe standard." },
      { question: "Do you install in just windows or balconies too?", answer: "Both — we install child-safe grills on balconies, windows, staircases, terraces & any opening where child safety is a priority." },
    ],
    applications: ["Children's bedrooms", "Nurseries & playrooms", "Balconies in family homes", "School classrooms", "Pediatric hospitals", "Preschools & daycares"],
    techDetails: [
      "Wire: 2.5mm SS316 marine stainless steel (extra reinforced)",
      "Spacing: 25mm certified child-safe (per ISO 13126)",
      "Breaking strength: 250kg minimum per wire",
      "Frame: Reinforced powder-coated aluminium",
      "Mounting: Secure anchoring with safety-grade fasteners",
      "Certification: ISO 13126 compliance documentation included",
      "10-year warranty + lifetime support",
    ],
    overview: "Our child-safe invisible grills are purpose-engineered for family protection. Certified to international safety standards, tested on every installation & backed by comprehensive documentation, they give parents complete peace of mind while preserving the beauty & light of your home.",
  },
  "pigeon-safe-grills": {
    id: "pigeon-safe-grills",
    slug: "pigeon-safe-invisible-grills",
    title: "Pigeon-Safe Balcony Grills",
    h1: "Premium Pigeon-Safe Invisible Balcony Grills",
    badge: "Pigeon Protection · Premium View",
    subtitle: "Advanced invisible grills with anti-pigeon mesh — keep pigeons away, keep your view pristine.",
    emotionalHeadline: "Beautiful Balconies. Free From Pigeons & Mess.",
    emotionalSub: "Premium SS316 invisible grills combined with micro anti-pigeon mesh — protect your balcony from birds while maintaining 99% transparency.",
    metaTitle: "Best Pigeon-Safe Invisible Grills in Hyderabad | Premium Protection | Sleek Secure",
    metaDescription: "Pigeon-proof invisible balcony grills in Hyderabad, Telangana & Andhra Pradesh. SS316 + anti-pigeon mesh. Keeps pigeons out, view completely clear. 10-year warranty.",
    keywords: "pigeon-safe balcony grills, anti-pigeon invisible grills, pigeon mesh grills, balcony pigeon protection, invisible pigeon-proof grills, pigeon control solution, balcony bird protection, transparent pigeon mesh, pigeon deterrent grills, bird-safe balcony grills",
    heroImage: pigeonImg1,
    gallery: [childSafety2Img, pigeonImg1, pigeonImg2],
    features: ["Pigeon-Proof", "Anti-Bird Mesh", "Crystal View", "10-Yr Warranty"],
    trustBadges: ["SS316 Marine Steel", "Micro Mesh Tech", "99% Transparent", "Pro Installed"],
    trustItems: [
      { title: "Advanced Pigeon-Proof Mesh", desc: "Micro-aperture design blocks pigeons while keeping 99% view clarity." },
      { title: "Crystal Clear Visibility", desc: "2mm wires + micro mesh designed to minimize visual obstruction." },
      { title: "Premium SS316", desc: "Marine-grade stainless steel resists corrosion in any climate." },
      { title: "No Nesting", desc: "Mesh design prevents birds from nesting inside frame edges." },
      { title: "Easy to Clean", desc: "Smooth mesh surface wipes clean with water — no bird mess buildup." },
      { title: "Trusted Protection", desc: "Tested by 500+ apartment communities across Hyderabad & Vizag." },
    ],
    problems: [
      "Pigeons roost on balconies, droppings damage furniture & health",
      "Birds build nests inside apartment balconies creating unsanitary conditions",
      "Pigeons damage AC units, water tanks & electrical installations",
      "Traditional mesh grills block light & ruin premium apartment aesthetics",
      "Cheap pigeon nets sag, fray and degrade within months",
    ],
    solutions: [
      "Advanced micro-mesh technology that blocks pigeons while keeping views clear",
      "Prevents nesting by eliminating frame gaps & sheltered spaces",
      "SS316 mesh never rusts or frays — lasts 15+ years",
      "Premium aesthetic design that complements luxury apartments",
      "Combination of invisible wires + anti-pigeon mesh for complete protection",
    ],
    beforeAfter: { before: balconyBeforeImg, after: balconyAfterImg },
    benefits: [
      { title: "100% Pigeon-Proof", desc: "Micro-aperture mesh prevents all birds from entering — no nesting, no mess." },
      { title: "Maintains 99% View", desc: "Carefully engineered mesh pattern minimizes visual obstruction." },
      { title: "Health & Hygiene", desc: "Eliminates pigeon droppings, diseases & accumulated bird debris." },
      { title: "Protects Appliances", desc: "Prevents birds from damaging AC units, water tanks & electrical lines." },
      { title: "Easy Maintenance", desc: "Smooth mesh surface cleans in seconds — no bird mess accumulation." },
      { title: "Luxury Aesthetic", desc: "Premium micro-mesh design complements high-end apartments." },
    ],
    installationSteps: [
      { step: "Bird Assessment", desc: "Identify pigeon activity levels & best mesh configuration for your balcony." },
      { step: "Custom Design", desc: "Recommend optimal wire + mesh combination for your specific balcony type." },
      { step: "Expert Fabrication", desc: "Custom-build frames with integrated micro-mesh in our facility." },
      { step: "Precision Installation", desc: "Professional installation ensures zero gaps where pigeons could enter." },
      { step: "Final Inspection", desc: "Full balcony checked for any potential entry points before handover." },
    ],
    whyChooseUs: pigeonSafeWhyChooseUs,
    testimonials: [
      { name: "Neha Gupta", location: "Hyderabad", text: "Pigeons used to be a nightmare — droppings everywhere, noise at dawn. Now? Completely bird-free. The mesh is barely visible. Best decision ever.", rating: 5 },
      { name: "Vikram Reddy", location: "Hyderabad", text: "Our building had pigeon problems. After our unit got these grills, the difference was night & day. No mess, no stress. Recommended to all neighbors.", rating: 5 },
      { name: "Ananya Sharma", location: "Visakhapatnam", text: "Living on the 18th floor was great until pigeons became an issue. This solved it 100%. Still get perfect light & view. Amazing.", rating: 5 },
      { name: "Suresh Kumar", location: "Kadapa", text: "Luxury apartment means open balconies — but pigeons destroyed the dream. These grills maintain the luxury feel while keeping birds completely out.", rating: 5 },
    ],
    faqs: [
      { question: "Will the pigeon mesh block my view?", answer: "No — our micro-mesh is engineered to block birds while maintaining 99% view clarity. The invisible SS316 wires are virtually undetectable from normal viewing distance." },
      { question: "Can pigeons still peek through the mesh?", answer: "The micro-aperture design is specifically sized to prevent pigeon heads from passing through. Birds are completely unable to access the balcony." },
      { question: "Is the mesh easy to clean?", answer: "Yes — the smooth stainless mesh surface wipes clean with water. No bird debris accumulation. Much easier to maintain than traditional bird nets." },
      { question: "Will the mesh rust or degrade?", answer: "No — our SS316 marine-grade mesh never rusts or corrodes. It's tested for 15+ years in coastal salt-air environments." },
      { question: "Can I open my balcony glass doors?", answer: "Absolutely — the grills fit seamlessly around your existing glass doors. Full functionality maintained while protecting from pigeons." },
      { question: "What if new pigeons arrive after installation?", answer: "The mesh design permanently prevents pigeon access. Once installed, no new birds can enter your balcony." },
    ],
    applications: ["High-rise apartment balconies", "Penthouses & premium units", "Commercial building balconies", "Hotel & resort balconies", "Swimming pool areas", "Open terraces"],
    techDetails: [
      "Wire: 2.0mm SS316 marine stainless steel",
      "Mesh: Micro-aperture SS316 stainless mesh",
      "Mesh aperture: 8mm × 8mm (prevents pigeon access)",
      "Frame: Powder-coated aluminium",
      "View retention: 99% transparency maintained",
      "Weather resistance: Tested in coastal & humid climates",
      "10-year warranty on materials & workmanship",
    ],
    overview: "Our pigeon-safe invisible grills combine the luxury of panoramic views with the practicality of complete bird protection. The advanced micro-mesh technology blocks pigeons while maintaining premium aesthetics — making them ideal for high-end apartments where both beauty and function matter.",
  },
  "window-grills": {
    id: "window-grills",
    slug: "window-invisible-grills",
    title: "Invisible Grills for Windows",
    h1: "Child-Safe Invisible Grills for Windows",
    badge: "Window Safety · Child-Proof",
    subtitle: "Window safety without ugly iron bars — full light, full air.",
    emotionalHeadline: "Open Windows. Total Safety.",
    emotionalSub: "Premium SS316 invisible window grills that protect your children while preserving every ray of light and every breath of fresh air.",
    metaTitle: "Best Invisible Grills for Windows in Hyderabad | Child-Safe | Sleek Secure",
    metaDescription: "Best invisible window grills in Hyderabad, Telangana & Andhra Pradesh. Child-safe, fire-safe SS316 grills. Safe, transparent, rust-free. Call 9966909927 for free quote."
    keywords: "best invisible grills for windows, window invisible grills hyderabad, invisible grills for windows, child-safe window grills, SS316 window safety grills, premium window invisible grills, child-proof window safety, window grill installation Hyderabad, invisible grill installation,invisible grills mehboobanagar, invisible grills vishakapatnam,invisible grills vijayawada, invisible grills kadapa",
    heroImage: windowImg,
    gallery: [windowImg2, windowImg3, windowImg],
    features: ["Child Proof", "Full Ventilation", "Fire Safe", "Near Invisible"],
    trustBadges: ["SS316 Marine Steel", "25mm Child-Safe Gap", "Quick Release", "Pro Installed"],
    trustItems: sharedTrust,
    problems: [
      "Open windows are a leading cause of child fall accidents",
      "Ugly iron grills block light and ruin interiors",
      "Traditional grills trap dust and cobwebs",
      "Fixed grills block emergency escape routes",
    ],
    solutions: [
      "Invisible 2mm SS316 wires with child-safe 25mm spacing",
      "Slim 12mm aluminium frame — barely there",
      "Smooth surface — wipe clean in seconds",
      "Quick-release option for fire & emergency escape",
    ],
    beforeAfter: { before: windowBeforeImg, after: windowImg3 },
    benefits: [
      { title: "Child-Proof Safety", desc: "Prevents accidental falls — meets international child safety standards." },
      { title: "Maximum Sunlight", desc: "Lets in 99% of natural light vs ~70% with iron grills." },
      { title: "Full Ventilation", desc: "Doesn't restrict airflow — your room stays fresh." },
      { title: "Easy to Clean", desc: "No cobwebs, no rust patches. Just wipe with a cloth." },
      { title: "Fire & Emergency Safe", desc: "Optional quick-release mechanism for safe escape." },
      { title: "Universal Fit", desc: "Works on sliding, casement, fixed and louvered windows." },
    ],
    installationSteps: [
      { step: "Free Consultation", desc: "Send window photos on WhatsApp — we guide instantly." },
      { step: "Site Visit & Quote", desc: "Free measurement & fixed transparent quote." },
      { step: "Custom Fabrication", desc: "Frames precision-cut to match every window." },
      { step: "Pro Installation", desc: "Minimal drilling, zero damage to your window frames." },
      { step: "Final Safety Check", desc: "Tension-tested wires & smooth window operation verified." },
    ],
    whyChooseUs: windowGrillsWhyChooseUs,
    testimonials: sharedTestimonials,
    faqs: [
      { question: "Are invisible grills safe for children?", answer: "Yes — our 25mm spacing and high-tensile SS316 wires meet international child safety standards. Each wire is tested for 250kg breaking strength." },
      { question: "Can I still open my windows after installation?", answer: "Absolutely. Our grills are designed around your existing window operation — sliding, casement and louvered windows continue to function normally." },
      { question: "Will they block the view from inside?", answer: "The 2mm wires are practically invisible from a normal viewing distance. Most clients say they forget the grills are there." },
      { question: "Are window invisible grills fire safe?", answer: "Yes — we offer a quick-release mechanism that allows the grill to be removed in under 30 seconds during emergencies." },
      { question: "What is the cost of window invisible grills?", answer: "Pricing depends on window size and quantity. Standard windows typically cost ₹2,500–₹5,500 each. Free site visit & quote provided." },
    ],
    applications: ["Children's bedrooms", "Living room windows", "Kitchen ventilation", "Bathroom windows", "School & hospital windows"],
    techDetails: [
      "Wire: 2.0mm SS316 stainless steel",
      "Spacing: 25mm child-safe",
      "Frame: 12mm slim aluminium profile",
      "Mounting: Inside or outside",
      "Compatible with all window types",
      "10-year warranty",
    ],
    overview: "Our invisible window grills give you peace of mind without compromising your home's beauty. The slim 12mm aluminium frame and 2mm SS316 wires make them ideal for children's rooms, sea-facing apartments and modern interiors where every ray of light matters.",
  },
  "ceiling-cloth-hangers": {
    id: "ceiling-cloth-hangers",
    slug: "ceiling-cloth-hangers",
    title: "Ceiling Cloth Hangers",
    h1: "Premium Ceiling-Mounted Cloth Hangers",
    badge: "Smart Living · Space Saving",
    subtitle: "Ceiling-mounted pulley cloth drying systems for modern apartments.",
    emotionalHeadline: "Ceiling Cloth Hangers in Hyderabad – Smart Solutions",
    emotionalSub: "Premium ceiling-mounted cloth hangers with smooth pulley systems — utilise unused ceiling space and free up your balcony floor.",
    metaTitle: "Ceiling Cloth Hanger Space-Saving Drying Rack for Apartments",
    metaDescription: "Buy the best ceiling-mounted cloth hanger with pulley system. Rust-proof, space-saving drying rack for balconies & small apartments. Free installation!",
    keywords: "ceiling cloth hanger, space-saving drying rack, balcony clothes hanger, pulley-based drying system, indoor clothes drying solution, rust-proof ceiling hanger, apartment drying rack, best ceiling-mounted clothes dryer, small space laundry solution, automatic ceiling clothes hanger",
    heroImage: clothImg,
    gallery: [clothImg2, clothImg3, clothImg],
    features: ["Smooth Pulley", "Rust Proof", "30kg Capacity", "5-Yr Warranty"],
    trustBadges: ["Stainless Steel Rods", "Smooth Pulley", "30kg Load", "Pro Installed"],
    trustItems: sharedTrust,
    problems: [
      "Limited drying space in modern apartments",
      "Cluttered balconies with floor stands",
      "Wet clothes blocking sunlight & airflow",
      "Cheap hangers that sag or rust within months",
    ],
    solutions: [
      "Ceiling-mounted system uses unused vertical space",
      "Smooth pulley — lower, hang & lift in seconds",
      "Stainless steel & powder-coated aluminium rods",
      "Heavy-duty supports — 30kg total load capacity",
    ],
    beforeAfter: { before: "Cluttered balcony with floor stands", after: "Spotless balcony with ceiling-mounted hanger" },
    benefits: [
      { title: "Space Saving", desc: "Frees up your balcony floor & utility area." },
      { title: "Easy Pulley System", desc: "Smooth nylon rope — lower & lift effortlessly." },
      { title: "30kg Load Capacity", desc: "Handles heavy wet clothes & blankets easily." },
      { title: "Rust Proof", desc: "Stainless steel & powder-coated aluminium — never rusts." },
      { title: "Multiple Configurations", desc: "4, 6 or 8 rod options to suit your family size." },
      { title: "5-Year Warranty", desc: "Comprehensive warranty on mechanism & rods." },
    ],
    installationSteps: [
      { step: "Free Consultation", desc: "Share your space photos — we recommend the right configuration." },
      { step: "Space Planning", desc: "Best location & rod count selected for your needs." },
      { step: "Ceiling Prep", desc: "Mounting points marked & drilled cleanly — no piping risk." },
      { step: "Pro Installation", desc: "Secure ceiling anchors & full load-test performed." },
      { step: "Demo & Handover", desc: "Pulley operation demoed & maintenance tips shared." },
    ],
    whyChooseUs: ceilingClothHangersWhyChooseUs,
    testimonials: sharedTestimonials,
    faqs: [
      { question: "How many clothes can a ceiling cloth hanger hold?", answer: "A standard 6-rod, 6-feet hanger holds approximately 30–40 garments and supports up to 30kg of wet clothes." },
      { question: "Will it damage my ceiling?", answer: "No — installation requires only 4–8 small anchor points using professional-grade ceiling anchors. Cosmetic impact is minimal." },
      { question: "Is the pulley mechanism durable?", answer: "Yes — we use high-grade nylon ropes and stainless-steel pulleys built for daily heavy use, backed by a 5-year warranty." },
      { question: "Can it be installed on false ceilings?", answer: "We recommend concrete ceilings for maximum strength. Reinforced false-ceiling installations are possible — we'll assess during the site visit." },
      { question: "What is the price of ceiling cloth hangers?", answer: "Standard 6-feet, 6-rod hangers start at ₹3,500. Final pricing depends on rod count, length and finish. Free site visit & quote." },
    ],
    applications: ["Apartment balconies", "Utility rooms", "Covered terraces", "Laundry rooms", "PG & hostel accommodations"],
    techDetails: [
      "Rods: SS or powder-coated aluminium",
      "Lengths: 4ft / 5ft / 6ft / 8ft",
      "Configurations: 4, 6 or 8 rods",
      "Load capacity: 30kg",
      "Mechanism: Nylon rope & SS pulleys",
      "5-year warranty",
    ],
    overview: "Our ceiling-mounted cloth hangers use the smartest unused space in your home — the ceiling. With a smooth pulley system, you can lower the rods, hang your clothes and lift them up to dry in fresh air & sunlight, freeing up your balcony floor for the lifestyle you deserve.",
  },
  "invisible-grills": {
    id: "invisible-grills",
    slug: "invisible-grills",
    title: "Invisible Grills",
    h1: "Premium SS316 Invisible Grills",
    badge: "Our Flagship Service",
    subtitle: "Marine-grade SS316 invisible safety grills for apartments & villas.",
    emotionalHeadline: "Luxury Safety. Without Compromise.",
    emotionalSub: "Premium SS316 invisible grills engineered for modern Indian apartments — child-safe, rust-proof and practically invisible.",
    metaTitle: "Invisible Grills | Premium SS316 Safety Grills for Apartments",
    metaDescription: "Premium SS316 invisible safety grills for balconies, windows & terraces. Child-safe, rust-proof, 10-year warranty. Hyderabad, Vijayawada, Vizag, Tirupati.",
    keywords: "invisible grills, SS316 invisible grills, premium invisible grills, invisible safety grills, child safety invisible grills, invisible grill installation, apartment safety grills",
    heroImage: heroImg,
    gallery: [heroImg, balconyImg, windowImg, clothImg, balconyImg, windowImg],
    features: ["SS316 Grade", "Rust Proof", "Child Safe", "10-Yr Warranty"],
    trustBadges: ["SS316 Marine Steel", "Child Safe 25mm", "Rust Resistant", "Pro Installed"],
    trustItems: sharedTrust,
    problems: [
      "Traditional grills cage your home & block views",
      "Iron grills rust & corrode in just a few years",
      "Open balconies & windows are unsafe for children",
      "Cheap alternatives use lower-grade SS304 wires",
    ],
    solutions: [
      "Near-invisible 2mm SS316 wires preserve every view",
      "Marine-grade SS316 — the highest corrosion resistance",
      "Child-safe 25mm spacing tested to international standards",
      "Genuine SS316 with material certification on request",
    ],
    beforeAfter: { before: "Caged interiors — unsafe & dated", after: "Open, modern, premium luxury safety" },
    benefits: [
      { title: "Premium SS316", desc: "Genuine marine-grade stainless steel with certification." },
      { title: "Child & Pet Safe", desc: "25mm child-safe spacing & 250kg per-wire strength." },
      { title: "Practically Invisible", desc: "2mm wires that disappear from a normal viewing distance." },
      { title: "Rust & Weather Proof", desc: "Coastal-tested — perfect for AP & Telangana climate." },
      { title: "Multi-Application", desc: "Balconies, windows, staircases, terraces & more." },
      { title: "10-Year Warranty", desc: "Comprehensive cover on materials & workmanship." },
    ],
    installationSteps: [
      { step: "Free Consultation", desc: "WhatsApp or call us with photos of your space." },
      { step: "Site Visit & Quote", desc: "Free expert measurement & fixed transparent pricing." },
      { step: "Custom Fabrication", desc: "Frames precision-fabricated to your home's exact specs." },
      { step: "Pro Installation", desc: "Trained technicians install with zero mess in 4–8 hours." },
      { step: "Final Safety Check", desc: "Each wire tension-tested. 10-year warranty issued." },
    ],
    whyChooseUs: invisibleGrillsWhyChooseUs,
    testimonials: sharedTestimonials,
    faqs: [
      { question: "Are invisible grills really safe?", answer: "Yes — each SS316 wire withstands 250kg of force, far beyond any practical impact load. Our 25mm spacing meets international child-safety standards." },
      { question: "What's the difference between SS304 & SS316 invisible grills?", answer: "SS316 contains molybdenum, giving it dramatically better resistance to salt air, humidity and chlorides. We only install SS316 — the right choice for coastal AP & humid Telangana." },
      { question: "How long do invisible grills last?", answer: "Genuine SS316 invisible grills last 15+ years with zero corrosion when professionally installed. We back ours with a 10-year warranty." },
      { question: "Can invisible grills be removed in emergencies?", answer: "Yes — we offer optional quick-release mechanisms that allow safe removal during fire or other emergencies." },
      { question: "Where do you install invisible grills?", answer: "Across Andhra Pradesh & Telangana — Hyderabad, Vijayawada, Visakhapatnam, Tirupati, Guntur, Warangal and surrounding areas." },
    ],
    applications: ["Apartment balconies", "Residential windows", "Staircases & railings", "Terraces & open areas", "Commercial buildings", "Schools & hospitals"],
    techDetails: [
      "Wire: 2.0–2.5mm SS316 marine stainless steel",
      "Spacing: 25–40mm (customisable)",
      "Breaking strength: 250kg per wire",
      "Frame: Aluminium alloy or SS",
      "Anti-rust nano coating",
      "10-year warranty",
    ],
    overview: "Our flagship invisible grill system uses genuine SS316 marine-grade stainless steel — the same alloy used in marine and chemical environments where corrosion resistance matters most. Combined with our certified installation process, you get a luxury safety upgrade built to last 15+ years.",
  },
};

export const SLUG_TO_ID: Record<string, string> = Object.fromEntries(
  Object.values(SERVICE_CONTENT).map((s) => [s.slug, s.id]),
);

export const getServiceByIdOrSlug = (key: string): ServiceContent | undefined => {
  if (SERVICE_CONTENT[key]) return SERVICE_CONTENT[key];
  const id = SLUG_TO_ID[key];
  return id ? SERVICE_CONTENT[id] : undefined;
};
