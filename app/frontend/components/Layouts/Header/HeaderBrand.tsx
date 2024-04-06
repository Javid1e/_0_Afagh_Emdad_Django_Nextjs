import React from 'react';
import { NavbarBrand, NavbarContent } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { ThemeSwitch } from '@/components/Utils/theme-switch';
import { CommonComponentProps } from '@/types';
const HeaderBrand: React.FC<CommonComponentProps> = ({ id, className }) => {
  return (
    <NavbarContent id={`${id}-section`} className={className}>
      <NavbarBrand id={`${id}-content-brand`}>
        <Link id={`${id}-content-brand-link`} href="/">
          <p
            id={`${id}-content-brand-link-p`}
            className="font-iransans text-lg font-bold text-primary-foregroundLight transition-transform hover:text-primary-500"
          >
            افاق امداد
          </p>
        </Link>
      </NavbarBrand>
      <ThemeSwitch id={`${id}-content-theme-switch`} />
    </NavbarContent>
  );
};

export default HeaderBrand;
