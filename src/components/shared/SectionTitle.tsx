import { AnimatedSection } from './AnimatedSection';
import { Line, Number, Row, Title } from './SectionTitleStyles';

interface Props {
  number: string;
  title: string;
}

export const SectionTitle = ({ number, title }: Props) => (
  <AnimatedSection>
    <Row>
      <Number>{number}.</Number>
      <Title>{title}</Title>
      <Line />
    </Row>
  </AnimatedSection>
);
