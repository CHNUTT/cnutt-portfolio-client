import styled from 'styled-components';
import { colors } from '../../themes';

export const IconHOCWrapper = styled.li`
  margin-left: 10px;
  transition: transform 100ms cubic-bezier(1, 0, 0, 1) 0ms;
  /* color: red; */
  /* fill: red; */

  &:nth-child(1) {
    margin-left: 0px;
  }

  &:hover {
    color: ${colors.primary};
    fill: ${colors.primary};
    transform: scale(1.3);
  }
`;
