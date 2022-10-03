import "./styles.css";

import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./context";

export default function App() {
  const endpoint = "/fotos.json";
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const globalData = { data, setData, favorites, setFavorites };
  useEffect(() => {
    dataconsult();
},[])
  
const dataconsult = async () => {  
    const response = await (await fetch(endpoint)).json()
    const data = response.photos
    console.log(data)
    const photos = data.map((x) => ({
      id: x.id,
      image:  x.src.tiny,
      liked: x.liked,
    }))
    console.log(photos)
    setData(photos)
    return
  }
  
  return (
    <div className="App">
      <Context.Provider value={globalData}>
      <BrowserRouter>
        <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
