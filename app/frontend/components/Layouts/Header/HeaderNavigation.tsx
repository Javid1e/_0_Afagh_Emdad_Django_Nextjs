import React, { useState } from 'react';
import { NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import {
  CommonComponentProps,
  ActiveLinkProps,
  InsideLinkProps,
} from '@/types';

// Merge ActiveLinkProps and InsideLinkProps to define the props interface
type HeaderNavigationProps = CommonComponentProps &
  ActiveLinkProps & {
    navigationLinks: InsideLinkProps[];
  };

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  id,
  className,
  activeItem: propActiveItem,
  navigationLinks,
}) => {
  const [activeItem, setActiveItem] = useState(propActiveItem || '');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <NavbarContent id={`${id}-section`} justify="center" className={className}>
      {navigationLinks.map((item: InsideLinkProps, index: number) => (
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
