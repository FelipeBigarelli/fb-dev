import { ExternalLink, Github } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';
import { SectionTitle } from '../shared/SectionTitle';
import { Card, CardHead, CardIcon, CardLinks, Grid, MoreLink, SectionWrap, Tech } from './styles';

// const projects = [
//   {
//     title: 'Advocacia CFN',
//     description: 'Sistema web completo para escritório de advocacia, com frontend moderno em TypeScript.',
//     techs: ['TypeScript', 'React'],
//     github: 'https://github.com/FelipeBigarelli/advocacia-cfn',
//   },
//   {
//     title: 'AdopetCP API (Backend)',
//     description:
//       'API REST para uma plataforma colaborativa de adoção e suporte de animais, com autenticação, envio de e-mails, upload de arquivos e documentação com Swagger.',
//     techs: [
//       'TypeScript',
//       'Node.js',
//       'Express',
//       'TypeORM',
//       'PostgreSQL',
//       'Docker',
//       'JWT',
//       'Swagger',
//       'Multer',
//       'Nodemailer',
//       'AWS SDK',
//       'tsyringe',
//     ],
//     github: 'https://github.com/FelipeBigarelli/AdopetCP-Backend',
//   },
//   {
//     title: 'AdopetCP Web (Frontend)',
//     description:
//       'Frontend web da plataforma AdopetCP, com fluxo de navegação e formulários, validações e estilização moderna com styled-components. Deploy em produção via Vercel.',
//     techs: [
//       'TypeScript',
//       'React',
//       'React Router',
//       'Styled-components',
//       'Axios',
//       'Unform',
//       'Yup',
//     ],
//     github: 'https://github.com/FelipeBigarelli/AdopetCP-Frontend',
//   },

//   // Sugestões “mostráveis” como estudos (Rocketseat / projetos clássicos)
//   // (bons pra mostrar como base de aprendizado/arquitetura)
//   {
//     title: 'GoBarber (Backend)',
//     description:
//       'Backend de estudo com arquitetura organizada e boas práticas, baseado no ecossistema GoStack/Rocketseat.',
//     techs: ['Node.js', 'TypeScript', 'API REST'],
//     github: 'https://github.com/FelipeBigarelli/GoBarber-Backend',
//   },
//   {
//     title: 'GoBarber (App Mobile)',
//     description:
//       'Aplicativo mobile de estudo para agendamentos/serviços, desenvolvido durante trilhas GoStack/Rocketseat.',
//     techs: ['React Native', 'TypeScript'],
//     github: 'https://github.com/FelipeBigarelli/GoBarber-App',
//   },
//   {
//     title: 'NLW03 (Study Project)',
//     description:
//       'Projeto de estudo da NLW (Rocketseat) para consolidar fundamentos e construção de uma aplicação completa.',
//     techs: ['TypeScript', 'Node.js', 'React'],
//     github: 'https://github.com/FelipeBigarelli/NLW03',
//   },
//   {
//     title: 'FlappyBird (JS Game)',
//     description:
//       'Jogo simples estilo Flappy Bird para praticar JavaScript, HTML e CSS com foco em lógica e DOM.',
//     techs: ['JavaScript', 'HTML', 'CSS'],
//     github: 'https://github.com/FelipeBigarelli/FlappyBird',
//   },
// ];

const projects = [
  // ===== Projetos "de vitrine" (mais fortes) =====
  {
    title: 'Advocacia CFN',
    description:
      'Site/sistema web com foco em UI moderna, navegação clara e código organizado em TypeScript.',
    techs: ['TypeScript', 'React'],
    github: 'https://github.com/FelipeBigarelli/advocacia-cfn',
  },
  {
    title: 'SeeMe Backend',
    description:
      'Backend em TypeScript voltado a APIs, regras de negócio e persistência, com organização de camadas e boas práticas.',
    techs: ['TypeScript', 'Node.js', 'API REST'],
    github: 'https://github.com/FelipeBigarelli/seeme-backend',
  },
  {
    title: 'AdopetCP API (Backend)',
    description:
      'API REST para plataforma colaborativa de adoção e suporte de animais, com autenticação e documentação da API.',
    techs: ['TypeScript', 'Node.js', 'Express', 'TypeORM', 'PostgreSQL', 'Docker', 'JWT', 'Swagger'],
    github: 'https://github.com/FelipeBigarelli/AdopetCP-Backend',
  },
  {
    title: 'AdopetCP Web (Frontend)',
    description:
      'Frontend web da plataforma AdopetCP com rotas, formulários e validações, consumindo a API do projeto.',
    techs: ['TypeScript', 'React', 'React Router', 'Styled-components', 'Axios'],
    github: 'https://github.com/FelipeBigarelli/AdopetCP-Frontend',
  },

  // ===== Projetos web/React (bons para mostrar como estudos) =====
  {
    title: 'MyContacts (Frontend)',
    description:
      'Aplicação frontend para gerenciamento de contatos (CRUD), focada em consumo de API e organização de componentes.',
    techs: ['JavaScript', 'React'],
    github: 'https://github.com/FelipeBigarelli/MyContacts-Frontend',
  },
  {
    title: 'Calculadora (React)',
    description:
      'Calculadora simples feita em React para praticar componentização, estado e interação de UI.',
    techs: ['JavaScript', 'React'],
    github: 'https://github.com/FelipeBigarelli/Calculadora-React',
  },

  // ===== Rocketseat / Ignite / GoStack (estudos relevantes da área) =====
  {
    title: 'Ignite Rentex',
    description:
      'Projeto de estudo do Ignite para consolidar backend/frontend com TypeScript e padrões de desenvolvimento.',
    techs: ['TypeScript'],
    github: 'https://github.com/FelipeBigarelli/Ignite-Rentex',
  },
  {
    title: 'GoBarber (Backend)',
    description:
      'Backend de estudo com arquitetura organizada e boas práticas (GoStack/Rocketseat).',
    techs: ['Node.js', 'TypeScript', 'API REST'],
    github: 'https://github.com/FelipeBigarelli/GoBarber-Backend',
  },
  {
    title: 'GoBarber (App Mobile)',
    description:
      'App mobile de estudo para agendamentos/serviços (GoStack/Rocketseat).',
    techs: ['React Native', 'TypeScript'],
    github: 'https://github.com/FelipeBigarelli/GoBarber-App',
  },
  {
    title: 'GoRestaurant (Mobile)',
    description:
      'Aplicação mobile de estudo (Rocketseat) para prática de listas, consumo de API e UI no React Native.',
    techs: ['TypeScript', 'React Native'],
    github: 'https://github.com/FelipeBigarelli/GoRestaurant-Mobile',
  },
  {
    title: 'NLW03',
    description:
      'Projeto da Next Level Week para consolidar fundamentos e construção de uma aplicação completa.',
    techs: ['TypeScript'],
    github: 'https://github.com/FelipeBigarelli/NLW03',
  },
  {
    title: 'Marketplace API (React/TS)',
    description:
      'Projeto pequeno para praticar React + TypeScript e organização de uma aplicação.',
    techs: ['TypeScript', 'React'],
    github: 'https://github.com/FelipeBigarelli/Marketplace-API',
  },
  // ===== Outros estudos legais (ainda da área) =====
  {
    title: 'LubyNodejs',
    description:
      'Projeto de estudo com Node.js/TypeScript para reforçar fundamentos e práticas.',
    techs: ['TypeScript', 'Node.js'],
    github: 'https://github.com/FelipeBigarelli/LubyNodejs',
  },
  {
    title: 'FlappyBird',
    description:
      'Jogo simples estilo Flappy Bird para praticar JavaScript, HTML e CSS com foco em lógica e DOM.',
    techs: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/FelipeBigarelli/FlappyBird',
  },

  // ===== Estudos AWS (da área, mas eu deixaria em seção “Estudos”, não “Projetos”) =====
  {
    title: 'Curso AWS Serverless',
    description:
      'Repositório de estudos/prática sobre serverless na AWS (lambda/eventos etc.).',
    techs: ['AWS', 'Serverless', 'TypeScript'],
    github: 'https://github.com/FelipeBigarelli/Curso-AWS-Serverless',
  },
  {
    title: 'AWS Technical Essentials (Notas/Estudos)',
    description:
      'Anotações e exercícios do curso AWS Technical Essentials.',
    techs: ['AWS'],
    github: 'https://github.com/FelipeBigarelli/AWS-Technical-Essentials-P1',
  },
];

const Projects = () => (
  <SectionWrap id="projects">
    <SectionTitle number="04" title="Projetos/Estudos Pessoais GitHub" />

    <Grid>
      {projects.map((project, i) => (
        <AnimatedSection key={project.title} delay={i * 0.1}>
          <Card>
            <CardHead>
              <CardIcon>{'{ }'}</CardIcon>
              <CardLinks>
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </a>
              </CardLinks>
            </CardHead>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="techs">
              {project.techs.map((tech) => (
                <Tech key={tech}>{tech}</Tech>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      ))}
    </Grid>

    <AnimatedSection delay={0.3} className="more">
      <MoreLink href="https://github.com/FelipeBigarelli?tab=repositories" target="_blank" rel="noopener noreferrer">
        Ver todos os projetos no GitHub <ExternalLink size={14} />
      </MoreLink>
    </AnimatedSection>
  </SectionWrap>
);

export default Projects;
