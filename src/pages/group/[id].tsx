import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";

const Group = dynamic(() => import("domains/Group"));

type GroupPageProps = {};

const GroupPage: NextPage<GroupPageProps> = ({}) => {
  return <Group />;
};

GroupPage.prototype = {
  pageConfig: {},
};

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    props: {},
  };
};

export default GroupPage;
