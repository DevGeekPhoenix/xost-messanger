import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";

const ForgetPasswordPage = dynamic(() => import("domains/Auth/ForgetPassword"));

const ForgetPassword: NextPage = () => {
  return <ForgetPasswordPage />;
};

ForgetPassword.prototype = {
  pageConfig: {},
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default ForgetPassword;
