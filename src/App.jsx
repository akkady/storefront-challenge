import { Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Layout from "./components/Layout";
import PlpWrapper from "./components/plp/PlpWrapper";
import PdpWrapper from "./components/pdp/PdpWrapper";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PlpWrapper />} />
        <Route path="product/:id" element={<PdpWrapper />} />
      </Route>
    </Routes>
  );
}

export default App;
