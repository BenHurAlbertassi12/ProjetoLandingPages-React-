/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Header/Header';

export const LogoLink = ({ children }) => {
  return (
    <Heading>
      <Styled.Container></Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  children: P.node.isRequired,
};
