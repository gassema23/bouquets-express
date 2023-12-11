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
import Produit from "./pages/Produit";

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
