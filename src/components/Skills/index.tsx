import { motion } from 'framer-motion';
import { AnimatedSection } from '../shared/AnimatedSection';
import { SectionTitle } from '../shared/SectionTitle';
import { Card, Grid, SectionWrap, Skill } from './styles';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Angular', 'HTML', 'CSS', 'Styled Components', 'AntDesign'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'TypeORM', 'REST APIs', 'Webhooks'],
  },
  {
    title: 'Banco de Dados',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Mobile',
    skills: ['React Native'],
  },
  {
    title: 'Práticas',
    skills: ['Arquitetura de Software', 'Testes', 'Documentação', 'CI/CD', 'Git', 'LGPD', 'DevOps'],
  },
];

const Skills = () => (
  <SectionWrap id="skills">
    <SectionTitle number="03" title="Skills" />
    <Grid>
      {skillGroups.map((group, gi) => (
        <AnimatedSection key={group.title} delay={gi * 0.1}>
          <Card>
            <h3>{`// ${group.title}`}</h3>
            <div className="skills">
              {group.skills.map((skill, si) => (
                <Skill
                  as={motion.span}
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.1 + si * 0.05 }}
                >
                  {skill}
                </Skill>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      ))}
    </Grid>
  </SectionWrap>
);

export default Skills;
