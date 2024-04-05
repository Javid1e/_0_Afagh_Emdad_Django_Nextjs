import React from 'react';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { IranYekan } from '@/config/fonts';
interface Props {
  id?: string;
  className?: string;
}
export const FooterSiteInfo: React.FC<Props> = ({ id, className }) => {
  return (
    <div id={`${id}-section`} className={className}>
      <div
        id="footer-copyRight-section"
        className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4 lg:grid-cols-12 lg:gap-6 justify-between"
      >
        <p
          id="footer-copyRight-text"
          className={clsx(
            'font-iran-yekan font-small text-sm leading-6 md:leading-8 col-span-4 md:col-span-6 text-center md:text-right ',
            IranYekan.variable,
          )}
        >
          تمام حقوق این سایت متعلق به شرکت افاق امداد خودرو اصفهان است.
        </p>
        <div
          id="footer-terms-policies-section"
          className="col-span-4 md:col-span-6 flex items-center justify-center md:justify-end"
        >
          <ul
            id="footer-terms-policies-list"
            className=" flex flex-wrap justify-start items-center gap-4 text-xs  lg:justify-end list-none"
          >
            {siteConfig.footerSiteInfo.map((item) => (
              <li
                id={`footer-${item.id}-section`}
                key={item.id}
                className="flex items-center"
              >
                <Link
                  id={`footer-${item.id}-link`}
                  href={item.href}
                  target={item.target}
                  className={clsx(
                    'font-iran-yekan font-small text-sm transition-transform hover:text-primary-500 text-primary-foregroundLight',
                    IranYekan.variable,
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
