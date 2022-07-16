import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";

import { MeetupList } from "../components/meetups";

import { Link } from "react-router-dom";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  const { favorites: favoritesList, totalFavorites } = favoritesCtx;

  // console.log(totalFavorites);

  let content;

  if (totalFavorites === 0) {
    content = (
      <div>
        <p>You do not have favorite meetup yet.</p>
        <p>
          Please go to <Link to="/"><strong>Meetups</strong></Link> to add a meetup to your
          favortite list.
        </p>
      </div>
    );
  } else {
    content = (
      <div>
        <MeetupList data={favoritesList} />
      </div>
    );
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favorites;
