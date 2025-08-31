import React from 'react';
import NavLink from '../atoms/NavLink';

interface NavLinksProps {
  navItems: Array<{ id: string; label: string; to?: string; scroll?: boolean }>;
  activeNav: string;
  setActiveNav: (id: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ navItems, activeNav, setActiveNav }) => (
  <div className="ml-10 flex items-baseline space-x-8">
    {navItems.map((item) => (
      <NavLink key={item.id} {...item} activeNav={activeNav} setActiveNav={setActiveNav} />
    ))}
  </div>
);

export default NavLinks;
