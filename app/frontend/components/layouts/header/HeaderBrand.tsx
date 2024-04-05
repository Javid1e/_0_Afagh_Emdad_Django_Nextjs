import React from 'react';
import { NavbarBrand, NavbarContent } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { ThemeSwitch } from '@/components/utils/theme-switch';
interface Props {
  id?: string;
}
const HeaderBrand: React.FC<Props> = ({ id }) => {
  return (
    <NavbarContent
      id={`${id}-section`}
      className="justify-start !flex-grow-0 flex-1 "
    >
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
