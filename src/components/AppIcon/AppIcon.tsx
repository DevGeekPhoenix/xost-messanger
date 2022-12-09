import type { FC } from "react";
import SVG from "react-inlinesvg";

import type { AppIconName, AppIconProps } from "./index.d";

const _SVG_LOCATION_PATH = "/static/svg";

const MAP_ICON: Record<AppIconName, string> = {
  welcomeScreen: "/welcomeScreen.svg",
};

const AppIcon: FC<AppIconProps> = ({ name, ...props }) => {
  return <SVG src={`${_SVG_LOCATION_PATH}${MAP_ICON[name]}`} {...props} />;
};

export default AppIcon;
