import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("domains/Chat"));

type ChatPageProps = {};

const ChatPage: NextPage<ChatPageProps> = ({}) => {
  return <Chat />;
};

ChatPage.prototype = {
  pageConfig: {},
};

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    props: {},
  };
};

export default ChatPage;
