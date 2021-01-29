/**
 * Link to associated Github code
 * @description footer elements to be included here
 * @author dtro-devuk @github:dtro-devuk.io
 */

import PropTypes from 'prop-types';
import Link from 'next/link';

const GitHubCodeLink = ({ codeLinkUrl, inNewTab, caption }) => {
  return (
    <Link href={codeLinkUrl}>
      <a
        className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-sm md:text-lg
                     text-yellow-500 hover:text-white active:text-yellow-600 focus:outline-none"
                    transform ${'hover:scale-x-90 transition ease-in-out duration-500'}`}
        target={inNewTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
      >
        {caption || '[see code...]'}
      </a>
    </Link>
  );
};

GitHubCodeLink.propTypes = {
  codeLinkUrl: PropTypes.string.isRequired,
  inNewTab: PropTypes.bool.isRequired,
  caption: PropTypes.string,
};

export default GitHubCodeLink;
