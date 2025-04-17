import { Link, LinkMode, LinkTarget, List } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { Scrollbar } from '../scrollbar';

export const ProcessChain = ({ linkChain, contentItems, id, headline, ...headerProps }) => {
  return (
    <Layout id={id} className="zep-flex zep-flex-col md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5 zep-w-full">
      {headline && <HeaderLongComponent headline={headline} {...headerProps} />}
      <Scrollbar scrollOrientation="horizontal" controlId="process-chain-scrollbar" className="zep-w-full">
        <div className="zep-w-fit lg:zep-w-full zep-flex zep-items-stretch zep-gap-2 lg:zep-gap-1.5">
          {contentItems.map((obj, idx) => (
            <div key={idx} className="zep-w-[300px] lg:zep-w-auto lg:zep-basis-1/5 lg:zep-flex-shrink lg:zep-flex-grow">
              <div
                className={clsx('zep-relative zep-bg-indigo-500 zep-text-greyscale-0 zep-w-full zep-p-1.5 zep-h-full')}
              >
                <div className={clsx('zep-flex', 'zep-flex-col', 'zep-items-start', 'zep-gap-1')}>
                  <h4
                    data-testid="process-chain-headline"
                    className="zep-typography-headlineSM-fluid-cqi  zep-hyphens-auto zep-break-normal"
                  >
                    {obj.headline}
                  </h4>
                  {linkChain ? (
                    <div className="zep-flex-col zep-flex zep-gap-0.5">
                      {obj.linkItems.map((item, index) => (
                        <Link
                          label="inline link"
                          iconPlacement="before"
                          key={index}
                          icon={item.icon}
                          href={item.link}
                          target={LinkTarget.Blank}
                          mode={LinkMode.Inline}
                        ></Link>
                      ))}
                    </div>
                  ) : (
                    <List className="zep-flex-col zep-flex zep-gap-0.5" type="bullet">
                      {obj.listItems.map((item, index) => (
                        <List.Item className="zep-py-[0] zep-h-auto" key={`${item}-${index}`}>
                          {item}
                        </List.Item>
                      ))}
                    </List>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Scrollbar>
    </Layout>
  );
};
