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
import { Avatar } from '@nextui-org/react';
import { FaUserCircle } from 'react-icons/fa';
interface Props {
  id?: string;
}
const HeaderActions: React.FC<Props> = ({ id }) => {
  return (
    <NavbarContent
      id={`${id}-section`}
      justify="end"
      className="!flex-grow-0 flex-1"
    >
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
            <Avatar
              id={`${id}-content-profile-dropdown-trigger-avatar`}
              as="button"
              isBordered
              classNames={{
                base: 'bg-background transition-transform',
              }}
              color="secondary"
              size="sm"
              icon={<FaUserCircle color="#1e3dc8" size="4rem" />}
            />
          </DropdownTrigger>
          <DropdownMenu
            id={`${id}-content-profile-dropdown-menu`}
            variant="flat"
            aria-label="Link Actions"
          >
            <DropdownItem
              id={`${id}-content-profile-dropdown-menu-register`}
              href="/register"
            >
              <p className="font-iransans text-center">ثبت نام</p>
            </DropdownItem>
            <DropdownItem
              id={`${id}-content-profile-dropdown-menu-login`}
              href="/login"
            >
              <p className="font-iransans text-center">ورود</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
    </NavbarContent>
  );
};

export default HeaderActions;
