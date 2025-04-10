import { FunctionalIcon, Link, LinkMode } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { BreadcrumbProps } from './Breadcrumb.interface';

export const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<boolean>(items?.length < 3);

  if (items.length === 1) {
    return null;
  }

  return (
    <div className="zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[120px] zep-py-0.5 md:zep-py-0.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center">
      <div className="zep-block md:zep-hidden">
        {expanded ? (
          <div className="zep-flex zep-flex-wrap zep-gap-0.25 zep-items-center">
            {items.map((item, index) => (
              <div key={item?.title} className="zep-flex zep-items-center zep-gap-0.25">
                {index + 1 === items.length ? (
                  <p className="zep-typography-supportText zep-text-typography-dark-100">{item.title}</p>
                ) : (
                  <Link
                    label={item?.title}
                    href={item.path}
                    mode={LinkMode.Standalone}
                    className={clsx('zep-typography-supportText zep-text-typography-dark-100')}
                  />
                )}

                {index + 1 !== items.length && <FunctionalIcon color="#FBFBFBB2" className='zep-h-[18px] zep-w-[18px]' name="chevron-mini-right" />}
              </div>
            ))}
          </div>
        ) : (
          <div className="zep-flex zep-gap-0.25">
            <div className="zep-flex zep-items-center zep-gap-0.25">
              <Link
                label={items[0]?.title}
                href={items[0].path}
                mode={LinkMode.Standalone}
                className={clsx('zep-typography-supportText zep-text-typography-dark-100')}
              />
              <FunctionalIcon color="#262626" className='zep-h-[18px] zep-w-[18px]' name="chevron-mini-right" />
            </div>

            <div onClick={() => setExpanded(true)} className="zep-flex zep-items-center zep-gap-0.25">
              <div className="zep-bg-[#484848] zep-px-[10px] zep-text-typography-light-100 zep-rounded-4">...</div>
              <FunctionalIcon color="#262626" className='zep-h-[18px] zep-w-[18px]' name="chevron-mini-right" />
            </div>

            <p className="zep-typography-supportText zep-text-typography-dark-100">{items[items.length - 1]?.title}</p>
          </div>
        )}
      </div>
      <div className="zep-hidden md:zep-block">
        <div className="zep-flex zep-gap-0.25 zep-items-center">
          {items.map((item, index) => (
            <div key={item?.title} className="zep-flex zep-items-center zep-gap-0.25">
              {index + 1 === items.length ? (
                <span className="zep-typography-supportText zep-text-typography-dark-100">{item.title}</span>
              ) : (
                <Link
                  label={item?.title}
                  href={item.path}
                  mode={LinkMode.Standalone}
                  className={clsx('zep-typography-supportText zep-text-typography-dark-100')}
                />
              )}
              {index + 1 !== items.length && <FunctionalIcon color="#262626" className='zep-h-[18px] zep-w-[18px]' name="chevron-mini-right" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
