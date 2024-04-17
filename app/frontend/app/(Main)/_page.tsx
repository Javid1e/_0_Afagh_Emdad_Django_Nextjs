import React from 'react';
import { AboutUs } from '@/components/Layouts/main/AboutUs';
import Header from '@/components/Layouts/Header/Header';
import { Footer } from '@/components/Layouts/Footer/Footer';
import { siteConfig } from '@/config/site';

export const RoutePage = () => {
  return (
    <div className="relative flex flex-col  h-full">
      <Header
        id="landing-header-navbar"
        headerActionLinks={siteConfig.headerActionsLinks}
        headerNavigationLinks={siteConfig.landingHeaderNavigationLinks}
        headerMenuLinks={siteConfig.landingHeaderMenuLinks}
      />
      <main className="container mx-auto pt-16 px-6 flex-grow">
        <AboutUs
          id="about-us"
          className="drop-shadow-2xl flex flex-col items-stretch content-center flex-warp justify-space-evenly border-b-2 border-primary-600"
        />
      </main>
      <Footer
        id="landing-footer"
        className="bg-background/70 shadow-xl rounded-t-lg backdrop-blur-xl backdrop-saturate-150 mt-16"
        footerBrandLinks={siteConfig.footerBrandLinks}
        footerCustomerLinks={siteConfig.footerCustomerLinks}
        footerOtherServicesLinks={siteConfig.footerServiceLinks}
        footerBlogLinks={siteConfig.footerBlogLinks}
        footerSocialLinks={siteConfig.footerSocial}
        footerSiteInfoLinks={siteConfig.footerSiteInfo}
      />
    </div>
  );
};
