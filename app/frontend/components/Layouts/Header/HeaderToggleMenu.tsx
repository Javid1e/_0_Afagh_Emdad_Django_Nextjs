import React from 'react';
import { NavbarMenuItem } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { NavbarMenu } from '@nextui-org/react';
import { CommonComponentProps, InsideLinkProps } from '@/types';

type MenuProps = CommonComponentProps & {
  headerMenuLinks: InsideLinkProps[];
};
const HeaderToggleMenu: React.FC<MenuProps> = ({
  id,
  className,
  headerMenuLinks,
}) => {
  return (
    <NavbarMenu
      id={`${id}-section`}
      className={className}
      style={{ height: 'auto', overflowY: 'auto' }}
    >
      <div id={`${id}-content`} className="mx-4 mt-2 flex flex-col gap-2 ">
        {headerMenuLinks.map((item, index) => (
          <NavbarMenuItem
            id={`${id}-content-${item.href}-item`}
            key={`${item}-${index}`}
          >
            <Link
              id={`${id}-content-${item.href}-link`}
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </div>
    </NavbarMenu>
  );
};

export default HeaderToggleMenu;
