import { IProduct } from "../interface";
import icon1  from '../assets/dataIcons/Laundry and dry cleaning-pana.svg'
import icon2  from '../assets/dataIcons/gutter cleaning-pana.svg'
import icon3  from '../assets/dataIcons/cleaning service-rafiki (1).svg'
export const PRODUCT_MOCK: IProduct[] = [
  {
    title: "Cleaning the roof.",
    price: 150,
    id: 1,
    category: "Roof",
    images: {
      main: icon2,
      all: [
        "https://dlczb9lfz9r73.cloudfront.net/wp-content/uploads/2023/01/29194226/AdobeStock_394603682-scaled.jpeg",
        "https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1628496616932_roof-cleaning.jpg",
        "https://static.homeguide.com/assets/images/content/homeguide-soft-wash-roof-cleaning-asphalt-shingles_qfgtul.jpg",
        "https://evanshomeimprovementoh.com/wp-content/uploads/2018/11/roof-cleaning-1080x675.jpeg",
      ],
    },
    seller: {
      name: "Размик",
      phone: "+9788828828",
      email: "razmik.unanyan@mail.ru",
    },
    tags: ["roof", "cleaning", "house"],
    descriptions:"Это нежное и сочное мясо на двух косточках. Куриная голень без кожи считается диетическим продуктом."
  },
  {
    title: "Cleaning clothes.",
    price: 199,
    id: 2,
    category: "Clothes ",
    images: {
      main: icon1,
      all: [
        "https://avatars.dzeninfra.ru/get-zen_doc/10074064/pub_649062e0d7291f01e9fbff33_64906316d7291f01e9fc74cf/scale_1200",
        "https://ah.com.ua/wp-content/uploads/2020/02/chto-takoe-ximchistka2-1024x609.jpg",
        "https://chistykof.ru/wp-content/uploads/2019/10/himchistka.jpg",
      ],
    },
    seller: {
      name: "Размик",
      phone: "+9788828828",
      email: "razmik.unanyan@mail.ru",
    },
    tags: ["clothes", "cleaning"],
    descriptions:"Считается наименее полезной частью курицы. Вкус куриного окорочка зависит от способа приготовления. Отваренный без специй куриный окорок имеет нежный сочный вкус и нейтральный запах."
  },

  {
    title: "House cleaning.",
    price: 300,
    id: 3,
    category: "House",
    images: {
      main: icon3,
      all: [
        "https://cleanhouse.com.ru/wp-content/uploads/2019/06/Himchistka-divana-himchistka-kovra-ot-spetsialistov-Clean-House_-e1560590337884.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6fj1Yt-YBlUmzV3CDIRdY1rJMNlu8dsg4TQ&s",
        "https://baranovichi.by/wp-content/uploads/2023/11/73567547867856.jpg",
      ],
    },
    seller: {
      name: "Размик",
      phone: "+9788828828",
      email: "razmik.unanyan@mail.ru",
    },
    tags: ["house", "cleaning"],
    descriptions:"Это делают в месте, где плечевая кость соединяется с позвоночником. Крыло имеет три части: плечевая, локтевая часть и кисть. Отварные куриные крылышки нежные и сочные на вкус. Можно также их пожарить, сделав хрустящими, острыми и ароматными.",
  },
];
