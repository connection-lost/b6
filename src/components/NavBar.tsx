import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

const navStyles: Partial<INavStyles> = {
  root: {
    width: 400,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: 'http://example.com',
        key: 'Home',
        target: '_blank',
      },
      {
        name: 'Profile',
        url: 'http://example.com',
        key: 'Profile',
        target: '_blank',
      },
      {
        name: 'Skills',
        url: 'http://example.com',
        key: 'Skills',
        target: '_blank',
      },
      {
        name: 'Companions',
        url: 'http://example.com',
        key: 'Companions',
        target: '_blank',
      },
      {
        name: 'Experiences',
        url: 'http://example.com',
        key: 'Experiences',
        target: '_blank',
      },
      {
        name: 'Links',
        url: 'http://example.com',
        key: 'Links',
        target: '_blank',
      },
      {
        name: 'About',
        url: 'http://example.com',
        key: 'About',
        target: '_blank',
      }
    ],
  },
];

export const NavBar: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="Home"
      ariaLabel="Navigation bar"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
}
