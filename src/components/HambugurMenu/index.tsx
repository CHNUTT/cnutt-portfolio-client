import { FC, useState } from 'react';
import { ButtonContainer, Line } from './styles';

import { connect } from 'react-redux';
import { navigationSelector } from '../../redux/selectors';
import { navigationActions } from '../../redux/actions';
import { createStructuredSelector } from 'reselect';

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

// const mapStateToProps = createStructuredSelector({
//   isNavigationOpen: navigationSelector.selectNavigationOpenStatus,
// });

export default HamburgurMemu;
