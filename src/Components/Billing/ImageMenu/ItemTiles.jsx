import "../../Billing/ImageMenu/ItemTiles.css";

const ItemTiles = ({ item, setOrderUsingClick, addItem }) => {
  return (
    <div
      className="item-tile-container"
      onClick={() => {
        addItem === "addItem" ? setOrderUsingClick(item) : "";
      }}
    >
      <img src={item.imageURL} alt="" />
      <div className="english-name">{item.itemName}</div>
      <div className="other-name">{item.chineseName}</div>
    </div>
  );
};

export default ItemTiles;
