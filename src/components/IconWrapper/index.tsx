import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import React, { FC } from 'react';
import { IconHOCWrapper } from './styles';

type IProps = {
  Icon:
    | OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >;
};

const IconWrapper: FC<IProps> = ({ Icon }) => {
  return (
    <IconHOCWrapper>
      <Icon />
    </IconHOCWrapper>
  );
};

export default IconWrapper;
