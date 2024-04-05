import React from 'react';
import { HeartFilledIcon } from '@/components/utils/icons';
interface Props {
  id?: string;
  className?: string;
}
export const FooterBrand: React.FC<Props> = ({ id, className }) => {
  return (
    <div id={`${id}-section`} className={className}>
      <div id={`${id}-content-title`} className="flex flex-row items-center ">
        <h2
          id={`${id}-content-title-name`}
          className="font-iransans text-2xl font-bold "
        >
          افاق امداد
        </h2>
        <HeartFilledIcon id={`${id}-content-title-heart`} color="red" />
      </div>
      <p id={`${id}-content-description`} className="font-iransans mt-4 ">
        در کنار شما در تمامی لحظات برای امداد رسانی
      </p>
    </div>
  );
};
