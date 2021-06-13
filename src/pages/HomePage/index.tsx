import { FC } from 'react';
import Header from '../../components/Header';
import { Container, Section1, Section1Left, Section1Right } from './styles';

const HomePage: FC = () => {
  return (
    <Container>
      <Header />
      <Section1>
        <Section1Left />
        <Section1Right />
      </Section1>
    </Container>
  );
};

export default HomePage;
