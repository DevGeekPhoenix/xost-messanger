type SVGIconProps = IntrinsicAttributes &
  SVGProps<SVGSVGElement> & { title?: string | undefined } & {
    children?: ReactNode;
  };
import type { Props as SVGProps } from "react-inlinesvg";

export interface AppIconProps extends SVGIconProps, Partial<SVGProps> {
  name: AppIconName;
}

export type AppIconName = "welcomeScreen";
