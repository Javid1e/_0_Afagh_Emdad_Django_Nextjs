'use client';
import React, { useState, useEffect } from 'react';
import { Navbar, NavbarContent, NavbarMenuToggle } from '@nextui-org/navbar';
import HeaderBrand from '@/components/Layouts/Header/HeaderBrand';
import HeaderActions from '@/components/Layouts/Header/HeaderActions';
import HeaderNavigation from '@/components/Layouts/Header/HeaderNavigation';
import { usePathname, useSearchParams } from 'next/navigation';
import HeaderToggleMenu from '@/components/Layouts/Header/HeaderToggleMenu';
import {
  CommonComponentProps,
  InsideLinkProps,
  OutSideLinkProps,
} from '@/types';

type HeaderProps = CommonComponentProps & {
  headerNavigationLinks: InsideLinkProps[];
  headerMenuLinks: InsideLinkProps[];
  headerActionLinks: OutSideLinkProps[];
};

const Header: React.FC<HeaderProps> = ({
  id,
  className,
  headerNavigationLinks,
  headerMenuLinks,
  headerActionLinks,
}) => {
  const [isMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    setActiveItem(pathname);
    console.log(pathname);
  }, [pathname, searchParams]);

  return (
    <Navbar
      id={`${id}-section`}
      maxWidth="full"
      position="sticky"
      className={`${className} max shadow-xl flex justify-between`}
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
    >
      <NavbarContent
        id={`${id}-content-left`}
        justify="start"
        className="!flex-grow-0 flex-1"
      >
        <NavbarMenuToggle
          id={`${id}-content-left-toggle`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
        <HeaderBrand
          id={`${id}-content-left-brand`}
          className="justify-start !flex-grow-0 flex-1 "
        />
      </NavbarContent>

      <HeaderNavigation
        id={`${id}-navigation`}
        className="hidden lg:flex flex-1 !justify-center"
        activeItem={activeItem}
        navigationLinks={headerNavigationLinks}
      />
      <HeaderToggleMenu id={`${id}-menu`} headerMenuLinks={headerMenuLinks} />
      <HeaderActions
        id={`${id}-actions`}
        className="!flex-grow-0 flex-1"
        headerActionLinks={headerActionLinks}
      />
    </Navbar>
  );
};

export default Header;
