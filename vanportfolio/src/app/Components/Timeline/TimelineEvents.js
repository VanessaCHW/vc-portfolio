/**
 * List of all work and school events
 * To populate the timeline
 */

const TimelineEvents = [
  {
    id: 1,
    eventType: "edu",
    date: "*formation d'appoint future* AVRIL - MAI 2024",
    diploma: "React JS",
    school: "Collège de Maisonneuve",
  },
  {
    id: 2,
    eventType: "edu",
    date: "2023",
    diploma: "Formations continues",
    school: "Technologia",
    items: [
      "Gestion du temps: définir ses priorités en restant flexible",
      "Gestion du stress: l'apprivoiser pour en tirer profit",
      "Excel: catégories de fonctions",
      "OneNote: fonctionnalités essentielles",
    ],
  },
  {
    id: 3,
    eventType: "work",
    date: "JUIN 2021 - AOÛT 2021",
    title: "Programmeur Analyste (React)",
    company: "GIRO",
    items: [
      "Développement de l’interface utilisateur pour une application de gestion de véhicules, à partir des spécifications de design.",
      "Développement de nouvelles composantes robustes et réutilisables en React.",
      "Correction de bogues, assurance qualité des livrables avant les déploiements client, contrôle de versions.",
      "Écriture de tests et collaboration avec l’équipe QA.",
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Git",
      "Jest",
      "Enzyme",
      "VSCode",
      "Agile",
    ],
  },
  {
    id: 4,
    eventType: "edu",
    date: "SEPT. 2020 - AVRIL 2021",
    diploma: "Certificat en Développement Web Full Stack (Bootcamp)",
    school: "Université Concordia",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "Firebase",
      "REST API",
      "Git",
      "Github",
      "Jest",
      "VSCode",
      "Figma",
      "Insomnia",
    ],
  },
  {
    id: 5,
    eventType: "work",
    date: "OCT. 2017 - AOÛT 2020",
    title: "Ingénieure de projets en télécommunications",
    company: "SNC-Lavalin",
    items: [
      "Responsable de la conception, de la coordination, et de s’assurer que la réalisation des ouvrages soit conforme aux plans et devis en câblage structuré. ",
      "Agir à titre d’expert-conseil, notamment pour les projets de l’Aéroport de Montréal et de la station du REM.",
    ],
  },
  {
    id: 6,
    eventType: "work",
    date: "JAN. 2016 - OCT. 2017",
    title: "Ingénieure de projets en électricité",
    company: "Pageau-Morel et associés",
    items: [
      "Responsable de la conception, de la coordination, et de s’assurer que la réalisation des ouvrages soit conforme aux plans et devis en électricité du bâtiment. ",
      "Agir à titre d’expert-conseil, notamment pour des projets dans les milieux hospitaliers, industriels et commerciaux (tel que le Centre Eaton Montréal). ",
    ],
  },
  {
    id: 7,
    eventType: "edu",
    date: "AOÛT 2010 – DÉC. 2015",
    diploma: "Baccalauréat en Génie Électrique",
    school: "École Polytechnique de Montréal",
    tags: ["Programmation orientée objet", "C/C++", "Matlab"],
  },
  {
    id: 8,
    eventType: "edu",
    date: "2008 - 2010",
    diploma: "Diplôme d'études collégiales",
    school: "Marianopolis College",
  },
  {
    id: 9,
    eventType: "edu",
    date: "2003 - 2008",
    diploma: "Diplôme d'études secondaires",
    school: "Collège Notre-Dame",
  },
];

export default TimelineEvents;
