import ItemTiles from "./ItemTiles";
import "../../Billing//ImageMenu/ImageMenu.css";
import { itemsData } from "../../../utilities/itemsData";

const ImageMenu = ({ setOrderUsingClick, addItem }) => {
  const dataOfItems = itemsData;
  return (
    <div className="image-menu">
      {dataOfItems.map((item) => (
        <ItemTiles
          item={item}
          key={item.itemNumber}
          setOrderUsingClick={setOrderUsingClick}
          addItem={addItem}
        />
      ))}
    </div>
  );
};

export default ImageMenu;
