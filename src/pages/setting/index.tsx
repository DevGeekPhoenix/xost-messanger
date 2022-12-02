import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";

const SettingPage = dynamic(() => import("domains/Setting"));

const Setting: NextPage = () => {
  return <SettingPage />;
};

Setting.prototype = {
  pageConfig: {},
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Setting;
