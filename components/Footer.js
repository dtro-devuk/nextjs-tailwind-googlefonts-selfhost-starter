/**
 * Site Footer Component
 * @description footer elements to be included here
 * @author dtro-devuk @github:dtro-devuk.io
 */
import PropTypes from 'prop-types';

const Footer = ({ caption, versionInfo, author, licenseInfo }) => {
  return (
    <footer
      id="main-footer"
      role="contentinfo"
      aria-label="main footer content info"
      className="w-full p-3
            flex flex-col items-center text-center 
            bg-gray-800 "
    >
      <div className="text-white font-sans">
        <div className="bg-gray-300 w-full font-sans font-normal text-center p-2">
          <p className=" text-gray-800">{licenseInfo}</p>
        </div>

        <div className="text-white text-sm md:text-1xl lg:text-2xl p-3">
          <p className=" text-md md:text-2xl lg:text-3xl p-3">{caption}</p>
          <p>
            Copyright <span dangerouslySetInnerHTML={{ __html: '&copy;' }}></span>{' '}
            <a
              href="https://www.github.com/dtro-devuk"
              className="font-semibold
                text-yellow-600
                hover:text-yellow-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {author}
            </a>{' '}
            2021
          </p>
          <p className="p-2 text-yellow-600">Version: {versionInfo}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  caption: PropTypes.string.isRequired,
  versionInfo: PropTypes.string.isRequired,
  licenseInfo: PropTypes.string.isRequired,
};
