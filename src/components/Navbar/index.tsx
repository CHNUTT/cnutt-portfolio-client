import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigationSelector } from '../../redux/selectors';
import { changeActivePage } from '../../redux/actions/navigation';

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
  JobTitle,
} from './styles';

const Navbar: FC = () => {
  const menus = ['About', 'Tech Stack', 'Experience', 'Projects', 'Education'];
  const socialMediaIcons = [
    LinkedInIcon,
    GitHubInIcon,
    LeetCodeIcon,
    HackerrankIcon,
  ];

  const isNavbarOpen = useSelector(
    navigationSelector.selectNavigationOpenStatus
  );
  const activePage = useSelector(navigationSelector.selectCurrenActivePage);
  const dispatch = useDispatch();

  return (
    <NavbarWrapper isOpen={isNavbarOpen}>
      <NavbarContainer>
        <SectionMenuAndSocial>
          <MenusList>
            {menus.map((menu, index) => (
              <MenuItem
                onClick={() => dispatch(changeActivePage(index))}
                key={index}
              >
                <MenuText isActive={activePage === index}>{menu}</MenuText>
              </MenuItem>
            ))}
          </MenusList>
          <SocialMediaWrapper>
            {socialMediaIcons.map((icon, index) => (
              <IconHOCWrapper key={index} Icon={icon} />
            ))}
          </SocialMediaWrapper>
        </SectionMenuAndSocial>
        <SectionContact>
          <ContactName>Nutt Chokwittaya</ContactName>
          <JobTitle>Full Stack Developer</JobTitle>
          <ContactInfo>nutt.chokwittaya@gmail.com</ContactInfo>
          <ContactInfo>Houston, TX</ContactInfo>
        </SectionContact>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
