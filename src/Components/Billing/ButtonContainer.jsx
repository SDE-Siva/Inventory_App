import "../Billing/ButtonContainer.css";
import { arrowIcon } from "../../assets/images";
const ButtonContainer = () => {
  return (
    <div className="buttons-container">
      <div className="buttons-group">
        <button className=" button">New Bill</button>
        <button className=" button second">Price Amendment</button>
      </div>
      <button className=" button">$2</button>
      <button className=" button">$10</button>
      <div className="buttons-group">
        <button className=" button  green">Open cash Box</button>
        <button className=" button second green">Terminate Transaction</button>
      </div>
      <div className="buttons-group">
        <button className=" button green">Goods Return</button>
        <button className=" button second green">Print</button>
      </div>
      <button className=" button green">Cancel item</button>
      <button className=" button green">Add item</button>
      <button className=" button">
        <span className="arrow-icon">
          <img src={arrowIcon} alt="" />
        </span>{" "}
        Bill
      </button>
      <button className=" button">$5</button>
      <button className=" button">$50</button>
      <button className=" button">Gift Voucher</button>
      <div className="buttons-group">
        <button className=" button green">Reserved Transaction</button>
        <button className=" button second green">Restore</button>
      </div>
      <button className=" button green">Delete All Transaction</button>
      <button className=" button green">Main Menu</button>
    </div>
  );
};

export default ButtonContainer;
