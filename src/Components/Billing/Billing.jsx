import LeftPanel from "./LeftPanel/LeftPanel";
import CenterScrollBar from "./CenterScrollBar/CenterScrollBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Billing/Billing.css";
import ImageMenu from "./ImageMenu/ImageMenu";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
import { useState } from "react";

export const Billing = () => {
  const [orderUsingClick, setOrderUsingClick] = useState("");
  const [cancelItem, setCancelItem] = useState(true);
  const [addItem, setAddItem] = useState("addItem");
  const [billMenu, setBillMenu] = useState("billMenuBlocked");
  const [tenderAmount, setTenderAmount] = useState(0);
  const [newBill, setNewBill] = useState(false);

  const handleOrderClick = (item) => {
    setOrderUsingClick({ ...item, timestamp: Date.now() });
  };

  const updateTender = (item) => {
    setTenderAmount((prev) => prev + item);
  };

  return (
    <div className="billing-container">
      <div className="left-container">
        <LeftPanel
          orderUsingClick={orderUsingClick}
          cancelItem={cancelItem}
          addItem={addItem}
          billMenu={billMenu}
          tenderAmount={tenderAmount}
          newBill={newBill}
          setBillMenu={setBillMenu}
          setAddItem={setAddItem}
          setTenderAmount={setTenderAmount}
        />
      </div>
      <div className="right-container">
        <div className="top-right">
          <div className="center-container">
            <CenterScrollBar
              setOrderUsingClick={handleOrderClick}
              addItem={addItem}
            />
          </div>
          <div className="image-container">
            <ImageMenu
              setOrderUsingClick={handleOrderClick}
              addItem={addItem}
            />
          </div>
        </div>
        <div className="button-container">
          <ButtonContainer
            setCancelItem={setCancelItem}
            setAddItem={setAddItem}
            setBillMenu={setBillMenu}
            setTenderAmount={updateTender}
            setNewBill={setNewBill}
            addItem={addItem}
          />
        </div>
      </div>
    </div>
  );
};
export default Billing;
