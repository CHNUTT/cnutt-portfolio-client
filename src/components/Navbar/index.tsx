import { FC } from 'react';
import { useSelector } from 'react-redux';
import { navigationSelector } from '../../redux/selectors';
import IconHOCWrapper from '../IconWrapper';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubInIcon from '@material-ui/icons/GitHub';
import { ReactComponent as LeetCodeIcon } from '../../assets/icons/leetcode.svg';
import { ReactComponent as HackerrankIcon } from '../../assets/icons/hackerrank.svg';
import {
  ContactInfo,
  ContactName,
  MenuItem,
  MenusList,
  MenuText,
  NavbarContainer,
  NavbarWrapper,
  SectionContact,
  SectionMenuAndSocial,
  SocialMediaWrapper,
} from './styles';

const Navbar: FC = () => {
  const menus = ['Experience', 'Projects', 'About', 'Education'];
  const socialMediaIcons = [
    LinkedInIcon,
    GitHubInIcon,
    LeetCodeIcon,
    HackerrankIcon,
  ];

  const isNavbarOpen = useSelector(
    navigationSelector.selectNavigationOpenStatus
  );
  return (
    <NavbarWrapper isOpen={isNavbarOpen}>
      <NavbarContainer>
        <SectionMenuAndSocial>
          <MenusList>
            {menus.map((menu) => (
              <MenuItem>
                <MenuText>{menu}</MenuText>
              </MenuItem>
            ))}
          </MenusList>
          <SocialMediaWrapper>
            {socialMediaIcons.map((icon) => (
              <IconHOCWrapper Icon={icon} />
            ))}
          </SocialMediaWrapper>
        </SectionMenuAndSocial>
        <SectionContact>
          <ContactName>Nutt Chokwittaya</ContactName>
          <ContactInfo>nutt.chokwittaya@gmail.com</ContactInfo>
          <ContactInfo>Houston, TX</ContactInfo>
        </SectionContact>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
