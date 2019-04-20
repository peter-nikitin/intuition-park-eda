const recipes = [
  {
    name: "Банановые панкейки",
    discroption: "",
    image: require("../assets/images/recipes/pancacks.png"),
    ingrds: [
      "Банан: 1шт",
      "Яйцо: 1шт",
      "Мука (любая): 3ст л.",
      "Сода: 0.5 ч. л."
    ],
    steps: [
      {
        action: "blend",
        products: "Банан, яйцо",
        desc: "Банан размять вилкой, вбить яйцо, перемешать "
      },
      {
        action: "put",
        products: "Мука, сода",
        desc: "Добавить муку и соду"
      },
      {
        action: "blend",
        products: "Банан, яйцо, мука, сода",
        desc: "Всё перемешать"
      },
      {
        action: "fry",
        products: "Тесто",
        desc:
          "Выложить маленькими порциями на раскалённую сковороду, обжарить с двух сторон до золотистой корочки под закрытой крышкой."
      },
      {
        action: "serve",
        products: "Фрукты, мёд, мороженое",
        desc: "Подавать с фруктами, мёдом, мороженым"
      }
    ]
  },
  {
    name: "Сендвич с тунцом",
    discroption: "",
    image: require("../assets/images/recipes/sandviches.png")
  },
  {
    name: "Английский завтрак",
    discroption: "",
    image: require("../assets/images/recipes/english.png")
  },
  {
    name: "Тыквенный кремсуп",
    discroption: "",
    image: require("../assets/images/recipes/soup.png")
  },
  {
    name: "Фунчеза с курицей",
    discroption: "",
    image: require("../assets/images/recipes/funchoza.png")
  },
  {
    name: "Котлеты",
    discroption: "",
    image: require("../assets/images/recipes/kotlets.png")
  },
  {
    name: "Паста с креветками",
    discroption: "",
    image: require("../assets/images/recipes/pasta.png")
  },
  {
    name: "Лосось с овощами",
    discroption: "",
    image: require("../assets/images/recipes/salmon.png")
  },
  {
    name: "Салат с курицей и авокадо",
    discroption: "",
    image: require("../assets/images/recipes/avacado.png")
  }
];

export default recipes;
