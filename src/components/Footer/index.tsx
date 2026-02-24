import { Github } from 'lucide-react';
import { FooterWrap, IconLink, Text } from './styles';

const Footer = () => (
  <FooterWrap>
    <div className="icons">
      <IconLink
        href="https://github.com/FelipeBigarelli"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github size={18} />
      </IconLink>
    </div>
    <Text>Desenvolvido por Felipe Bigarelli · {new Date().getFullYear()}</Text>
  </FooterWrap>
);

export default Footer;
