import React, { useState } from "react";
import Header from "../Shared/Header";
import IngredientPlates from "./IngredientPlates";
import plate from "../img/plate.svg";
import Unit from "../Shared/Unit";

import { ingredientsData } from "../Data/ingredients";

// ingredients images
import garlic from "../img/Ingredients/Garlic.png";
import scallion from "../img/Ingredients/scallion.png";
import soySauce from "../img/Ingredients/soy sauce.png";
import onion from "../img/Ingredients/onion.png";
import sesameOil from "../img/Ingredients/sesame oil.png";
import sesameSeed from "../img/Ingredients/sesame seed.png";
import blackPepper from "../img/Ingredients/black pepper.png";
import egg from "../img/Ingredients/egg.png";
import vegetableOil from "../img/Ingredients/vegetable oil.png";
import gochugaru from "../img/Ingredients/gochugaru.png";
import kimchiIngredient from "../img/Ingredients/kimchi.png";
import pepper from "../img/Ingredients/pepper.png";
import ginger from "../img/Ingredients/ginger.png";
import carrot from "../img/Ingredients/carrot.png";
import flour from "../img/Ingredients/flour.png";
import tofu from "../img/Ingredients/tofu.png";
import beef from "../img/Ingredients/beef.png";
import spinach from "../img/Ingredients/spinach.png";
import gochujang from "../img/Ingredients/gochujang.png";
import kelp from "../img/Ingredients/kelp.png";

const header = {
  title: "All Ingredients of the Dishes",
  subtitle:
    "Korean cuisines are influenced by climate, geography, and natural environment and characterized by local specialties..",
  intro:
    "Top 20 Number of Traditional Korean Food Videos on YouTube in the first half of 2021, by dish",
};

const ingredientsImg = [
  garlic,
  scallion,
  soySauce,
  onion,
  sesameOil,
  sesameSeed,
  blackPepper,
  egg,
  vegetableOil,
  gochugaru,
  kimchiIngredient,
  pepper,
  ginger,
  carrot,
  flour,
  tofu,
  beef,
  spinach,
  gochujang,
  kelp,
];

const ingredientsFor = [
  "Soft Tofu Stew",
  "spicy chicken stew",
  "Korean Cucumber Salad",
  "Stir-fried rice cakes",
];

const ingredients = [
  "tteok",
  "fish cake",
  "green cabbage",
  "scallion",
  "gochujang",
  "gochugaru",
  "soy sauce",
  "sugar",
  "garlic",
  "napa cabbage",
  "daikon radish",
  "salt",
  "rice flour",
  "gochugaru",
  "fish sauce",
  "salted shrimp sauce",
  "scallion",
  "garlic",
  "sugar",
  "rice",
  "vinegar",
  "soy sauce",
  "sesame oil",
  "seaweed",
  "carrot",
  "egg",
  "spinach",
  "pickled yellow radish",
  "sesame seed",
  "beef short rib",
  "soy sauce",
  "sugar",
  "honey",
  "sesame oil",
  "asian pear",
  "onion",
  "scallion",
  "garlic",
  "ginger",
  "black pepper",
  "sesame seed",
  "short grain rice",
  "beef",
  "soybean sprout",
  "spinach",
  "cucmber",
  "zucchini",
  "carrot",
  "garlic",
  "scallion",
  "soy sauce",
  "sesame oil",
  "sesame seed",
  "salt",
  "pepper",
  "egg",
  "gochujang",
  "vegetable oil",
  "pork intestine",
  "sweet rice",
  "potato starch",
  "garlic",
  "ginger",
  "salt",
  "pepper",
  "sesame oil",
  "sesame seed",
  "scallion",
  "pork blood",
  "beef",
  "scallion",
  "onion",
  "carrot",
  "soy sauce",
  "sugar",
  "honey",
  "garlic",
  "sesame oil",
  "sesame seed",
  "pepper",
  "dumpling wrapper",
  "kimchi",
  "tofu",
  "soybean sprout",
  "onion",
  "pork",
  "scallion",
  "garlic",
  "ginger",
  "sesame oil",
  "soy sauce",
  "egg",
  "salt",
  "pepper",
  "vinegar",
  "sugar",
  "gochugaru",
  "active dry yeast",
  "sugar",
  "flour",
  "salt",
  "vegetable oil",
  "cinnamon powder",
  "seed",
  "soy sauce",
  "vinegar",
  "sesame oil",
  "garlic",
  "sesame seed",
  "prawn",
  "black pepper",
  "flour",
  "corn starch",
  "egg",
  "vegetable oil",
  "onion",
  "chili pepper",
  "rice flour",
  "honey",
  "bean",
  "nut",
  "seed",
  "pollen",
  "vegetable oil",
  "egg",
  "garlic",
  "onion",
  "kimchi",
  "rice",
  "soy sauce",
  "sesame oil",
  "black pepper",
  "scallion",
  "kimchi",
  "pork belly",
  "gochugaru",
  "garlic",
  "ginger",
  "kimchi juice",
  "tofu",
  "scallion",
  "salt",
  "black pepper",
  "noodle",
  "sesame seed",
  "seaweed",
  "egg",
  "daikon radish",
  "onion",
  "scallion",
  "salt",
  "kelp",
  "chicken breast",
  "garlic",
  "onion",
  "flour",
  "potato starch",
  "zucchini",
  "vegetable oil",
  "sesame oil",
  "salt",
  "fish sauce",
  "soy sauce",
  "black pepper",
  "kelp",
  "glass noodle",
  "carrot",
  "onion",
  "scallion",
  "beef",
  "shiitake mushroom",
  "spinach",
  "vegetable oil",
  "salt",
  "black pepper",
  "soy sauce",
  "garlic",
  "sesame seed",
  "egg",
  "kimchi",
  "pork",
  "spam",
  "tofu",
  "ham",
  "onion",
  "red bell pepper",
  "scallion",
  "gochugaru",
  "gochujang",
  "soy sauce",
  "garlic",
  "black pepper",
  "noodle",
];

const IngredientPage = () => {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState(0);
  const backPageHandler = () => {
    setOpen(false);
  };
  const openIntroHandler = (i) => {
    setOrder(i);
    setOpen(true);
  };
  return (
    <div className="relative flex flex-col px-[90px] pt-[80px] h-[100vh] text-white bg-main">
      <Header title={header.title} subtitle={header.subtitle} />
      <div className="relative flex-1 w-full  mt-[27px]">
        <IngredientPlates
          openIntroHandler={openIntroHandler}
          plate={plate}
          ingredients={ingredientsData}
          ingredientsImg={ingredientsImg}
        />
      </div>
      <div
        className={`${
          open ? "visible" : "hidden"
        } absolute top-0 left-0 w-full z-20 bg-main`}
      >
        {
          <Unit
            type={"ingredient"}
            backPageHandler={backPageHandler}
            data={ingredientsData}
            plate={plate}
            image={ingredientsImg}
            intro={open}
            order={order}
            tags={"foods"}
          />
        }
      </div>
    </div>
  );
};
export default IngredientPage;

// const uniqueIngredients = ingredients.filter(
//   (value, index, array) => array.indexOf(value) === index
// );
// let ingredientCounts = [];
// let ingredientList = [];
// let ingredientTop = []

// for (let i = 0; i < uniqueIngredients.length; i++) {
//   // console.log(uniqueIngredients[i])
//   ingredientCounts = [];
//   for (let j = 0; j < ingredients.length; j++) {
//     if (uniqueIngredients[i] === ingredients[j])
//       ingredientCounts.push(ingredients[j]);
//   }
//   ingredientList.push({
//     ingredient: uniqueIngredients[i],
//     counts: ingredientCounts.length,
//   });
// }

// let commonList = ['vinegar','sugar','salt',"honey"]

// ingredientTop = ingredientList.sort(function (a, b) {
//   return a.counts - b.counts;
// }).slice(41,66).filter(ingredient => !commonList.includes(ingredient.ingredient))

// console.log(ingredientTop)
