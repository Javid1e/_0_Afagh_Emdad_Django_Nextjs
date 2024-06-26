'use client';

import React, { FC } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { SwitchProps, useSwitch } from '@nextui-org/switch';
import { useTheme } from 'next-themes';
import { useIsSSR } from '@react-aria/ssr';
import clsx from 'clsx';
import { SunFilledIcon, MoonFilledIcon } from '@/components/Utils/icons';

export interface ThemeSwitchProps {
  id?: string;
  className?: string;
  classNames?: SwitchProps['classNames'];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  id,
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const { slots, isSelected, getBaseProps, getInputProps, getWrapperProps } =
    useSwitch({
      isSelected: theme === 'light' || isSSR,
      'aria-label': `Switch to ${theme === 'light' || isSSR ? 'dark' : 'light'} mode`,
      onChange,
    });

  return (
    <label
      id={`${id}-label`}
      {...getBaseProps({
        className: clsx(
          'px-px transition-opacity hover:opacity-80 cursor-pointer',
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        id={`${id}-label-dev`}
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              'w-auto h-auto',
              'bg-transparent',
              'rounded-lg',
              'flex items-center justify-center',
              'group-data-[selected=true]:bg-transparent',
              '!text-default-500',
              'pt-px',
              'px-0',
              'mx-0',
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon id={`${id}-label-dev-light`} size={22} />
        ) : (
          <MoonFilledIcon id={`${id}-label-dev-dark`} size={22} />
        )}
      </div>
    </label>
  );
};
