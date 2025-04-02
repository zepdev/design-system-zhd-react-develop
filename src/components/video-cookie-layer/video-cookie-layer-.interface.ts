// import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
export interface VideoCookieLayerProps extends VideoCookieLayerButton {
//   variant?: GlobalVariants | GlobalVariantExtended;
  description?: string;
  className?: string;
}

export interface VideoCookieLayerButton {
  label?: string;
  onClickCookies?: () => void;
}