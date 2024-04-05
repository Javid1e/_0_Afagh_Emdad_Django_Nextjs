import React from 'react';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
interface Props {
  id?: string;
  className?: string;
}
export const FooterCustomerLinks: React.FC<Props> = ({ id, className }) => {
  return (
    <div id={`${id}-section`} className={`${className}`}>
      <p
        id={`${id}-content-title`}
        className="font-iransans relative font-bold "
      >
        امور مشتریان
      </p>

      <ul
        id={`${id}-content-list`}
        className="mt-6 space-y-4 text-sm list-none"
      >
        {siteConfig.footerCustomerLinks.map((item) => (
          <li key={item.href} id={`${id}-content-list-${item.id}-section`}>
            <Link
              id={`${id}-content-list-${item.id}-link`}
              href={item.href}
              target={item.target}
              className={
                'font-iransans leading-6 md:leading-8 items-center justify-start text-sm sm:text-medium w-auto sm:w-full transition-transform hover:text-primary-500 text-primary-foregroundLight'
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
