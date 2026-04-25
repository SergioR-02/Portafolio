import React from 'react';
import NavLink from '../atoms/NavLink';

interface NavItem {
  id: string;
  label: string;
  anchor?: string;
  to?: string;
}

interface NavLinksProps {
  navItems: NavItem[];
  activeNav: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ navItems, activeNav }) => (
  <div className="ml-10 flex items-baseline space-x-8">
    {navItems.map((item) => (
      <NavLink key={item.id} {...item} activeNav={activeNav} />
    ))}
  </div>
);

export default NavLinks;
