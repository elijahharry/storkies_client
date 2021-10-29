import AddFavorites from "./AddFavorites/AddFavorites";
import FavoritesList from "./FavoritesList/FavoritesList";
import { Grid } from "@material-ui/core";

const ManageFavorites = ({ favorites, revalidate }) => {
  return (
    <div>
      <AddFavorites
        old={favorites}
        revalidate={revalidate}
        key={favorites.last_updated}
      />
      <FavoritesList favorites={favorites} />
    </div>
  );
};

export default ManageFavorites;
