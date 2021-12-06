import js from './js.png';
import reactjs from './reactjs.png';
import typescript from './typescript.png';

import html5 from './html5.png';
import css from './css.png';
import nodejs from './nodejs.png';

// if does not work in 30mins, try another solution. delete this whole page Here
// do not waste too long time on this.
// top priority - display logo or picture of each skills

export {
    js, 
    reactjs, 
    typescript, 
    html5, 
    css, 
    nodejs
};

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

<img src={images['js.png']} alt=""/>,
<img src={images['reactjs.png']} alt=""/>,
<img src={images['nodejs.png']} alt=""/>,
<img src={images['html5.png']} alt=""/>,
<img src={images['css.png']} alt=""/>,
<img src={images['typescript.png']} alt=""/>

// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
//   }
  
//   const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  
//   <img src={images['doggy.png']} />

// https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react
// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack