export interface BreadcrumbItem {
  path: string;
  title: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}
