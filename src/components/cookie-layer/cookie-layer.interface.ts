// import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
export interface CookieLayerProps extends CookieLayerButton {
//   variant?: GlobalVariants | GlobalVariantExtended;
  description?: string;
  className?: string;
}

export interface CookieLayerButton {
  label?: string;
  onClickCookies?: () => void;
}
