const Footer = ({ caption, licenseInfo }) => {
  return (
    <footer
      id="main-footer"
      role="contentinfo"
      aria-label="main footer content info"
      className="w-full p-3
            flex flex-col items-center text-center 
            bg-gray-800 "
    >
      <div className="text-white font-Oswald-VariableFont">
        <div className="bg-gray-300 w-full font-sans font-normal text-center p-3">
          <p className=" text-gray-800">{licenseInfo}</p>
        </div>
        <p className=" text-xl md:text-2xl lg:text-3xl p-3">{caption}</p>
      </div>
    </footer>
  );
};

export default Footer;
