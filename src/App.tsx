import { FC } from 'react';
import HomePage from './pages/HomePage';
import { Container } from './styles';

const App: FC = () => {
  return (
    <>
      <Container>
        <HomePage />
      </Container>
    </>
  );
};

export default App;
