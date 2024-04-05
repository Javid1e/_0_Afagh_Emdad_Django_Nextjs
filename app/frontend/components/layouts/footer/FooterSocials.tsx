import React from 'react';
import { siteConfig } from '@/config/site';
import {
  BaleIcon,
  RubikaIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '@/components/utils/icons';
import { Link } from '@nextui-org/link';
import { IconSvgProps } from '@/types';
interface Props {
  id: string;
  className: string;
}
// Assuming each item in siteConfig.footerSocial corresponds to an icon component
const iconComponents: Record<string, React.FC<IconSvgProps>> = {
  WhatsAppIcon,
  TelegramIcon,
  InstagramIcon,
  RubikaIcon,
  BaleIcon,
};
export const FooterSocials: React.FC<Props> = ({ id, className }) => {
  return (
    <div id={`${id}-section`} className={`${className}`}>
      <ul
        id={`${id}-content-list`}
        className=" flex justify-center gap-6 list-none"
      >
        {siteConfig.footerSocial.map((item) => {
          const IconComponent = iconComponents[item.label];
          return (
            <li id={`${id}-content-list-${item.label}-section`} key={item.href}>
              <Link
                id={`${id}-content-list-${item.label}-link`}
                href={item.href}
                target={item.target}
                className=" hover:text-primary-500"
              >
                <span className="sr-only">{item.name}</span>
                {IconComponent ? (
                  <IconComponent className="text-primary-500" />
                ) : (
                  item.label
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
