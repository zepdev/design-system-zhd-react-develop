import { ContactCardProps } from '../contact-card';

export interface ContactFormProps {
  onSubmit: () => void;
  title: string;
  subtitle?: string;
  contact: ContactCardProps;
}
