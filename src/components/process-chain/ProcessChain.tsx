import  { FC } from 'react';
import clsx from 'clsx';
import { ProcessChainProps } from './processChain.interface';
import { Layout } from '../layout';
import { HeaderLongComponent } from '../header-long-component';
import { Scrollbar } from '../scrollbar';
import { LinkMode, LinkTarget, Link } from '@zepdev/design-system-component-library-react';

export const ProcessChain: FC<ProcessChainProps> = ({
  contentItems,
  headline,
  linkChain,
  ...headerProps
}) => {
  return (
    <Layout className="zep-flex zep-flex-col md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5 zep-w-full sm:zep-px-1">
      {headline && <HeaderLongComponent headline={headline} {...headerProps} />}
      <Scrollbar scrollOrientation="horizontal" controlId="process-chain-scrollbar" className="zep-w-full">
        <div className="xl:zep-w-full zep-w-fit zep-flex zep-gap-2 md:zep-gap-2.5">
          {contentItems.map((obj, idx) => (
            <div key={idx} className={clsx('xl:zep-grow xl:zep-w-auto zep-min-w-[286px]')}>
              <div className={clsx('zep-relative zep-bg-primary-default zep-text-greyscale-0 xl:zep-max-w-full zep-max-w-[300px] zep-p-1.5 zep-h-full')}>
                <div className={clsx('zep-flex', 'zep-flex-col', 'zep-items-start')}>
                  <h4
                    data-testid="process-chain-headline"
                    className="zep-typography-headlineSM-fluid-cqi  zep-break-all zep-mb-1"
                  >
                    {obj.headline}
                  </h4>

                  {linkChain
                ? 
                obj.linkItems && obj.linkItems.map((item, index) => (
                    <div key={index} className={clsx({'zep-mt-1.5': index !== 0})}>
                      <Link
                        label="inline link"
                        iconPlacement="before"
                        icon={item.icon}
                        href={item.link}
                        target={LinkTarget.Blank}
                        mode={LinkMode.Inline}
                      ></Link>
                    </div>
                  ))
                
                  :
                  <ul className="zep-pl-1.5">
                    {obj.listItems && obj.listItems.map((item, index) => (
                      <li key={index} className="zep-list-disc">{item}</li>
                    ))}
                  </ul>
      }
                </div>
                {idx < contentItems.length - 1 && (
                  <div
                    className="zep-absolute zep-left-auto -zep-right-1 zep-border-t-transparent zep-border-b-transparent zep-border-t-[18px] zep-border-b-[18px] zep-top-1/3 zep-border-l-[16px] zep-border-l-primary-default zep-translate-y-1/2"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </Scrollbar>
    </Layout>
  );
};
