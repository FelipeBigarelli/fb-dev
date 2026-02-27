import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Brand, DesktopList, MobileMenu, Nav, NavInner, NavItemButton, ToggleButton } from './styles';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Nav as={motion.nav} initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} $scrolled={scrolled}>
      <NavInner>
        <Brand onClick={() => handleClick('#hero')}>
          {'<'}<span>FB</span> /{'>'}
        </Brand>

        <DesktopList>
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavItemButton onClick={() => handleClick(link.href)}>{link.label}</NavItemButton>
            </li>
          ))}
        </DesktopList>

        <ToggleButton onClick={() => setMobileOpen((v) => !v)} aria-label="Abrir menu">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </ToggleButton>
      </NavInner>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu as={motion.div} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavItemButton onClick={() => handleClick(link.href)}>{link.label}</NavItemButton>
                </li>
              ))}
            </ul>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
