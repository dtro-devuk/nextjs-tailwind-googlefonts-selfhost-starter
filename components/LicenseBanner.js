/**
 *Home Button
 * @description Return to the Home Page
 * @author dtro-devuk @github:dtro-devuk.io
 */

import PropTypes from 'prop-types';

const LicenseBanner = ({ licenseInfo }) => {
  return (
    <div
      id="licensing-info"
      aria-label="google Fonts licensing info"
      className="bg-gray-500 w-full p-3"
    >
      <div className="sm:text-sm">
        <div className="bg-gray-300 font-sans font-normal text-center p-3">
          <h2 className="font-bold text-gray-700 text-center uppercase leading-loose p-3">
            Google Font Licensing
          </h2>
          <p className="text-gray-800 font-serif font-bold p-3">{licenseInfo}</p>
          <p className="text-gray-800 font-serif text-center">
            An `OFL.txt` file detailing the license should be stored alongside the fonts, when
            self-hosted and in your GitHub Repo
          </p>
        </div>
      </div>
    </div>
  );
};

LicenseBanner.propTypes = {
  licenseInfo: PropTypes.string.isRequired,
};

export default LicenseBanner;
