/**
 * Header Component
 * @description Site Header including the Navigation menu
 * @author dtro-devuk @github:dtro-devuk.io
 */
import PropTypes from 'prop-types';
import Link from 'next/link';

import Avatar from '@/components/Avatar';
import GitHubCodeLink from '@/components/GitHubCodeLink';

const Header = ({ caption, author, description, codeLinkUrl }) => {
  return (
    <header
      id="header"
      role="banner"
      className="sticky-header
                flex flex-col items-center text-center
                bg-gray-800"
    >
      <div
        className="p-3 font-black font-Oswald-VariableFont
                 text-lg md:text-3xl lg:text-4xl
                 text-white"
      >
        {caption}
      </div>
      <div className="md:p-2">
        <Link href="/">
          <a className="inline-flex items-center w-auto cursor-pointer focus:outline-none">
            <Avatar
              className="h-12 w-12 rounded-full md:mr-2 md:h-20 md:w-20
                            border-4 border-white-200 
                            transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500"
            />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a className="inline-flex items-center w-auto cursor-pointer focus:outline-none">
            <span
              className="p-3 font-bold italic
                      font-Grandstander-VariableFont
                      text-xl md:text-3xl lg:text-4xl
                      transform hover:scale-x-90 transition ease-in-out duration-500
                      text-blue-400"
            >
              {author || ''}
            </span>
          </a>
        </Link>
      </div>

      <GitHubCodeLink
        caption={'see the code on GitHub'}
        codeLinkUrl={codeLinkUrl}
        inNewTab={true}
      />
      <div className="hidden bg-gray-500 w-full">
        <section aria-label="Demo description">
          <h2 className="p-3 font-normal text-white italic font-serif text-center">
            {description || ''}
          </h2>
        </section>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  caption: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
  codeLinkUrl: PropTypes.string.isRequired,
};
