export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2848 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 2848, min: 1524 },
    items: 5,
  },
  desktop2: {
    breakpoint: { max: 1524, min: 900 },
    items: 4,
  },
  desktop1: {
    breakpoint: { max: 900, min: 600 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 600, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const navItems = [
  {
    id: 1,
    name: "Adventure",
    link: "/adventure",
    backgroundImage: "./assets/images/tours/adventure2.jpg",
  },
  {
    id: 2,
    name: "Nature",
    link: "/nature",
    backgroundImage: "./assets/images/tours/nature2.jpg",
  },
  {
    id: 3,
    name: "Hillstation",
    link: "/hillstation",
    backgroundImage: "./assets/images/tours/hillstation1.jpg",
  },
  {
    id: 4,
    name: "Religious",
    link: "/religious",
    backgroundImage: "./assets/images/tours/religious.jpg",
  },
  {
    id: 5,
    name: "Water Activity",
    link: "/water-activity",
    backgroundImage: "./assets/images/tours/maldives.jpg",
  },
];

export default navItems;
