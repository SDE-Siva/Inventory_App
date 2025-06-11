import ItemTiles from "./ItemTiles";
import "../Billing/ImageMenu.css";
import { itemsData } from "../../utilities/itemsData";

const ImageMenu = () => {
  const dataOfItems = itemsData;
  return (
    <div className="image-menu">
      {dataOfItems.map((item) => (
        <ItemTiles
          itemName={item.itemName}
          chineseName={item.chineseName}
          imageURL={item.imageURL}
        />
      ))}
    </div>
  );
};

export default ImageMenu;
