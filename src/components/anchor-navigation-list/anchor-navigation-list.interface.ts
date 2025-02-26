import { Tab } from './anchor-navigation-tab';

export interface AnchorNavigationListProps {
  tabs: Tab[];
  handleButtonClick?: () => void;
  buttonText?: string;
}
