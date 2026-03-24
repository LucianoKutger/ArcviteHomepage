import React from "react";
import { Brain, Dna, HeartPulse } from 'lucide-react';
import solution1 from '../assets/solution_1.jpg';
import solution2 from '../assets/solution_2.jpg';
import solution3 from '../assets/solution_3.jpg';
import solution4 from '../assets/solution_4.jpg';
import solution5 from '../assets/solution_5.png';
import solution6 from '../assets/solution_6.png';
import bio1 from '../assets/bio1.jpg';
import bio2 from '../assets/bio2.avif';
import bio3 from '../assets/bio3.avif';

export const navItems = [
    { label: 'Home', targetId: 'home' },
    { label: 'Vision', targetId: 'vision' },
    { label: 'The Arc', targetId: 'methodik' },
    { label: 'Our Founder', targetId: 'founder' },
    { label: 'Bio Snyc', targetId: 'bioync' },
    { label: 'Solutions', targetId: 'protokolle' },
    { label: 'FAQ', targetId: 'faq' }
  ];

export const solutions = [
    {
      id: 1,
      title: "Asynchronous Execution",
      problem: "Keine Zeit für die Umsetzung",
      solution: "Wir arbeiten mit schneller Vor-Ort-Implementierung. Sie bleiben wo Sie sind. Wir kommen zu Ihnen. Die Supplements, Blueprints, und Equipment landen auf Ihrem Tisch, ohne dass Sie einen Finger rühren müssen.",
      details: "Unser operatives Team übernimmt das komplette Management Ihrer Gesundheitslogistik. Von der Terminkoordination mit Spezialisten bis hin zur Just-in-Time Lieferung von Supplements und Equipment – wir agieren als unsichtbare Schnittstelle, die sicherstellt, dass alle Protokolle eingehalten werden, ohne dass Sie Ihre Agenda anpassen müssen. Dies beinhaltet auch die proaktive Kommunikation mit Ihrer bestehenden medizinischen Infrastruktur.",
      imgSrc: solution1

    },
    {
      id: 2,
      title: "Cognitive Performance",
      problem: "Kognitives Rauschen & Fokus Verlust",
      solution: "Eliminierung von Entzündungen und Stabilisierung der Neurochemie. Konstante mentale Schärfe für High-Stakes Entscheidungen, unabhängig von der Uhrzeit.",
      details: "Wir nutzen fortschrittliche Neuro-Feedback-Technologien und präzise abgestimmte Nootropika-Stacks, um Ihre Neurotransmitter-Balance zu optimieren. Das Ziel ist ein Zustand dauerhafter mentaler Klarheit und gesteigerter exekutiver Funktion, selbst in Phasen hoher psychischer Belastung. Wir analysieren Catecholamin-Metaboliten, um den perfekten Neuro-Stack für Ihre Physiologie zu entwickeln.",
      imgSrc: solution2
    },
    {
      id: 3,
      title: "Biological Risk Management",
      problem: "Unkalkulierbare biologische Ausfallrisiken",
      solution: "Wir managen Ihre Gesundheit wie ein Investment-Portfolio. Durch quartalsweise Tiefenanalysen (ApoB, HbA1c, Hormone) detektieren unsere Frühwarnsysteme Risiken, bevor sie Ihre operative Handlungsfähigkeit gefährden.",
      details: "Durch die kontinuierliche Überwachung von über 50 Biomarkern schaffen wir ein Frühwarnsystem, das pathologische Entwicklungen erkennt, lange bevor Symptome auftreten. Wir managen Ihre Gesundheit mit der gleichen Sorgfalt und Voraussicht wie ein institutionelles Asset-Portfolio. Dies beinhaltet genetische Prädispositionsanalysen und epigenetische Alterstests.",
      imgSrc: solution3
    },
    {
      id: 4,
      title: "Adaptive Protocols",
      problem: "Leistungsabfall durch globale Mobilität",
      solution: "Reisespezifische Algorithmen. Von Jetlag-Protokollen bis hin zu präzisen Restaurant-Briefings für Geschäftsessen – wir passen Ihre Biologie dynamisch an jede Zeitzone und jedes soziale Szenario an.",
      details: "Unser System passt sich Ihrem Lebensstil an, nicht umgekehrt. Wir entwickeln adaptive Protokolle für Zeitzonenwechsel, Geschäftsreisen und unregelmäßige Schlafzyklen, damit Ihre physiologische Performance unabhängig von externen Faktoren stabil bleibt. Jedes Hotel und jedes Restaurant auf Ihrer Reiseroute wird vorab gescreent.",
      imgSrc: solution4
    },
    {
      id: 5,
      title: "Privacy First",
      problem: "Sensible Gesundheitsdaten.",
      solution: "Höchste Diskretion auf Family-Office Niveau. Ihre Daten bleiben anonymisiert, verschlüsselt und verlassen nie unseren geschützten Loop.",
      details: "Ihre Daten werden in einer privaten, isolierten Cloud-Infrastruktur gespeichert und sind nur für unser medizinisches Kernteam zugänglich. Wir garantieren absolute Diskretion und Sicherheit auf dem Niveau von staatlichen Sicherheitsbehörden. Keine Cloud-Backups bei Drittanbietern, volle Souveränität über Ihre biologischen Daten.",
      imgSrc: solution5
    },
    {
      id: 6,
      title: "Growth Bottleneck",
      problem: "Biologisches Limit als Wachstumsbremse",
      solution: "Wir transformieren Ihre Biologie von einer unberechenbaren Variable in Ihren stärksten Multiplikator. Durch die Maximierung Ihres energetischen Outputs schaffen wir das Fundament für grenzenlose unternehmerische Skalierung.",
      details: "Gesundheit ist kein Kostenfaktor, sondern ein Hebel für unternehmerischen Erfolg. Durch die Maximierung Ihrer physischen und kognitiven Ressourcen steigern wir Ihre Entscheidungskapazität und Belastbarkeit, was sich direkt in Ihrer beruflichen Performance niederschlägt. Wir reporten halbjährlich den 'Biological ROI' Ihrer Investition.",
      imgSrc:solution6
    },
  ];
export const goalOptions = [
    { value: 'performance', label: 'Performance & Energy' },
    { value: 'longevity', label: 'Longevity & Healthspan' },
    { value: 'stress', label: 'Stress & Resilience' }
  ];

 export const dashboardData = [
    {
      id: 0,
      category: "Nervensystem",
      icon: <Brain className="w-4 h-4" />,
      metrics: [
        { 
            label: "HRV (ms)", 
            unit: "ms",
            description: "Die Herzratenvariabilität misst die zeitlichen Abstände zwischen Herzschlägen. Ein hoher Wert signalisiert starke Erholung, hohe Stressresistenz und ein dominantes parasympathisches Nervensystem.",
            segments: [
                { width: '20%', color: 'bg-red-900/40', label: '< 25', topLabel: 'Suboptimal' },
                { width: '15%', color: 'bg-white/5', label: '25-45', topLabel: 'Basis' },
                { width: '35%', color: 'bg-[#E5D9B6]', label: '45-85', topLabel: 'Optimum', isOptimum: true },
                { width: '20%', color: 'bg-white/5', label: '85-110', topLabel: 'Basis' },
                { width: '10%', color: 'bg-red-900/40', label: '> 110', topLabel: 'Suboptimal' }
            ]
        },
        { 
            label: "RHR (bpm)", 
            unit: "bpm", 
            inverted: true,
            description: "Der Ruhepuls ist ein Basis-Indikator für aerobe Fitness und Herzgesundheit. Niedrigere Werte deuten auf ein effizientes Herz und gute kardiovaskuläre Ökonomie hin.",
            segments: [
                { width: '20%', color: 'bg-red-900/40', label: '< 40', topLabel: 'Suboptimal' },
                { width: '15%', color: 'bg-white/5', label: '40-48', topLabel: 'Basis' },
                { width: '25%', color: 'bg-[#E5D9B6]', label: '48-58', topLabel: 'Optimum', isOptimum: true },
                { width: '20%', color: 'bg-white/5', label: '58-70', topLabel: 'Basis' },
                { width: '20%', color: 'bg-red-900/40', label: '> 70', topLabel: 'Suboptimal' }
            ]
        }, 
        { 
            label: "Sleep Eff. (%)", 
            unit: "%", 
            description: "Die Schlafeffizienz beschreibt den prozentualen Anteil der Schlafzeit an der gesamten Zeit im Bett. Werte über 88% stehen für minimale Wachphasen und hohe Schlafqualität.",
            segments: [
                { width: '15%', color: 'bg-red-900/40', label: '< 80', topLabel: 'Suboptimal' },
                { width: '20%', color: 'bg-white/5', label: '80-88', topLabel: 'Basis' },
                { width: '30%', color: 'bg-[#E5D9B6]', label: '88-96', topLabel: 'Optimum', isOptimum: true },
                { width: '20%', color: 'bg-white/5', label: '96-98', topLabel: 'Basis' },
                { width: '15%', color: 'bg-red-900/40', label: '> 98', topLabel: 'Suboptimal' }
            ]
        }
      ]
    },
    {
      id: 1,
      category: "Biochemie",
      icon: <Dna className="w-4 h-4" />,
      metrics: [
        { 
            label: "Cortisol (nmol/L)", 
            unit: "nmol/L",
            description: "Das primäre Stresshormon. Das Optimum (350-550 nmol/L) am Morgen sorgt für Energie und Fokus. Chronisch erhöhte Werte blockieren die Fettverbrennung und Regeneration.",
            segments: [
                { width: '15%', color: 'bg-red-900/40', label: '< 140', topLabel: 'Suboptimal' },
                { width: '20%', color: 'bg-white/5', label: '140 - 250', topLabel: 'Basis' },
                { width: '30%', color: 'bg-[#E5D9B6]', label: '350 - 550', topLabel: 'Optimum', isOptimum: true },
                { width: '20%', color: 'bg-white/5', label: '550 - 700', topLabel: 'Basis' },
                { width: '15%', color: 'bg-red-900/40', label: '> 750', topLabel: 'Suboptimal' }
            ]
        },
        { 
            label: "hs-CRP (mg/L)", 
            unit: "mg/L",
            description: "High-sensitivity C-Reactive Protein misst systemische Entzündungen im Körper. Niedrige Werte sind entscheidend für Gefäßgesundheit und schnelle Regeneration nach Belastung.",
            segments: [
                { width: '15%', color: 'bg-red-900/40', label: '< 0.1', topLabel: 'Suboptimal' },
                { width: '20%', color: 'bg-white/5', label: '0.1 - 0.5', topLabel: 'Basis' },
                { width: '30%', color: 'bg-[#E5D9B6]', label: '< 0.8', topLabel: 'Optimum', isOptimum: true },
                { width: '20%', color: 'bg-white/5', label: '1.0 - 2.5', topLabel: 'Basis' },
                { width: '15%', color: 'bg-red-900/40', label: '> 3.0', topLabel: 'Suboptimal' }
            ]
        },
        { 
            label: "T/C Ratio", 
            unit: null, 
            description: "Das Testosteron-Cortisol-Verhältnis zeigt die Balance zwischen Aufbau (Anabol) und Abbau (Katabol). Ein hohes Verhältnis ist essenziell für Muskelaufbau und positive Trainingsadaption.",
            segments: [
                { width: '15%', color: 'bg-red-900/40', label: '< 0.015', topLabel: 'Suboptimal' },
                { width: '20%', color: 'bg-white/5', label: '0.015 - 0.025', topLabel: 'Basis' },
                { width: '30%', color: 'bg-[#E5D9B6]', label: '> 0.035', topLabel: 'Optimum', isOptimum: true },
                { width: '20%', color: 'bg-white/5', label: '0.050 - 0.070', topLabel: 'Basis' },
                { width: '15%', color: 'bg-red-900/40', label: '> 0.080', topLabel: 'Suboptimal' }
            ]
        } 
      ]
    },
    {
      id: 2,
      category: "Metabolik",
      icon: <HeartPulse className="w-4 h-4" />,
      metrics: [
        { 
            label: "ApoB (mg/dL)", 
            unit: "mg/dL",
            description: "Apolipoprotein B erfasst die Gesamtlast atherogener Partikel. Es ist präziser als LDL-Cholesterin zur Vorhersage kardiovaskulärer Risiken. Ziel: So niedrig wie möglich.",
            segments: [
                { width: '15%', color: 'bg-red-900/40', label: '< 40', topLabel: 'Suboptimal' },
                { width: '20%', color: 'bg-white/5', label: '40 - 60', topLabel: 'Basis' },
                { width: '30%', color: 'bg-[#E5D9B6]', label: '< 65', topLabel: 'Optimum', isOptimum: true },
                { width: '20%', color: 'bg-white/5', label: '80 - 100', topLabel: 'Basis' },
                { width: '15%', color: 'bg-red-900/40', label: '> 110', topLabel: 'Suboptimal' }
            ]
        },
        { 
            label: "Insulin-Sens.", 
            unit: null,
            description: "Maß dafür, wie effektiv Zellen Glukose aufnehmen. Hohe Sensitivität verhindert Energieschwankungen, reduziert Entzündungen und begünstigt die Fettverbrennung.",
            segments: [
                { width: '15%', color: 'bg-red-900/40', label: '< 0.5', topLabel: 'Suboptimal' },
                { width: '20%', color: 'bg-white/5', label: '0.5 - 0.8', topLabel: 'Basis' },
                { width: '30%', color: 'bg-[#E5D9B6]', label: '1.0 - 1.5', topLabel: 'Optimum', isOptimum: true },
                { width: '20%', color: 'bg-white/5', label: '2.0 - 2.4', topLabel: 'Basis' },
                { width: '15%', color: 'bg-red-900/40', label: '> 2.5', topLabel: 'Suboptimal' }
            ]
        }, 
        { 
            label: "TSH (mU/L)", 
            unit: "mU/L",
            description: "Thyreoidea-stimulierendes Hormon steuert die Schilddrüse. Der optimale Bereich sichert einen hohen Grundumsatz, Thermogenese und mentale Wachheit.",
            segments: [
                { width: '15%', color: 'bg-red-900/40', label: '< 0.3', topLabel: 'Suboptimal' },
                { width: '20%', color: 'bg-white/5', label: '0.3 - 1.0', topLabel: 'Basis' },
                { width: '30%', color: 'bg-[#E5D9B6]', label: '1.2 - 2.0', topLabel: 'Optimum', isOptimum: true },
                { width: '20%', color: 'bg-white/5', label: '2.5 - 4.0', topLabel: 'Basis' },
                { width: '15%', color: 'bg-red-900/40', label: '> 4.5', topLabel: 'Suboptimal' }
            ]
        }
      ]
    }
  ];

export const syncCardsData = [
  {
    id: "Biometric Hub",
    title: "Biometric Hub",
    category: "Erfassung",
    focusTitle: "Automatic Tracking 24/7",
    focusDesc: "Permanente Erfassung der autonomen Belastungsfähigkeit und Analyse Ihrer Schlaf-Architektur für maximale Regenerations-Präzision",
    imageLabel: "Biometric Hub",
    imageSrc: bio1,
    details: [
      "Automatische Synchronisation mit Dashboard",
      "Tägliche Belastungsempfehlung basierend auf HRV",
      "Schlaf-Phasen-Analyse (REM/Deep)",
      "Langzeit-Trend-Erkennung für Recovery"
    ],
    className: "relative z-20 bg-[#0A0A0A]",
    opacity: 0.75
  },
  {
    id: "Clinical Lab",
    title: "Clinical Lab",
    category: "Analyse",
    focusTitle: "Metabolic Mapping",
    focusDesc: "Nach unserem Timing System analysieren wir 30+ Biomarker zur Steuerung der Performance, Gesundheit und Langlebigkeit",
    imageLabel: "Labor",
    imageSrc: bio2,
    details: [
      "Quartalsweise Blutabnahme an Wunschort",
      "Umfassendes Hormon-Panel (Testosteron, Cortisol)",
      "Kardiovaskuläre Risiko-Analyse (ApoB, Lp(a))",
      "Detaillierte ärztliche Befundbesprechung"
    ],
    className: "relative z-20 bg-[#0A0A0A]",
  
  },
  {
    id: "Gene Analysis",
    title: "Gene Analysis",
    category: "Herkunftsanalyse",
    focusTitle: "",
    focusDesc: "Entschlüsselung Ihres genetischen Bauplans zur präzisen Steuerung von Langlebigkeit und physischer Belastbarkeit",
    imageLabel: "Genetisches Profiling",
    imageSrc: bio3,
    details: [
      "Alterungsrate",
      "Entzündungswerte",
      "Immunfähigkeit / Immunalter"
    ],
    className: "bg-[#0C0C0C] border-[#E5D9B6]/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]",
    
  },
  {
      id: "Data Fusion",
    title: "Data Fusion",
    category: "SYNTHESE",
    focusTitle: "Performance Synchronisation",
    focusDesc: "Wir aggregieren alle Datenströme zu einem kohärenten Bild für maximale operative Präzision",
    imageLabel: "Sync",
    imageSrc: bio3,
    details: [
      "Ende-zu-Ende verschlüsselte Protokolle",
      "Manuelle Auswertung durch Performance-Specialists",
      "Korrelation von Blutwerten mit Schlafdaten",
      "Anonymisierte Cloud-Infrastruktur"
    ],
    className: "bg-[#0C0C0C] border-[#E5D9B6]/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]",
    
    wide: true 
  }
  ];
export const faqs = [
    {
      question: "Wie viel Zeit erfordert die Implementierung?",
      answer: "Praktisch keine. Arcvite ist kein Kurs, sondern eine schlüsselfertige Installation. Wir kommen zu Ihnen und implementieren das gesamte System (Biometrie, Supplements, Equipment) vor Ort. Sie führen Ihr Business – wir optimieren Ihre Biologie im Hintergrund."
    },
    {
      question: "Ist das Programm steuerlich absetzbar?",
      answer: "In der Regel ja. Da Arcvite als Executive Performance Consulting zur Steigerung der beruflichen Leistungsfähigkeit dient, wird es meist voll als Betriebsausgabe oder Fortbildung anerkannt. Effektiv finanziert das Finanzamt somit bis zu 42 % Ihres Upgrades. Sprechen Sie kurz mit Ihrem Steuerberater über die Einordnung als Performance-Consulting."
    },
    {
      question: "Was passiert, wenn meine Werte extrem schlecht sind?",
      answer: "Dann ist Ihr Potenzial am größten. Arcvite arbeitet nicht mit Schätzungen, sondern mit harten Daten aus Ihrer DNA und Biometrie. Je größer der aktuelle Engpass in Ihrer Biologie, desto massiver ist der Hebel für Ihre Leistungssteigerung. Wir finden den Fehler im System – und beheben ihn."
    },
    {
      question: "Erhalte ich nur Beratung oder auch physische Produkte?",
      answer: "Sie erhalten ein schlüsselfertiges Gesamtsystem. Beratung allein löst keine biologischen Engpässe. Deshalb landet die gesamte Hardware auf Ihrem Tisch: Die auf Ihre Genetik abgestimmten Supplements, Ihre technischen Blueprints und das notwendige High-End Performance Equipment. Wir liefern nicht nur den Plan, sondern auch die Werkzeuge zur Umsetzung."
    },
    {
      question: "Was passiert mit meinen Daten? Ich lege Wert auf absolute Diskretion.",
      answer: "Arcvite ist auf “Privacy First” ausgelegt: Alle biometrischen Profile und DNA-Analysen werden verschlüsselt auf autarken Servern verwaltet. Wir verkaufen keine Daten und gewähren Dritten keinen Zugriff. Ihre Biologie bleibt Ihr Privateigentum – wir sind lediglich die Architekten Ihrer Optimierung."
    },
    {
      question: "Was ist der erste Schritt?",
      answer: "Ein 15-minütiges Performance-Audit. Wir verkaufen Ihnen nichts, bevor wir nicht wissen, ob wir Ihnen helfen können. In diesem Gespräch analysieren wir Ihren Status Quo und prüfen, ob Ihr System für das Arcvite-Protokoll bereit ist. Wenn es passt, erhalten Sie einen klaren Fahrplan. Wenn nicht, sagen wir Ihnen das direkt."
    },
    {
      question: "Kann ich das Programm auch später starten?",
      answer: "Theoretisch ja. Praktisch ist jede Woche, in der Ihr System unter seinem Potenzial arbeitet, eine Woche verlorener Performance und Klarheit. Zudem ist unsere Kapazität für Vor-Ort-Implementierungen aufgrund des hohen Logistikaufwands streng limitiert. Wer zuerst anfragt, wird zuerst beliefert. Sobald die Kapazität erschöpft ist, arbeiten wir mit einer Warteliste."
    }
  ];

