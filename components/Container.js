import Head from '@/components/Head';
import Header from '@/components/Header';
import Footer from '../components/Footer';

export const siteTitle = 'Next.js, Tailwind CSS and Google Fonts Self-Hosting Demo';
export const description =
  'A simple demo to show how to use Self-hosted Google Fonts in Next.js, whilst using Tailwind CSS. The use of font-dispay attribute is used to stop FOUT and FOIT. Try refreshing the page, there is no signs of either of these.';
export const profileName = 'dtro-devuk';
export const licenseInfo =
  'It is important to always read the license for every font that you use. All of the Google fonts used here use the SIL Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.';

const Container = ({ children }) => {
  return (
    <div id="container" className="bg-gray-300">
      <Head title={siteTitle} description={description} />
      <Header
        caption={siteTitle}
        author={profileName}
        description={description}
        licenseInfo={licenseInfo}
      />
      <main
        id="main-content"
        role="main"
        aria-label="main content area for the page"
        className="flex-1 p-3 overflow-y-hidden justify-center bg-white"
      >
        {children}
      </main>
      <Footer caption={siteTitle} licenseInfo={licenseInfo} />
    </div>
  );
};

export default Container;
