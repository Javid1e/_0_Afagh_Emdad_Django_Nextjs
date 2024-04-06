import React, { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export type IconComponentMap = Record<string, React.FC<IconSvgProps>>;
export type CommonComponentProps = {
  id?: string;
  className?: string;
};
export type ActiveLinkProps = {
  activeItem?: string;
};
export type InsideLinkProps = {
  label: string;
  href: string;
};
export type OutSideLinkProps = {
  id: string;
  label: string;
  href: string;
  target: string;
};
export type OutSideNamedLinkProps = OutSideLinkProps & {
  name: string;
};
