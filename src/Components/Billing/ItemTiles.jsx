import "../Billing/ItemTiles.css";

const ItemTiles = ({ itemName, chineseName, imageURL }) => {
  return (
    <div className="item-tile-container">
      <img src={imageURL} alt="" />
      <div className="english-name">{itemName}</div>
      <div className="other-name">{chineseName}</div>
    </div>
  );
};

export default ItemTiles;
