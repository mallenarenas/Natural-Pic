import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext } from "react";
import Context from "../context";
//import { SemanticClassificationFormat } from "typescript";

export default function Galeria() {
  const { data, favorites, setFavorites } = useContext(Context)
  const changeLiked = (id) =>{
    const i=data.findIndex((photo) => photo.id === id)
    data[i].liked = !data[i].liked
  }
  const changeFavorites = (id,photo) =>{
    console.log(!photo.liked)
    if(!photo.liked){
      setFavorites([...favorites, photo])
      console.log(favorites)
    }
    else{
      const i = favorites.findIndex((photo) => photo.id === id)
      setFavorites(favorites.splice(i))
      console.log(favorites)
    }
  }
  return (
    <div className="galeria grid-columns-5 p-3">
        {data.map((photo) => (
           <div key={photo.id} className="photo" style={{backgroundImage: `url(${photo.image})`}}>
            <button onClick={() => {
                  changeFavorites(photo.id,photo)
                  changeLiked(photo.id)
            }}>
            <Heart filled = {photo.liked}/>
            </button>
            </div>
        ))}
    </div>
  );
}
