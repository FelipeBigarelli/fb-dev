import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AnimatedSection } from '../shared/AnimatedSection';
import { SectionTitle } from '../shared/SectionTitle';
import {
  Content,
  Item,
  Items,
  Panel,
  PanelHeader,
  PanelMeta,
  SectionWrap,
  Tabs,
  TabsWrap,
} from './styles';

const experiences = [
  {
    company: 'SeeMe Life',
    role: 'Desenvolvedor Full Stack PJ - Remoto',
    period: 'Ago 2025 — Presente',
    location: 'São Paulo',
    items: [
      'Desenvolvimento front-end e back-end na plataforma Wix',
      'Integração com APIs externas e ferramentas de terceiros (pagamentos, CRM, analytics)',
      'Implementação e manutenção de webhooks e automações',
      'Ajustes de performance e estabilidade do sistema',
    ],
  },
  {
    company: 'Via Consulting / GOL & Smiles',
    role: 'Estagiário Full Stack Web - Remoto',
    period: 'Nov 2024 — Jun 2025',
    location: 'São Paulo',
    items: [
      'Manutenção corretiva e evolutiva de sistemas da GOL Linhas Aéreas e Smiles',
      'Diagnóstico e correção de falhas com análise de causa raiz',
      'Desenvolvimento de funcionalidade de voucher no sistema Smiles',
      'Implementação de ajustes de UI/UX garantindo consistência visual',
    ],
  },
  {
    company: 'G4 Tech',
    role: 'Desenvolvedor Full Stack Júnior',
    period: 'Set 2021 — Fev 2022',
    location: 'Cornélio Procópio',
    items: [
      'Implementação e manutenção de softwares completos',
      'Frontend: ReactJS, AntDesign, Styled Components, TypeScript',
      'Backend: NodeJS, Express, MongoDB, PostgreSQL + TypeORM',
    ],
  },
  {
    company: "Let's Comunica",
    role: 'Estagiário Full Stack Web -  Remoto',
    period: 'Set 2020 — Fev 2021',
    location: 'Londrina',
    items: ['Implementação do zero e manutenção de softwares por completo', 'AngularJS (Frontend) e NodeJS + PostgreSQL (Backend)'],
  },
  {
    company: 'S4W Marketing Digital',
    role: 'Estagiário Full Stack Web',
    period: 'Out 2019 — Jul 2020',
    location: 'Cornélio Procópio',
    items: [
      'Manutenção e implementação de Banco de Dados em C#',
      'Criação de landing pages com HTML/CSS',
      'Lógica de programação com JavaScript',
    ],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);

  return (
    <SectionWrap id="experience">
      <SectionTitle number="02" title="Experiência" />
      <AnimatedSection delay={0.1}>
        <Content>
          <TabsWrap>
            <Tabs>
              {experiences.map((exp, i) => (
                <button key={exp.company} onClick={() => setActive(i)} className={active === i ? 'active' : ''}>
                  {exp.company}
                </button>
              ))}
            </Tabs>
          </TabsWrap>

          <Panel>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PanelHeader>
                  {experiences[active].role} <span>@ {experiences[active].company}</span>
                </PanelHeader>
                <PanelMeta>
                  {experiences[active].period} · {experiences[active].location}
                </PanelMeta>

                <Items>
                  {experiences[active].items.map((item) => (
                    <Item key={item}>
                      <span className="bullet">▹</span>
                      {item}
                    </Item>
                  ))}
                </Items>
              </motion.div>
            </AnimatePresence>
          </Panel>
        </Content>
      </AnimatedSection>
    </SectionWrap>
  );
};

export default Experience;
