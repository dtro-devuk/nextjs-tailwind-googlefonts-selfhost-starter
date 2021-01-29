import Head from 'next/head';

import Container from '@/components/Container';
import HomeButton from '@/components/HomeButton';

export const NotFoundPage = () => {
  return (
    <Container home>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <section id="404-section" className="h-38 ">
        <div className="w-full h-full bg-red-200">
          <h1
            className="md:mt-25 p-5 text-center
                  text-xl md:text-6xl lg:text-6xl font-bold 
                  text-red-500"
          >
            404 Page Not Found
          </h1>
        </div>
        <div
          id="404"
          className="bg-red-200 
                  w-10% py-10 flex flex-col items-center justify-center"
        >
          <br />
          <HomeButton
            caption="Return Home"
            className="mr-1 mb-1 text-white bg-red-700
              hover:bg-yellow-500 hover:text-black 
              font-bold text-md px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none 
              transition all ease duration-500"
          />
        </div>
      </section>

      <section></section>
    </Container>
  );
};

export default NotFoundPage;
