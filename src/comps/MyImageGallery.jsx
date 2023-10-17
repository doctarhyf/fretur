import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import "../App.css";

const imgz = [
  {
    original: "https://fretur.us/diapo/alfa.jpg",
    thumbnail: "https://fretur.us/diapo/alfa.jpg",
  },
  {
    original: "https://fretur.us/diapo/ps.jpg",
    thumbnail: "https://fretur.us/diapo/ps.jpg",
  },
  {
    original: "https://fretur.us/diapo/sat.jpg",
    thumbnail: "https://fretur.us/diapo/sat.jpg",
  },
  {
    original: "https://fretur.us/diapo/ship.jpg",
    thumbnail: "https://fretur.us/diapo/ship.jpg",
  },
];

export default function MyImageGallery({ images }) {
  const [content, setcontent] = useState([
    {
      image:
        "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/segment_review/hero_image/2023-Alfa-Romeo-Stelvio-Quadrifoglio-SUV-Blue-1001x565-%281%29.jpg",
      title: "Ventes des vehicules",
      description: "Achat vehicules avec FRETUR",
      button: "Learn More",
    },
    {
      image:
        "https://1721181113.rsc.cdn77.org/data/images/full/26315/space-satellite-orbiting-the-earth-3d-rendering.jpg",
      title: "GPS Tracking",
      description: "Tracking de vos biens mobiliers avec FRETUR",
      button: "Learn More",
    },
    {
      image: "https://i.ytimg.com/vi_webp/_NX8F9FBvg0/maxresdefault.webp",
      title: "Autres",
      description: "Autres accessoires.",
      button: "Learn More",
    },

    {
      image:
        "https://morethanshipping.com/wp-content/uploads/2020/10/shipping-container-types.jpg",
      title: "Transferts colis",
      description: "Transferts des vos colis USA-RDC.",
      button: "Learn More",
    },
  ]);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {}

  return (
    <>
      <ImageGallery items={imgz} autoPlay={true} useTranslate3D={true} />;
    </>
  );
}
