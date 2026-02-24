import { Mail, Phone } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';
import { SectionTitle } from '../shared/SectionTitle';
import { Buttons, EmailButton, PhoneButton, SectionWrap, Text } from './styles';

const Contact = () => (
  <SectionWrap id="contact">
    <SectionTitle number="05" title="Contato" />
    <AnimatedSection delay={0.1}>
      <Text>
        Estou sempre aberto a novas oportunidades e desafios. Sinta-se à vontade para entrar em contato!
      </Text>

      <Buttons>
        <EmailButton href="mailto:felipebigarelli@hotmail.com" className="glow-border">
          <Mail size={18} />
          felipebigarelli@hotmail.com
        </EmailButton>

        <PhoneButton href="tel:+5561981712059">
          <Phone size={18} />
          (61) 98171-2059
        </PhoneButton>
      </Buttons>
    </AnimatedSection>
  </SectionWrap>
);

export default Contact;
