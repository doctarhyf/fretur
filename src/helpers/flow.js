import collis from "../assets/cards/collis.jpg";
import cont from "../assets/cards/cont.jpg";
import student from "../assets/cards/student.jpg";
import habi from "../assets/cards/habi.jpg";
import impexp from "../assets/cards/impexp.jpg";
import visa from "../assets/cards/visa.jpg";
import alfa from "../assets/cards/alfa.jpg";
import acc from "../assets/cards/acc.jpg";

export const CLOTHES_TYPE = [
  {
    name: "Hommes",
    path: "?type=man",
    cat: "man",
  },
  {
    name: "Femmes",
    path: "?type=lady",
    cat: "lady",
  },
  {
    name: "Enfants",
    path: "?type=child",
    cat: "child",
  },
];

export const ROUTES = {
  BASE_NAME: {
    path: "/",
  },
  PAGE_NEAR_OFFICE: {
    path: "/nearoffice",
  },
  PAGE_PRIVACY: {
    path: "/privacy",
  },
  PAGE_HOME: {
    path: "/",
  },
  PAGE_COLIS_SEND: {
    path: "/send",
  },
  PAGE_COLIS_REC: {
    path: "/rec",
  },
  PAGE_COLIS_TRACK: {
    path: "/track",
  },
  PAGE_IMP_EXP: {
    path: "/impexp",
  },
  PAGE_MY_ACC: {
    path: "/myacc",
  },

  PAGE_ABOUT: {
    path: "/about",
  },

  PAGE_CONTACT: {
    path: "/contact",
  },

  PAGE_FAQ: {
    path: "/faq",
  },

  PAGE_HABI: {
    path: "/habi",
  },

  PAGE_CONTAINER: {
    path: "/cont",
  },

  PAGE_DV: {
    path: "/dv",
  },

  PAGE_MY_ACC: {
    path: "/myacc",
  },

  PAGE_VISA: {
    path: "/visa",
  },

  PAGE_TRACK_MOB: {
    path: "/track_mob",
  },
};

export const CARDS_DATA = [
  {
    title: "Fret Import/Export",
    desc: "Ramassage de tous vos colis sur le territoire de Caroline USA vers la RDC/Kinshasa",
    img: impexp,
    path: ROUTES.PAGE_IMP_EXP.path,
  },
  {
    title: "DV Loterie avec financement voyage",
    desc: "Gangnez votre visant en jouant a la lotterie DV",
    img: student,
    path: ROUTES.PAGE_DV.path,
  },
  /* {
    title: "Student Visa",
    desc: "Gagnez votre visa d’etudes pour continuer vos etudes aux USA",
    img: visa,
    path: ROUTES.PAGE_VISA.path,
  }, */
  /*  {
    title: "Habillement",
    desc: "Pour vos habillements hommes et femmes",
    img: habi,
    path: ROUTES.PAGE_HABI.path,
  }, */
  /*  {
    title: "Collection collis",
    desc: "Collections de tous vos collis achetes sur amazon, alibaba etc.",
    img: collis,
    path: ROUTES.PAGE_COLIS_REC.path,
  }, */
  /* {
    title: "Gerer un container",
    desc: "Vous pouvez gerer votre container en ligne a distance",
    img: cont,
    path: ROUTES.PAGE_CONTAINER.path,
  }, */
  {
    title: "Tracking Mobilier",
    desc: "Avec fretur il est capable de tracker tous vos biens mobiliers (Voiture, moto etc. )",
    img: alfa,
    path: ROUTES.PAGE_TRACK_MOB.path,
  },
  {
    title: "Creer un compte",
    desc: "Creer un compte fretur pour facilement gerer vos operations",
    img: acc,
    path: ROUTES.PAGE_MY_ACC.path,
    btnText: "Creer un compte FRETUR",
  },
];

export const images = [
  {
    original:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/33220/capsule_616x353.jpg?t=1680014001",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://cdn.mos.cms.futurecdn.net/2VF6gG8bQU9bGtvczYRmiF.jpg",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original:
      "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },

  {
    original:
      "https://shop.gkwretail.com/cdn/shop/products/BEDBENModernSmartBed_a7e088b0-3845-491f-bb5e-568addc8aa30.jpg?v=1647351527",
  },
  {
    original:
      "https://media.architecturaldigest.com/photos/60a6a478ced6797772f44d7a/4:3/w_1424,h_1068,c_limit/20191011-DSC_7759-Edit_HI_RES.jpeg",
  },
];
