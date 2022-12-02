import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";

const SignupPage = dynamic(() => import("domains/Auth/Signup"));

const Signup: NextPage = () => {
  return <SignupPage />;
};

Signup.prototype = {
  pageConfig: {},
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Signup;
