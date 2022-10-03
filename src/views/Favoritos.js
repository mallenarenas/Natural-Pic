import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../context";
export default function Favoritos() {
  const { favorites } = useContext(Context)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {favorites.map((favorite) => (
           <img key={favorite.id} src={favorite.image}></img>
        ))}
      </div>
    </div>
  );
}
