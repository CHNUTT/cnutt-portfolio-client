import { FC } from 'react';
import { ButtonContainer, Line } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { navigationSelector } from '../../redux/selectors';
import { navigationActions } from '../../redux/actions';

const HamburgurMemu: FC = () => {
  const dispatch = useDispatch();
  const isNavOpen: boolean = useSelector(
    navigationSelector.selectNavigationOpenStatus
  );

  return (
    <ButtonContainer onClick={() => dispatch(navigationActions.toggleNavbar())}>
      <Line isOpen={isNavOpen} />
      <Line isOpen={isNavOpen} />
      <Line isOpen={isNavOpen} />
    </ButtonContainer>
  );
};

export default HamburgurMemu;
