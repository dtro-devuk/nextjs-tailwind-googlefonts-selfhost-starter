import Container from '@/components/Container';

const Home = () => {
  return (
    <Container>
      <>
        <h1
          role="heading"
          aria-level="1"
          className=" p-3 text-center text-red-900 font-black text-xl"
        >
          The Sample Fonts follow...
        </h1>
        <hr />
        <h2 role="heading" aria-level="2" className=" p-3 text-center text-blue-900 font-bold">
          Sans Examples
        </h2>
        <p className="font-sans font-normal p-3 text-center text-gray-900">
          Font Sans Serif - Oswald (400)
        </p>
        <p className="font-sans font-bold p-3 text-center text-gray-900">
          Font Sans Serif - Oswald (700)
        </p>
        <p className="font-serif font-normal p-3 text-center text-gray-900">
          Font Sans - Merriweather Regular (400)
        </p>
        <p className="font-serif font-bold p-3 text-center text-gray-900">
          Font Sans - Merriweather Bold (700)
        </p>
        <hr />

        <h2
          role="heading"
          aria-level="2"
          className="font-sans p-3 text-center text-blue-900 text-xl"
        >
          Variable Fonts
        </h2>

        <h3
          role="heading"
          aria-level="3"
          className="italic font-Grandstander-VariableFont p-3 text-center text-blue-900 font-bold"
        >
          Grandstander Fonts 100-900
        </h3>
        <div className="text-center">
          <p className="font-Grandstander-VariableFont font-thin">Grandstander V 100</p>
          <br />
          <p className="font-Grandstander-VariableFont font-extra light">Grandstander V 200</p>
          <br />
          <p className="font-Grandstander-VariableFont font-light">Grandstander V 300</p>
          <br />
          <p className="font-Grandstander-VariableFont font-normal">Grandstander V 400</p>
          <br />
          <p className="font-Grandstander-VariableFont font-medium">Grandstander V 500</p>
          <br />
          <p className="font-Grandstander-VariableFont font-semibold">Grandstander V 600</p>
          <br />
          <p className="font-Grandstander-VariableFont font-bold">Grandstander V 700</p>
          <br />
          <p className="font-Grandstander-VariableFont font-extrabold">Grandstander V 800</p>
          <br />
          <p className="font-Grandstander-VariableFont font-black">Grandstander V 900</p>
          <br />

          <h3
            role="heading"
            aria-level="3"
            className="font-Oswald-VariableFont_wght p-3 text-center text-blue-900 font-bold"
          >
            Oswald Fonts 100-900
          </h3>

          <p className="font-sans font-thin">Oswald V 100</p>
          <br />
          <p className="font-sans font-extra light">Oswald V 200</p>
          <br />
          <p className="font-sans font-light">Oswald V 300</p>
          <br />
          <p className="font-sans font-normal">Oswald V 400</p>
          <br />
          <p className="font-sans font-medium">Oswald V 500</p>
          <br />
          <p className="font-sans font-semibold">Oswald V 600</p>
          <br />
          <p className="font-sans font-bold">Oswald V 700</p>
          <br />
          <p className="font-sans font-extrabold">Oswald V 800</p>
          <br />
          <p className="font-sans font-black">Oswald V 900</p>
          <br />
        </div>
      </>
    </Container>
  );
};

export default Home;
