import Header from '@/components/Layouts/Header/Header';
import { siteConfig } from '@/config/site';
import { Footer } from '@/components/Layouts/Footer/Footer';
import React from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="relative flex flex-col h-full">
      <Header
        id="landing-header-navbar"
        headerActionLinks={siteConfig.headerActionsLinks}
        headerNavigationLinks={siteConfig.landingHeaderNavigationLinks}
        headerMenuLinks={siteConfig.landingHeaderMenuLinks}
      />
      <main className="container mx-auto pt-16 px-6 flex-grow">
        <div>My Post: {params.slug}</div>
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
}
