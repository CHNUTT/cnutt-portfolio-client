import { FC, useState } from 'react';
import { ButtonContainer, Line } from './styles';

const HamburgurMemu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ButtonContainer onClick={() => setIsOpen(!isOpen)}>
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
    </ButtonContainer>
  );
};

export default HamburgurMemu;
