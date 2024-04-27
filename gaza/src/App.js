import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import CurrentState from "./pages/CurrentState";
import October from "./pages/October";
import Resources from "./pages/Resources";
import Timeline from "./pages/Timeline";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="CurrentState" element={<CurrentState />} />
          <Route path="Timeline" element={<Timeline />} />
          <Route path="Actors" element={<Actors />} />
          <Route path="OctoberSeventhEvent" element={<October />} />
          <Route path="Resources" element={<Resources />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
