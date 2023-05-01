import MainLayout from "@/components/layout/MainLayout";
import "@/styles/globals.css";
import "../styles/general.scss";

export default function App({ Component, pageProps }) {
     return (
          <MainLayout>
               <Component {...pageProps} />
          </MainLayout>
     );
}
