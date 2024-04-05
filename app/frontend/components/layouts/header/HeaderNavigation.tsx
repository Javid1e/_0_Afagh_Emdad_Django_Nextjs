import React, { useState } from 'react';
import { NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';

interface MenuItem {
  href: string;
  label: string;
}

interface Props {
  id?: string;
  activeItem?: string;
}

const HeaderNavigation: React.FC<Props> = ({
  id,
  activeItem: propActiveItem,
}) => {
  const [activeItem, setActiveItem] = useState(propActiveItem || '');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <NavbarContent
      id={`${id}-section`}
      justify="center"
      className="hidden lg:flex flex-1 !justify-center"
    >
      {siteConfig.headerNavigationLinks.map((item: MenuItem, index: number) => (
        <NavbarItem
          id={`${id}-content-${index}`}
          key={item.href}
          isActive={activeItem === item.href}
        >
          <Link
            id={`${id}-content-${index}-link`}
            className={`font-iransans leading-6 md:leading-8 items-center justify-center text-sm sm:text-medium w-auto sm:w-full transition-transform hover:text-primary-500 ${
              activeItem === item.href
                ? 'text-primary-500'
                : 'text-primary-foregroundLight'
            }`}
            href={item.href}
            aria-current={activeItem === item.href ? 'page' : undefined}
            onClick={() => handleItemClick(item.href)}
          >
            {item.label}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  );
};

export default HeaderNavigation;
