import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";

const ContactsPage = dynamic(() => import("domains/Contacts"));

const Contacts: NextPage = () => {
  return <ContactsPage />;
};

Contacts.prototype = {
  pageConfig: {},
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Contacts;
