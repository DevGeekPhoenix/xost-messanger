import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("domains/Home"), { suspense: true });

type HomePageProps = {};

const HomePage: NextPage<HomePageProps> = ({}) => {
  return (
    <>
      <Home />
    </>
  );
};

HomePage.prototype = {
  pageConfig: {},
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default HomePage;
