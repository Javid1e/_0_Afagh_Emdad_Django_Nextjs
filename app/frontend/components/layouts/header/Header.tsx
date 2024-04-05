'use client';
import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import HeaderBrand from '@/components/layouts/header/HeaderBrand';
import HeaderActions from '@/components/layouts/header/HeaderActions';
import HeaderNavigation from '@/components/layouts/header/HeaderNavigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { NavbarMenu } from '@nextui-org/react';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';

const Header = () => {
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
      id="header-navbar-section"
      maxWidth="full"
      position="sticky"
      className="max shadow-xl flex justify-between"
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
      <NavbarContent justify="start" className="!flex-grow-0 flex-1">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
        <HeaderBrand id="header-navbar-brand" />
      </NavbarContent>

      <HeaderNavigation id="header-navbar-navigation" activeItem={activeItem} />
      <NavbarMenu style={{ height: 'auto', overflowY: 'auto' }}>
        <div className="mx-4 mt-2 flex flex-col gap-2 ">
          {siteConfig.siteNavigationItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
      <HeaderActions id="header-navbar-actions" />
    </Navbar>
  );
};
export default Header;
