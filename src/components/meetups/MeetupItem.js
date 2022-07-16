import classes from "./meetupItem.module.css";
import Card from "../ui/Card";

import { useContext } from "react";

import FavoritesContext from "../../store/favorites-context";

const MeetupItem = ({ item }) => {
  const { image, title, address, description, id } = item;

  const favoritesCtx = useContext(FavoritesContext)

  const isFavorite = favoritesCtx.isFavorite(id )

  const toogleFavoritesStatushandler = () => {
    if (isFavorite){
      favoritesCtx.removeFavorites(id)
    }
    else{
      favoritesCtx.addFavorites(item)
    }

  };  

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toogleFavoritesStatushandler}>{isFavorite? 'Remove From Favorites' : 'To Favorites'}</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
