import { FC } from 'react';
import HamburgerMenu from '../HambugurMenu';

import { BrandContainer, HeaderContainer, BrandText } from './styles';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <BrandContainer>
        <BrandText>CHNUTT</BrandText>
      </BrandContainer>
      <HamburgerMenu />
    </HeaderContainer>
  );
};

export default Header;
