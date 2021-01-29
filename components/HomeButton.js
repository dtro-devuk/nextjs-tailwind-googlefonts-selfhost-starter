/**
 *Home Button
 * @description Return to the Home Page
 * @author dtro-devuk @github:dtro-devuk.io
 */

import Link from 'next/link';
import PropTypes from 'prop-types';

const defaultButtonCaption = '← Back to Home';
const defaultClassName =
  'bg-gray-500 text-white hover:bg-yellow-500 hover:text-black font-bold text-md px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 transition all ease duration-500';

const HomeButton = ({ caption, className }) => {
  const buttonCaption = setButtonCaption(caption);
  const thisClassName = setClassName(className);

  return (
    <Link href="/" scroll={false}>
      <button id="home-button" aria-label="Home Button" className={thisClassName} type="button">
        <a>{buttonCaption}</a>
      </button>
    </Link>
  );
};

const setButtonCaption = (caption) => {
  let newCaption = '';
  if (caption != '' && caption != undefined) {
    newCaption = caption;
  } else {
    newCaption = defaultButtonCaption;
  }
  return defaultButtonCaption;
};

const setClassName = (className) => {
  let newClassName = '';
  if (className != '' && className != undefined) {
    newClassName = className;
  } else {
    newClassName = defaultClassName;
  }
  return newClassName;
};

HomeButton.propTypes = {
  caption: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default HomeButton;
