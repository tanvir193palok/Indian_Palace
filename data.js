import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const bannersData = [
  {
    image: "/banner/banner1.jpg",
    title: (
      <span className="text-text">
        <p className="pb-3">Best Taste</p>
        <p className="pb-3">and</p>
        <p>Flavour in town</p>
      </span>
    ),
    description: (
      <span className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        <br />
        accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
        odio.
      </span>
    ),
  },
  {
    image: "/banner/banner4.jpg",
    title: (
      <span className="text-nav">
        <p className="pb-3">Enjoy discount</p>
        <p className="pb-3">and</p>
        <p>explore the delicacy</p>
      </span>
    ),
    description: (
      <span className="text-heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam
        <br />
        accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
        odio.
      </span>
    ),
  },
  {
    image: "/banner/banner5.jpg",
    title: (
      <span className="text-heading">
        <p className="pb-3">Discover heart</p>
        <p className="pb-3">and</p>
        <p>sweetness of india</p>
      </span>
    ),
    description: (
      <span className="text-text1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.\nAperiam
        accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
        odio.
      </span>
    ),
  },
];

export const categoriesData = [
  "Starters",
  "Supplements",
  "Indian Bread",
  "Vegetarian & Vegan",
  "Biryanis",
  "Tandoori Specialties",
  "Chicken",
  "Lamb",
  "Chili Specialties",
  "Fish & Prawns",
  "Duck",
  "Indian Palace Specialties",
  "Dessert",
  "Drinks",
];

export const menuData = {
  title: "With Our Menu",
  description:
    "Enjoy the vibrant flavours of India with our authentic cuisine. From aromatic curries and spicy biryani to tart chutneys and crispy samosas, our menu offers a delicious journey through the diverse culinary traditions of the subcontinent. Each dish is prepared using the finest ingredients and traditional cooking techniques to ensure an unforgettable dining experience.",
  btnText: "View our suggestion",
  menuItems: [
    {
      image: "/menu/food1.jpg",
      name: "Chocolate Cake",
      price: "$7.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: "/menu/food2.jpg",
      name: "Veggie Burger",
      price: "$9.49",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: "/menu/food3.jpg",
      name: "King Burger",
      price: "$8.50",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: "/menu/food4.jpg",
      name: "Mexican Burger",
      price: "$9.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
  ],
};

export const socialData = [
  {
    href: "https://www.facebook.com/indianpalacePB/",
    icon: faFacebookF,
    color: "#3b5998",
  },
  {
    href: "https://www.instagram.com/indianpalace.pb/",
    icon: faInstagram,
    color: "#e4405f",
  },
  { href: "/", icon: faTwitter, color: "#1DA1F2" },
  { href: "/", icon: faWhatsapp, color: "#25D366" },
];

export const FoodData = [
  {
    name: "Murg Briyani",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus scelerisque viverra at id aenean scelerisque.",
    price: "6,50 €",
    imageSrc: "/menu/food3.jpg",
  },
  {
    name: "Murg Briyani",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus scelerisque viverra at id aenean scelerisque.",
    price: "6,50 €",
    imageSrc: "/menu/food3.jpg",
  },
  {
    name: "Murg Briyani",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus scelerisque viverra at id aenean scelerisque.",
    price: "6,50 €",
    imageSrc: "/menu/food3.jpg",
  },
  {
    name: "Murg Briyani",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus scelerisque viverra at id aenean scelerisque.",
    price: "6,50 €",
    imageSrc: "/menu/food3.jpg",
  },
];

export const orderDetails = [
  {
    id: 0,
    name: "John Doe",
    location: "New York, USA",
    phone: "+1 123 456 7890",
    email: "johndoe@example.com",
    pickup: true,
    homeDelivery: true,
    items: [
      {
        id: 1,
        image: "/menu/food1.jpg",
        name: "Grilled Chicken",
        price: 15,
        specialRequest: "Extra spicy",
        quantity: 2,
        total: 30,
      },
      {
        id: 2,
        image: "/menu/food2.jpg",
        name: "Cheese Pizza",
        price: 12,
        specialRequest: "No olives",
        quantity: 1,
        total: 12,
      },
    ],
  },
  {
    id: 1,
    name: "Jane Smith",
    location: "Los Angeles, USA",
    phone: "+1 987 654 3210",
    email: "janesmith@example.com",
    pickup: true,
    homeDelivery: false,
    items: [
      {
        id: 3,
        image: "/menu/food3.jpg",
        name: "Veggie Burger",
        price: 10,
        specialRequest: "No mayo",
        quantity: 1,
        total: 10,
      },
      {
        id: 4,
        image: "/menu/food4.jpg",
        name: "Caesar Salad",
        price: 8,
        specialRequest: "Extra dressing",
        quantity: 2,
        total: 16,
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "Los Angeles, USA",
    phone: "+1 987 654 3210",
    email: "janesmith@example.com",
    pickup: false,
    homeDelivery: true,
    items: [
      {
        id: 3,
        image: "/menu/food3.jpg",
        name: "Veggie Burger",
        price: 10,
        specialRequest: "",
        quantity: 1,
        total: 10,
      },
      {
        id: 4,
        image: "/menu/food4.jpg",
        name: "Caesar Salad",
        price: 8,
        specialRequest: "Extra dressing",
        quantity: 2,
        total: 16,
      },
    ],
  },
];
