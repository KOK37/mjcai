import React from "react";
//import Potato from "./Potato";

function Food({name, picture}){
  return (
    <div>
      <h1>I love {name} </h1>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://i.namu.wiki/i/IQUUvqSoy9bFErnGmPrFT5oDwvKi9ZaKitfBOGQZwOgdpSTVJE6QkWrObvxaeYpMv1raJqMyASttO_eUykJkwRKXRjDYm01T8bTS0qr_frsbLLa4TH0v1r42nnq2WdpG7jTf4j8LrmU49E8X3SXRxg.webp',
  },
  {
    name: 'Samgiopsal',
    image: 'https://i.namu.wiki/i/oFHlYDjoEh8f-cc3lNK9jAemRkbXxNGwUg7XiW5LGS6DF1P2x8GCeNQxbQhVIwtUS1u53YPw-uoyqpmLtrGNJA.webp',
  }
];

function App() {
  return (
  <div> 
    {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image}/>))}
  </div>
  );
}
export default App;