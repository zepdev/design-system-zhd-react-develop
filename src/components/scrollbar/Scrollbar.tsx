import clsx from 'clsx';
import React, { FC, useEffect, useRef, useState } from 'react';
import { ScrollbarProps } from './Scrollbar.interface';

export const Scrollbar: FC<ScrollbarProps> = ({
  children,
  className,
  controlId,
  dataTestId = 'zep-scrollbar',
  theme = 'dark',
  scrollOrientation = 'both',
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollXTrackRef = useRef<HTMLDivElement>(null);
  const scrollYTrackRef = useRef<HTMLDivElement>(null);
  const scrollYThumbRef = useRef<HTMLDivElement>(null);
  const scrollXThumbRef = useRef<HTMLDivElement>(null);
  const observer = useRef<ResizeObserver | null>(null);

  const [thumbWidth, setThumbWidth] = useState(20);
  const [thumbHeight, setThumbHeight] = useState(20);
  const [isYDragging, setIsYDragging] = useState(false);
  const [isXDragging, setIsXDragging] = useState(false);
  const [xScrollStartPosition, setXScrollStartPosition] = useState<number>(0);
  const [yScrollStartPosition, setYScrollStartPosition] = useState<number>(0);
  const [initialContentScrollX, setInitialContentScrollX] = useState<number>(0);
  const [initialContentScrollY, setInitialContentScrollY] = useState<number>(0);
  const [isXHovering, setIsXHovering] = useState(false);
  const [isYHovering, setIsYHovering] = useState(false);

  const scrollbarTheme = {
    light: {
      thumb: 'zep-bg-greyscale-700',
      track: 'zep-bg-greyscale-400',
    },
    dark: {
      thumb: 'zep-bg-primary-default',
      track: 'zep-bg-greyscale-400',
    },
  };

  const handleResize = () => {
    if (contentRef.current) {
      if (scrollXTrackRef.current && contentRef.current) {
        const { clientWidth: horizontalTrackSize } = scrollXTrackRef.current;
        const { clientWidth: horizontalContentVisible, scrollWidth: horizontalContentTotalWidth } = contentRef.current;
        const hideScrollbarHorizontal = horizontalContentVisible >= horizontalContentTotalWidth;

        if (hideScrollbarHorizontal) {
          setThumbWidth(0);
        } else {
          setThumbWidth(Math.max((horizontalContentVisible / horizontalContentTotalWidth) * horizontalTrackSize, 20));
        }
      }

      if (scrollYTrackRef.current) {
        const { clientHeight: verticalTrackSize } = scrollYTrackRef.current;
        const { clientHeight: verticalContentVisible, scrollHeight: verticalContentTotalHeight } = contentRef.current;
        const hideScrollbarVertical = verticalContentVisible >= verticalContentTotalHeight;

        if (hideScrollbarVertical) {
          setThumbHeight(0);
        } else {
          setThumbHeight(Math.max((verticalContentVisible / verticalContentTotalHeight) * verticalTrackSize, 20));
        }
      }
    }
  };

  const handleThumbPosition = () => {
    if (
      !contentRef.current ||
      !scrollXTrackRef.current ||
      !scrollXThumbRef.current ||
      !scrollYThumbRef.current ||
      !scrollYTrackRef.current
    ) {
      return;
    }

    const {
      scrollLeft: contentLeft,
      scrollWidth: contentWidth,
      scrollHeight: contentHeight,
      scrollTop: contentTop,
    } = contentRef.current;
    const { clientWidth: trackWidth } = scrollXTrackRef.current;
    const { clientHeight: trackHeight } = scrollYTrackRef.current;

    let newLeft = (contentLeft / contentWidth) * trackWidth;
    let newTop = (contentTop / contentHeight) * trackHeight;
    newLeft = Math.min(newLeft, trackWidth - thumbWidth);
    newTop = Math.min(newTop, trackHeight - thumbHeight);

    const thumbX = scrollXThumbRef.current;
    const thumbY = scrollYThumbRef.current;
    requestAnimationFrame(() => {
      thumbX.style.left = `${newLeft}px`;
      thumbY.style.top = `${newTop}px`;
    });
  };

  useEffect(() => {
    if (contentRef.current) {
      const content = contentRef.current;
      observer.current = new ResizeObserver(() => {
        handleResize();
      });
      observer.current?.observe(content);
      content.addEventListener('scroll', handleThumbPosition);
      return () => {
        observer.current?.unobserve(content);
        content.removeEventListener('scroll', handleThumbPosition);
      };
    }
  }, []);

  const handleXThumbMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setXScrollStartPosition(e.clientX);
    if (contentRef.current) {
      setInitialContentScrollX(contentRef.current.scrollLeft);
    }
    setIsXDragging(true);
  };

  const handleYThumbMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setYScrollStartPosition(e.clientY);
    if (contentRef.current) {
      setInitialContentScrollY(contentRef.current.scrollTop);
    }
    setIsYDragging(true);
  };

  const handleThumbMouseUp = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isYDragging) {
      setIsYDragging(false);
    }
    if (isXDragging) {
      setIsXDragging(false);
    }
  };

  const handleThumbMouseMove = (e: MouseEvent) => {
    if (contentRef.current) {
      e.preventDefault();
      e.stopPropagation();
      if (isXDragging) {
        const { scrollWidth: contentScrollWidth, clientWidth: contentClientWidth } = contentRef.current;

        const deltaX = (e.clientX - xScrollStartPosition) * (contentClientWidth / thumbWidth);

        contentRef.current.scrollLeft = Math.min(
          initialContentScrollX + deltaX,
          contentScrollWidth - contentClientWidth,
        );
      }

      if (isYDragging) {
        const { scrollHeight: contentScrollHeight, clientHeight: contentClientHeight } = contentRef.current;

        const deltaY = (e.clientY - yScrollStartPosition) * (contentClientHeight / thumbHeight);

        contentRef.current.scrollTop = Math.min(
          initialContentScrollY + deltaY,
          contentScrollHeight - contentClientHeight,
        );
      }
    }
  };

  const handleOnXMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsXHovering(true);
  };

  const handleOnXMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isXHovering) {
      setIsXHovering(false);
    }
  };

  const handleOnYMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsYHovering(true);
  };

  const handleOnYMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isYHovering) {
      setIsYHovering(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleThumbMouseMove);
    document.addEventListener('mouseup', handleThumbMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleThumbMouseMove);
      document.removeEventListener('mouseup', handleThumbMouseUp);
    };
  }, [handleThumbMouseMove, handleThumbMouseUp]);

  const handleXTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { current: trackX } = scrollXTrackRef;
    const { current: content } = contentRef;

    if (trackX && content) {
      const { clientX } = e;
      const target = e.target as HTMLDivElement;
      const rect = target.getBoundingClientRect();
      const trackLeft = rect.left;
      const thumbOffset = -(thumbWidth / 2);
      const clickRatio = (clientX - trackLeft + thumbOffset) / trackX.clientWidth;
      const scrollAmount = Math.floor(clickRatio * content.scrollWidth);
      content.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleYTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { current: trackY } = scrollYTrackRef;
    const { current: content } = contentRef;

    if (content && trackY) {
      const { clientY } = e;
      const target = e.target as HTMLDivElement;
      const rect = target.getBoundingClientRect();
      const trackTop = rect.top;
      const thumbOffset = -(thumbHeight / 2);
      const clickRatio = (clientY - trackTop + thumbOffset) / trackY.clientHeight;
      const scrollAmount = Math.floor(clickRatio * content.scrollHeight);
      content.scrollTo({
        top: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={clsx('zep-relative', 'zep-w-full')} data-testid={dataTestId}>
      <div className="zep-flex">
        <div
          className={clsx('zep-scrollable-content', 'zep-w-full', className, {
            'zep-mb-2': scrollOrientation !== 'vertical',
          })}
          id={controlId}
          ref={contentRef}
        >
          {children}
        </div>
        <div
          className={clsx('zep-pl-2', 'zep-vertical-scrollbar', {
            'zep-hidden': thumbHeight === 0 || scrollOrientation === 'horizontal',
          })}
          data-testid="vertical-scrollbar"
        >
          <div
            className={clsx(
              'zep-block zep-relative zep-h-full',
              isYDragging || isYHovering ? '!zep-w-0.75' : '!zep-w-0.5',
            )}
            aria-controls={controlId}
            role="scrollbar"
          >
            <div
              className={clsx(
                'zep-top-0 zep-absolute zep-bottom-0 zep-h-full zep-rounded-[100px]',
                isYDragging || isYHovering ? '!zep-w-0.75' : '!zep-w-0.5',
                scrollbarTheme[theme].track,
              )}
              ref={scrollYTrackRef}
              onClick={handleYTrackClick}
              onMouseEnter={handleOnYMouseEnter}
              onMouseLeave={handleOnYMouseLeave}
              style={{
                cursor: isYDragging ? 'grabbing' : undefined,
              }}
            />
            <div
              className={clsx(
                'zep-absolute zep-rounded-[100px]',
                isYDragging || isYHovering ? '!zep-w-0.75' : '!zep-w-0.5',
                scrollbarTheme[theme].thumb,
              )}
              ref={scrollYThumbRef}
              onMouseDown={handleYThumbMouseDown}
              onMouseEnter={handleOnYMouseEnter}
              onMouseLeave={handleOnYMouseLeave}
              style={{
                height: `${thumbHeight}px`,
                cursor: isYDragging ? 'grabbing' : 'grab',
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx('zep-horizontal-scrollbar', {
          'zep-hidden': thumbWidth === 0 || scrollOrientation === 'vertical',
          'zep-pr-0.5': scrollOrientation === 'both' && !isYDragging,
          'zep-pr-0.75': scrollOrientation === 'both' && isYDragging,
        })}
        data-testid="horizontal-scrollbar"
      >
        <div className={clsx('zep-block zep-relative zep-w-full zep-h-0.5')} aria-controls={controlId} role="scrollbar">
          <div
            className={clsx(
              'zep-absolute zep-w-full zep-rounded-[100px] zep-h-0.5',
              isXHovering || isXDragging ? 'zep-scale-y-150 zep-transition-transform zep-duration-150' : '',
              scrollbarTheme[theme].track,
            )}
            ref={scrollXTrackRef}
            onClick={handleXTrackClick}
            onMouseEnter={handleOnXMouseEnter}
            onMouseLeave={handleOnXMouseLeave}
            style={{
              cursor: isXDragging ? 'grabbing' : undefined,
            }}
          />
          <div
            className={clsx(
              'zep-absolute zep-rounded-[100px] zep-h-0.5',
              isXHovering || isXDragging ? 'zep-scale-y-150 zep-transition-transform zep-duration-150' : '',
              scrollbarTheme[theme].thumb,
            )}
            ref={scrollXThumbRef}
            onMouseDown={handleXThumbMouseDown}
            onMouseEnter={handleOnXMouseEnter}
            onMouseLeave={handleOnXMouseLeave}
            style={{
              width: `${thumbWidth}px`,
              cursor: isXDragging ? 'grabbing' : 'grab',
            }}
          />
        </div>
      </div>
    </div>
  );
};
