/**
 * Container
 * @description Main Container for the App
 * @author dtro-devuk @github:dtro-devuk.io
 */
import PropTypes from 'prop-types';

import Head from '@/components/Head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// const version = require('@/package.json');
import { version } from '../package.json';
import { repository } from '../package.json';

export const siteTitle = 'Nextjs 10, Tailwind CSS 2.0+ and Google Fonts Self-Hosting Demo';
export const description =
  'A simple demo to show how to use self-hosted Google fonts. "font-dispay:swap" is used to stop FOUT and FOIT. Try refreshing the page, there is no signs of either of these.';
export const profileName = 'dtro-devuk';
export const licenseInfo =
  'It is important to always read the license for every font that you use. All of the Google fonts used here use the SIL Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.';
export const codeLinkUrl =
  'https://github.com/dtro-devuk/nextjs-tailwind-googlefonts-selfhost-starter';

const Container = ({ children }) => {
  const versionInfo = version;

  return (
    <div id="container" className="bg-gray-300">
      <Head title={siteTitle} description={description} />
      <Header
        caption={siteTitle}
        author={profileName}
        description={description}
        licenseInfo={licenseInfo}
        codeLinkUrl={codeLinkUrl}
      />
      <main
        id="main-content"
        role="main"
        aria-label="main content area for the page"
        className="flex-1 p-3 overflow-y-hidden justify-center
        mx-2 sm:my-12 sm:text-sm
        md:mx-8 
        leading-relaxed
         bg-white"
      >
        {children}
      </main>
      <Footer
        caption={siteTitle}
        author={profileName}
        versionInfo={versionInfo}
        licenseInfo={licenseInfo}
      />
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
