import React from 'react';
import {
  BaleIcon,
  RubikaIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '@/components/Utils/icons';
import { Link } from '@nextui-org/link';
import {
  CommonComponentProps,
  IconComponentMap,
  OutSideNamedLinkProps,
} from '@/types';
type FooterSocialsProps = CommonComponentProps & {
  footerSocialLinks: OutSideNamedLinkProps[];
};
const iconComponents: IconComponentMap = {
  WhatsAppIcon,
  TelegramIcon,
  InstagramIcon,
  RubikaIcon,
  BaleIcon,
};

export const FooterSocials: React.FC<FooterSocialsProps> = ({
  id,
  className,
  footerSocialLinks,
}) => {
  return (
    <div id={`${id}-section`} className={`${className}`}>
      <ul
        id={`${id}-content-list`}
        className=" flex justify-center gap-6 list-none"
      >
        {footerSocialLinks.map((item) => {
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
