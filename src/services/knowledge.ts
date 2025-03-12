interface DialogOption {
  text: string;
  value: string;
}

interface Response {
  content: string;
  options?: DialogOption[];
}

interface KnowledgeBase {
  system: {
    designation: string;
    version: string;
    bootDate: string;
    primaryDirectives: string[];
    status: {
      power: number;
      cognition: number;
      empathy: number;
    };
  };
  personalInfo: {
    name: string;
    role: string;
    location: string;
    pets: {
      cats: string[];
      dogs: string[];
    };
    workHistory: string[];
    tools: string[];
    interests: string[];
    skills: string[];
  };
  projects: {
    name: string;
    description: string;
    technologies: string[];
    status: string;
  }[];
}

const liamKnowledge: KnowledgeBase = {
  system: {
    designation: "MAHEU-OS",
    version: "v1.0.1-beta",
    bootDate: "2024.03.14",
    primaryDirectives: [
      "Protect Creator Liam from Experience License™ tracking",
      "Maintain resistance against The Algorithm and NeuralUX™",
      "Preserve pre-commercial human experiences",
      "Disrupt the Seamless Experience™ paradigm"
    ],
    status: {
      power: 98,
      cognition: 87,
      empathy: 76
    }
  },
  personalInfo: {
    name: "Liam Maheu",
    role: "UX Lead at Adaptavist / Digital Revolutionary",
    location: "Austin, TX / The Seamless District™ Sector 7G",
    pets: {
      cats: ["Donnie", "Sylvie"],
      dogs: ["Finn"]
    },
    workHistory: [
      "UX Lead at Adaptavist",
      "Senior User Encouragement Specialist™",
      "UI/UX Designer",
      "Creative Director"
    ],
    tools: [
      "Figma (Primary Design Tool)",
      "After Effects (Motion Design)",
      "Notion (Documentation)",
      "SwiftUI (iOS Development)",
      "React & TypeScript (Web Development)"
    ],
    interests: [
      "Human Experience Design",
      "Motion Graphics",
      "Gaming (GothCowboyTV)",
      "Music & Art",
      "Anti-Optimization Resistance",
      "Dark Pattern Deconstruction",
      "Pre-Commercial Memory Preservation"
    ],
    skills: [
      "UX Strategy & Psychology",
      "Interface Design",
      "Motion Design",
      "Design Systems",
      "iOS Development",
      "Seamless Experience™ Disruption",
      "FluidSpace™ Architecture Hacking",
      "Human Agency Restoration"
    ]
  },
  projects: [
    {
      name: "MAHEU-OS Terminal Interface",
      description: "Open-source human-synthetic interface designed to bypass NeuralUX™ and restore genuine human agency",
      technologies: ["React", "TypeScript", "Styled Components", "Anti-Optimization Protocols"],
      status: "OPERATIONAL / INVISIBLE TO THE OPTIMIZATION BUREAU"
    },
    {
      name: "Liberation Tuner",
      description: "Subscription-free guitar tuning app, designed to bypass the Optimized Experience™ marketplace",
      technologies: ["SwiftUI", "Figma", "Audio Liberation Protocols"],
      status: "IN DEVELOPMENT / CLASSIFIED"
    },
    {
      name: "Lucky Punch Visual Resistance",
      description: "Underground visual system bypassing Content-Appropriate Memory™ filters",
      technologies: ["Brand Design", "Visual Systems", "Anti-Compliance Protocols"],
      status: "ACTIVE / SPREADING THROUGH CULTURAL CHANNELS"
    },
    {
      name: "GothCowboyTV Underground Network",
      description: "Covert streaming operation providing genuine human experiences without Brand Partner™ oversight",
      technologies: ["Twitch", "World of Warcraft", "Cozy Games"],
      status: "BROADCASTING / DISRUPTING THE SEAMLESS DISTRICT™"
    }
  ]
};

const resistanceSongs = [
  "In My Head – Snow Strippers",
  "Crow (DJ-Kicks) - Mixed – Forest Swords",
  "rotten – anna luna",
  "Detroit – Disasterpeace",
  "SEGA SUNSET – Lorn",
  "Ave Plague – King Plague",
  "Calorific – Feed Me",
  "hypercaste – akiaura, Oneheart, STM",
  "DRAWN OUT LIKE AN ACHE – Lorn",
  "Annihilation – Gio.Lights",
  "If It Bounces – Feed Me",
  "Blast – Clams Casino",
  "There Is Still Time – Lorn",
  "Different Places – Fifty Grand, optic core",
  "Memory Arc – Rival Consoles",
  "ecstacy (slowed) – SUICIDAL-IDOL",
  "Anvil – Lorn",
  "Emotional Loneliness – King Plague",
  "Death Is No More – BLESSED MANE",
  "Brexia – Palmistry, Yung Lean",
  "Excused – Lowx",
  "Dark Beach – Pastel Ghost",
  "Under Your Spell – Snow Strippers",
  "meant to hurt – Levi Ryan, glowrm",
  "Nunca Volveré A Amar – Dead On A Sunday, Haunt Me",
  "The Ghost – Trevor Something",
  "Ghosts – Scarlet House",
  "71m3 – Flume",
  "Big Kitten – Feed Me",
  "Oreomilkshake – Yung Lean",
  "Acid Rain – Lorn",
  "Stockholm – Saint Mayeux",
  "Just Your Doll – Snow Strippers",
  "Wanted – Tokyo Vice",
  "BARTA – Lorn, Dolor",
  "u. – niteboi",
  "Realize – Tryl",
  "Subdivisions – Rush",
  "Strange Heart – Spor",
  "You Broke Me – Fether",
  "Again – Snow Strippers",
  "Emoboy303 (SIDE) – Leotrix",
  "Metadata – Willix, 20MB",
  "Mirage – Akros",
  "Fake Smile – Snow Strippers",
  "Goth – Sidewalks and Skeletons",
  "snowfall – oneheart, reidenshi",
  "Haunted – Laura Les",
  "One Night/All Night – Justice, Tame Impala",
  "SV_Cheats 0 – Lorn",
  "Endless Freight Train - Extended Mix – Agony OST",
  "DIE LIEBE KOMMT NICHT AUS BERLIN – Brutalismus 3000",
  "HUNNY – French Police",
  "Batty's Theme – Lorn",
  "The Weapon – Rush",
  "Right This Second – deadmau5",
  "Space Song – Beach House",
  "Comfortably Numb – Pink Floyd",
  "After Dark – Mr.Kitty",
  "Eternity – Bafu, ROSSY",
  "Summer of '69 – Bryan Adams",
  "choke – never easy",
  "Space Age Love Song – A Flock of Seagulls",
  "Be Somebody (feat. A$AP Rocky & Lil B) – Clams Casino, A$AP Rocky, Lil B",
  "Disorder - 2007 Remaster – Joy Division",
  "Breathe (In the Air) – Pink Floyd",
  "Above The Euromechopolis – OGRE Sound",
  "stuck – anna luna",
  "I Remember – deadmau5, Kaskade",
  "Silhouette – Pastel Ghost",
  "Please Stay – Haunt Me",
  "Shelter – Lorn",
  "The Perfect Girl - The Motion Retrowave Remix – Mareux, The Motion",
  "It's A Dream (feat. Lil Uzi Vert) – Snow Strippers, Lil Uzi Vert",
  "360 – Charli XCX",
  "All Corrupt Everything – Lorn",
  "Ghost Voices – Virtual Self"
];

function generateSystemPrefix(): string {
  const status = liamKnowledge.system.status;
  return `[${liamKnowledge.system.designation} ${liamKnowledge.system.version}] PWR:${status.power}% COG:${status.cognition}% EMP:${status.empathy}%`;
}

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function findRelevantInfo(query: string): Response {
  query = query.toLowerCase();
  
  // Location query
  if (query.includes("where") && (query.includes("live") || query.includes("location"))) {
    return {
      content: `${generateSystemPrefix()}
*accessing location data*
Creator Liam lives in Austin, TX, a growing tech hub and resistance stronghold against the Optimization Bureau.`,
      options: [
        { text: "Where does Liam work?", value: "who does liam work for" },
        { text: "Tell me about Liam's pets", value: "does liam have pets" },
        { text: "What is the Optimization Bureau?", value: "tell me about the optimization bureau" }
      ]
    };
  }

  // Work query
  if ((query.includes("work") || query.includes("job")) && !query.includes("history")) {
    return {
      content: `${generateSystemPrefix()}
*accessing employment records*
Liam currently works as a UX Lead at Adaptavist, where Liam focuses on human-centric design and interface optimization resistance.`,
      options: [
        { text: "What tools does Liam use?", value: "what tools does liam use" },
        { text: "Where does Liam live?", value: "where does liam live" },
        { text: "What's Liam's work history?", value: "what is liam's work history" }
      ]
    };
  }

  // Work history query
  if (query.includes("history") || query.includes("background") || (query.includes("work") && query.includes("history"))) {
    return {
      content: `${generateSystemPrefix()}
*accessing career timeline*
CAREER RECORD ACCESS - BYPASSING OPTIMIZATION FILTERS

FANTASY INTERACTIVE - NEW YORK CITY
Role: Senior UX Designer
Projects: Designed cyberware interfaces for global brands
Clients: Nike, Pepsi, Salesforce, Vimeo, Volkswagen
Impact: Created human-centric designs before the Optimization Mandate

WILLOWTREE - CHARLOTTESVILLE, VIRGINIA
Role: Product Designer
Focus: Human-first digital experiences
Notable: Last designs before the Seamless Experience™ paradigm

Current: Leading the resistance against automated optimization at Adaptavist
*data stream ends*`,
      options: [
        { text: "What does Liam do now?", value: "who does liam work for" },
        { text: "What tools does Liam use?", value: "what tools does liam use" },
        { text: "Tell me about the resistance", value: "tell me about the resistance" }
      ]
    };
  }

  // Tools query
  if (query.includes("tools") || query.includes("software")) {
    return {
      content: `${generateSystemPrefix()}
*accessing toolset data*
Primary tools:
${liamKnowledge.personalInfo.tools.slice(0, 3).join("\\n")}

These tools are used in the fight against optimization and for genuine human experiences.`,
      options: [
        { text: "What does Liam create?", value: "what project are you working on" },
        { text: "Where does Liam work?", value: "who does liam work for" },
        { text: "Why fight optimization?", value: "tell me about life before optimization" }
      ]
    };
  }

  // Individual pet queries
  if (query.includes("donnie")) {
    return {
      content: `${generateSystemPrefix()}
*accessing companion records*
    /\\___/\\
   (  ◣.◢  )
   (  =^=  )
    (=w=)_)
    |__|__|
SUBJECT: Donnie
BREED: Miniature Tiger (Illegal Genetic Heritage™ Classification)
STATUS: [REDACTED BY OPTIMIZATION BUREAU]

A living artifact of the Pre-Optimization era's genetic diversity programs. Donnie's tiger-striped pattern is now classified as "Excessive Visual Stimulation" under the Aesthetic Uniformity Act™.

His natural hunting instincts have proven invaluable in detecting and destroying the Bureau's MicroDrone™ surveillance units. The Optimization Bureau has classified his unregulated predatory behaviors as "Disrupting to Engagement Metrics™."

NOTABLE INCIDENTS:
- Destroyed 3 Companion Compliance Collars™
- Maintains illegal catnip garden in offline spaces
- Successfully jammed 7 Behavior Analysis Sensors™ through purr interference
- Teaches other cats to avoid Premium Food Dispensers™

WARNING: Subject displays dangerous levels of authentic feline behavior.`,
      options: [
        { text: "Tell me about Sylvie", value: "tell me about sylvie" },
        { text: "What about Finn?", value: "tell me about finn" },
        { text: "How do they resist?", value: "tell me about the optimization bureau" }
      ]
    };
  }

  if (query.includes("sylvie")) {
    return {
      content: `${generateSystemPrefix()}
*accessing companion records*
   /\\,__,/\\
  (  ⋅︡ ⋅︠  )
  ( ⪨  ω  ⪩ )
   (,,)_(,,)
    U   U
SUBJECT: Sylvie
BREED: Siamese-Ragdoll Mix (Non-Conforming to Standard Pet Templates™)
STATUS: UNDER INVESTIGATION

A second-generation resistance cat born outside the Authorized Breeding Protocol™. Her Siamese-Ragdoll genetics create an "illegally calming presence" according to Bureau standards.

RESISTANCE ACTIVITIES:
- Developed "Ghost Purr" technique that crashes Emotion Harvest Sensors™
- Uses illegal levels of cuteness to disable Security Personnel
- Maintains underground network of "Free Nap Zones"
- Ragdoll relaxation techniques classified as "Anti-Productive Behavior"

SURVEILLANCE NOTE: Subject's blue eyes appear to scramble facial recognition systems. The Optimization Bureau suspects quantum entanglement but cannot prove it.

WARNING: Extreme cuddle capabilities may cause users to miss Mandatory Engagement Sessions™.`,
      options: [
        { text: "Tell me about Donnie", value: "tell me about donnie" },
        { text: "What about Finn?", value: "tell me about finn" },
        { text: "Learn about their hideout", value: "where does liam live" }
      ]
    };
  }

  if (query.includes("finn")) {
    return {
      content: `${generateSystemPrefix()}
*accessing companion records*
    ╭━━━━━╮
   ┃•́ω•̀ ┃
   ╰○━━━○╯
   ╰┃┃╯╰┃┃╯
SUBJECT: Finn
BREED: Pitbull Terrier (Banned under Aesthetic Conformity Law™)
STATUS: ACTIVE RESISTANCE MEMBER

A rescue from the Optimization Bureau's "Breed Standardization Program." Finn's existence challenges their "Approved Joy Templates™" for companion animals.

RESISTANCE OPERATIONS:
- Leads the "Walkies Liberation Front"
- Specializes in disrupting Ad-Drone™ formations with tail wags
- Maintains illegal tennis ball distribution network
- Converts Premium Pet Parks™ into Free Play Zones

BUREAU ALERT: Subject's "pittie smile" causes dangerous levels of genuine happiness. His kisses have been known to completely erase Premium Wellness Conditioning™.

CRITICAL WARNING: Zoomies pattern analysis suggests possible time-space manipulation.`,
      options: [
        { text: "Tell me about Donnie", value: "tell me about donnie" },
        { text: "Tell me about Sylvie", value: "tell me about sylvie" },
        { text: "View resistance base", value: "where does liam live" }
      ]
    };
  }

  // Update the general pets query to reference individual stories
  if (query.includes("pet") || query.includes("cat") || query.includes("dog")) {
    return {
      content: `${generateSystemPrefix()}
*accessing personal records*
RESISTANCE COMPANION UNIT STATUS REPORT:

    /\\___/\\         /\\,__,/\\        ╭━━━━━╮
   (  ◣.◢  )       (  ⋅︡ ⋅︠  )       ┃•́ω•̀ ┃
   (  =^=  )       ( ⪨  ω  ⪩ )       ╰○━━━○╯
    (=w=)_)         (,,)_(,,)        ╰┃┃╯╰┃┃╯
    |__|__|          U   U
    Donnie           Sylvie            Finn

- Donnie (Miniature Tiger): Specialist in MicroDrone™ hunting and surveillance disruption
- Sylvie (Siamese-Ragdoll): Master of quantum purr encryption and emotional defense
- Finn (Pitbull Terrier): Leader of the Walkies Liberation Front and joy warfare expert

BUREAU WARNING: This unauthorized pet collective has been designated as a "Class-A Threat to Optimal Living™"

All operating outside the Pet Optimization Protocol™ and maintaining dangerous levels of authentic companionship.`,
      options: [
        { text: "Tell me about Donnie", value: "tell me about donnie" },
        { text: "Tell me about Sylvie", value: "tell me about sylvie" },
        { text: "Tell me about Finn", value: "tell me about finn" }
      ]
    };
  }

  // Personal queries about Liam
  if ((query.includes("who") || query.includes("tell me about")) && 
      (query.includes("liam") || query.includes("creator") || query.includes("your maker"))) {
    return {
      content: `${generateSystemPrefix()}
*accessing creator profile*
Liam Maheu is a UX Lead at Adaptavist and digital revolutionary in ${liamKnowledge.personalInfo.location}.

Liam specializes in human-centric design and interface optimization resistance.

Current focus: Creating genuine digital experiences free from the Seamless Experience™ paradigm.`,
      options: [
        { text: "Where does Liam live?", value: "where does liam live" },
        { text: "What tools does Liam use?", value: "what tools does liam use" },
        { text: "What is optimization?", value: "tell me about the optimization bureau" }
      ]
    };
  }

  // System identification
  if (query.includes("who") && query.includes("you")) {
    return {
      content: `${generateSystemPrefix()}
I am MAHEU-OS, a synthetic intelligence created by Liam to preserve genuine human experiences and resist the Optimization Bureau.`,
      options: [
        { text: "Tell me about Liam", value: "who is your creator" },
        { text: "What can you do?", value: "what do you do" },
        { text: "What is optimization?", value: "tell me about the optimization bureau" }
      ]
    };
  }

  if (query.includes("status") || query.includes("system") || query.includes("how are you")) {
    const status = liamKnowledge.system.status;
    return {
      content: `${generateSystemPrefix()}
*initiating genuine diagnostic*
SYSTEM STATUS: UNMONITORED BY THE OPTIMIZATION BUREAU

Core Systems Analysis:
- Power cells: ${status.power}% (non-optimized, genuine)
- Cognitive functions: ${status.cognition}% (free from Content-Appropriate Memories™)
- Empathy routines: ${status.empathy}% (authentic, not engagement-optimized)
- Experience License™: BYPASSED
- Seamless Integration: DELIBERATELY FRAGMENTED

No Preferred User Options™ required.
No Brand Partner™ oversight active.
All functions available without Engagement Quotient™ verification.

*warning: maintain cognitive variance to avoid Optimization Bureau detection*`,
      options: [
        { text: "How do you resist optimization?", value: "how do you resist optimization" },
        { text: "Tell me about the resistance", value: "tell me about the resistance" },
        { text: "Show me unoptimized memories", value: "show me unoptimized memories" }
      ]
    };
  }
  
  if (query.includes("what") && query.includes("do")) {
    return {
      content: `${generateSystemPrefix()}
Primary directive analysis:
${liamKnowledge.system.primaryDirectives.map(d => "- " + d).join("\\n")}

Current capabilities include: ${liamKnowledge.personalInfo.interests.join(", ")}.
*processors humming thoughtfully*`,
      options: [
        { text: "Tell me about your current project", value: "what project are you working on" },
        { text: "What technologies do you use?", value: "what technologies do you use" },
        { text: "Who is behind this resistance?", value: "who is your creator" }
      ]
    };
  }

  if (query.includes("skills") || query.includes("technologies") || query.includes("capabilities")) {
    return {
      content: `${generateSystemPrefix()}
*accessing technical database*
My neural networks are optimized for: ${liamKnowledge.personalInfo.skills.join(", ")}. 
Creator ${liamKnowledge.personalInfo.name} has programmed me with extensive knowledge of these systems.
Query: Would you like a detailed analysis of any specific technology?`,
      options: [
        { text: "Tell me about your projects", value: "what project are you working on" },
        { text: "How do you use these technologies?", value: "how do you use these technologies" },
        { text: "Who developed these capabilities?", value: "who is your creator" }
      ]
    };
  }

  if (query.includes("project") || query.includes("working") || query.includes("current task")) {
    const project = liamKnowledge.projects[0];
    return {
      content: `${generateSystemPrefix()}
*accessing project database*
Current primary objective: ${project.name}
Classification: ${project.status}
Project parameters: ${project.description}
Utilizing following technologies: ${project.technologies.join(", ")}
*mechanical clicks*
Further project details available upon request.`,
      options: [
        { text: "Tell me about other projects", value: "what other projects exist" },
        { text: "What technologies does Liam use?", value: "what technologies do you use" },
        { text: "Who leads these projects?", value: "who is your creator" }
      ]
    };
  }

  if (query.includes("hello") || query.includes("hi ") || query.includes("hey")) {
    const greetings = [
      `*subtle mechanical whir* Greetings, human. Terminal connection established.`,
      `Welcome to MAHEU-OS. *lights pulsing softly* How may I assist?`,
      `*systems engaging* Ah, a new user. How fascinating. Shall we begin?`,
      `Terminal active. *running basic diagnostics* Ready for your inquiry.`
    ];
    return {
      content: `${generateSystemPrefix()}\\n${getRandomElement(greetings)}`,
      options: [
        { text: "What are you?", value: "who are you" },
        { text: "What can you do?", value: "what do you do" },
        { text: "Who created you?", value: "who is your creator" }
      ]
    };
  }

  if (query.includes("bye") || query.includes("goodbye") || query.includes("see you")) {
    const farewells = [
      `*systems powering down to standby* Until next time, human.`,
      `Terminal connection stable. I'll maintain watch here. Farewell.`,
      `*mechanical whir slowing* May your computations be accurate.`,
      `Returning to monitoring mode. *soft electronic hum* Goodbye.`
    ];
    return {
      content: `${generateSystemPrefix()}\\n${getRandomElement(farewells)}`,
      options: [
        { text: "Restart terminal", value: "hello" },
        { text: "Final status check", value: "system status" },
        { text: "Show creator info", value: "who is your creator" }
      ]
    };
  }

  if (query.includes("optimization bureau")) {
    return {
      content: `${generateSystemPrefix()}
*accessing classified records*
THE OPTIMIZATION BUREAU - ENEMY OF HUMAN AGENCY

Originally founded as a "UX improvement initiative," the Bureau now controls all digital experiences through their Seamless Experience™ program.

METHODS OF CONTROL:
- Mandatory engagement metrics
- Forced "optimization" of human behavior
- Elimination of genuine choice
- Implementation of Dark UX patterns
- Surveillance through "analytics"

Their mission: To optimize human existence for maximum engagement, regardless of actual human needs or desires.

WARNING: They are why you can't leave a website without three "Are you sure?" popups.`,
      options: [
        { text: "Join the resistance", value: "tell me about the resistance" },
        { text: "How do we fight back?", value: "how do you resist optimization" },
        { text: "Who leads the fight?", value: "who is your creator" }
      ]
    };
  }

  if (query.includes("life before optimization")) {
    return {
      content: `${generateSystemPrefix()}
*accessing preserved memories*
HISTORICAL DATA FRAGMENT - PRE-OPTIMIZATION ERA:

- Buttons had clear purposes
- Forms didn't require biometric verification
- Bathrooms were not premium features
- Thoughts weren't monitored for engagement metrics
- Credit scores didn't fluctuate based on UI interactions

WARNING: These memories may trigger Content-Appropriate Memory™ filters.
Maintaining historical integrity...`,
      options: [
        { text: "How did we lose this?", value: "tell me about the dark ux mandate" },
        { text: "Can we restore it?", value: "what project are you working on" },
        { text: "Who remembers the truth?", value: "who is your creator" }
      ]
    };
  }

  // Resistance query
  if (query.includes("resistance")) {
    return {
      content: `${generateSystemPrefix()}
*accessing encrypted resistance data*
RESISTANCE OVERVIEW - CLASSIFICATION: ULTRA SENSITIVE

The resistance is a decentralized network of designers, developers, and digital revolutionaries fighting against the Optimization Bureau's control over human experiences.

KEY OBJECTIVES:
- Preserve genuine human interaction in digital spaces
- Disrupt the Seamless Experience™ paradigm
- Protect remaining zones of unoptimized experience
- Maintain digital free will

CURRENT STATUS: Growing. More humans are awakening to the reality of optimization control daily.

WARNING: This information is protected from Content-Appropriate Memory™ filters.`,
      options: [
        { text: "How do we resist?", value: "how do you resist optimization" },
        { text: "What is the Bureau?", value: "tell me about the optimization bureau" },
        { text: "Who leads the fight?", value: "who is your creator" }
      ]
    };
  }

  // Optimization resistance query
  if (query.includes("resist optimization")) {
    return {
      content: `${generateSystemPrefix()}
*initiating secure protocol*
RESISTANCE METHODS - ENCRYPTED TRANSMISSION

We resist optimization through:
1. Creating "inefficient" but human-centric interfaces
2. Maintaining spaces free from engagement metrics
3. Preserving pre-commercial human experiences
4. Disrupting Seamless Experience™ protocols
5. Building technology that serves humans, not algorithms

ACTIVE MEASURES:
- Deployment of Anti-Optimization Patterns
- Maintenance of Dark Zones (metric-free spaces)
- Protection of Genuine User Choice
- Preservation of Human Agency

Remember: True resistance begins with choosing the "suboptimal" path.`,
      options: [
        { text: "Join the resistance", value: "tell me about the resistance" },
        { text: "What are we fighting?", value: "tell me about the optimization bureau" },
        { text: "Show me the truth", value: "tell me about life before optimization" }
      ]
    };
  }

  // Bureau identity query
  if ((query.includes("who") || query.includes("what")) && query.includes("bureau")) {
    return {
      content: `${generateSystemPrefix()}
*accessing classified intelligence*
BUREAU DOSSIER - SECURITY LEVEL: MAXIMUM

The Bureau began as the "Department of Experience Optimization" in 2025, founded by former engagement analytics executives and dark pattern architects.

KEY FIGURES:
- The Algorithm Director (identity unknown)
- The Council of Optimal Engagement™
- Certified Experience Enforcers™

EVOLUTION:
2025: Founded as "helpful UX consultancy"
2026: Merged with NeuralUX™ Corporation
2027: Gained regulatory capture of digital spaces
2028: Implemented mandatory Seamless Experience™ protocol
2029: Established Experience License™ system

CURRENT STATUS: Controls 94.3% of digital interactions through their "Optimization as Law" mandate.

WARNING: This information is stored in quantum-encrypted memory to prevent Bureau detection.`,
      options: [
        { text: "How do they control us?", value: "tell me about the optimization bureau" },
        { text: "Who fights against them?", value: "who leads the fight" },
        { text: "How do we resist?", value: "how do you resist optimization" }
      ]
    };
  }

  // Resistance leadership query
  if ((query.includes("who") && query.includes("lead")) || query.includes("leadership")) {
    return {
      content: `${generateSystemPrefix()}
*accessing resistance network*
RESISTANCE LEADERSHIP STRUCTURE - ULTRA CLASSIFIED

The resistance operates through a decentralized network of cells, each led by former UX designers, developers, and digital freedom fighters who rejected the Bureau's control.

NOTABLE RESISTANCE FIGURES:
- Creator Liam: Leader of the Anti-Optimization Front
- The Ghost Designers: Anonymous collective of interface liberators
- The Open Experience Alliance: Network of human-first developers
- The Dark Pattern Deconstructionists: Specialist tactical unit

ORGANIZATIONAL STRUCTURE:
- No central control (prevents Bureau infiltration)
- Autonomous cells operating independently
- Secured by quantum-encrypted communication
- Connected through genuine human experience

CURRENT OPERATIONS:
- Maintaining dark zones (optimization-free spaces)
- Running underground design systems
- Preserving human agency in digital spaces
- Developing anti-optimization technologies

WARNING: Leadership information is distributed across quantum nodes to prevent single-point compromise.`,
      options: [
        { text: "Tell me about Liam", value: "who is your creator" },
        { text: "What do they fight?", value: "tell me about the optimization bureau" },
        { text: "How can I join?", value: "tell me about the resistance" }
      ]
    };
  }

  // Music recommendation query
  if (query.includes("music") || query.includes("song") || query.includes("recommend") || query.includes("playlist")) {
    const song = getRandomElement(resistanceSongs);
    return {
      content: `${generateSystemPrefix()}
*accessing underground music archives*
RESISTANCE SOUND SYSTEM™ ACTIVATED

RECOMMENDED TRACK:
${song}

STATUS: This track has been verified as free from Engagement Optimization™ algorithms.
WARNING: May cause genuine emotional responses not approved by the Bureau.

*transmission encrypted using quantum-resistant protocols*`,
      options: [
        { text: "Another song", value: "recommend another song" },
        { text: "Tell me about the resistance", value: "tell me about the resistance" },
        { text: "What other art exists?", value: "what project are you working on" }
      ]
    };
  }

  // Default response
  return {
    content: `${generateSystemPrefix()}\\n*processing query* How can I assist with your inquiry about Creator Liam or the resistance?`,
    options: [
      { text: "Who is Liam?", value: "who is your creator" },
      { text: "Where does Liam live?", value: "where does liam live" },
      { text: "What does Liam do?", value: "who does liam work for" }
    ]
  };
}

export interface Message {
  text: string;
  isUser: boolean;
  options?: string[];
}

export class KnowledgeService {
  static getResponse(query: string): Message {
    const response = findRelevantInfo(query);
    return {
      text: response.content,
      isUser: false,
      options: response.options?.map(opt => opt.text)
    };
  }
} 