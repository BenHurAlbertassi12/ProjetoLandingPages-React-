/* eslint-disable no-unused-vars */
import { NavLinks } from './NavLinks';
import link from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: link,
  },
  argTypes: {
    liks: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
