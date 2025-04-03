import React, {
  ChangeEvent,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
import { SliderProps } from './Slider.interface';
import clsx from 'clsx';

const classes = {
  thumb: `
    zep-thumb
    zep-bg-transparent
    zep-absolute
    zep-w-full
    zep-pointer-events-none
    zep-top-[50%]
    zep-transform
    zep-z-10
    -zep-translate-y-[50%]
    zep-appearance-none
    zep-p-[0]
    zep-m-[0]
  `,
  thumbDragIndicator: `
    zep-h-[44px]
    zep-w-[44px]
    zep-rounded-full
    zep-bg-primary-default
    zep-opacity-40
    zep-absolute
  `,
  tooltip: `
    zep-py-0.25
    zep-w-fit
    zep-px-[12px]
    zep-rounded-[4px]
    zep-text-typography-dark-100
    zep-typography-supportText
    zep-bottom-[26px]
    zep-bg-background-medium
    zep-block
    zep-whitespace-nowrap
    zep-text-center
    zep-transform
    -zep-translate-y-[26px]
    zep-z-10
  `,
  tooltipWrapper: `
    zep-absolute
    zep-justify-center
    zep-w-[20px]
    zep-pointer-events-none
    after:zep-content-['']
    after:zep-w-[calc(sqrt(2)*6px)]
    after:zep-h-[calc(sqrt(2)*6px)]
    after:zep-rotate-45
    after:zep-absolute
    after:zep-top-[2px]
    after:zep-bg-background-medium
    after:zep-mx-auto
  `,
  sliderRange: 'zep-h-[6px] zep-my-[19px] zep-rounded-full zep-absolute zep-bg-primary-default',
  sliderTrack: 'zep-h-0.25 zep-my-[20px] zep-rounded-full zep-w-full zep-absolute zep-bg-primary-default zep-opacity-40',
  slider: 'zep-relative zep-mt-0.5 zep-w-full zep-h-[44px]',
}

export const Slider: FC<SliderProps> = ({
  max,
  min,
  step = 1,
  onChange,
  value,
  label,
}) => {
  const [minValue, setMinValue] = useState(value.min);
  const [maxValue, setMaxValue] = useState(value.max);
  const [minTooltip, setMinTooltip] = useState(value.min);
  const [maxTooltip, setMaxTooltip] = useState(value.max);
  const [isMinHovering, setIsMinHovering] = useState(false);
  const [isMaxHovering, setIsMaxHovering] = useState(false);
  const [isMinDragging, setIsMinDragging] = useState(false);
  const [isMaxDragging, setIsMaxDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const minInputRef = useRef<HTMLInputElement | null>(null);
  const maxInputRef = useRef<HTMLInputElement | null>(null);
  const minTooltipRef = useRef<HTMLDivElement | null>(null);
  const maxTooltipRef = useRef<HTMLDivElement | null>(null);
  const minDragRef = useRef<HTMLDivElement | null>(null);
  const maxDragRef = useRef<HTMLDivElement | null>(null);
  const zIndexMin = '10';
  const zIndexMax = '20';

  useEffect(() => {
    if (
      trackRef.current &&
      minTooltipRef.current &&
      maxTooltipRef.current &&
      maxDragRef.current &&
      minDragRef.current
    ) {
      const minLeft = `${((minValue - min) / (max - min)) * 100}%`;
      const maxRight = `${((max - maxValue) / (max - min)) * 100}%`;
      trackRef.current.style.left = minLeft;
      trackRef.current.style.right = maxRight;
      trackRef.current.style.width = `${((maxValue - minValue) / (max - min)) * 100}%`;
      minTooltipRef.current.style.left = minLeft;
      minTooltipRef.current.style.transform = `translateX(-${minLeft})`;
      maxTooltipRef.current.style.right = maxRight;
      maxTooltipRef.current.style.transform = `translateX(${maxRight})`;
      minDragRef.current.style.left = minLeft;
      minDragRef.current.style.transform = `translateX(-${minLeft})`;
      maxDragRef.current.style.right = maxRight;
      maxDragRef.current.style.transform = `translateX(${maxRight})`;
    }
  }, [max, maxValue, min, minValue]);

  const handleChangeMin = (event?: ChangeEvent<HTMLInputElement>) => {
    if (minInputRef && minInputRef.current && maxInputRef && maxInputRef.current) {
      minInputRef.current.style.zIndex = zIndexMax;
      maxInputRef.current.style.zIndex = zIndexMin;
    }
    if (minTooltipRef && minTooltipRef.current && maxTooltipRef && maxTooltipRef.current) {
      minTooltipRef.current.style.zIndex = zIndexMax;
      maxTooltipRef.current.style.zIndex = zIndexMin;
    }
    const value = Number(event?.target.value);
    if (value <= maxValue) {
      setMinValue(value);
      setMinTooltip(value);
      onChange?.({ min: value, max: maxValue });
    }
  }

  const handleChangeMax = (event?: ChangeEvent<HTMLInputElement>) => {
    if (minInputRef && minInputRef.current && maxInputRef && maxInputRef.current) {
      minInputRef.current.style.zIndex = zIndexMin;
      maxInputRef.current.style.zIndex = zIndexMax;
    }
    if (minTooltipRef && minTooltipRef.current && maxTooltipRef && maxTooltipRef.current) {
      minTooltipRef.current.style.zIndex = zIndexMin;
      maxTooltipRef.current.style.zIndex = zIndexMax;
    }
    const value = Number(event?.target.value);
    if (value >= minValue) {
      setMaxValue(value);
      setMaxTooltip(value);
      onChange?.({ min: minValue, max: value });
    }
  }

  const handleThumbMouseUp = () => {
    if (isMinDragging) {
      setIsMinDragging(false);
    }
    if (isMaxDragging) {
      setIsMaxDragging(false)
    }
  }

  const handleMinThumbMouseDown = () => {
    setIsMinDragging(true);
  }

  const handleMaxThumbMouseDown = () => {
    setIsMaxDragging(true);
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleThumbMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleThumbMouseUp);
    }
  }, [handleThumbMouseUp])

  return (
    <div data-testid="rangeSlider" className="zep-w-full">
      <span data-testid="rangeSlider-label" className="zep-text-primary-default zep-typography-bodyText">{label}</span>
      <div data-testid="rangeSlider-slider" className={classes.slider}>
        <div data-testid="rangeSlider-slider-track" className={classes.sliderTrack} />
        <div data-testid="rangeSlider-slider-range" className={classes.sliderRange} ref={trackRef} />
        <input
          data-testid="rangeSlider-slider-input-min"
          className={classes.thumb}
          ref={minInputRef}
          onChange={handleChangeMin}
          step={step}
          type="range"
          value={minValue}
          max={max}
          min={min}
          onMouseDown={handleMinThumbMouseDown}
          onMouseEnter={() => setIsMinHovering(true)}
          onMouseLeave={() => setIsMinHovering(false)}
        />
        <input
          data-testid="rangeSlider-slider-input-max"
          className={classes.thumb}
          ref={maxInputRef}
          onChange={handleChangeMax}
          step={step}
          type="range"
          value={maxValue}
          max={max}
          min={min}
          onMouseDown={handleMaxThumbMouseDown}
          onMouseEnter={() => setIsMaxHovering(true)}
          onMouseLeave={() => setIsMaxHovering(false)}
        />
        <div
          data-testid="rangeSlider-slider-thumb-drag-indicator-wrapper-min"
          className={clsx('zep-absolute zep-z-0 zep-justify-center zep-w-[20px] zep-h-[20px]', isMinDragging ? 'zep-flex' : 'zep-hidden')}
          ref={minDragRef}
        >
          <div className={classes.thumbDragIndicator} />
        </div>
        <div
          data-testid="rangeSlider-slider-thumb-drag-indicator-wrapper-max"
          className={clsx('zep-absolute zep-z-0 zep-justify-center zep-w-[20px] zep-h-[20px]', isMaxDragging ? 'zep-flex' : 'zep-hidden')}
          ref={maxDragRef}
        >
          <div className={classes.thumbDragIndicator} />
        </div>
        <div
          data-testid="rangeSlider-slider-wrapper-tooltip-min"
          className={clsx(classes.tooltipWrapper, (isMinDragging || isMinHovering) ? 'zep-flex' : 'zep-hidden')}
          ref={minTooltipRef}
        >
          <div data-testid="rangeSlider-slider-tooltip-min" className={classes.tooltip}>
            {minTooltip}
          </div>
        </div>
        <div
          data-testid="rangeSlider-slider-wrapper-tooltip-max"
          className={clsx(classes.tooltipWrapper, (isMaxDragging || isMaxHovering) ? 'zep-flex' : 'zep-hidden')}
          ref={maxTooltipRef}
        >
          <div data-testid="rangeSlider-slider-tooltip-max" className={classes.tooltip}>
            {maxTooltip}
          </div>
        </div>
      </div>
      <div className="zep-w-full zep-flex zep-justify-between" data-testid="rangeSlider-slider-min-max-values">
        <span data-testid="rangeSlider-min" className="zep-typography-supportText zep-text-primary-default">{min}</span>
        <span data-testid="rangeSlider-max" className="zep-typography-supportText zep-text-primary-default">{max}</span>
      </div>
    </div>
  )
}
