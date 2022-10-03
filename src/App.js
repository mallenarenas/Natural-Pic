import "./styles.css";

import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./context";

export default function App() {
  const endpoint = "/fotos.json";
  // Variable global para galería
  const [data, setData] = useState([]);
  // Variablo gobal para la galeria de favoritos
  const [favorites, setFavorites] = useState([]);
  const globalData = { data, setData, favorites, setFavorites };
  //Leer los datos de fotos.json
  useEffect(() => {
    dataconsult();
  },[])
  // función para leer y guardar lo datos
const dataconsult = async () => {  
    const response = await (await fetch(endpoint)).json()
    const data = response.photos
    const photos = data.map((photo) => ({
      id: photo.id,
      image:  photo.src.tiny,
      liked: photo.liked,
    }))
    // Se cambia el estado
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
