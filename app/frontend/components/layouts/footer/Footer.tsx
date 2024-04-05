import React from 'react';
import { FooterSocials } from '@/components/layouts/footer/FooterSocials';
import { FooterSiteInfo } from '@/components/layouts/footer/FooterSiteInfo';
import { FooterBlogLinks } from '@/components/layouts/footer/FooterBlogLinks';
import { FooterOtherServices } from '@/components/layouts/footer/FooterOtherServices';
import { FooterCustomerLinks } from '@/components/layouts/footer/FooterCustomerLinks';
import { FooterBrandLinks } from '@/components/layouts/footer/FooterBrandLinks';
import { FooterBrand } from '@/components/layouts/footer/FooterBrand';
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <footer
      id="footer-section"
      className="bg-background/70 shadow-xl rounded-t-lg backdrop-blur-xl backdrop-saturate-150 mt-16"
    >
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
            />
            <FooterCustomerLinks
              id="footer-customers-links"
              className="col-span-4 md:col-span-3"
            />
            <FooterOtherServices
              id="footer-services-links"
              className="col-span-4 md:col-span-3"
            />
            <FooterBlogLinks
              id="footer-blog-links"
              className="col-span-4 md:col-span-3"
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
      />
      <FooterSiteInfo
        id="footer-site-info"
        className="lg:flex-grow-0 lg:items-start lg:gap-16 mt-4 p-4 border-t border-gray-800"
      />
    </footer>
  );
};
