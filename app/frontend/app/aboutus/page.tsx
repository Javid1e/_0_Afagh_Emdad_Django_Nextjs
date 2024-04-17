import React from 'react';
import AboutUs from '@/components/Routes/AboutUs/AboutUs';
import Header from '@/components/Layouts/Header/Header';
import { Footer } from '@/components/Layouts/Footer/Footer';
import { siteConfig } from '@/config/site';

const page = async () => {
  return (
    <div className=" relative flex flex-col h-full">
      <Header
        headerActionLinks={siteConfig.headerActionsLinks}
        headerNavigationLinks={siteConfig.headerNavigationLinks}
        headerMenuLinks={siteConfig.headerMenuLinks}
      />
      <main className="container mx-auto pt-16 px-6 flex-grow">
        <AboutUs namedImageLinks={siteConfig.aboutUsCities} />
      </main>
      <Footer
        id="about-footer"
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
export default page;
