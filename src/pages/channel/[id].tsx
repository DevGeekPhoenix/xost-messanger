import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";

const Channel = dynamic(() => import("domains/Channel"));

type ChannelPageProps = {};

const ChannelPage: NextPage<ChannelPageProps> = ({}) => {
  return <Channel />;
};

ChannelPage.prototype = {
  pageConfig: {},
};

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    props: {},
  };
};

export default ChannelPage;
