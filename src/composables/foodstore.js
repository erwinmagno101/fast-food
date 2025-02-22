import { defineStore } from "pinia";

export const useFoodStore = defineStore("foodstore", () => {
  const foods = [
    {
      id: 1,
      name: "Steak Fries Veggies",
      category: "Meat",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores illum soluta sed culpa repellat dolor, laborum odit aliquam facilis inventore. Iure similique nemo laudantium quo dolores? Deserunt dolorum atque error!",
      price: 175,
    },
    {
      id: 2,

      name: "Chicken Salad",
      category: "Chicken",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores illum soluta sed culpa repellat dolor, laborum odit aliquam facilis inventore. Iure similique nemo laudantium quo dolores? Deserunt dolorum atque error!",
      price: 172,
    },
    {
      id: 3,

      name: "Sorvetes Primavera Exquisite",
      category: "Dessert",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores illum soluta sed culpa repellat dolor, laborum odit aliquam facilis inventore. Iure similique nemo laudantium quo dolores? Deserunt dolorum atque error!",
      price: 185,
    },
    {
      id: 4,

      name: "Fried Chicken",
      category: "Chicken",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores illum soluta sed culpa repellat dolor, laborum odit aliquam facilis inventore. Iure similique nemo laudantium quo dolores? Deserunt dolorum atque error!",
      price: 175,
    },
    {
      id: 5,

      name: "Steak Fries Veggies",
      category: "Meat",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores illum soluta sed culpa repellat dolor, laborum odit aliquam facilis inventore. Iure similique nemo laudantium quo dolores? Deserunt dolorum atque error!",
      price: 175,
    },
    {
      id: 6,

      name: "Chicken Salad",
      category: "Salad",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores illum soluta sed culpa repellat dolor, laborum odit aliquam facilis inventore. Iure similique nemo laudantium quo dolores? Deserunt dolorum atque error!",
      price: 175,
    },

    {
      id: 7,

      name: "Sorvetes Primavera Exquisite",
      category: "Dessert",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores illum soluta sed culpa repellat dolor, laborum odit aliquam facilis inventore. Iure similique nemo laudantium quo dolores? Deserunt dolorum atque error!",
      price: 185,
    },
    {
      id: 8,

      name: "Fried Chicken",
      category: "Chicken",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores illum soluta sed culpa repellat dolor, laborum odit aliquam facilis inventore. Iure similique nemo laudantium quo dolores? Deserunt dolorum atque error!",
      price: 175,
    },
  ];

  const categories = ["All", "Meat", "Chicken", "Seafood", "Dessert"];

  return { categories, foods };
});
