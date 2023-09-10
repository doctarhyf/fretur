import { useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./helpers/flow";
import Layout from "./pages/Layout";
import PageColisSend from "./pages/PageColisSend";
import PageColisRec from "./pages/PageColisRec";
import PageColisTrack from "./pages/PageColisTrack";
import PageHome from "./pages/PageHome";
import PageImpExp from "./pages/PageImpExp";
import PageError from "./pages/PageError";

import PageHabi from "./pages/PageHabi";
import PageFAQ from "./pages/PageFAQ";
import PageContact from "./pages/PageContact";
import PageAbout from "./pages/PageAbout";

import PageContainer from "./pages/PageContainer";
import PageDV from "./pages/PageDV";
import PageMyAcc from "./pages/PageMyAcc";
import PageVisa from "./pages/PageVisa";
import PageNearOffice from "./pages/PageNearOffice";
import PagePrivacy from "./pages/PagePrivacy";
import PageTrackMob from "./pages/PageTrackMob";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <BrowserRouter basename={ROUTES.BASE_NAME.path}>
      <Routes>
        <Route path={ROUTES.PAGE_HOME.path} element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path={ROUTES.PAGE_IMP_EXP.path} element={<PageImpExp />} />
          <Route
            path={ROUTES.PAGE_COLIS_SEND.path}
            element={<PageColisSend />}
          />
          <Route path={ROUTES.PAGE_COLIS_REC.path} element={<PageColisRec />} />
          <Route
            path={ROUTES.PAGE_COLIS_TRACK.path}
            element={<PageColisTrack />}
          />

          <Route path={ROUTES.PAGE_TRACK_MOB.path} element={<PageTrackMob />} />

          <Route path={ROUTES.PAGE_ABOUT.path} element={<PageAbout />} />
          <Route path={ROUTES.PAGE_CONTACT.path} element={<PageContact />} />
          <Route path={ROUTES.PAGE_FAQ.path} element={<PageFAQ />} />
          <Route path={ROUTES.PAGE_HABI.path} element={<PageHabi />} />
          <Route
            path={ROUTES.PAGE_NEAR_OFFICE.path}
            element={<PageNearOffice />}
          />
          <Route path={ROUTES.PAGE_PRIVACY.path} element={<PagePrivacy />} />

          <Route
            path={ROUTES.PAGE_CONTAINER.path}
            element={<PageContainer />}
          />
          <Route path={ROUTES.PAGE_DV.path} element={<PageDV />} />
          <Route path={ROUTES.PAGE_MY_ACC.path} element={<PageMyAcc />} />
          <Route path={ROUTES.PAGE_VISA.path} element={<PageVisa />} />

          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
