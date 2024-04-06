import React from 'react';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { IranYekan } from '@/config/fonts';
import Image from 'next/image';
interface Props {
  id?: string;
  className?: string;
}
export const AboutUs: React.FC<Props> = ({ id, className }) => {
  return (
    <div id={`${id}-section`} className={className}>
      <div
        id={`${id}-content-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10 py-2 sm:py-6 lg:py-10"
      >
        <div
          id={`${id}-content-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div
            id={`${id}-content-info`}
            className="col-span-4 md:col-span-3 lg:col-span-6"
          >
            <span
              id={`${id}-content-info-label`}
              className="border-b-2 border-primary-600"
            >
              در باره ما
            </span>
            <h2
              id={`${id}-content-info-title`}
              className="my-4 font-bold text-3xl sm:text-4xl"
            >
              شرکت امداد خودرو و یدک کش افاق اصفهان
            </h2>
            <p
              id={`${id}-content-info-description`}
              className={`font-iran-yekan font-medium leading-6 md:leading-8 ${IranYekan.variable}`}
            >
              مجموعه افاق امداد با بیش از 10 سابقه درخشان در زمینه ارائه خدمات
              امداد خودرو و یدک کش در اصفهان و جاده های حومه، همواره در تلاش
              بوده تا با ارائه خدمات باکیفیت و مقرون به صرفه به صورت شبانه روزی
              و 24 ساعته، در هر زمان و مکانی که به کمک نیاز دارید، در کنار شما
              خواهد بود.
            </p>

            <div
              id={`${id}-content-info-button-group`}
              className="w-auto flex flex-row justify-center items-center gap-4  md:justify-start sm:gap-4 mt-4"
            >
              <Button
                id={`${id}-content-info-more-button`}
                className="w-auto  border-primary-500 items-center"
                variant="ghost"
              >
                <Link
                  id={`${id}-content-info-more-button-link`}
                  className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foregroundLight"
                  href="/aboutus"
                >
                  اطلاعات بیشتر
                </Link>
              </Button>
              <Button
                id={`${id}-content-info-request-button`}
                className="w-auto  bg-primary-500"
              >
                <Link
                  id={`${id}-content-info-request-button-link`}
                  className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                  href="/request-service"
                >
                  درخواست امداد
                </Link>
              </Button>
            </div>
          </div>
          {/*//Todo: Dynamic Rendering Images with alts*/}
          <div
            id={`${id}-content-img-container`}
            className="col-span-4 md:col-span-3 lg:col-span-6"
          >
            <Image
              id={`${id}-content-img`}
              className="w-full"
              width={452}
              height={282.5}
              src="/media/imgs/hamrah/handDrawn/hm_1.png"
              alt="ssss"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
