import React, { useEffect, useRef, useState } from "react";

import "../App.css";

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
      swipper
      {/*  <Slider autoplay={2600}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundSize: "90%",
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className=" bg-black/40 space-y-1 md:mx-auto shadow-md  w-fit mt-[120pt]  text-white p-2 md:p-4 rounded-md">
              <h1 className="text-3xl  shadow-black text-clip">{item.title}</h1>
              <p>{item.description}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </Slider> */}
    </>
  );
}
