import React from 'react';
import { Link } from '@nextui-org/link';
import { CommonComponentProps, OutSideLinkProps } from '@/types';
type FooterBlogProps = CommonComponentProps & {
  footerBlogLinks: OutSideLinkProps[];
};
export const FooterBlogLinks: React.FC<FooterBlogProps> = ({
  id,
  className,
  footerBlogLinks,
}) => {
  return (
    <div id={`${id}-section`} className={`${className} `}>
      <p id={`${id}-list`} className="font-iransans font-bold">
        بلاگ
      </p>
      <ul id={`${id}-list`} className=" mt-6 space-y-4 text-sm list-none">
        {footerBlogLinks.map((item) => (
          <li key={item.id} id={`${id}-list${item.id}-section`}>
            <Link
              id={`${id}-${item.id}-link`}
              href={item.href}
              target={item.target}
              className={`font-iransans leading-6 md:leading-8 items-center justify-start text-sm sm:text-medium w-auto sm:w-full transition-transform hover:text-primary-500 ${
                footerBlogLinks[footerBlogLinks.length - 1] === item
                  ? 'text-primary-500 hover:opacity-75'
                  : 'text-primary-foregroundLight'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li id={`${id}-more-section`}>
          <Link
            id={`${id}-more-link`}
            href="#"
            target="_blank"
            className={
              'font-iransans leading-6 md:leading-8 items-center justify-start text-sm sm:text-medium w-auto sm:w-full transition-transform hover:text-primary-500 text-primary-800 dark:text-primary-400'
            }
          ></Link>
        </li>
      </ul>
    </div>
  );
};
