import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

const MainLayout = ({ children }) => {
     return (
          <>
               <Header />
               <main>{children}</main>
               <Footer />
          </>
     );
};

export default MainLayout;
