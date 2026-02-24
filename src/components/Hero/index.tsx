import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail } from 'lucide-react';
import heroBg from '../../assets/hero-bg.jpg';
import {
  BackgroundImage,
  BackgroundOverlay,
  Buttons,
  CTAButton,
  Container,
  GhostButton,
  ScrollHint,
  Subtitle,
  Title,
  Wrapper,
  Lead,
} from './styles';

const Hero = () => {
  return (
    <Wrapper id="hero">
      <BackgroundImage style={{ backgroundImage: `url(${heroBg})` }} />
      <BackgroundOverlay />

      <Container>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono"
          style={{ color: 'hsl(152 70% 50%)', fontSize: '14px', marginBottom: 16 }}
        >
          Olá, meu nome é
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <Title>
            <span>Felipe </span>
            <span className="text-gradient">Bigarelli</span>
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Subtitle>Desenvolvedor Full Stack Web</Subtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Lead>
            Engenheiro de Software em formação pela UTFPR. Full Stack focado em React + Node, integrações, automações e sistemas de ponta a ponta.
          </Lead> 
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Buttons>
            <GhostButton
              href="https://github.com/FelipeBigarelli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              GitHub
            </GhostButton>

            <CTAButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="glow-sm"
            >
              <Mail size={18} />
              Contato
            </CTAButton>
          </Buttons>
        </motion.div>

        <ScrollHint
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown color="hsl(152 70% 50%)" size={24} />
          </motion.div>
        </ScrollHint>
      </Container>
    </Wrapper>
  );
};

export default Hero;
