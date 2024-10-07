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

export const menuData = {
  title: "With Our Menu",
  description:
    "Enjoy the vibrant flavours of India with our authentic cuisine. From aromatic curries and spicy biryani to tart chutneys and crispy samosas, our menu offers a delicious journey through the diverse culinary traditions of the subcontinent. Each dish is prepared using the finest ingredients and traditional cooking techniques to ensure an unforgettable dining experience.",
  btnText: "View Complete Menu",
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
