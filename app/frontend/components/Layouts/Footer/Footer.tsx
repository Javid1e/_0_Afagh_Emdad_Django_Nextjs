import React from 'react';
import { FooterSocials } from '@/components/Layouts/Footer/FooterSocials';
import { FooterSiteInfo } from '@/components/Layouts/Footer/FooterSiteInfo';
import { FooterBlogLinks } from '@/components/Layouts/Footer/FooterBlogLinks';
import { FooterOtherServices } from '@/components/Layouts/Footer/FooterOtherServices';
import { FooterCustomerLinks } from '@/components/Layouts/Footer/FooterCustomerLinks';
import { FooterBrandLinks } from '@/components/Layouts/Footer/FooterBrandLinks';
import { FooterBrand } from '@/components/Layouts/Footer/FooterBrand';
import style from './Footer.module.css';
import {
  CommonComponentProps,
  OutSideLinkProps,
  OutSideNamedLinkProps,
} from '@/types';

type FooterProps = CommonComponentProps & {
  footerBrandLinks: OutSideLinkProps[];
  footerCustomerLinks: OutSideLinkProps[];
  footerOtherServicesLinks: OutSideLinkProps[];
  footerBlogLinks: OutSideLinkProps[];
  footerSocialLinks: OutSideNamedLinkProps[];
  footerSiteInfoLinks: OutSideLinkProps[];
};
export const Footer: React.FC<FooterProps> = ({
  id,
  className,
  footerBrandLinks,
  footerCustomerLinks,
  footerOtherServicesLinks,
  footerBlogLinks,
  footerSocialLinks,
  footerSiteInfoLinks,
}) => {
  return (
    <footer id={`${id}-section`} className={className}>
      <div
        id="footer-section-container"
        className={`${style.new_footer_top} mx-auto px-4 py-8 sm:px-6 lg:px-8`}
      >
        <div
          id="footer-section-content"
          className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10 py-2 sm:py-6 lg:py-10"
        >
          <div
            id="footer-section-content-grid"
            className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
          >
            <FooterBrand id="footer-brand" className="col-span-full" />
            <FooterBrandLinks
              id="footer-brand-links"
              className="col-span-4 md:col-span-3"
              footerBrandLinks={footerBrandLinks}
            />
            <FooterCustomerLinks
              id="footer-customers-links"
              className="col-span-4 md:col-span-3"
              footerCustomerLinks={footerCustomerLinks}
            />
            <FooterOtherServices
              id="footer-services-links"
              className="col-span-4 md:col-span-3"
              footerOtherServiceLinks={footerOtherServicesLinks}
            />
            <FooterBlogLinks
              id="footer-blog-links"
              className="col-span-4 md:col-span-3"
              footerBlogLinks={footerBlogLinks}
            />
          </div>
        </div>
        <div id="footer-section-bg-container" className="mt-40">
          <div id="footer-section-bg-content" className={style.footer_bg}>
            <div
              id="footer-section-bg-one"
              className={style.footer_bg_one}
            ></div>
            <div
              id="footer-section-bg-two"
              className={style.footer_bg_two}
            ></div>
          </div>
        </div>
      </div>
      <FooterSocials
        id="footer-socials"
        className="col-span-4 md:col-span-6 lg:col-span-12"
        footerSocialLinks={footerSocialLinks}
      />
      <FooterSiteInfo
        id="footer-site-info"
        className="lg:flex-grow-0 lg:items-start lg:gap-16 mt-4 p-4 border-t border-gray-800"
        footerSiteInfoLinks={footerSiteInfoLinks}
      />
    </footer>
  );
};
