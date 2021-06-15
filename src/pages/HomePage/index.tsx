import { FC } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { Container, Section1, Section1Left, Section1Right } from './styles';

const HomePage: FC = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <Section1>
        <Section1Left />
        <Section1Right />
      </Section1>
    </Container>
  );
};

export default HomePage;
