/**
 * A simple hook to Load self-hosted Google Fonts famalies
 *
 * We are use Font Face Observer npm package to load the
 *
 * @see : https://github.com/bramstein/fontfaceobserver
 *
 */
const FontFaceObserver = require('fontfaceobserver');

export const useGoogleFontLoader = () => {
  const debug = process.env.NODE_ENV !== 'production';

  const baseFontOne = !debug
    ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf'
    : '/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf';

  const baseFontTwo = !debug
    ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/oswald/Oswald-VariableFont_wght.ttf'
    : '/static/fonts/google/oswald/Oswald-VariableFont_wght.ttf';

  const linkOne = document.createElement('link');
  linkOne.href = baseFontOne;
  linkOne.rel = 'preload';
  linkOne.as = 'font';
  linkOne.type = 'font/ttf';
  linkOne.crossOrigin = 'anonymous';

  document.head.appendChild(linkOne);

  const linkTwo = document.createElement('link');
  linkTwo.href = baseFontTwo;
  linkTwo.rel = 'preload';
  linkTwo.as = 'font';
  linkTwo.type = 'font/ttf';
  linkTwo.crossOrigin = 'anonymous';

  document.head.appendChild(linkTwo);

  LoadTheFonts();

  // const font = new FontFaceObserver('Grandstander Variable');

  // font
  //   .load()
  //   .then(() => {
  //     console.log('Font has loaded.');
  //     document.documentElement.classList.add('Grandstander Variable');
  //   })
  //   .catch(() => {
  //     console.log('Font Sans failed to load.');
  //   });

  // const fontData = {
  //   'Grandstander Variable': {},
  //   'Oswald Variable': {},
  //   'Merriweather Sans': {},
  //   // Etc.
  // };

  // const fontGrandstanderV = getGrandstanderPath(debug);
  // const fontOswaldV = getOswaldPath(debug);

  // addFontPreloadLink(fontGrandstanderV);
  // addFontPreloadLink(fontOswaldV);

  // document.head.appendChild(link);

  // loadAllFonts(fontData);

  // const grandstanderV = 'Grandstander-VariableFont_wght.ttf';
  // const oswaldV = 'Oswald-VariableFont_wght.ttf';

  // console.log(debug);
  // console.log(allfontsCss);
};

const getGrandstanderPath = (debug) => {
  const fontV = 'Grandstander-VariableFont_wght.ttf';
  const pathTo = !debug
    ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/grandstander/' + fontV
    : '/static/fonts/google/grandstander/' + fontV;
  return pathTo;
};

const getOswaldPath = (debug) => {
  const fontV = 'Oswald-VariableFont_wght.ttf';
  const pathTo = !debug
    ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/oswald/' + fontV
    : '/static/fonts/google/oswald/' + fontV;
  return pathTo;
};

const LoadTheFonts = () => {
  var one = new FontFaceObserver('Grandstander Variable');
  var two = new FontFaceObserver('Oswald Variable');
  var three = new FontFaceObserver('Merriweather Sans');

  Promise.all([one.load(), two.load(), three.load()])
    .then(() => {
      console.log('The critical fonts are have loaded');
    })
    .catch((err) => {
      console.warn('Some critical font are not available:', err);
    });
};

// const loadAllFonts = (fontData) => {
//   let observers = [];

//   Object.keys(fontData).forEach((family) => {
//     const data = fontData[family];
//     const obs = new FontFaceObserver(family, data);
//     observers.push(obs.load());
//   });

//   Promise.all(observers)
//     .then((fonts) => {
//       (<fonts className="foreach"></fonts>)((font) => {
//         console.log(font.family + ' loaded');
//         // Map the result of the Promise back to our existing data,
//         // to get the other properties we need.
//         console.log(fontData[font.family]);
//       });
//     })
//     .catch((err) => {
//       console.warn('Some critical font are not available:', err);
//     });
// };

const addFontPreloadLink = (fontLink) => {
  let flink = document.createElement('link');
  flink.href = fontLink;
  flink.rel = 'preload';
  flink.as = 'font';
  flink.type = 'font/ttf';
  flink.crossOrigin = 'anonymous';

  document.head.appendChild(flink);

  console.log(`Font preloaded: ${fontLink}`);
};
