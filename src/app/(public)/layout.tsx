import React, { PropsWithChildren } from "react";
import Header from "../components/shared/Header/header";
import Footer from "../components/shared/footer/footer";

type Props = {};

const PublicLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
