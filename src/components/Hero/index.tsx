import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail } from 'lucide-react';
import heroBg from '../../assets/hero-bg.jpg';
import {
  BackgroundImage,
  BackgroundOverlay,
  Badge,
  Buttons,
  CTAButton,
  Container,
  FloatingOrb,
  GhostButton,
  GridGlow,
  Lead,
  MiniStats,
  ScrollHint,
  StatCard,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

const Hero = () => {
  return (
    <Wrapper id="hero">
      <BackgroundImage style={{ backgroundImage: `url(${heroBg})` }} />
      <BackgroundOverlay />
      <GridGlow initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1.2 }} />
      <FloatingOrb animate={{ y: [0, -16, 0], x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity }} />
      <FloatingOrb $variant="b" animate={{ y: [0, 14, 0], x: [0, -12, 0] }} transition={{ duration: 10, repeat: Infinity }} />
      <FloatingOrb $variant="c" animate={{ y: [0, -10, 0], x: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity }} />

      <Container>
        <Badge initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}>
          <span className="dot" /> Disponível para projetos e oportunidades PJ
        </Badge>

        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.65 }}>
          <Title>
            Felipe <span className="text-gradient">Bigarelli</span>
          </Title>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.65 }}>
          <Subtitle>Full Stack Developer focado em produtos, integrações e automações</Subtitle>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
          <Lead>
            Engenheiro de Software (UTFPR) com experiência em React, Node.js e TypeScript, construindo soluções ponta a ponta com foco em performance, organização e resultado real de negócio.
          </Lead>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.6 }}>
          <Buttons>
            <GhostButton href="https://github.com/FelipeBigarelli" target="_blank" rel="noopener noreferrer">
              <Github size={17} /> GitHub
            </GhostButton>

            <CTAButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail size={17} /> Vamos conversar
            </CTAButton>
          </Buttons>
        </motion.div>

        <MiniStats initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.6 }}>
          <StatCard>
            <strong>Frontend + Backend</strong>
            <span>React · Node · TypeScript</span>
          </StatCard>
          <StatCard>
            <strong>Integrações & automações</strong>
            <span>APIs · Webhooks · Fluxos</span>
          </StatCard>
          <StatCard>
            <strong>Projetos reais</strong>
            <span>GOL · Smiles · SeeMe Life</span>
          </StatCard>
        </MiniStats>

        <ScrollHint initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.8 }}>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowDown color="hsl(193 95% 58%)" size={22} />
          </motion.div>
        </ScrollHint>
      </Container>
    </Wrapper>
  );
};

export default Hero;
