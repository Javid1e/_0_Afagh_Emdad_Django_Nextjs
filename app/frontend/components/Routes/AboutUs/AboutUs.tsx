'use client';
import React from 'react';
import { IranYekan } from '@/config/fonts';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import { CommonComponentProps, NamedImageLinkProps } from '@/types';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { useRouter } from 'next/navigation';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import HorizontalLine from '@/components/Utils/HorizontalLine';
type AboutUsProps = CommonComponentProps & {
  namedImageLinks: NamedImageLinkProps[];
};
const AboutUs: React.FC<AboutUsProps> = ({
  id,
  className,
  namedImageLinks,
}) => {
  const router = useRouter();
  return (
    <div id={`${id}-section`} className={className}>
      <div
        id={`${id}-content-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10 "
      >
        <div
          id={`${id}-content-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div id={`${id}-content-info`} className="col-span-full">
            <h2
              id={`${id}-content-info-title`}
              className="font-bold text-2xl sm:text-3xl md:text-4xl"
            >
              شرکت امداد خودرو و یدک کش افاق اصفهان
            </h2>
            <p
              id={`${id}-content-info-description`}
              className={`mt-2 sm:mt-4 md:mt-6 lg:mt-8 font-iran-yekan font-bold text-medium md:text-lg leading-6 md:leading-8 ${IranYekan.variable}`}
            >
              مجموعه افاق امداد با بیش از 10 سابقه درخشان در زمینه ارائه خدمات
              امداد خودرو و یدک کش در اصفهان و جاده های حومه، همواره در تلاش
              بوده تا با ارائه خدمات باکیفیت و مقرون به صرفه به صورت شبانه روزی
              و 24 ساعته، در هر زمان و مکانی که به کمک نیاز دارید، در کنار شما
              خواهد بود.
            </p>
          </div>
          <div id={`${id}-content-img-container`} className="col-span-full">
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
      <div
        id={`${id}-content-actions-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10"
      >
        <div
          id={`${id}-content-actions-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div
            id={`${id}-content-actions-button-group`}
            className="col-span-full w-auto flex flex-row justify-center items-center gap-4  md:justify-start sm:gap-4 mt-4"
          >
            <Button
              id={`${id}-content-actions-request-button`}
              className="w-auto bg-primary-500"
              endContent={<FaLocationDot />}
            >
              <Link
                id={`${id}-content-actions-request-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="/request-service"
              >
                درخواست امداد
              </Link>
            </Button>
            <Button
              id={`${id}-content-actions-call-button`}
              className="w-auto bg-success-600 items-center"
              endContent={<IoCall />}
            >
              <Link
                id={`${id}-content-actions-call-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="tel:09134050819"
              >
                09134050819
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <HorizontalLine />
      <div
        id={`${id}-content-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10 "
      >
        <div
          id={`${id}-content-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div id={`${id}-content-info`} className="col-span-full">
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
          </div>
          <div id={`${id}-content-img-container`} className="col-span-full">
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
      <div
        id={`${id}-content-actions-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10"
      >
        <div
          id={`${id}-content-actions-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div
            id={`${id}-content-actions-button-group`}
            className="col-span-full w-auto flex flex-row justify-center items-center gap-4  md:justify-start sm:gap-4 mt-4"
          >
            <Button
              id={`${id}-content-actions-request-button`}
              className="w-auto bg-primary-500"
              endContent={<FaLocationDot />}
            >
              <Link
                id={`${id}-content-actions-request-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="/request-service"
              >
                درخواست امداد
              </Link>
            </Button>
            <Button
              id={`${id}-content-actions-call-button`}
              className="w-auto bg-success-600 items-center"
              endContent={<IoCall />}
            >
              <Link
                id={`${id}-content-actions-call-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="tel:09134050819"
              >
                09134050819
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <HorizontalLine />
      <div
        id={`${id}-content-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10 py-2 sm:py-6 lg:py-10 "
      >
        <div
          id={`${id}-content-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div id={`${id}-content-info`} className="col-span-full">
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
          </div>
          <div id={`${id}-content-img-container`} className="col-span-full">
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
      <div
        id={`${id}-content-actions-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10"
      >
        <div
          id={`${id}-content-actions-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div
            id={`${id}-content-actions-button-group`}
            className="col-span-full w-auto flex flex-row justify-center items-center gap-4  md:justify-start sm:gap-4 mt-4"
          >
            <Button
              id={`${id}-content-actions-request-button`}
              className="w-auto bg-primary-500"
              endContent={<FaLocationDot />}
            >
              <Link
                id={`${id}-content-actions-request-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="/request-service"
              >
                درخواست امداد
              </Link>
            </Button>
            <Button
              id={`${id}-content-actions-call-button`}
              className="w-auto bg-success-600 items-center"
              endContent={<IoCall />}
            >
              <Link
                id={`${id}-content-actions-call-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="tel:09134050819"
              >
                09134050819
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <HorizontalLine />
      <div
        id={`${id}-content-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10 py-2 sm:py-6 lg:py-10 "
      >
        <div
          id={`${id}-content-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div id={`${id}-content-info`} className="col-span-full">
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
          </div>
          <div id={`${id}-content-img-container`} className="col-span-full">
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
      <div
        id={`${id}-content-actions-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10"
      >
        <div
          id={`${id}-content-actions-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div
            id={`${id}-content-actions-button-group`}
            className="col-span-full w-auto flex flex-row justify-center items-center gap-4  md:justify-start sm:gap-4 mt-4"
          >
            <Button
              id={`${id}-content-actions-request-button`}
              className="w-auto bg-primary-500"
              endContent={<FaLocationDot />}
            >
              <Link
                id={`${id}-content-actions-request-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="/request-service"
              >
                درخواست امداد
              </Link>
            </Button>
            <Button
              id={`${id}-content-actions-call-button`}
              className="w-auto bg-success-600 items-center"
              endContent={<IoCall />}
            >
              <Link
                id={`${id}-content-actions-call-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="tel:09134050819"
              >
                09134050819
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <HorizontalLine />
      <div
        id={`${id}-content-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10 py-2 sm:py-6 lg:py-10 "
      >
        <div
          id={`${id}-content-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div id={`${id}-content-info`} className="col-span-full">
            <h3
              id={`${id}-content-info-title`}
              className="my-4 font-bold text-3xl sm:text-4xl"
            >
              شرکت امداد خودرو و یدک کش افاق اصفهان
            </h3>
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
          </div>
          <div id={`${id}-content-img-container`} className="col-span-full">
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
      <div
        id={`${id}-content-actions-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10"
      >
        <div
          id={`${id}-content-actions-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div
            id={`${id}-content-actions-button-group`}
            className="col-span-full w-auto flex flex-row justify-center items-center gap-4  md:justify-start sm:gap-4 mt-4"
          >
            <Button
              id={`${id}-content-actions-request-button`}
              className="w-auto bg-primary-500"
              endContent={<FaLocationDot />}
            >
              <Link
                id={`${id}-content-actions-request-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="/request-service"
              >
                درخواست امداد
              </Link>
            </Button>
            <Button
              id={`${id}-content-actions-call-button`}
              className="w-auto bg-success-600 items-center"
              endContent={<IoCall />}
            >
              <Link
                id={`${id}-content-actions-call-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="tel:09134050819"
              >
                09134050819
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <HorizontalLine />
      <div
        id={`${id}-content-cities-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10 py-2 sm:py-6 lg:py-10 "
      >
        <div id={`${id}-content-cities`} className="col-span-full">
          <h3
            id={`${id}-content-info-title`}
            className="my-4 text-center md:text-right font-bold text-3xl sm:text-4xl"
          >
            مناطق تحت پوشش خدمات امداد خودرو
          </h3>
          <p
            id={`${id}-content-info-description`}
            className={`font-iran-yekan font-medium sm:font-bold text-center md:text-right leading-6 md:leading-8 ${IranYekan.variable}`}
          >
            خدمات آفاق امداد در اصفهان و تمامی شهرستان ها به صورت ۲۴ ساعته است.
          </p>
        </div>
        <div
          id={`${id}-content-cities-container`}
          className="flex items-center justify-center mt-4 sm:mt-8 lg:mt-12"
        >
          <div
            id={`${id}-content-cities-flex-grid`}
            className="w-full grid grid-cols-4 gap-4 md:grid-cols-8 md:gap-4 lg:grid-cols-12 lg:gap-6"
          >
            {namedImageLinks.map((item) => (
              <div
                className="w-full col-span-2 lg:col-span-3 flex items-center justify-center"
                key={item.id}
              >
                <Link
                  id={`${id}-content-cities-${item.href}-link`}
                  className="w-full"
                  href={`/aboutus/${item.href}`}
                  key={item.id}
                >
                  <Card
                    id={`${id}-content-cities-${item.href}-card`}
                    shadow="lg"
                    key={item.id}
                    isPressable
                    className="bg-background/70 shadow-xl backdrop-blur-xl backdrop-saturate-150 w-full drop-shadow-lg "
                  >
                    <CardBody
                      id={`${id}-content-cities-${item.href}-card-body`}
                      className=" overflow-visible p-4 flex items-center justify-center"
                    >
                      <Image
                        id={`${id}-content-cities-${item.href}-card-body-image`}
                        as={NextImage}
                        shadow="sm"
                        radius="lg"
                        width={500}
                        height={140}
                        alt={item.alt}
                        className="object-cover h-[140px]"
                        src={item.src}
                      />
                    </CardBody>
                    <CardFooter
                      id={`${id}-content-cities-${item.href}-card-footer`}
                      className="flex flex-col items-center justify-center"
                    >
                      <p
                        id={`${id}-content-cities-${item.href}-card-footer-title`}
                        className="text-center"
                      >
                        آفاق امداد خودرو
                      </p>
                      <p
                        id={`${id}-content-cities-${item.href}-card-footer-text`}
                        className="text-center"
                      >
                        {item.label}
                      </p>
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <HorizontalLine />
      <div
        id={`${id}-content-actions-flex`}
        className="flex flex-col flex-wrap fex-grow-0 mt-2 sm:mt-6 lg:mt-10"
      >
        <div
          id={`${id}-content-actions-flex-grid`}
          className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-4  lg:grid-cols-12 lg:gap-6"
        >
          <div id={`${id}-content-actions`} className="col-span-full">
            <h3
              id={`${id}-content--actions-title`}
              className="my-4 font-bold text-3xl sm:text-4xl"
            >
              آفاق امداد آماده برای خدمت رسانی
            </h3>
            <p
              id={`${id}-content-actions-description`}
              className={`font-iran-yekan font-medium sm:font-bold text-center sm:text-start leading-6 md:leading-8 ${IranYekan.variable}`}
            >
              برای دریافت خدمت اقدام کنید.
            </p>
          </div>
          <div
            id={`${id}-content-actions-button-group`}
            className="col-span-full w-auto flex flex-row justify-center items-center gap-4  md:justify-start sm:gap-4 mt-4"
          >
            <Button
              id={`${id}-content-actions-request-button`}
              className="w-auto bg-primary-500"
              endContent={<FaLocationDot />}
            >
              <Link
                id={`${id}-content-actions-request-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="/request-service"
              >
                درخواست امداد
              </Link>
            </Button>
            <Button
              id={`${id}-content-actions-call-button`}
              className="w-auto bg-success-600 items-center"
              endContent={<IoCall />}
            >
              <Link
                id={`${id}-content-actions-call-button-link`}
                className="leading-6 md:leading-8 transition hover:opacity-75 items-center justify-center font-small sm:font-medium w-auto sm:w-full text-primary-foreground"
                href="tel:09134050819"
              >
                09134050819
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
