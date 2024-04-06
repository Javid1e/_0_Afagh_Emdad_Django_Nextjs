export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'امداد خودرو افاق',
  description: 'خدمات امدادی و یدک کش خودرو در استان اصفهان و جاده های حومه',
  landingHeaderNavigationLinks: [
    { label: 'درباره ما', href: '#aboutus' },
    { label: 'خدمات', href: '#services' },
    { label: 'گالری', href: '#gallery' },
    { label: 'نظرات مشتریان', href: '#reviews' },
    { label: 'سوالات رایج', href: '#faq' },
    { label: 'تماس با ما', href: '#contactus' },
  ],
  headerNavigationLinks: [
    { label: 'درباره ما', href: '/aboutus' },
    { label: 'خدمات', href: '/services' },
    { label: 'گالری', href: '/gallery' },
    { label: 'نظرات مشتریان', href: '/reviews' },
    { label: 'سوالات رایج', href: '/faq' },
    { label: 'تماس با ما', href: '/contactus' },
  ],
  landingHeaderMenuLinks: [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'درباره ما', href: '#aboutus' },
    { label: 'خدمات', href: '#services' },
    { label: 'گالری', href: '#gallery' },
    { label: 'نظرات مشتریان', href: '#reviews' },
    { label: 'سوالات رایج', href: '#faq' },
    { label: 'تماس با ما', href: '#contactus' },
  ],
  headerMenuLinks: [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'درباره ما', href: '/aboutus' },
    { label: 'خدمات', href: '/services' },
    { label: 'گالری', href: '/gallery' },
    { label: 'نظرات مشتریان', href: '/reviews' },
    { label: 'سوالات رایج', href: '/faq' },
    { label: 'تماس با ما', href: '/contactus' },
  ],
  headerActionsLinks: [
    { id: 'login', label: 'ورود', href: '/login', target: '_blank' },
    { id: 'register', label: 'ثبت نام', href: '/register', target: '_blank' },
  ],
  footerBrandLinks: [
    { id: 'about-us', label: 'درباره ما', href: '#aboutus', target: '_blank' },
    { id: 'services', label: 'خدمات', href: '#services', target: '_blank' },
    { id: 'gallery', label: 'گالری', href: '#gallery', target: '_blank' },
  ],

  footerCustomerLinks: [
    { id: 'faqs', label: 'پرسش پاسخ', href: '#faq', target: '_blank' },
    { id: 'reviews', label: 'بازخورد ها', href: '#reviews', target: '_blank' },
    { id: 'support', label: 'پشتیبانی', href: '/support', target: '_blank' },
  ],

  footerServiceLinks: [
    { id: 'news', label: 'اخبار', href: '/news', target: '_blank' },
    {
      id: 'complaint',
      label: 'ثبت شکایت',
      href: '/complaint',
      target: '_blank',
    },
    {
      id: 'contact-us',
      label: 'تماس با ما',
      href: '#contactus',
      target: '_blank',
    },
  ],

  footerBlogLinks: [
    { id: 'post-1', label: 'تعویض باتری', href: '#changeb', target: '_blank' },
    { id: 'post-2', label: 'تعویض لنت', href: '#changel', target: '_blank' },
    { id: 'blog', label: 'پست های بیشتر', href: '/blog', target: '_blank' },
  ],
  //TODO: Update social links
  footerSocial: [
    {
      id: 'rubika',
      label: 'RubikaIcon',
      href: '#rubika',
      name: 'روبیکا',
      target: '_blank',
    },
    {
      id: 'whatsapp',
      label: 'WhatsAppIcon',
      href: '#whatsapp',
      name: 'واتساپ',
      target: '_blank',
    },
    {
      id: 'instagram',
      label: 'InstagramIcon',
      href: '#instagram',
      name: 'اینستاگرام',
      target: '_blank',
    },
    {
      id: 'telegram',
      label: 'TelegramIcon',
      href: '#telegram',
      name: 'تلگرام',
      target: '_blank',
    },
    {
      id: 'bale',
      label: 'BaleIcon',
      href: '#bale',
      name: 'بله',
      target: '_blank',
    },
  ],

  footerSiteInfo: [
    { id: 'terms', label: 'شرایط استفاده', href: '/terms', target: '_blank' },
    {
      id: 'developer',
      label: 'سایت از مجموعه ی دانا',
      href: 'https://www.danadev.com',
      target: '_blank',
    },
    {
      id: 'policies',
      label: 'حریم خصوصی',
      href: '/policies',
      target: '_blank',
    },
  ],
};
