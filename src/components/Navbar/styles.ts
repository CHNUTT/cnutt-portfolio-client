import * as viewport from '../../themes/breakpoints';
import * as colors from '../../themes/colors';
import styled from 'styled-components';

// TODO DRY Need refactoring (multiple places) //
// INFO HamburgurMenu styles.ts //
interface styleProp {
  isOpen: boolean;
}

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 80px;
  left: 0px;
  height: 100%;
  background-color: ${colors.white};
  transition: transform 500ms cubic-bezier(1, 0, 0, 1) 0ms,
    left 500ms cubic-bezier(1, 0, 0, 1) 0ms;
  transform: ${(props: styleProp) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};

  @media screen and (min-width: ${viewport.md}) {
    right: 30%;
  }
`;

export const NavbarContainer = styled.div`
  min-height: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

export const SectionMenuAndSocial = styled.section`
  flex: 3 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MenusList = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li`
  margin-bottom: 20px;
`;

// export const MenuTextMask = styled.span`
//   /* position: relative; */
// `;

export const MenuText = styled.span`
  position: relative;
  padding: 0 5px;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    &:before {
      background-color: ${colors.primary};
      transform: scaleX(1) translateY(-50%);
    }
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0px;
    right: 0px;
    height: 13px;
    background: ${colors.gray};
    opacity: 0.5;
    z-index: -1;
    transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
    transform: scaleX(0) translateY(-50%);
  }
`;

export const SocialMediaWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0 5px;
  margin: 20px 0 0 0;
`;

export const SectionContact = styled.section`
  flex: 2 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 30%;
  font-size: 0.8rem;
`;

export const ContactName = styled.p`
  margin: 0 0 5px 0;
  font-style: italic;
`;

export const ContactInfo = styled.p`
  font-weight: bold;
  margin: 5px 0 0 0;
`;
