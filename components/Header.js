const Header = ({ caption, author, description, licenseInfo }) => {
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
                 text-2xl md:text-3xl lg:text-4xl
                 text-white"
      >
        {caption || ''}
      </div>
      <div
        className="p-3 font-bold italic
                font-Grandstander-VariableFont
                text-2xl md:text-3xl lg:text-4xl
                text-blue-400"
      >
        @{author || ''}
      </div>
      <div className="bg-gray-500 w-full">
        <section aria-label="Demo description">
          <h1 className="p-3 mb-3 font-normal text-white italic font-serif text-center">
            {description}
          </h1>
        </section>
        <section aria-label="Google Font License Information">
          <div className="bg-gray-300 w-full font-sans font-normal text-center p-3">
            <h2 className="font-bold text-gray-700 text-center uppercase leading-loose p-3">
              Google Font Licensing
            </h2>
            <p className=" text-gray-800 font-serif font-bold p-3">{licenseInfo}</p>
            <p className="text-gray-800 font-serif text-center">
              An `OFL.txt` file detailing the license should be stored alongside the fonts, when
              self-hosted and in your GitHub Repo
            </p>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
