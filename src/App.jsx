import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Components */
import Layout from "./components/Layout";
/** Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NousJoindre from "./pages/NousJoindre";
import Boutique from "./pages/Boutique";
import Panier from "./pages/Panier";
import Produit from "./pages/Produit";
import DouceAttention from "./pages/DouceAttention";
import CelebrationIntermediaire from "./pages/CelebrationIntermediaire";
import GrandeCelebration from "./pages/GrandeCelebration";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/" element={<Layout />}>
          <Route
            path="a-propos"
            element={
              <React.Suspense fallback={<>...</>}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="services"
            element={
              <React.Suspense fallback={<>...</>}>
                <Services />
              </React.Suspense>
            }
          />

          <Route
            path="services/douce-attention"
            element={
              <React.Suspense fallback={<>...</>}>
                <DouceAttention />
              </React.Suspense>
            }
          />
          <Route
            path="services/celebration-intermediaire"
            element={
              <React.Suspense fallback={<>...</>}>
                <CelebrationIntermediaire />
              </React.Suspense>
            }
          />
          <Route
            path="services/grande-celebration"
            element={
              <React.Suspense fallback={<>...</>}>
                <GrandeCelebration />
              </React.Suspense>
            }
          />
          <Route
            path="boutique"
            element={
              <React.Suspense fallback={<>...</>}>
                <Boutique />
              </React.Suspense>
            }
          />
          <Route
            path="produits/:slug"
            element={
              <React.Suspense fallback={<>...</>}>
                <Produit />
              </React.Suspense>
            }
          />
          <Route
            path="panier"
            element={
              <React.Suspense fallback={<>...</>}>
                <Panier />
              </React.Suspense>
            }
          />
          <Route
            path="blogue"
            element={
              <React.Suspense fallback={<>...</>}>
                <Blog />
              </React.Suspense>
            }
          />
          <Route
            path="blogue/article/:slug"
            element={
              <React.Suspense fallback={<>...</>}>
                <Article />
              </React.Suspense>
            }
          />
          <Route
            path="nous-joindre"
            element={
              <React.Suspense fallback={<>...</>}>
                <NousJoindre />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<>...</>}>
                <NotFound />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
