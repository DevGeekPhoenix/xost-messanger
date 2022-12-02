import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";

const SigninPage = dynamic(() => import("domains/Auth/Signin"));

const Signin: NextPage = () => {
  return <SigninPage />;
};

Signin.prototype = {
  pageConfig: {},
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Signin;
