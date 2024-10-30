import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import "./globals.css";
import { Context } from "@/context/context";
import ProductFilter from "@/components/ProductFIlter";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Product Listing",
  description: "Product Listing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="product-listing">
          <TopBanner />
          <Header />
          <Context>
            <main className="main-content">
              <h1 className="page-title">DISCOVER OUR PRODUCTS</h1>
              <p className="page-description">
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
                dolor.
              </p>
              <div className="content-divider"></div>
              <ProductFilter />
              <div className="product-grid">
                <Sidebar />
                {children}
              </div>
            </main>
          </Context>
          <Footer />
        </section>
      </body>
    </html>
  );
}
