import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IPageTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  withSearch?: boolean;
  withFilters?: boolean;
}
