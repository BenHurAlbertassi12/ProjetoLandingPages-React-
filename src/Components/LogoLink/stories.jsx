/* eslint-disable no-unused-vars */

import { LogoLink } from './LogoLink';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcIMG: 'assets/images/logo.svg',
    link: 'http://localhost:',
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcIMG: '',
};
