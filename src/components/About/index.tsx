import { AnimatedSection } from '../shared/AnimatedSection';
import { SectionTitle } from '../shared/SectionTitle';
import { Card, Grid, InfoLine, Left, Right, SectionWrap, Text } from './styles';

const About = () => (
  <SectionWrap id="about">
    <SectionTitle number="01" title="Sobre mim" />

    <Grid>
      <Left>
        <AnimatedSection delay={0.1}>
          <Text>
            Prazer! Me chamo <span>Felipe Bigarelli</span>, tenho 26 anos, formado em Engenharia de Software na UTFPR.
            Me aprofundo cada dia mais em Full Stack Web Development, ganhando experiência para entregar trabalhos de qualidade.
          </Text>
          <Text>
            Sou curioso, questionador e colaborativo — sempre buscando tornar o ambiente profissional e social em constante evolução.
            Tenho experiência com projetos reais em empresas como GOL Linhas Aéreas, Smiles e SeeMe Life.
          </Text>
          <Text>
            Atualmente trabalho como <span>Desenvolvedor Full Stack PJ</span>, atuando com integrações, automações e manutenção de sistemas completos.
          </Text>
        </AnimatedSection>
      </Left>

      <Right>
        <AnimatedSection delay={0.3}>
          <Card className="glow-border">
            <h3>// info.json</h3>
            <InfoLine>
              <span className="label">nome: </span>
              <span className="value">"Felipe Bigarelli"</span>
            </InfoLine>
            <InfoLine>
              <span className="label">experiência: </span>
              <span className="value">desde 2019</span>
            </InfoLine>
            <InfoLine>
              <span className="label">formação: </span>
              <span className="value">"Eng. Software - UTFPR"</span>
            </InfoLine>
            <InfoLine>
              <span className="label">localização: </span>
              <span className="value">"Curitiba, PR"</span>
            </InfoLine>
            <InfoLine>
              <span className="label">email: </span>
              <span className="value">"felipebigarelli@hotmail.com"</span>
            </InfoLine>
            <InfoLine>
              <span className="label">stack: </span>
              <span className="value">["React", "Node", "TypeScript", "PostgreSQL"]</span>
            </InfoLine>
            <InfoLine>
              <span className="label">disponível: </span>
              <span className="bool">true</span>
            </InfoLine>
          </Card>
        </AnimatedSection>
      </Right>
    </Grid>
  </SectionWrap>
);

export default About;
