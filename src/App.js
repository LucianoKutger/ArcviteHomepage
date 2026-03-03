import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, Brain, Menu, X, ArrowUpRight, Infinity, Send, Shield } from 'lucide-react';

//components
import BentoCard from './components/cards/BentoCard';
import ExpandableCard from './components/cards/ExpandableCards';
import SolutionCard from './components/cards/SolutionCard';
import ArcviteLogo from './components/ui/ArcviteLogo';
import FormInput from './components/ui/FormInput';
import HeroFlowLines from './components/visuals/HeroFlowLines';
import MethodologySystem from './components/visuals/MethodologySystem';
import BiometricSlider from './components/dashboards/BiometricSlider';
import SolutionModal from './components/ui/SolutionModal'
import FAQItem from './components/cards/Faq';


//Data
import { navItems, solutions, goalOptions, dashboardData, syncCardsData,faqs } from './data/content';


//styles
import methodologyStyles from './css/MethodologySection.module.css'
import styles from './App.module.css'
import homeStyles from './css/Home.module.css'
import biometricsStyles from './css/Biometrics.module.css'
import bioSyncStyles from './css/BioSync.module.css'
import visionStyles from './css/VisionSection.module.css'
import navBarStyles from './css/NavBar.module.css'
import protocolsSectionStyles from './css/ProtocolsSection.module.css'
import auditStyles from './css/Audit.module.css'



const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [activeDashTab, setActiveDashTab] = useState(0);
  const [selectedSolution, setSelectedSolution] = useState(null); // STATE FOR MODAL
  const [activeCard, setActiveCard] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    scrollToSection('home');
  };

  const toggleGoal = (value) => {
    if (selectedGoals.includes(value)) {
      setSelectedGoals(selectedGoals.filter(g => g !== value));
    } else {
      setSelectedGoals([...selectedGoals, value]);
    }
  };



  return (
    <div className={styles.landingPageWrapper}>
      
      <div className={styles.lpNoiseContainer}>
        <div className={styles.lpNoiseOverlay} />
      </div>

      <nav id="nav" className={`${navBarStyles.lpNavbar} ${isScrolled ? navBarStyles.scrolled : ''}`}>
        <div className={navBarStyles.lpNavInner}>
          <div className={navBarStyles.lpLogoWrap} onClick={() => {}}>
            <ArcviteLogo />
          </div>
          <div className={navBarStyles.lpNavLinks}>
            {navItems.map((item) => (
              <button 
                key={item.label} 
                onClick={() => scrollToSection(item.targetId)}
                className={navBarStyles.lpNavBtn}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className={navBarStyles.lpNavActions}>
            <button 
                onClick={() => scrollToSection('audit')}
                className={navBarStyles.lpHeaderAuditBtn}
            >
              <span className={navBarStyles.auditContent}>
                Privates Audit sichern <ChevronRight className={navBarStyles.auditIcon} />
              </span>
            </button>
          </div>
          <button 
            className={navBarStyles.lpMobileMenuToggle} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section id="home" className={homeStyles.lpHeroSection}>
        
        <div className={homeStyles.lpHeroBg}>
            <HeroFlowLines />
            
            <div className={homeStyles.lpGradientX} />
            <div className={homeStyles.lpGradientY} />
        </div>

        <div className={homeStyles.lpHeroContainer}>
          <motion.div 
            style={{ opacity: heroOpacity, y: heroY }} 
            className={homeStyles.lpHeroGrid}
          >
            <div className={homeStyles.lpHeroTextCol}>
              <h1 className={homeStyles.lpHeroH1}>
                <span className={homeStyles.heroGradientText}>
                  Ihr Körper soll nicht das Limit Ihrer Ambitionen sein
                </span>
              </h1>
              
              <p className={homeStyles.lpHeroP}>
                Wir sind Ihr externes Betriebssystem für maximale Biologische Belastbarkeit. Aus komplexen medizinischen Daten schmieden wir Ihren präzisen Handlungsplan. Performance ohne Kompromisse.
              </p>
            </div>

            <div className={homeStyles.lpHeroCtaCol}>
                  <button 
                      onClick={() => scrollToSection('audit')}
                      className={homeStyles.lpCtaWrapperBtn}
                  >
                    <div className={homeStyles.lpCtaInner}>
                        <span className={homeStyles.lpHeroBtnText}>Privates Audit sichern</span>
                        <div className={homeStyles.lpCtaIconBox}>
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                  </button>
                  <p className={homeStyles.lpCapacityNote}>
                    * Kapazität auf 4 Neuzugänge pro Monat begrenzt, um maximale Betreuungsqualität zu garantieren.
                  </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="methodik" className={methodologyStyles.section}>
        <div className={methodologyStyles.backgroundEffect}>
            <div className={methodologyStyles.glowBlob} />
        </div>

        <div className={methodologyStyles.contentWrapper}>
      
          <div className={methodologyStyles.flexContainer}>
            
       
            <div className={methodologyStyles.textColumn}>
              <h2 className={methodologyStyles.headline}>
                The Arc System <br />
                <span className={methodologyStyles.subHeadline}>The Excellence Standard</span>
              </h2>
              <p className={methodologyStyles.description}>
                Das Arc-System ist die technische Infrastruktur für Ihre Biologie. Wir betrachten Biologie als Ingenieurskunst. Wo herkömmliche Ansätze auf Intuition setzen, nutzen wir präzise medizinische Analytik für maximale Belastbarkeit.
              </p>
            </div>
            
         
            <div className={methodologyStyles.componentWrapper}>
               <MethodologySystem />
            </div>
            
          </div>
        </div>
      </section>

      <section id="biometrics" className={biometricsStyles.biometricsSection}>
        <div className={biometricsStyles.biometricsHeader}>
          <h2 className={biometricsStyles.biometricsTitle}>Präzision statt Vermutung</h2>
          <p className={biometricsStyles.biometricsDescription}>
            Wir verwandeln Rauschen in Strategie. Ihre Daten werden nicht nur gesammelt, sondern in einen operativen Kontext gesetzt.
          </p>
        </div>
        
        <BentoCard 
          title="Biometric Dashboard" 
          subtitle="Echtzeit-Analyse & Zielwert-Projektion." 
          className={biometricsStyles.bentoCardCustom}
        >
          <div className={biometricsStyles.tabsContainer}>
            {dashboardData.map((tab, idx) => (
              <button 
                key={tab.id} 
                onClick={() => setActiveDashTab(idx)} 
                className={`${biometricsStyles.tabButton} ${activeDashTab === idx ? biometricsStyles.tabButtonActive : biometricsStyles.tabButtonInactive}`}
              >
                {tab.icon}{tab.category}
              </button>
            ))}
          </div>
          
          <div className={biometricsStyles.dashboardPanel}>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeDashTab} 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -20 }} 
                  transition={{ duration: 0.3 }} 
                  className={biometricsStyles.dashboardGrid}
                >
                  {dashboardData[activeDashTab].metrics.map((metric, i) => ( 
                    <BiometricSlider key={metric.label} {...metric} delay={i * 0.15} /> 
                  ))}
                </motion.div>
              </AnimatePresence>
              <div 
                className={biometricsStyles.dashboardOverlay} 
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100% 40px' }} 
              />
          </div>
        </BentoCard>
      </section>

      <section id="biosync" className={bioSyncStyles.syncSection}>
        <div className={bioSyncStyles.syncContainer}>
          <div className={bioSyncStyles.syncHeader}>
            <h2 className={bioSyncStyles.syncTitle}>
              Biometrische Synchronisierung
            </h2>
            <p className={bioSyncStyles.syncSubtitle}>
              Nahtlose Hardware & Labor Schnittstellen
            </p>
          </div>

          <div className={bioSyncStyles.syncGrid}>
            {syncCardsData.map((card) => (
              <ExpandableCard
                key={card.id}
                title={card.title}
                category={card.category}
                focusTitle={card.focusTitle}
                focusDesc={card.focusDesc}
                imageLabel={card.imageLabel}
                details={card.details}
                className={card.className} /* Hier kommen aktuell noch Tailwind-Klassen aus dem Array an! */
                imageSrc={card.imageSrc} 
                isOpen={activeCard === card.id}
                onToggle={() => setActiveCard(activeCard === card.id ? null : card.id)}
              />
            ))}
          </div>
        </div>
      </section>

    <section id="protokolle" className={protocolsSectionStyles.section}>
        <div className={protocolsSectionStyles.container}>
          <div className={protocolsSectionStyles.headerContainer}>
            <h2 className={protocolsSectionStyles.title}>The Arcvite <br/> Full-Spectrum Solution</h2>
            <p className={protocolsSectionStyles.subtitle}>
              Solving the complexity of human high-performance
            </p>
          </div>

          <div className={protocolsSectionStyles.contentBox}>
            <div className={protocolsSectionStyles.gradientBackground} />
            
            <div className={protocolsSectionStyles.grid}>
                {solutions.map((item, idx) => (
                  <SolutionCard key={item.id} item={item} onOpen={setSelectedSolution} imgSrc={item.imgSrc} />
                ))}
            </div>

            <div className={protocolsSectionStyles.bottomSection}>
                <p className={protocolsSectionStyles.quote}>
                  Wir eliminieren das Rätselraten und ersetzen es durch ein technisches Protokoll, das Ihre Performance absichert.
                </p>
                
                <div className={protocolsSectionStyles.buttonWrapper}>
                    <button 
                        onClick={() => scrollToSection('audit')}
                        className={protocolsSectionStyles.ctaButton}
                    >
                        <span className={protocolsSectionStyles.buttonContent}>
                            Jetzt Privates Audit sichern <ChevronRight className={protocolsSectionStyles.chevronIcon} />
                        </span>
                    </button>
                    <p className={protocolsSectionStyles.disclaimer}>
                        * 15-minütiges Fachgespräch auf Augenhöhe - keine Verkaufsveranstaltung.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className={visionStyles.section}>
        <div className={visionStyles.backgroundWrapper}>
          <div className={visionStyles.glowEffect} />
        </div>

        <div className={visionStyles.container}>
          <h2 className={visionStyles.heading}>
            The New Standard of Leadership
          </h2>
          
          <div className={visionStyles.textContent}>
              <p>
                <strong className={visionStyles.strongText}>Ein Unternehmen ist nur so belastbar wie seine Führungsebene.</strong> Doch während jede Kennzahl im Business akribisch optimiert wird, bleibt die wichtigste Komponente – die menschliche Biologie – oft dem Zufall überlassen.
              </p>
              <p>
                Arcvite wurde gegründet, um diese Lücke zu schließen.
              </p>
              <p>
                Wir verstehen Gesundheit nicht als Lifestyle-Attribut, sondern als Hochleistungs-Struktur. Basierend auf unserem proprietären Bogenmodell (dem Arc-System) bauen wir ein Fundament, das weit über herkömmliches Coaching hinausgeht. Wir synchronisieren präzise Labordaten, Wearable live data und diskretes Management zu einer makellosen Symbiose.
              </p>
              <p>
                Unser Ziel ist es, dass Sie nicht trotz, sondern wegen Ihrer physischen und mentalen Verfassung an der Spitze stehen – mit absoluter Klarheit, unerschöpflicher Energie und der Sicherheit, dass Ihre Biologie Ihr Ambitionslevel nicht nur hält, sondern übertrifft.
              </p>
          </div>
          
          <div className={visionStyles.featuresGrid}>
              {[
                { title: "Lifespan", desc: "Verlängerung der gesundheitlichen Spannweite durch präventive Medizin.", icon: <Infinity className="w-5 h-5 text-[#E5D9B6]" /> },
                { title: "Resilience", desc: "Aufbau eines Immunsystems, das unter hohem Druck nicht einknickt.", icon: <Shield className="w-5 h-5 text-[#E5D9B6]" /> },
                { title: "Clarity", desc: "Dauerhafter kognitives Fokus - ohne Abhängigkeit von Stimulanzien.", icon: <Brain className="w-5 h-5 text-[#E5D9B6]" /> },
              ].map((item, i) => (
                <div key={i} className={visionStyles.featureItem}>
                  <div className={visionStyles.iconWrapper}>
                      {item.icon}
                  </div>
                  <div>
                    <h3 className={visionStyles.featureTitle}>{item.title}</h3>
                    <p className={visionStyles.featureDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
          
            <div className={visionStyles.faqSection}>
              <h3 className={visionStyles.faqHeading}>Frequently Asked Questions</h3>
              <p className={visionStyles.faqSubheading}>Transparenz vor der Implementierung.</p>
              <div className={visionStyles.faqContainer}>
                  {faqs.map((faq, i) => (
                      <FAQItem 
                          key={i} 
                          question={faq.question} 
                          answer={faq.answer} 
                          isOpen={openFaqIndex === i} 
                          onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} 
                      />
                  ))}
              </div>
           </div>
        </div>
        
        <div className={visionStyles.buttonWrapper}>
            <button 
                onClick={() => scrollToSection('audit')}
                className={visionStyles.ctaButton}
            >
                <span className={visionStyles.buttonContent}>
                    Jetzt Privates Audit sichern <ChevronRight className={visionStyles.chevronIcon} />
                </span>
            </button>
        </div>
      </section>

      <footer id="audit" className={auditStyles.footer}>
        <div className={auditStyles.container}>
          <div className={auditStyles.auditCard}>
            <div className={auditStyles.header}>
              <h2 className={auditStyles.title}>
                <span className={auditStyles.titleLight}>Audit</span> <span className={auditStyles.titleBold}>Application</span>
              </h2>
            </div>

            <form className={auditStyles.form}>
              <div className={auditStyles.inputGrid}>
                  <FormInput label="Vorname*" placeholder="John" />
                  <FormInput label="Nachname*" placeholder="Doe" />
              </div>
              
              <div className={auditStyles.inputGrid}>
                  <FormInput label="E-Mail*" type="email" placeholder="john@company.com" />
                  <FormInput label="Telefonnummer*" type="tel" placeholder="+49 123 45678" />
              </div>

              <div className={auditStyles.goalsSection}>
                  <label className={auditStyles.goalsLabel}>Ziele* (Mehrfachauswahl möglich)</label>
                  <div className={auditStyles.goalsContainer}>
                    {goalOptions.map((goal) => (
                        <button
                          key={goal.value}
                          type="button"
                          onClick={() => toggleGoal(goal.value)}
                          className={`${auditStyles.goalButton} ${selectedGoals.includes(goal.value) ? auditStyles.goalActive : auditStyles.goalInactive}`}
                        >
                          {goal.label}
                        </button>
                    ))}
                  </div>
              </div>

              <button type="submit" className={auditStyles.submitButton}>
                  Verfügbarkeit anfragen
                  <Send className={auditStyles.sendIcon} />
              </button>

              <p className={auditStyles.disclaimer}>
                * Um Tiefe und Exzellenz unserer Betreuung zu garantieren, nehmen wir pro Quartal nur eine limitierte Anzahl an Neumandaten auf. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </form>
          </div>

          <div className={auditStyles.bottomFooter}>
            <div className={auditStyles.logoContainer}>
              <div className={auditStyles.logoWrapper} onClick={handleLogoClick}>
                  <ArcviteLogo />
              </div>
            </div>
            <div className={auditStyles.linksContainer}>
              <a href="#" className={auditStyles.footerLink}>Impressum</a>
              <a href="#" className={auditStyles.footerLink}>Datenschutz</a>
              <a href="#" className={auditStyles.footerLink}>Twitter</a>
            </div>
            <p className={auditStyles.copyright}>© 2026 Arcvite</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedSolution && (
            <SolutionModal item={selectedSolution} onClose={() => setSelectedSolution(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;