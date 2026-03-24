import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, Brain, ArrowUpRight, Infinity, Send, Shield } from 'lucide-react';

import ExpandableCard from './components/cards/ExpandableCards';
import SolutionCard from './components/cards/SolutionCard';
import ArcviteLogo from './components/ui/ArcviteLogo';
import FormInput from './components/ui/FormInput';
import HeroFlowLines from './components/visuals/HeroFlowLines';
import MethodologySystem from './components/visuals/MethodologySystem';
import SolutionModal from './components/ui/SolutionModal'
import FAQItem from './components/cards/Faq';
import FadeOutSection from './components/visuals/FadeoutSection';

import { solutions, goalOptions, syncCardsData, faqs } from './data/content';

import methodologyStyles from './css/MethodologySection.module.css';
import homeStyles from './css/Home.module.css';
import bioSyncStyles from './css/BioSync.module.css';
import visionStyles from './css/VisionSection.module.css';
import protocolsSectionStyles from './css/ProtocolsSection.module.css';
import auditStyles from './css/Audit.module.css';
import founderStyles from './css/Founder.module.css';
import faqStyles from './css/Faq.module.css';

const Home = () => {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);


  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  
  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleGoal = (value) => {
    if (selectedGoals.includes(value)) {
      setSelectedGoals(selectedGoals.filter(g => g !== value));
    } else {
      setSelectedGoals([...selectedGoals, value]);
    }
  };

  return (
    <main>
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
      
      <FadeOutSection id="vision" className={visionStyles.section}>
        <div className={visionStyles.backgroundWrapper}>
          <div className={visionStyles.glowEffect} />
        </div>

        <div className={visionStyles.container}>
          <h2 className={visionStyles.heading}>
            The New Standard of Leadership
          </h2>
          
          <div className={visionStyles.textContent}>
            <p>
              <strong className={visionStyles.strongText}>Ein Unternehmen ist nur so belastbar wie seine Führungsebene.</strong> 
            </p>
            <p>
              Doch während jede Kennzahl im Business akribisch optimiert wird, 
              bleibt die wichtigste Komponente, die menschliche Biologie, 
              oft dem Zufall überlassen.
            </p>
            <p>
              <strong className={visionStyles.strongText}>Die Konsequenz?</strong>
            </p>
            <p>
              Ein unsichtbares Limit. Trotz eiserner Disziplin wird der eigene Körper zum Flaschenhals für das nächste Wachstumslevel. 
              <strong className={visionStyles.strongText}>Brain Fog</strong> bei kritischen Entscheidungen,
              der unweigerliche <strong className={visionStyles.strongText}>Energie-Crash am Nachmittag</strong>
              und das schleichende Gefühl, dass der geschäftliche Erfolg mit der <strong className={visionStyles.strongText}>eigenen Substanz</strong> bezahlt wird.
            </p>
            <p>
              <strong className={visionStyles.strongText}>Arcvite wurde gegründet, um diese Lücke zu schließen.</strong>
            </p>
            <p>
              Wir verstehen Gesundheit nicht als Lifestyle-Attribut, sondern als Hochleistungs-Struktur. Basierend auf unserem proprietären Bogenmodell (dem Arc-System) bauen wir ein Fundament, das weit über herkömmliches Coaching hinausgeht.
            </p>
            <p>
              <strong className={visionStyles.strongText}>Unser Ziel</strong>
            </p>
            <p>
              Sie stehen nicht trotz, sondern wegen Ihrer physischen und mentalen Verfassung an der Spitze.
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
                </div>
                <div>
                  <p className={visionStyles.featureDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeOutSection>

      <FadeOutSection id="methodik" className={methodologyStyles.section}>
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
      </FadeOutSection>

      <FadeOutSection id="founder" className={founderStyles.section}>
        <div className={founderStyles.gridContainer}>
          
          {/* Text Content (Left Side) */}
          <div className={founderStyles.textContent}>
            <div className={founderStyles.labelContainer}>
              <div className={founderStyles.labelLine}></div>
              <span className={founderStyles.labelText}>Our Founder</span>
            </div>

            <h2 className={founderStyles.heading}>
              "IF YOU THINK BIG,<br />
              <span className={founderStyles.headingFaded}>TRY THINKING BIGGER."</span>
            </h2>

            <div className={founderStyles.quoteBlock}>
              <p className={founderStyles.quoteText}>
                "Alle Schwäche ist Willensschwäche."
              </p>
              <p className={founderStyles.quoteAuthor}>
                — Friedrich Nietzsche
              </p>
            </div>

            <div className={founderStyles.quoteBlockLast}>
              <p className={founderStyles.quoteText}>
                "Arcvite ist die Architektur, die dort übernimmt, wo der menschliche Wille versagt."
              </p>
              <p className={founderStyles.quoteAuthor}>
                — Andreas, Founder Arcvite
              </p>
            </div>

            <div className={founderStyles.description}>
              <p>
                Das Bogenmodell ist das Destillat aus intensiver Systemtheorie und der Analyse von Menschen mit einer unnachgiebigen Obszession für ihre Ziele. Es ist ein Framework, das die unsichtbaren Reibungsverluste sichtbar macht. Wir eliminieren die Lücke zwischen Ihrer Vision und der tatsächlichen Ausführung.
              </p>
            </div>
          </div>

          {/* Image Placeholder (Right Side) - Fading into background */}
          <div className={founderStyles.imageContainer}>
              {/* Pattern representing the image, fading out towards the edges */}
              <div className={founderStyles.imagePattern} />
              
              <div className={founderStyles.imagePlaceholderText}>
                [Bild: Andreas <br/> (weicher Übergang in den Hintergrund)]
              </div>
          </div>

        </div>
      </FadeOutSection>

      <FadeOutSection id="biosync" className={bioSyncStyles.syncSection} delayPercentage={0.6}>
        <div className={bioSyncStyles.syncContainer}>
          <div className={bioSyncStyles.syncHeader}>
            <h2 className={bioSyncStyles.syncTitle}>
              Biometric Sync
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
                className={card.className} 
                imageSrc={card.imageSrc} 
                isOpen={activeCard === card.id}
                onToggle={() => setActiveCard(activeCard === card.id ? null : card.id)}
                opacity={card.opacity}
                wide={card.wide}
              />
            ))}
          </div>
        </div>
      </FadeOutSection>

      <FadeOutSection id="protokolle" className={protocolsSectionStyles.section} delayPercentage={0.65}>
        <div className={protocolsSectionStyles.container}>
          <div className={protocolsSectionStyles.headerContainer}>
            <h2 className={protocolsSectionStyles.title}>The Arcvite <br/> Full-Spectrum Solution</h2>
            <p className={protocolsSectionStyles.subtitle}>
              Wir beherrschen die Komplexität Ihrer Biologie - damit Sie sich auf ihren Alltag Konzentrieren können.
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
                Wir ersetzen das Rätselraten durch ein technisches Protokoll mit klarer Erfolgsgarantie: Wir arbeiten so lange mit Ihnen, bis die vertraglich fixierten Performance-Marker Ziele erreicht sind - ohne Zusatzkosten.
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
      </FadeOutSection>

      <FadeOutSection id="audit" className={auditStyles.footer}>
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

          
        </div>
      </FadeOutSection>

      <footer id="faq" className={faqStyles.section}>
        <div className={faqStyles.faqSection}>
          <h3 className={faqStyles.faqHeading}>Frequently Asked Questions</h3>
          <p className={faqStyles.faqSubheading}>Transparenz vor der Implementierung.</p>
          <div className={faqStyles.faqContainer}>
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
        
        <div className={faqStyles.buttonWrapper}>
          <button 
            onClick={() => scrollToSection('audit')}
            className={faqStyles.ctaButton}
          >
            <span className={faqStyles.buttonContent}>
              Jetzt Privates Audit sichern <ChevronRight className={faqStyles.chevronIcon} />
            </span>
          </button>
        </div>

        <div className={faqStyles.bottomFooter}>
            <div className={faqStyles.logoContainer}>
              <div className={faqStyles.logoWrapper} onClick={() => scrollToSection('home')}>
                <ArcviteLogo />
              </div>
            </div>
            <div className={faqStyles.linksContainer}>
        
              <a href="/impressum" className={faqStyles.footerLink}>Impressum</a>
              <a href="/datenschutz" className={faqStyles.footerLink}>Datenschutz</a>
            </div>
            <p className={faqStyles.copyright}>© 2026 Arcvite</p>
          </div>
      </footer>

      <AnimatePresence>
        {selectedSolution && (
          <SolutionModal item={selectedSolution} onClose={() => setSelectedSolution(null)} />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;