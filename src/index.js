import "./styles/index.scss";

const greet = "Hello World";
const newTalk = "New Talks";

const elvenShieldRecipe = {
  leatherStrips: 5,
  ironIngot: 1,
  refinedMoonstone: 6,
};

const elevenGauntletsRecipe = {
  ...elvenShieldRecipe,
  irnIgot: 1,
  refinedMoonstone: 4,
};

// const elevenGauntletsRecipe = {
//   ...elvenShieldRecipe,
//   leather: 1,
//   refinedMoonstone: 4,
// };

console.log(elvenShieldRecipe);
console.log(elevenGauntletsRecipe);

console.log(greet);

