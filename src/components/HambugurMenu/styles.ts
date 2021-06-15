import * as viewport from '../../styles/breakpoints';
import styled from 'styled-components';

interface styleProp {
  isOpen: boolean;
}

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 25px;

  @media screen and (min-width: ${viewport.md}) {
    width: 60px;
    height: 60px;
  }
`;

export const Line = styled.span`
  height: 2px;
  width: 20px;
  background-color: #1c1b20;
  transition: all 400ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;

  &:nth-child(1) {
    transform: ${(props: styleProp) =>
      props.isOpen
        ? 'translateX(1px) translateY(2px) rotate(45deg)'
        : 'translateX(2px) translateY(-2px)'};
    width: ${(props: styleProp) => (props.isOpen ? '20px' : '16px')};
  }

  &:nth-child(2) {
    transform: ${(props: styleProp) =>
      props.isOpen ? 'translateX(0px) translateY(0px) rotate(-45deg)' : ''};
  }

  &:nth-child(3) {
    transform: translateX(4px) translateY(2px);
    width: ${(props: styleProp) => (props.isOpen ? '0px' : '10px')};
  }
`;
