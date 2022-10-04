console.log("Hello!");

// 1.
const pokemon = {
  name: "Pikachu",
  images: [
    {
      alt: "Pikachu strutting",
      url: "pokemon-images.com/pikachu-1.jpg",
    },
    {
      alt: "Pikachu dancing",
      url: "pokemon-images.com/pikachu-2.jpg",
    },
  ],
};
console.log(pokemon.images[0].alt);
console.log(pokemon.images[1].url); // This is a string data type

// 2.
const message = {
  content: "Hello, world!",
  print: function () {
    console.log(this.content);
  },
};
message.print();
