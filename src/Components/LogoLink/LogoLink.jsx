/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Header/Header';

export const LogoLink = ({ text, srcIMG = '', link }) => {
  return (
    <Heading uppercase size="small">
      <Styled.Container href={link}>
        {!!srcIMG && <img src={srcIMG} alt={text} />}
        {!srcIMG && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcIMG: P.string,
  link: P.string.isRequired,
};
