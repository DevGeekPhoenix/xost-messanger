export interface DefaultLayoutProps {
  children: ReactNode;
  config?: {
    defaultLayout?: boolean;
    footer?: boolean;
    header?: boolean;
    showDefaultTitle?: boolean;
    container?: boolean;
    isInAuth?: boolean;
  };
}
