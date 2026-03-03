import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Shield, Zap, Target, Award, Layers, 
  ArrowRight, RefreshCw, Send, CheckCircle2, 
  FileText, Play, BookOpen, ExternalLink, Globe, Compass,
  Home, Activity, Beaker, ClipboardList, BarChart3,
  ArrowUpRight, Lock, FastForward, TrendingUp,
  ChevronDown, Droplets, Brain, Heart, ShieldAlert,
  Info, Sparkles, Sliders, Dumbbell, Plane, Utensils, 
  Smartphone, Microscope, Pill, Wind, BatteryCharging, 
  Watch, Moon, Users, PhoneCall, Package, Mic, Briefcase,
  Star, Globe2, Shapes, Check, ScanLine, Fingerprint
} from 'lucide-react';

const App = () => {
  // State Management
  const [currentView, setCurrentView] = useState('home'); 
  const [activeSegment, setActiveSegment] = useState(null);
  const [openMarker, setOpenMarker] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  // Form State
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const goalOptions = [
    "Performance-Optimierung",
    "Regeneration / Schlaf",
    "Longevity"
  ];

  const toggleGoal = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  // Partner-Daten
  const partners = [
    "Biotech Labs Europe", "Neuro-Performance Corp", "Elite Diagnostics", "Longevity Foundation", "Executive Health Group"
  ];

  // Protokolle Datenstruktur (Strategies)
  const protocols = useMemo(() => [
    {
      id: 1,
      title: "Protokoll 1",
      subtitle: "Performance Foundation",
      includes: null,
      services: [
        { icon: <Dumbbell className="w-3.5 h-3.5" />, label: "Trainings Architektur", desc: "Neurozentrische Kraft- und Mobilitätssteuerung." },
        { icon: <Plane className="w-3.5 h-3.5" />, label: "The Travel-Standard", desc: "Erhalt der Physis bei hoher Reisefrequenz." },
        { icon: <Utensils className="w-3.5 h-3.5" />, label: "Nutrition Blueprint", desc: "Biometrisch optimierter Ernährungsfahrplan." },
        { icon: <Compass className="w-3.5 h-3.5" />, label: "Dining-Out-Compass", desc: "Executive-Guide für die optimale Restaurant-Wahl." },
        { icon: <Smartphone className="w-3.5 h-3.5" />, label: "Digital Tracking", desc: "Zentrale KPI-Überwachung Ihrer Fortschritte." }
      ]
    },
    {
      id: 2,
      title: "Protokoll 2",
      subtitle: "Advanced Bio-Hacking",
      includes: "Inklusive Protokoll 1",
      services: [
        { icon: <Microscope className="w-3.5 h-3.5" />, label: "Bloodwork Analysis", desc: "Deep-Dive Screening von über 60 Biomarkern." },
        { icon: <Pill className="w-3.5 h-3.5" />, label: "Supplement stacking", desc: "Präzise Mikronährstoff-Protokolle für Fokus." },
        { icon: <Brain className="w-3.5 h-3.5" />, label: "Brain Optimization", desc: "Neurochemische Feinabstimmung für Deep Work." },
        { icon: <BatteryCharging className="w-3.5 h-3.5" />, label: "72h Energy Kickstart", desc: "Sofortige Reaktivierung nach Stressphasen." },
        { icon: <Watch className="w-3.5 h-3.5" />, label: "Wearable Integration", desc: "Echtzeit-Synchronisation von Oura & Whoop." },
        { icon: <Moon className="w-3.5 h-3.5" />, label: "Sleep Architecture", desc: "Optimierung der Tiefschlaf-Regeneration." }
      ]
    },
    {
      id: 3,
      title: "Protokoll 3",
      subtitle: "Full Spectrum Concierge",
      includes: "Inklusive Protokoll 2",
      services: [
        { icon: <Users className="w-3.5 h-3.5" />, label: "PA - Liaison automation", desc: "Direkte Schnittstelle zu Ihrer Assistenz." },
        { icon: <Briefcase className="w-3.5 h-3.5" />, label: "Restaurant Concierge", desc: "Menü-Check und Reservierungs-Management." },
        { icon: <Wind className="w-3.5 h-3.5" />, label: "Jetlag Protocol", desc: "Chronobiologische Zeitumstellungs-Strategie." },
        { icon: <PhoneCall className="w-3.5 h-3.5" />, label: "24/7 Priority Support", desc: "Unmittelbarer Zugriff auf Ihren Manager." },
        { icon: <Package className="w-3.5 h-3.5" />, label: "Ready-to-go-box", desc: "Essentials & Supplements direkt an Ihren Ort." },
        { icon: <Mic className="w-3.5 h-3.5" />, label: "Employee Keynote", desc: "Performance-Impuls für Ihre gesamte Ebene." },
        { icon: <Shield className="w-3.5 h-3.5" />, label: "Travel Survival kit", desc: "Essentials für maximale Resilienz unterwegs." }
      ]
    }
  ], []);

  // Updated Biometrics Structure
  const bioPillars = useMemo(() => [
    {
      id: "hormonal",
      title: "Hormonal Architecture",
      desc: "Fokus auf Antrieb, Libido und Stressresistenz (Testosteron/Cortisol-Ratio).",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: "metabolic",
      title: "Metabolic Efficiency",
      desc: "Schutz des Herz-Kreislauf-Systems und Blutzucker-Optimierung (ApoB/Insulin).",
      icon: <Activity className="w-6 h-6" />
    },
    {
      id: "neuronal",
      title: "Neuronal Integrity",
      desc: "Biologische Basis für kognitive Höchstleistung und Fokus (Vitamine/Neurotransmitter-Vorstufen).",
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: "cellular",
      title: "Cellular Resilience",
      desc: "Entzündungsmanagement und Schutz vor vorzeitiger Alterung (hs-CRP/Homocystein).",
      icon: <ShieldAlert className="w-6 h-6" />
    }
  ], []);

  // Bogenmodell Segmente (The Arc)
  const segments = useMemo(() => [
    { id: 1, title: "Core Effects", subtitle: "The DNA of Performance", hex: "#285430", radius: 180, thickness: 6, description: "Die psychologische Architektur deines Erfolgs. Dieser Kern arbeitet durch unsere Algorithmen vollautomatisch im Hintergrund.", listItems: [{ label: "Nutrition", text: "Präzise Nährstoffzufuhr für maximale kognitive Kapazität und konstante Energielevel." }, { label: "Sleep & Recovery", text: "Optimierung der hormonalen Regeneration und Schlafarchitektur für maximale Belastbarkeit." }] },
    { id: 2, title: "Neuro-Biochemistry & Systems", subtitle: "Systemic Performance Base", hex: "#5F8D4E", radius: 300, thickness: 6, description: "Die biochemische Justierung deines Systems. Wir optimieren die internen Regelkreise für maximale neuronale Effizienz.", listItems: [{ label: "Hormonhaushalt", text: "Optimierung endokriner Prozesse für maximale Stressresistenz und kognitiven Drive." }, { label: "Neurotransmitter balance", text: "Präzise Kalibrierung von Dopamin und Serotonin für gesteigerte Konzentration und mentale Klarheit." }, { label: "Entzündungswerte", text: "Minimierung systemischer Inflammation zur Sicherung der langfristigen zellulären Leistungsfähigkeit." }] },
    { id: 3, title: "Strategic Vision & Environment", subtitle: "Executive Ecosystem Architecture", hex: "#A4BE7B", radius: 420, thickness: 6, description: "Die makroskopische Perspektive. Wir synchronisieren deine interne Leistung mit den äußeren Kräften des Marktes und der Zeit.", listItems: [{ label: "Zukunftsaussichten", text: "Prädiktive Analyse langfristiger Trends und technologischer Disruptionen zur Absicherung deiner Führungsposition." }, { label: "Marktdynamik", text: "Strategische Navigation in volatilen Märkten zur Identifikation und Sicherung unfairer Wettbewerbsvorteile." }, { label: "Geopolitische Lage", text: "Bewertung globaler Machtverschiebungen und deren Einfluss auf die unternehmerische Souveränität." }, { label: "Persönliches Vermächtnis", text: "Definition und Aufbau eines nachhaltigen Impact-Blueprints, der über die operative Ebene hinausreicht." }] },
    { id: 4, title: "Dream", subtitle: "The Ultimate Vision", hex: "#E5D9B6", radius: 540, thickness: 6, description: "Die Definition und Realisierung deiner höchsten Ambitionen. Jenseits von Marktanteilen erschaffen wir hier die Blaupause für dein persönliches und unternehmerisches Lebenswerk." }
  ], []);

  const centerX = 120; 
  const centerY = 580; 

  const polarToCartesian = (cx, cy, r, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return { x: cx + (r * Math.cos(angleInRadians)), y: cy + (r * Math.sin(angleInRadians)) };
  };

  const getPointyArcPath = (r, startAngle, endAngle, thickness) => {
    const pStart = polarToCartesian(centerX, centerY, r, startAngle);
    const pEnd = polarToCartesian(centerX, centerY, r, endAngle);
    const rOut = r + thickness / 2;
    const rIn = r - thickness / 2;
    return ["M", pStart.x, pStart.y, "A", rOut, rOut, 0, 0, 1, pEnd.x, pEnd.y, "A", rIn, rIn, 0, 0, 0, pStart.x, pStart.y, "Z"].join(" ");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const arrowStart = polarToCartesian(centerX, centerY, 580, 45);
  const arrowEnd = polarToCartesian(centerX, centerY, 15, 45);
  const polarStarPoint = useMemo(() => polarToCartesian(centerX, centerY, 540, 45), []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'blutwerte', label: 'Biometrics' },
    { id: 'methodik', label: 'The Arc' },
    { id: 'protokolle', label: 'Strategies' },
    { id: 'insights', label: 'Insights' }
  ];

  return (
    <div className="relative w-full min-h-screen text-white overflow-x-hidden font-sans selection:bg-[#E5D9B6]/20">
      
      {/* TITANIUM BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none titanium-master-bg" />

      {/* BRANDING */}
      <div className="fixed top-10 left-12 z-[110] pointer-events-none">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} className="relative flex items-center">
          <span className="text-[14px] font-extralight tracking-[0.9em] uppercase text-[#E5D9B6]/90 filter drop-shadow-[0_0_8px_rgba(229,217,182,0.2)]">Arcvite</span>
        </motion.div>
      </div>

      {/* AUDIT REQUEST BUTTON */}
      <div className="fixed top-10 right-12 z-[110]">
        <motion.button whileHover={{ scale: 1.02 }} className="group relative flex items-center gap-3" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="flex flex-col items-end text-right leading-[1.6]">
            <span className="text-[8px] font-light tracking-[0.8em] uppercase text-[#E5D9B6]/60 group-hover:text-[#E5D9B6] transition-colors mr-[-0.8em]">Request</span>
            <span className="text-[8px] font-light tracking-[0.8em] uppercase text-[#E5D9B6]/60 group-hover:text-[#E5D9B6] transition-colors mr-[-0.8em]">Audit</span>
          </div>
          <ArrowUpRight className="w-3 h-3 text-[#E5D9B6]/30 group-hover:text-[#E5D9B6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          <div className="absolute -bottom-2 right-0 w-0 h-[0.5px] bg-[#E5D9B6]/20 group-hover:w-full transition-all duration-700" />
        </motion.button>
      </div>
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-8 pointer-events-none">
        <div className="bg-black/30 backdrop-blur-3xl border border-white/5 px-10 py-3 rounded-full flex items-center gap-12 pointer-events-auto shadow-2xl">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setCurrentView(item.id)} className={`text-[9px] uppercase tracking-[0.5em] transition-all relative py-1 ${currentView === item.id ? 'text-[#E5D9B6] font-medium' : 'text-white/30 hover:text-white/60'}`}>
              {item.label}
              {currentView === item.id && <motion.div layoutId="nav-active" className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-[#E5D9B6]/60 shadow-[0_0_12px_#E5D9B6]" />}
            </button>
          ))}
        </div>
      </nav>

      <main className="relative z-10 w-full flex flex-col items-center pt-32 min-h-screen overflow-y-auto pb-20 px-6">
        <AnimatePresence mode="wait">
          
          {/* HOME VIEW */}
          {currentView === 'home' && (
            <motion.div key="home-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex flex-col items-center max-w-7xl">
              <div className="mt-20 mb-32 text-center relative flex flex-col items-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} className="mb-8 w-full max-w-[600px] pointer-events-none">
                  <svg width="100%" height="40" viewBox="0 0 600 40" fill="none" preserveAspectRatio="xMidYMid meet">
                    <motion.path d="M20 35 C150 5, 450 5, 580 35" stroke="#E5D9B6" strokeWidth="0.75" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }} transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }} />
                  </svg>
                </motion.div>
                <motion.h1 initial={{ letterSpacing: "1.5em", opacity: 0 }} animate={{ letterSpacing: "1.2em", opacity: 1 }} transition={{ duration: 2 }} className="text-5xl md:text-7xl font-extralight uppercase text-[#E5D9B6]/90 mr-[-1.2em] filter drop-shadow-[0_0_30px_rgba(229,217,182,0.15)]">ARCVITE</motion.h1>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="max-w-3xl text-center space-y-10 mb-40">
                <p className="text-[13px] md:text-[15px] leading-[1.8] font-light tracking-[0.12em] text-white/70">Ein Unternehmen ist nur so belastbar wie seine Führungsebene. Doch während jede Kennzahl im Business akribisch optimiert wird, bleibt die wichtigste Komponente – die menschliche Biologie – oft dem Zufall überlassen.</p>
                <div className="flex flex-col gap-6">
                  <p className="text-[14px] md:text-[16px] font-medium tracking-[0.15em] text-[#E5D9B6]/80 uppercase">Arcvite wurde gegründet, um diese Lücke zu schließen.</p>
                  <p className="text-[13px] md:text-[15px] leading-[1.8] font-light tracking-[0.12em] text-white/50">Wir verstehen Gesundheit nicht als Lifestyle-Attribut, sondern als Hochleistungs-Struktur. Basierend auf unserem proprietären Bogenmodell (dem Arc-System) bauen wir ein Fundament, das weit über herkömmliches Coaching hinausgeht. Wir synchronisieren präzise Labordaten, neurozentriertes Training und diskretes Operations-Management zu einem unantastbaren Status Quo.</p>
                </div>
                <p className="text-[13px] md:text-[15px] leading-[1.8] font-light tracking-[0.12em] text-white/70 italic border-t border-white/5 pt-10">Unser Ziel ist es, dass Sie nicht trotz, sondern wegen Ihrer physischen und mentalen Verfassung an der Spitze stehen – mit absoluter Klarheit, unerschöpflicher Energie und der Sicherheit, dass Ihre Biologie Ihr Ambitionslevel nicht nur hält, sondern übertrifft.</p>
              </motion.div>

              <div className="w-full text-center mb-24">
                <h2 className="text-[20px] md:text-[24px] uppercase tracking-[1em] text-[#E5D9B6]/80 mr-[-1em] font-extralight">The 4. Overarching Arcs</h2>
                <div className="h-[0.5px] w-full max-w-[850px] bg-[#E5D9B6]/30 mx-auto mt-10" />
              </div>

              {/* MODEL 1: THE DREAM VISUALIZER */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-20 mb-60 px-4">
                <div className="lg:col-span-7 flex items-center justify-start h-[550px]">
                  <svg viewBox="0 0 700 700" className="w-full h-full overflow-visible">
                    <defs>
                      {segments.map(s => (
                        <linearGradient key={`h-grad-1-${s.id}`} id={`h-grad-1-${s.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor: s.hex}} />
                          <stop offset="50%" style={{stopColor: s.hex, filter: 'brightness(1.5)'}} />
                          <stop offset="100%" style={{stopColor: s.hex}} />
                        </linearGradient>
                      ))}
                      <filter id="h-glow-1"><feGaussianBlur stdDeviation="12" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                      <marker id="arrow-h-1" markerWidth="20" markerHeight="12" refX="18" refY="6" orient="auto"><polygon points="0 0, 18 6, 0 12" fill="white" fillOpacity="0.4" /></marker>
                    </defs>
                    <g><circle cx={centerX} cy={centerY} r="12" fill="white" fillOpacity="0.05" /><circle cx={centerX} cy={centerY} r="4" fill="white" fillOpacity="0.8" /><text x={centerX} y={centerY + 45} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.4em] font-light italic opacity-50">YOU</text></g>
                    <g><line x1={arrowStart.x} y1={arrowStart.y} x2={arrowEnd.x} y2={arrowEnd.y} stroke="white" strokeWidth="0.5" strokeOpacity="0.25" markerEnd="url(#arrow-h-1)" /><text x={polarToCartesian(centerX, centerY, 600, 45).x + 12} y={polarToCartesian(centerX, centerY, 600, 45).y - 5} fill="white" fillOpacity="0.2" fontSize="9" letterSpacing="0.4em" className="uppercase italic font-extralight">Impact Flow</text></g>
                    {segments.map((s) => {
                      const isDream = s.id === 4;
                      return (
                        <g key={`h-arc-1-${s.id}`} style={{ pointerEvents: isDream ? 'auto' : 'none' }}>
                          <motion.path 
                            animate={isDream ? { fillOpacity: [0.6, 1, 0.6], scale: [1, 1.01, 1] } : { fillOpacity: 0.15 }} 
                            transition={isDream ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : { duration: 0.8 }}
                            fill={isDream ? `url(#h-grad-1-${s.id})` : "#E5D9B6"} 
                            style={{ filter: isDream ? 'url(#h-glow-1)' : 'none', transformOrigin: `${centerX}px ${centerY}px` }} 
                            d={getPointyArcPath(s.radius, 10, 80, isDream ? 12 : 1.2)}
                          />
                        </g>
                      );
                    })}
                    <g><circle cx={polarStarPoint.x} cy={polarStarPoint.y} r="3" fill="#E5D9B6" style={{ filter: 'drop-shadow(0 0 10px #E5D9B6)' }} /><text x={polarStarPoint.x} y={polarStarPoint.y - 45} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.5em] font-light italic opacity-50">North Star</text></g>
                  </svg>
                </div>
                <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-6"><div className="flex items-center gap-4"><Star className="w-5 h-5 text-[#E5D9B6] fill-[#E5D9B6]/20" /><h2 className="text-3xl font-extralight tracking-[0.4em] uppercase text-white/90">The Dream</h2></div><div className="h-[0.5px] w-20 bg-[#E5D9B6]/40" /></div>
                  <div className="space-y-8 text-[14px] leading-relaxed font-light tracking-[0.08em] text-white/85">
                    <p>Jenseits der Optimierung von Blutwerten existiert ein Zustand, den wir als <span className="text-[#E5D9B6] font-medium">The Dream</span> bezeichnen. Es ist der Punkt, an dem Ihre Biologie aufhört, eine Variable zu sein, und stattdessen zu einer unerschöpflichen Konstante wird.</p>
                    <p>Der Dream-Bogen bildet den ultimativen Schutzschild. Es ist die Realisierung Ihrer höchsten Ambitionen – physisch unantastbar, mental absolut klar.</p>
                    <div className="bg-white/[0.03] border-l border-[#E5D9B6]/30 p-6 rounded-r-xl italic text-[#E5D9B6]/70 shadow-inner">"Wir bauen nicht nur an Ihrer Gesundheit. Wir erschaffen das Fundament für Ihr Lebenswerk."</div>
                  </div>
                </div>
              </div>

              {/* MODEL 2: STRATEGIC VISION */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-20 mb-60 px-4">
                <div className="lg:col-span-7 flex items-center justify-start h-[550px]">
                  <svg viewBox="0 0 700 700" className="w-full h-full overflow-visible">
                    <defs>
                      <filter id="h-glow-2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="12" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                      <marker id="arrow-h-2" markerWidth="20" markerHeight="12" refX="18" refY="6" orient="auto"><polygon points="0 0, 18 6, 0 12" fill="white" fillOpacity="0.4" /></marker>
                    </defs>
                    <g><circle cx={centerX} cy={centerY} r="12" fill="white" fillOpacity="0.05" /><circle cx={centerX} cy={centerY} r="4" fill="white" fillOpacity="0.8" /><text x={centerX} y={centerY + 45} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.4em] font-light italic opacity-50">YOU</text></g>
                    <g><line x1={arrowStart.x} y1={arrowStart.y} x2={arrowEnd.x} y2={arrowEnd.y} stroke="white" strokeWidth="0.5" strokeOpacity="0.25" markerEnd="url(#arrow-h-2)" /><text x={polarToCartesian(centerX, centerY, 600, 45).x + 12} y={polarToCartesian(centerX, centerY, 600, 45).y - 5} fill="white" fillOpacity="0.2" fontSize="9" letterSpacing="0.4em" className="uppercase italic font-extralight">Impact Flow</text></g>
                    {segments.map((s) => {
                      const isVision = s.id === 3;
                      const isDream = s.id === 4;
                      return (
                        <g key={`h-arc-2-${s.id}`} style={{ pointerEvents: isVision ? 'auto' : 'none' }}>
                          <motion.path 
                            animate={isVision ? { fillOpacity: [0.6, 1, 0.6], scale: [1, 1.01, 1] } : { fillOpacity: isDream ? 0.25 : 0.15 }} 
                            transition={isVision ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : { duration: 0.8 }}
                            fill={(isVision || isDream) ? `url(#h-grad-1-${s.id})` : "#E5D9B6"}
                            style={{ filter: isVision ? 'url(#h-glow-2)' : 'none', transformOrigin: `${centerX}px ${centerY}px` }}
                            d={getPointyArcPath(s.radius, 10, 80, isVision ? 12 : (isDream ? 4 : 1.2))}
                          />
                        </g>
                      );
                    })}
                    <g><circle cx={polarStarPoint.x} cy={polarStarPoint.y} r="3" fill="#E5D9B6" style={{ filter: 'drop-shadow(0 0 10px #E5D9B6)' }} /><text x={polarStarPoint.x} y={polarStarPoint.y - 45} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.5em] font-light italic opacity-50">North Star</text></g>
                  </svg>
                </div>
                <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-6"><div className="flex items-center gap-4"><Globe2 className="w-5 h-5 text-[#E5D9B6] fill-[#E5D9B6]/20" /><h2 className="text-3xl font-extralight tracking-[0.4em] uppercase text-white/90">Strategic Vision</h2></div><div className="h-[0.5px] w-20 bg-[#E5D9B6]/40" /></div>
                  <div className="space-y-8 text-[14px] leading-relaxed font-light tracking-[0.08em] text-white/85">
                    <p>Die <span className="text-[#E5D9B6] font-medium">Strategic Vision</span> ist die makroskopische Ebene des Arcvite-Systems. Hier synchronisieren wir Ihre interne biologische Leistungsfähigkeit mit den Kräften des Marktes.</p>
                    <p>Erfolg auf Executive-Niveau erfordert mehr als nur Energie; er erfordert die präzise Navigation in volatilen Ökosystemen. Wir stellen sicher, dass Ihre operative Exzellenz in einen langfristigen unfaireren Wettbewerbsvorteil mündet.</p>
                    <div className="bg-white/[0.03] border-l border-[#E5D9B6]/30 p-6 rounded-r-xl italic text-[#E5D9B6]/70 shadow-inner">"Ihre Biologie ist der Motor – Ihre Vision ist das Navigationssystem in einer komplexen Welt."</div>
                  </div>
                </div>
              </div>

              {/* MODEL 3: NEURO-BIOCHEMISTRY */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-20 mb-60 px-4">
                <div className="lg:col-span-7 flex items-center justify-start h-[550px]">
                  <svg viewBox="0 0 700 700" className="w-full h-full overflow-visible">
                    <defs>
                      <filter id="h-glow-3" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="12" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                      <marker id="arrow-h-3" markerWidth="20" markerHeight="12" refX="18" refY="6" orient="auto"><polygon points="0 0, 18 6, 0 12" fill="white" fillOpacity="0.4" /></marker>
                    </defs>
                    <g><circle cx={centerX} cy={centerY} r="12" fill="white" fillOpacity="0.05" /><circle cx={centerX} cy={centerY} r="4" fill="white" fillOpacity="0.8" /><text x={centerX} y={centerY + 45} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.4em] font-light italic opacity-50">YOU</text></g>
                    <g><line x1={arrowStart.x} y1={arrowStart.y} x2={arrowEnd.x} y2={arrowEnd.y} stroke="white" strokeWidth="0.5" strokeOpacity="0.25" markerEnd="url(#arrow-h-3)" /><text x={polarToCartesian(centerX, centerY, 600, 45).x + 12} y={polarToCartesian(centerX, centerY, 600, 45).y - 5} fill="white" fillOpacity="0.2" fontSize="9" letterSpacing="0.4em" className="uppercase italic font-extralight">Impact Flow</text></g>
                    {segments.map((s) => {
                      const isNeuro = s.id === 2;
                      const isOuter = s.id > 2;
                      return (
                        <g key={`h-arc-3-${s.id}`} style={{ pointerEvents: isNeuro ? 'auto' : 'none' }}>
                          <motion.path 
                            animate={isNeuro ? { fillOpacity: [0.6, 1, 0.6], scale: [1, 1.01, 1] } : { fillOpacity: isOuter ? 0.25 : 0.15 }} 
                            transition={isNeuro ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : { duration: 0.8 }}
                            fill={(isNeuro || isOuter) ? `url(#h-grad-1-${s.id})` : "#E5D9B6"}
                            style={{ filter: isNeuro ? 'url(#h-glow-3)' : 'none', transformOrigin: `${centerX}px ${centerY}px` }}
                            d={getPointyArcPath(s.radius, 10, 80, isNeuro ? 12 : (isOuter ? 4 : 1.2))}
                          />
                        </g>
                      );
                    })}
                    <g><circle cx={polarStarPoint.x} cy={polarStarPoint.y} r="3" fill="#E5D9B6" style={{ filter: 'drop-shadow(0 0 10px #E5D9B6)' }} /><text x={polarStarPoint.x} y={polarStarPoint.y - 45} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.5em] font-light italic opacity-50">North Star</text></g>
                  </svg>
                </div>
                <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-6"><div className="flex items-center gap-4"><Brain className="w-5 h-5 text-[#E5D9B6] fill-[#E5D9B6]/20" /><h2 className="text-3xl font-extralight tracking-[0.4em] uppercase text-white/90">Neuro-Biochemistry</h2></div><div className="h-[0.5px] w-20 bg-[#E5D9B6]/40" /></div>
                  <div className="space-y-8 text-[14px] leading-relaxed font-light tracking-[0.08em] text-white/85">
                    <p>Die <span className="text-[#E5D9B6] font-medium">Neuro-Biochemie</span> ist die Justierung Ihrer internen Regelkreise. Hier optimieren wir Botenstoffe und Hormonhaushalte für maximale neuronale Effizienz.</p>
                    <p>Wir nutzen präzise Labordaten, um Dopamin, Serotonin und Testosteron so zu kalibrierung, dass kognitive Durchsetzungskraft und mentale Resilienz zum Standard werden.</p>
                    <div className="bg-white/[0.03] border-l border-[#E5D9B6]/30 p-6 rounded-r-xl italic text-[#E5D9B6]/70 shadow-inner">"Datengetriebene Präzision für die Hardware Ihres Erfolgs."</div>
                  </div>
                </div>
              </div>

              {/* MODEL 4: CORE EFFECTS */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-20 mb-40 px-4">
                <div className="lg:col-span-7 flex items-center justify-start h-[550px]">
                  <svg viewBox="0 0 700 700" className="w-full h-full overflow-visible">
                    <defs>
                      <filter id="h-glow-4" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="12" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                      <marker id="arrow-h-4" markerWidth="20" markerHeight="12" refX="18" refY="6" orient="auto"><polygon points="0 0, 18 6, 0 12" fill="white" fillOpacity="0.4" /></marker>
                    </defs>
                    <g><circle cx={centerX} cy={centerY} r="12" fill="white" fillOpacity="0.05" /><circle cx={centerX} cy={centerY} r="4" fill="white" fillOpacity="0.8" /><text x={centerX} y={centerY + 45} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.4em] font-light italic opacity-50">YOU</text></g>
                    <g><line x1={arrowStart.x} y1={arrowStart.y} x2={arrowEnd.x} y2={arrowEnd.y} stroke="white" strokeWidth="0.5" strokeOpacity="0.25" markerEnd="url(#arrow-h-4)" /><text x={polarToCartesian(centerX, centerY, 600, 45).x + 12} y={polarToCartesian(centerX, centerY, 600, 45).y - 5} fill="white" fillOpacity="0.2" fontSize="9" letterSpacing="0.4em" className="uppercase italic font-extralight">Impact Flow</text></g>
                    {segments.map((s) => {
                      const isCore = s.id === 1;
                      const isOuter = s.id > 1;
                      return (
                        <g key={`h-arc-4-${s.id}`} style={{ pointerEvents: isCore ? 'auto' : 'none' }}>
                          <motion.path 
                            animate={isCore ? { fillOpacity: [0.6, 1, 0.6], scale: [1, 1.01, 1] } : { fillOpacity: isOuter ? 0.25 : 0.15 }} 
                            transition={isCore ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : { duration: 0.8 }}
                            fill={(isCore || isOuter) ? `url(#h-grad-1-${s.id})` : "#E5D9B6"}
                            style={{ filter: isCore ? 'url(#h-glow-4)' : 'none', transformOrigin: `${centerX}px ${centerY}px` }}
                            d={getPointyArcPath(s.radius, 10, 80, isCore ? 12 : (isOuter ? 4 : 1.2))}
                          />
                        </g>
                      );
                    })}
                    <g><circle cx={polarStarPoint.x} cy={polarStarPoint.y} r="3" fill="#E5D9B6" style={{ filter: 'drop-shadow(0 0 10px #E5D9B6)' }} /><text x={polarStarPoint.x} y={polarStarPoint.y - 45} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.5em] font-light italic opacity-50">North Star</text></g>
                  </svg>
                </div>
                <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-6"><div className="flex items-center gap-4"><Shapes className="w-5 h-5 text-[#E5D9B6] fill-[#E5D9B6]/20" /><h2 className="text-3xl font-extralight tracking-[0.4em] uppercase text-white/90">Core Effects</h2></div><div className="h-[0.5px] w-20 bg-[#E5D9B6]/40" /></div>
                  <div className="space-y-8 text-[14px] leading-relaxed font-light tracking-[0.08em] text-white/85">
                    <p>Die <span className="text-[#E5D9B6] font-medium">Core Effects</span> bilden das unantastbare Fundament Ihrer Performance. Hier synchronisieren wir Ernährung, Schlafarchitektur und Erholungsprozesse.</p>
                    <p>Ohne ein stabiles biologisches Fundament bleibt jede strategische Bemühung fragil. Wir bauen eine Struktur, die selbst extremen Belastungsphasen standhält.</p>
                    <div className="bg-white/[0.03] border-l border-[#E5D9B6]/30 p-6 rounded-r-xl italic text-[#E5D9B6]/70 shadow-inner">"Das Fundament bestimmt die maximale Höhe Ihres unternehmerischen Turms."</div>
                  </div>
                </div>
              </div>

              {/* SYSTEM CLOSING STATEMENT */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl text-center mt-20 mb-40 px-4"
              >
                <div className="w-12 h-[0.5px] bg-[#E5D9B6]/20 mx-auto mb-10" />
                <p className="text-[14px] md:text-[16px] leading-[1.8] font-light tracking-[0.15em] text-[#E5D9B6]/90 uppercase">
                  Arcvite ist ein geschlossenes System.
                </p>
                <p className="mt-6 text-[12px] md:text-[14px] leading-[1.8] font-light tracking-[0.1em] text-white/50 max-w-2xl mx-auto">
                  Um die Tiefe und Exzellenz unserer Betreuung zu garantieren, nehmen wir pro Quartal nur eine limitierte Anzahl an Neumandaten auf.
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* BIOMETRICS VIEW (UPDATED - STRATEGIC CONTEXT) */}
          {currentView === 'blutwerte' && (
            <motion.div key="biometrics-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex flex-col items-center py-12 px-6 overflow-hidden max-w-7xl">
              
              {/* Header Title */}
              <div className="text-center mb-16 relative z-20">
                <h1 className="text-3xl font-extralight tracking-[0.9em] uppercase text-white/90 mr-[-0.9em]">Biometrics</h1>
                <div className="h-[0.5px] w-24 bg-[#E5D9B6]/30 mx-auto mt-8" />
              </div>

              {/* 1. CORE STATEMENT */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                className="max-w-4xl text-center mb-24 space-y-8"
              >
                <h2 className="text-2xl md:text-3xl font-light tracking-[0.1em] text-[#E5D9B6] uppercase leading-snug">
                  "Daten sind wertlos ohne Kontext. <br className="hidden md:block"/>Wir verwandeln Rauschen in gerichtete Strategie."
                </h2>
                <p className="text-[14px] md:text-[16px] leading-[1.8] font-light tracking-[0.08em] text-white/60 max-w-3xl mx-auto">
                  Während herkömmliche Check-ups lediglich das Ausbleiben von Krankheit feststellen, definieren wir bei Arcvite den Status Ihrer biologischen Unantastbarkeit. Wir nutzen Goldstandard-Diagnostik, um Ihr System nicht nur zu verstehen, sondern zu kalibrieren.
                </p>
              </motion.div>

              {/* 2. SYNERGY OF PULSE AND PLASMA */}
              <div className="w-full mb-28">
                <div className="text-center mb-12">
                   <h3 className="text-lg uppercase tracking-[0.4em] text-white/80 font-extralight">The Synergy of Pulse and Plasma</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 relative">
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-[#E5D9B6]/20 to-transparent" />

                  {/* PULSE */}
                  <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl backdrop-blur-sm hover:bg-white/[0.04] transition-colors group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-full bg-[#E5D9B6]/10 text-[#E5D9B6]"><Watch className="w-5 h-5" /></div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#E5D9B6]/60">Wearables</span>
                    </div>
                    <h4 className="text-2xl font-light tracking-[0.2em] text-white/90 uppercase mb-4">The Pulse</h4>
                    <p className="text-[13px] leading-[1.8] font-light tracking-[0.05em] text-white/50 group-hover:text-white/70 transition-colors">
                      "Consumer-Wearables sind hervorragende Frühwarnsysteme für Belastung und Schlaf-Architektur. Sie liefern uns das tägliche Feedback Ihres Nervensystems."
                    </p>
                  </motion.div>

                  {/* PLASMA */}
                  <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl backdrop-blur-sm hover:bg-white/[0.04] transition-colors group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-full bg-[#E5D9B6]/10 text-[#E5D9B6]"><Microscope className="w-5 h-5" /></div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#E5D9B6]/60">Labordaten</span>
                    </div>
                    <h4 className="text-2xl font-light tracking-[0.2em] text-white/90 uppercase mb-4">The Plasma</h4>
                    <p className="text-[13px] leading-[1.8] font-light tracking-[0.05em] text-white/50 group-hover:text-white/70 transition-colors">
                      "Doch erst die tiefe molekulare Analyse durch unsere Partnerärzte liefert die 'Wahrheit im Blut'. Wir korrelieren Ihre Live-Daten mit klinischen Markern für hormonelle Balance, Entzündungsstatus und Langlebigkeit."
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* 3. THE 4 PILLARS */}
              <div className="w-full mb-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {bioPillars.map((pillar, idx) => (
                    <motion.div 
                      key={pillar.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + (idx * 0.1) }}
                      className="flex flex-col p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-2xl hover:border-[#E5D9B6]/20 transition-all duration-500 group"
                    >
                      <div className="mb-6 text-[#E5D9B6]/40 group-hover:text-[#E5D9B6] transition-colors duration-500">
                        {pillar.icon}
                      </div>
                      <h5 className="text-[11px] uppercase tracking-[0.2em] text-white/80 font-medium mb-4 h-8 flex items-center">{pillar.title}</h5>
                      <div className="w-8 h-[1px] bg-[#E5D9B6]/20 mb-4 group-hover:w-full transition-all duration-700" />
                      <p className="text-[11px] leading-[1.6] font-light tracking-[0.05em] text-white/50 group-hover:text-white/70 transition-colors">
                        {pillar.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 4. CONCIERGE FACTOR */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="w-full max-w-4xl bg-[#E5D9B6]/[0.02] border border-[#E5D9B6]/10 rounded-2xl p-8 text-center backdrop-blur-md relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E5D9B6]/40 to-transparent" />
                <div className="flex flex-col items-center gap-4">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[#E5D9B6] opacity-70">Der Concierge-Faktor</span>
                  <p className="text-[13px] md:text-[14px] leading-[1.8] font-light tracking-[0.08em] text-white/70 italic">
                    "Unsere Partner-Ärzte führen die Diagnostik diskret in Ihren Räumlichkeiten oder in unseren Partner-Praxen durch. Sie erhalten keine Excel-Tabelle, sondern ein exekutives Briefing mit klaren Handlungsprotokollen."
                  </p>
                </div>
              </motion.div>

            </motion.div>
          )}

          {/* THE ARC VIEW (Restored complete texts & visualizers) */}
          {currentView === 'methodik' && (
            <motion.div key="methodik-page" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.6 }} className="w-full flex flex-col items-center">
              <div className="text-center mb-16 w-full flex flex-col items-center px-4 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-extralight tracking-[0.8em] uppercase text-white/90 mr-[-0.8em]">Methodik</h1>
                <motion.div initial={{ width: 0 }} animate={{ width: "min(90%, 820px)" }} transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }} className="h-[1px] bg-[#E5D9B6]/10 mx-auto mt-8 mb-8" />
                
                {/* Reverted Old Text */}
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.6 }} transition={{ duration: 1.2, delay: 1 }} className="text-[11px] md:text-[13px] leading-relaxed font-light tracking-[0.15em] text-white/80 max-w-2xl mx-auto">
                  Das Bogenmodell veranschaulicht die Auswirkungen auf uns Menschen durch Außenfaktoren. Gleichzeitig zeigt es auf, welche Last auf unseren Schultern liegt und den Polarstern, der uns im Leben leitet.
                </motion.p>
              </div>
              
              <div className="relative w-full max-w-[1500px] grid grid-cols-1 lg:grid-cols-12 items-center px-12 gap-16 h-auto lg:h-[600px]">
                <div className="lg:col-span-6 flex items-center justify-start h-[550px] order-2 lg:order-1">
                  <svg viewBox="0 0 700 700" className="w-full h-full overflow-visible">
                    <defs>
                      {segments.map(s => (<linearGradient key={`grad-meth-${s.id}`} id={`grad-meth-${s.id}`} x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor: s.hex}} /><stop offset="50%" style={{stopColor: s.hex, filter: 'brightness(1.4)'}} /><stop offset="100%" style={{stopColor: s.hex}} /></linearGradient>))}
                      <linearGradient id="flow-energy-white" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="white" stopOpacity="0" /><stop offset="50%" stopColor="white" stopOpacity="1" /><stop offset="100%" stopColor="white" stopOpacity="0" /></linearGradient>
                      <marker id="arrow-to-center-bright" markerWidth="20" markerHeight="12" refX="18" refY="6" orient="auto"><polygon points="0 0, 18 6, 0 12" fill="white" /></marker>
                      <marker id="indicator-arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#E5D9B6" fillOpacity="0.4" /></marker>
                      <filter id="glow-model-meth"><feGaussianBlur stdDeviation="2.5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                    </defs>
                    <g>
                      <line x1={arrowStart.x} y1={arrowStart.y} x2={arrowEnd.x} y2={arrowEnd.y} stroke="white" strokeWidth="1.3" strokeOpacity="0.8" markerEnd="url(#arrow-to-center-bright)" />
                      <motion.line x1={arrowStart.x} y1={arrowStart.y} x2={arrowEnd.x} y2={arrowEnd.y} stroke="url(#flow-energy-white)" strokeWidth="4.5" strokeLinecap="round" initial={{ pathLength: 0.15, pathOffset: 0 }} animate={{ pathOffset: [-0.15, 1] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} style={{ filter: 'drop-shadow(0 0 5px white)' }} />
                      <text x={polarToCartesian(centerX, centerY, 600, 45).x + 12} y={polarToCartesian(centerX, centerY, 600, 45).y - 5} fill="white" fillOpacity="0.75" fontSize="10" letterSpacing="0.5em" className="uppercase italic font-extralight">Impact Flow</text>
                    </g>
                    <g className="cursor-pointer" onMouseEnter={() => setIsCenterHovered(true)} onMouseLeave={() => setIsCenterHovered(false)}>
                      <motion.circle cx={centerX} cy={centerY} animate={{ r: isCenterHovered ? 20 : 10, opacity: isCenterHovered ? 0.25 : 0.08 }} fill="white" />
                      <motion.circle cx={centerX} cy={centerY} animate={{ r: isCenterHovered ? 7 : 4, fill: isCenterHovered ? "#fff" : "rgba(255,255,255,0.7)" }} fill="white" />
                      <motion.line x1={centerX} y1={centerY + 55} x2={centerX} y2={centerY + 12} stroke="#E5D9B6" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.4" markerEnd="url(#indicator-arrowhead)" />
                      <text x={centerX} y={centerY + 75} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.4em] font-light italic" style={{ filter: 'drop-shadow(0 0 10px rgba(229, 217, 182, 0.3))' }}>YOU</text>
                    </g>
                    {segments.map((s) => {
                      const isActive = activeSegment?.id === s.id;
                      const isInactive = activeSegment !== null && !isActive;
                      const r = isActive ? s.radius + 12 : s.radius;
                      const t = isActive ? s.thickness * 1.6 : s.thickness;
                      return (<g key={s.id} className="cursor-pointer group" onMouseEnter={() => setActiveSegment(s)} onMouseLeave={() => setActiveSegment(null)}><path d={getPointyArcPath(s.radius, -5, 100, 110)} fill="transparent" className="pointer-events-auto" /><motion.path animate={{ d: getPointyArcPath(r, 10, 80, t), fillOpacity: isInactive ? 0.05 : 1 }} fill={`url(#grad-meth-${s.id})`} style={{ filter: isActive ? 'url(#glow-model-meth)' : 'none' }} transition={{ duration: 0.4 }} /></g>);
                    })}
                    <g>
                      <motion.line x1={polarStarPoint.x} y1={polarStarPoint.y - 75} x2={polarStarPoint.x} y2={polarStarPoint.y - 12} stroke="#E5D9B6" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.4" markerEnd="url(#indicator-arrowhead)" />
                      <motion.circle cx={polarStarPoint.x} cy={polarStarPoint.y} initial={{ r: 4, opacity: 0.4 }} animate={{ r: 14, opacity: 0 }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} fill="#E5D9B6" />
                      <circle cx={polarStarPoint.x} cy={polarStarPoint.y} r="3" fill="#E5D9B6" style={{ filter: 'drop-shadow(0 0 10px #E5D9B6)' }} />
                      <text x={polarStarPoint.x} y={polarStarPoint.y - 85} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.4em] font-light italic" style={{ filter: 'drop-shadow(0 0 10px rgba(229, 217, 182, 0.5))' }}>Polar Star</text>
                    </g>
                  </svg>
                </div>
                <div className="lg:col-span-6 relative h-[550px] flex flex-col justify-end order-1 lg:order-2 pb-10">
                  {segments.map((s) => {
                    const isActive = activeSegment?.id === s.id;
                    const isInactive = activeSegment !== null && !isActive;
                    const bottomPos = ((centerY - (centerY - s.radius)) / 600) * 100;
                    return (
                      <motion.div key={`info-meth-${s.id}`} className="absolute left-0 w-full cursor-pointer" style={{ bottom: `${bottomPos}%`, transform: 'translateY(50%)' }} onMouseEnter={() => setActiveSegment(s)} onMouseLeave={() => setActiveSegment(null)}>
                        <div className="flex items-center gap-10 group">
                          <div className="relative flex items-center"><motion.div animate={{ scale: isActive ? 1.4 : 1, backgroundColor: isActive ? s.hex : '#222' }} className="w-1.5 h-1.5 rounded-full z-10 shadow-2xl" /><motion.div animate={{ width: isActive ? 60 : 20, opacity: isInactive ? 0.05 : 0.2, backgroundColor: s.hex }} className="h-[0.5px] absolute left-0 origin-left" /></div>
                          <motion.div animate={{ opacity: isInactive ? 0.1 : 1, x: isActive ? 12 : 0 }}><p style={{ color: isActive ? s.hex : 'rgba(255,255,255,0.08)' }} className="text-[7.5px] uppercase tracking-[0.6em] mb-1 transition-colors font-medium">{s.subtitle}</p><h3 style={{ color: isActive ? s.hex : 'rgba(255,255,255,0.25)' }} className="text-base md:text-lg font-extralight tracking-[0.45em] transition-all uppercase leading-none">{s.title}</h3></motion.div>
                        </div>
                        <AnimatePresence>{isActive && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-4 pl-[97px] max-w-sm overflow-hidden">{s.listItems ? (<div className="space-y-3.5 border-l border-white/5 pl-6">{s.listItems.map((item, idx) => (<div key={idx}><div className="flex items-center gap-2 mb-1"><div style={{ backgroundColor: s.hex }} className="w-0.5 h-0.5 rounded-full opacity-60" /><span className="text-[8.5px] uppercase tracking-[0.25em] font-bold" style={{ color: s.hex }}>{item.label}</span></div><p className="text-[9.5px] text-white/50 font-light leading-relaxed tracking-wider">{item.text}</p></div>))}</div>) : (<p className="text-[10px] text-white/40 font-light leading-relaxed border-l border-white/5 pl-6 tracking-wide">{s.description}</p>)}</motion.div>)}</AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* New Text Section Under the Model */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl text-center mt-20 mb-10 px-6"
              >
                <div className="w-12 h-[0.5px] bg-[#E5D9B6]/20 mx-auto mb-10" />
                <p className="text-[14px] md:text-[16px] leading-relaxed font-normal tracking-[0.1em] text-[#E5D9B6] text-center mb-6">
                  "Arcvite sorgt dafür, dass Ihre Biologie Ihr größter Antrieb bleibt."
                </p>
                <p className="text-[12px] md:text-[14px] leading-relaxed font-light tracking-[0.08em] text-white/70 max-w-2xl mx-auto">
                  Wir schauen uns nicht nur an, ob Sie gesund sind. Wir sorgen dafür, dass Sie jeden Tag die Energie, den Fokus und die Belastbarkeit haben, die Ihr Job verlangt. Wir messen, wir steuern, und wir liefern Ihnen ein klares Protokoll. Alles basierend auf Ihren Daten.
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* STRATEGIES VIEW */}
          {currentView === 'protokolle' && (
            <motion.div key="protokolle-page" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.6 }} className="w-full max-w-[1400px] flex flex-col items-center">
              <div className="text-center mb-24 relative">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#E5D9B6]/10 bg-[#E5D9B6]/5 mb-8">
                  <ClipboardList className="w-3 h-3 text-[#E5D9B6]" />
                  <span className="text-[9px] uppercase tracking-[0.6em] text-[#E5D9B6] mr-[-0.6em]">Operative Standards</span>
                </motion.div>
                <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.9em] uppercase text-white/90 mr-[-0.9em]">System-Protokolle</h1>
                <div className="h-[0.5px] w-40 bg-[#E5D9B6]/20 mx-auto mt-10" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full px-4">
                {protocols.map((protocol) => (
                  <motion.div key={protocol.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: protocol.id * 0.2 }} className="relative group flex flex-col bg-white/[0.04] border border-white/10 rounded-[3rem] p-10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 shadow-2xl overflow-hidden backdrop-blur-md">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5D9B6]/5 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#E5D9B6]/10 transition-all duration-700" />
                    <div className="mb-12 relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] uppercase tracking-[0.6em] text-[#E5D9B6]/60 font-medium">{protocol.subtitle}</span>
                        <div className="p-2 rounded-full border border-white/10 text-[#E5D9B6]/40 group-hover:text-[#E5D9B6] transition-colors">{protocol.id === 1 ? <Target className="w-4 h-4" /> : protocol.id === 2 ? <Zap className="w-4 h-4" /> : <Award className="w-4 h-4" />}</div>
                      </div>
                      <h2 className="text-2xl font-extralight tracking-[0.4em] uppercase text-white/90">{protocol.title}</h2>
                      {protocol.includes && (<div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5D9B6]/5 border border-[#E5D9B6]/10"><CheckCircle2 className="w-2.5 h-2.5 text-[#E5D9B6]/60" /><span className="text-[8px] uppercase tracking-[0.2em] text-[#E5D9B6]/80">{protocol.includes}</span></div>)}
                    </div>
                    <div className="space-y-8 relative z-10 flex-grow">
                      {protocol.services.map((service, idx) => (
                        <div key={idx} className="flex gap-5 group/item">
                          <div className="mt-1 p-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[#E5D9B6]/40 group-hover/item:text-[#E5D9B6] group-hover/item:border-[#E5D9B6]/20 transition-all">{service.icon}</div>
                          <div><h3 className="text-[11px] uppercase tracking-[0.25em] text-white/80 group-hover/item:text-[#E5D9B6] transition-colors mb-1">{service.label}</h3><p className="text-[10px] font-light text-white/30 tracking-wider leading-relaxed">{service.desc}</p></div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="max-w-4xl text-center mt-24 mb-10 px-6"
              >
                <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent via-[#E5D9B6]/20 to-transparent mb-10" />
                <p className="text-[16px] md:text-[20px] leading-[1.8] font-light tracking-[0.05em] text-white/80">
                  <span className="text-[#E5D9B6]">Hinter jedem Protokoll</span> steht die gebündelte Expertise unserer medizinischen und technologischen Partner. 
                  <br className="hidden md:block" />
                  Bei Arcvite gibt es kein Junior-Personal. Jedes Mandat wird von mir persönlich gesteuert, um die höchste Präzision im Strategic Arc zu garantieren.
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* INSIGHTS VIEW */}
          {currentView === 'insights' && (
            <motion.div key="insights-page" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.6 }} className="w-full max-w-5xl flex flex-col items-center pt-20 px-8 min-h-[80vh]">
              <div className="text-center mb-32 w-full flex flex-col items-center"><h1 className="text-4xl md:text-5xl font-extralight tracking-[0.9em] uppercase text-white/80 mr-[-0.9em]">Insights</h1><div className="h-[1px] w-[800px] max-w-[90%] bg-[#E5D9B6]/10 mx-auto mt-10" /></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start w-full">
                <div className="space-y-16">
                  <div><h2 className="text-2xl font-light tracking-[0.35em] text-[#E5D9B6]/70 leading-relaxed mb-10 uppercase">Exklusive Briefings & <br/><span className="text-white/30">Performance Blueprints</span></h2><div className="space-y-8 text-[13px] text-white/30 leading-relaxed font-light tracking-[0.15em] border-l border-white/5 pl-10"><p>Analysen zur psychologischen Architektur für Top-Entscheider.</p></div></div>
                  <div className="grid grid-cols-3 gap-6 pt-4">
                    {[{ label: "Briefings", icon: <FileText className="w-5 h-5" /> }, { label: "Mastery", icon: <Play className="w-5 h-5" /> }, { label: "Strategy", icon: <BookOpen className="w-5 h-5" /> }].map((item, idx) => (<div key={idx} className="flex flex-col items-center gap-5 p-6 bg-white/[0.04] border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-1000 cursor-pointer group shadow-xl"><div className="text-white/10 group-hover:text-[#E5D9B6]/40 transition-colors">{item.icon}</div><span className="text-[7.5px] uppercase tracking-[0.4em] text-white/20 group-hover:text-white/40 transition-colors text-center font-medium">{item.label}</span></div>))}</div>
                </div>
                <div className="relative group cursor-pointer aspect-[4/5] rounded-[4rem] overflow-hidden bg-black/40 border border-white/10 flex flex-col items-center justify-center shadow-2xl"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#E5D9B605_0%,transparent_70%)] group-hover:opacity-150 transition-opacity duration-1000" /><div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.04] backdrop-blur-2xl mb-12 group-hover:scale-110 group-hover:border-[#E5D9B6]/20 transition-all duration-1000 shadow-2xl"><Play className="w-6 h-6 text-white/10 group-hover:text-[#E5D9B6]/40 ml-1" /></div><span className="text-[9px] uppercase tracking-[0.8em] text-white/20 mb-3 font-extralight">Featured</span><span className="text-[7.5px] uppercase tracking-[0.5em] text-white/10 italic font-extralight">Protocol v2.4</span></div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* CONTACT SECTION */}
        <section id="contact" className="relative z-10 w-full max-w-xl mt-40 mb-20 px-4">
          <div className="bg-black/30 border border-white/10 backdrop-blur-3xl rounded-[3rem] p-12 md:p-14 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5D9B6]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="mb-12 text-center">
              <h3 className="text-xl font-light tracking-[0.7em] mb-4 uppercase text-white/60">Kontakt <span className="font-bold text-white/80">Aufnahme</span></h3>
              <p className="text-[7.5px] uppercase tracking-[0.8em] text-white/10 italic">Initialize transformation protocol</p>
            </div>
            {formStatus === 'success' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center py-10">
                <div className="w-14 h-14 rounded-full bg-[#285430]/10 flex items-center justify-center mb-6 border border-[#285430]/20">
                  <CheckCircle2 className="w-6 h-6 text-[#E5D9B6]/50" />
                </div>
                <h4 className="text-base font-light tracking-[0.5em] text-[#E5D9B6]/70 mb-2 uppercase">Übermittelt</h4>
                <button onClick={() => setFormStatus('idle')} className="mt-10 text-[8px] uppercase tracking-[0.5em] text-white/20 border-b border-white/5 pb-1">Reset</button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input required placeholder="Vorname*" className="w-full bg-transparent border-b border-white/10 px-2 py-3 text-[13px] focus:border-[#E5D9B6]/30 transition-all outline-none font-light tracking-widest text-white/60" />
                  <input required placeholder="Nachname*" className="w-full bg-transparent border-b border-white/10 px-2 py-3 text-[13px] focus:border-[#E5D9B6]/30 transition-all outline-none font-light tracking-widest text-white/60" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input required type="email" placeholder="E-Mail*" className="w-full bg-transparent border-b border-white/10 px-2 py-3 text-[13px] focus:border-[#E5D9B6]/30 transition-all outline-none font-light tracking-widest text-white/60" />
                  <input required type="tel" placeholder="Telefonnummer*" className="w-full bg-transparent border-b border-white/10 px-2 py-3 text-[13px] focus:border-[#E5D9B6]/30 transition-all outline-none font-light tracking-widest text-white/60" />
                </div>
                
                <div className="relative">
                  <button 
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-transparent border-b border-white/10 px-2 py-3 text-[13px] text-left flex justify-between items-center font-light tracking-widest text-white/60"
                  >
                    <span>{selectedGoals.length > 0 ? selectedGoals.join(", ") : "Ziel*"}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-[120] left-0 right-0 mt-1 bg-[#181A1B] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                      >
                        {goalOptions.map(option => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleGoal(option)}
                            className="w-full px-4 py-3 text-[12px] text-left hover:bg-white/[0.05] transition-colors flex justify-between items-center font-light tracking-wider"
                          >
                            {option}
                            {selectedGoals.includes(option) && <Check className="w-3 h-3 text-[#E5D9B6]" />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button type="submit" className="w-full bg-white text-black py-4 rounded-xl font-bold tracking-[0.8em] text-[9px] uppercase hover:bg-[#E5D9B6] transition-all flex items-center justify-center gap-4 mt-8 shadow-xl">
                  {formStatus === 'submitting' ? 'PROCESSING' : 'START PROTOCOL'}<Send className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>
          <div className="text-center mt-10 max-w-lg mx-auto">
            <p className="text-[10px] md:text-[11px] leading-relaxed font-light tracking-[0.08em] text-white/40 italic">
              * Aufgrund der intensiven Betreuung unserer Klienten ist die Aufnahme neuer Mandate limitiert. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>
        </section>

        {/* PARTNER LIST */}
        <section className="w-full max-w-6xl mt-10 mb-20 px-4">
          <div className="text-center mb-10">
            <p className="text-[9px] uppercase tracking-[0.7em] text-[#E5D9B6]/30 mb-2 mr-[-0.7em]">Strategische Kooperationen</p>
            <div className="h-[0.5px] w-12 bg-[#E5D9B6]/10 mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-20 grayscale hover:opacity-40 transition-all duration-1000">
            {partners.map((partner, idx) => (
              <motion.span 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-[10px] uppercase tracking-[0.4em] font-light text-white/80 whitespace-nowrap hover:text-[#E5D9B6] transition-colors cursor-default"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </section>

        <footer className="relative z-10 w-full max-w-[1600px] px-12 flex justify-between items-end opacity-20 pointer-events-none text-[6px] uppercase tracking-[2em] pb-16">
          <div className="[writing-mode:vertical-lr] rotate-180 font-extralight text-white/40">Precision Performance</div>
          <div className="font-extralight text-white/40">© 2026 Arcvite Systems Global</div>
        </footer>
      </main>

      <style>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #1C1C1E; }
        ::-webkit-scrollbar-thumb { background: rgba(229, 217, 182, 0.2); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(229, 217, 182, 0.4); }
        input:focus, textarea:focus { box-shadow: none; }
        .backdrop-blur-2xl { backdrop-filter: blur(40px); }
        .backdrop-blur-3xl { backdrop-filter: blur(80px); }
        .titanium-master-bg {
          background: linear-gradient(135deg, #3A3D40 0%, #181A1B 100%);
          position: fixed;
          inset: 0;
        }
        .titanium-master-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 20%, rgba(229, 217, 182, 0.05) 0%, transparent 50%);
        }
        .titanium-master-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%);
        }
      `}</style>
    </div>
  );
};

export default App;