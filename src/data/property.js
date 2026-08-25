import { getPropertyMediaUrl } from "../lib/propertyMedia";
import property2 from "../assets/images/modern-apartment-image.jpg";
import property3 from "../assets/images/family-house-image.jpg";
import niralaImageMain from "../assets/properties/Nirala Trio 3BHK/Main.jpeg";

export const featuredProperties = [
  {
    id: 1,
    title: "Nirala Trio – 3BHK",
    price: "₹2 Cr",
    location: "Greater Noida Sector 2",
    image: niralaImageMain,
    tag: "Buy",

    gallery: [
      getPropertyMediaUrl("nirala-trio", "Main.jpeg"),
      getPropertyMediaUrl("nirala-trio", "01.jpeg"),
      getPropertyMediaUrl("nirala-trio", "02.jpeg"),
      getPropertyMediaUrl("nirala-trio", "03.jpeg"),
      getPropertyMediaUrl("nirala-trio", "04.jpeg"),
      getPropertyMediaUrl("nirala-trio", "05.jpeg"),
      getPropertyMediaUrl("nirala-trio", "06.jpeg"),
      getPropertyMediaUrl("nirala-trio", "07.jpeg"),
      getPropertyMediaUrl("nirala-trio", "08.jpeg"),
    ],
    videos: [getPropertyMediaUrl("nirala-trio", "Tour.mp4")],

    details: {
    propertyType: "Apartment",
    configuration: "3 BHK",
    area: "Details coming soon",
    status: "Details coming soon",
    possession: "Details coming soon",
  },
  },

  {
    id: 2,
    title: "Modern Apartment",
    price: "₹80 Lakh",
    location: "Noida",
    image: property2,
    tag: "Rent",
    gallery: [],
    videos: [],
  },

  {
    id: 3,
    title: "Family House",
    price: "₹60 Lakh",
    location: "Jaipur",
    image: property3,
    tag: "Popular",
    gallery: [],
    videos: [],
  },
];
