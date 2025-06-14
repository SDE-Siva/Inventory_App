import "../../Billing/ButtonContainer/ButtonContainer.css";
import { arrowIcon } from "../../../assets/images";
import { Link } from "react-router-dom";
const ButtonContainer = ({
  setCancelItem,
  setAddItem,
  setBillMenu,
  setTenderAmount,
  setNewBill,
  addItem,
}) => {
  return (
    <div className="buttons-container">
      <div className="buttons-group">
        <button className=" button" onClick={() => setNewBill((prev) => !prev)}>
          New Bill
        </button>
        <button className=" button second">Price Amendment</button>
      </div>
      <button className=" button" onClick={() => setTenderAmount(2)}>
        $2
      </button>
      <button className=" button" onClick={() => setTenderAmount(10)}>
        $10
      </button>
      <div className="buttons-group">
        <button className=" button  green">Open cash Box</button>
        <button className=" button second green">Terminate Transaction</button>
      </div>
      <div className="buttons-group">
        <button className=" button green">Goods Return</button>
        <button className=" button second green">Print</button>
      </div>
      <button
        className=" button green"
        onClick={() => {
          addItem === "addItem" ? setCancelItem((prev) => !prev) : "";
        }}
      >
        Cancel item
      </button>
      <button
        className=" button green"
        onClick={() => {
          setAddItem("addItem");
          setBillMenu("billMenuBlocked");
        }}
      >
        Add item
      </button>
      <button
        className=" button"
        onClick={() => {
          setAddItem("addItemBlocked");
          setBillMenu("billMenu");
        }}
      >
        <span className="arrow-icon">
          <img src={arrowIcon} alt="" />
        </span>{" "}
        Bill
      </button>
      <button className=" button" onClick={() => setTenderAmount(5)}>
        $5
      </button>
      <button className=" button" onClick={() => setTenderAmount(50)}>
        $50
      </button>
      <button className=" button">Gift Voucher</button>
      <div className="buttons-group">
        <button className=" button green">Reserved Transaction</button>
        <button className=" button second green">Restore</button>
      </div>
      <button className=" button green">Delete All Transaction</button>
      <Link className="links" to="/">
        <button className=" button green">Main Menu</button>
      </Link>
    </div>
  );
};

export default ButtonContainer;
