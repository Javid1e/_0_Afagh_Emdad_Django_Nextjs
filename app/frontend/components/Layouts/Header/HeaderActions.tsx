import React from 'react';
import { NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { FaUserCircle } from 'react-icons/fa';
import { CommonComponentProps, OutSideLinkProps } from '@/types';

type HeaderActionsProps = CommonComponentProps & {
  headerActionLinks: OutSideLinkProps[];
};

const HeaderActions: React.FC<HeaderActionsProps> = ({
  id,
  className,
  headerActionLinks,
}) => {
  return (
    <NavbarContent id={`${id}-section`} justify="end" className={className}>
      <NavbarItem id={`${id}-content-request`}>
        <Button
          id={`${id}-content-request-button`}
          className="w-auto sm:w-full bg-primary-500"
        >
          <Link
            id={`${id}-content-request-button-link`}
            className="font-iransans leading-6 md:leading-8 items-center justify-center text-sm sm:text-medium w-auto sm:w-full text-primary-foreground "
            href="/request-service"
          >
            درخواست امداد
          </Link>
        </Button>
      </NavbarItem>
      <NavbarItem id={`${id}-content-profile`}>
        <Dropdown id={`${id}-content-profile-dropdown`} placement="bottom-end">
          <DropdownTrigger id={`${id}-content-profile-dropdown-trigger}`}>
            {/* eslint-disable-next-line */}
            <Button
              id={`${id}-content-profile-dropdown-trigger-button`}
              variant="ghost"
              radius="full"
              isIconOnly
              size="md"
            >
              <FaUserCircle color="#1e3dc8" size="4rem" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            id={`${id}-content-profile-dropdown-menu`}
            variant="flat"
            aria-label="Link Actions"
            items={headerActionLinks}
          >
            {(item: OutSideLinkProps) => (
              <DropdownItem
                id={`${id}-content-profile-dropdown-menu-${item.id}`}
                href={item.href}
              >
                <p className="font-iransans text-center">{item.label}</p>
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
    </NavbarContent>
  );
};

export default HeaderActions;
