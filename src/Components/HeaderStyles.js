/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

const titleSize = {
  big: (theme) => css`
  font-size: ${theme.font.sizes.xlarge};
  `,
  small: (theme) => css`
  font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
  font-size: ${theme.font.sizes.large};
  `,
  huge: (theme) => css`
  font-size: ${theme.font.sizes.xhuge};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;
