const HEADER = "EDUCARE";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#about-us", label: "About us" },
  { id: 4, url: "#testimonials", label: "Testimonials" },
  { id: 5, url: "#footer", label: "Contacts" },
  { id: 6, url: "#login", label: "Login"},
  { id: 7, url: "#register", label: "Register"}

];
const BANNER_DATA = {
  HEADING: "Go digital with educare",
  DECRIPTION:
    "EDUCARE can help you digitize your colleges or universities by providing your students different types of quality services.",
  TUTORIAL_URL:
    "https://www.youtube.com/watch?v=FgYdBKraxGg",
  WATCH_TUTORIAL: "Future Trends of Digitization"
};
const SERVICE_DATA = {
  HEADING: "Our Services",
  ALL_SERVICES: "All Services",
  SERVICE_LIST: [
    {
      LABEL: "MANAGE YOUR CANTEEN",
      DESCRIPTION:
        "To customize the way of serving food in your university or college canteen so that your students can order food in advance so that they need not have to wait for their delicious food",
      URL: "images/food.svg"
    },
    {
      LABEL: "MANAGE YOUR LIBRARY",
      DESCRIPTION:
        "It is tough to manage your college library manually so EDUCARE makes your work much easier by digitizing it and handling it efficiently and with zero tolerance.",
      URL: "images/service2.png"
    },
    {
      LABEL: "EVENTS & ANNOUNCEMENTS",
      DESCRIPTION:
        "EDUCARE gives you the service to make your students aware of various events and announcements by posting it online thus minimizing other resources.",
      URL: "images/events.svg"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "Why choose us?",
  TITLE: "Why we're different",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [
    "We provide cost-Effective digitization of education than others in the market.",
    "High customer statisfaction and experience.",
    "High Efficiency and quick time to value.",
    "Zero Tolerance.",
    "We provide automation of education services which is an integral platform that ties all of your digital services together.",
    "A strong desire to establish long lasting business partnerships.",
    "Provide digital services to universities.",
    "We provides wide range to services to colleges in reasonable prices"
  ]
};
const TESTIMONIAL_DATA = {
  HEADING: "What clients say?",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "EDUCARE has made a huge difference to our Academy by providing different services. Our Academy has shown better results and we are getting more students contacting us for admission in the Academy.",
      IMAGE_URL: "images/user1.jpg",
      NAME: "Julia hawkins",
      DESIGNATION: "XYZ College"
    },
    {
      DESCRIPTION:
        "Thanks to EDUCARE for providing digitized services which helped our Academy a lot such as managing events,announcements,books,etc.I would recommend you to check it out once.",
      IMAGE_URL: "images/user2.jpg",
      NAME: "John Smith",
      DESIGNATION: "ABC College"
    }
  ]
};

const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [
    "images/facebook-icon.png",
    "images/instagram-icon.png",
    "images/whatsapp-icon.png",
    "images/twitter-icon.png",
    "images/linkedin-icon.png",
    "images/snapchat-icon.png"
  ]
};

const FOOTER_DATA = {
  DESCRIPTION:
    "We are typically focused on making college services digitize. Also, we evaluate your  needs and develop a powerful strategy that increases your institue reputation.",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "CARTER ROAD,MUMBAI",
    MOBILE: "+1 123456789",
    EMAIL: "educare@gmail.com"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;
