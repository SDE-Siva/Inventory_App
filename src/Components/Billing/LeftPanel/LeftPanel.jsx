import "bootstrap/dist/css/bootstrap.min.css";
import "../../Billing/LeftPanel/LeftPanel.css";
import { itemsData } from "../../../utilities/itemsData";
import { useEffect, useState } from "react";

export const LeftPanel = ({
  orderUsingClick,
  cancelItem,
  addItem,
  billMenu,
  tenderAmount,
  newBill,
  setBillMenu,
  setAddItem,
  setTenderAmount,
}) => {
  const [itemData, setItemData] = useState(itemsData);
  const [itemsForBill, setItemsForBill] = useState([]);
  const [itemNumberInput, setItemNumberInput] = useState("");
  const [itemQuantityInput, setItemQuantityInput] = useState("");
  const [totalBillAmount, setTotalBillAmount] = useState(0);
  const [changeAfterTender, setChangeAfterTender] = useState(0);
  const [totalGST, setTotalGST] = useState(0);

  const [activeInput, setActiveInput] = useState("");

  const handleAddOrUpdate = (newItem, newItemQuantity) => {
    setItemsForBill((itemsForBill) => {
      const itemExists = itemsForBill.some(
        (item) => item.itemNumber === newItem.itemNumber
      );

      if (itemExists) {
        return itemsForBill.map((item) =>
          item.itemNumber === newItem.itemNumber
            ? { ...item, quantity: item.quantity + newItemQuantity }
            : item
        );
      } else {
        return [...itemsForBill, { ...newItem, quantity: newItemQuantity }];
      }
    });
  };

  const addOrUpdate = (clickedItemNumber, flag) => {
    let newItemNumber;
    let newItemQuantity;
    if (flag) {
      newItemNumber = clickedItemNumber;
      newItemQuantity = 1;
    } else {
      newItemNumber = Number(itemNumberInput);
      newItemQuantity = Number(itemQuantityInput);
    }

    // finding the item in Data
    let newItem = null;
    let invalidQuantity = false;
    const updatedData = itemData.map((item) => {
      if (newItemNumber === item.itemNumber) {
        if (item.inStock >= newItemQuantity) {
          newItem = item;
          return { ...item, inStock: item.inStock - newItemQuantity };
        } else {
          invalidQuantity = true;
          alert("Too many Quantity");
        }
      }
      return item;
    });

    //Invalid Quantity Check
    if (invalidQuantity) {
      invalidQuantity = false;
      return;
    }

    // Invalid Item Check
    if (newItem === null) {
      alert("Invalid Item !");
      return;
    }

    if (newItem) {
      setItemData(updatedData);
      setTotalBillAmount(
        (prevAmount) => prevAmount + newItemQuantity * newItem.price
      );

      handleAddOrUpdate(newItem, newItemQuantity);
    } else {
      alert("Invalid Item");
    }

    setItemNumberInput("");
    setItemQuantityInput("");
  };

  const clearRow = () => {
    if (itemsForBill.length === 0) return;

    const lastRow = itemsForBill[itemsForBill.length - 1];
    setTotalBillAmount(
      (prevAmount) => prevAmount - lastRow.quantity * lastRow.price
    );
    setItemsForBill((items) => items.slice(0, -1));
  };

  const clearAll = () => {
    setItemsForBill([]);
    setTotalBillAmount(0);
  };

  const handleButtonClick = (num) => {
    if (activeInput === "itemNumber") {
      setItemNumberInput((prevVal) => prevVal + num);
    } else if (activeInput === "itemQuantity") {
      setItemQuantityInput((prevVal) => prevVal + num);
    }
  };

  useEffect(() => {
    if (orderUsingClick && orderUsingClick.itemNumber) {
      addOrUpdate(orderUsingClick.itemNumber, true);
    }
  }, [orderUsingClick]);

  useEffect(() => {
    clearRow();
  }, [cancelItem]);

  useEffect(() => {
    let payable = totalBillAmount + totalGST;
    setChangeAfterTender(() =>
      tenderAmount - payable > 0 ? (tenderAmount - payable).toFixed(2) : 0
    );
  }, [tenderAmount]);

  useEffect(() => {
    setTotalGST(totalBillAmount * 0.12 > 0 ? totalBillAmount * 0.12 : 0);
  }, [totalBillAmount]);

  useEffect(() => {
    setBillMenu("billMenuBlocked");
    setAddItem("addItem");
    setItemsForBill([]);
    setTotalBillAmount(0);
    setChangeAfterTender(0);
    setTenderAmount(0);
  }, [newBill]);

  return (
    <div className="left-layout">
      <div className="Top-section">
        <div className="total-price">
          {addItem === "addItem"
            ? `Total price: $${totalBillAmount.toFixed(2)}`
            : `Change: $${changeAfterTender}`}
        </div>
        <div className="left-table-container">
          <table className={`price-table table table-borderless ${addItem}`}>
            <thead className="bg-transparent" style={{ position: "sticky" }}>
              <tr>
                <th>Item</th>
                <th className="right-align">Quantity</th>
                <th className="right-align">Unit Price</th>
                <th className="right-align">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {itemsForBill.map((item) => (
                <tr key={item.itemNumber}>
                  <td>{item.itemName}</td>
                  <td className="right-align">{item.quantity}</td>
                  <td className="right-align">${item.price}</td>
                  <td className="right-align">
                    ${(item.quantity * item.price).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={`bill-container ${billMenu}`}>
            <div className="bill-rows">
              <div className="text">Amount</div>
              <div>
                $
                {totalBillAmount >= 0
                  ? totalBillAmount.toFixed(2)
                  : changeAfterTender}
              </div>
            </div>
            <div className="bill-rows">
              <div className="text">GST Amount</div>
              <div>${totalGST.toFixed(2)}</div>
            </div>
            <div className="line"></div>
            <div className="bill-rows payable">
              <div className="text " style={{ fontWeight: "bolds" }}>
                Payable
              </div>
              <div>
                $
                {totalBillAmount >= 0
                  ? (totalGST + totalBillAmount).toFixed(2)
                  : 0}
              </div>
            </div>
            <div className="line"></div>

            <div className="bill-rows blue">
              <div className="text">Tender</div>
              <div>${tenderAmount}</div>
            </div>
            <div className="bill-rows blue">
              <div className="text">Change</div>
              <div>${changeAfterTender}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="input-boxes">
          <div className="item-number">
            <label htmlFor="itemNumber">Item Number</label>
            <input
              type="number"
              id="itemNumber"
              value={itemNumberInput}
              onChange={(e) => setItemNumberInput(e.target.value)}
              onFocus={() => setActiveInput("itemNumber")}
            />
          </div>
          <div className="quantity">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={itemQuantityInput}
              onChange={(e) => setItemQuantityInput(e.target.value)}
              onFocus={() => setActiveInput("itemQuantity")}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              addItem === "addItem" ? addOrUpdate() : "";
            }}
          >
            Add
          </button>
        </div>
        <div className="input-buttons">
          <div className="left-buttons">
            <button className="btn btn-lg btn-primary">Language</button>
            <div className="left-input-buttons">
              <label htmlFor="TableNo">Table No</label>
              <input type="number" id="TableNo" />
            </div>
            <div className="left-input-buttons">
              <label htmlFor="NoOfCover">No of Cover</label>
              <input type="number" id="NoOfCover" />
            </div>
          </div>
          {/* Numeric Keyboard */}
          <div className="numeric-buttons">
            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num, index) => (
              <button
                className="btn btn-lg btn-primary"
                onClick={() => handleButtonClick(num)}
                key={index}
              >
                {num}
              </button>
            ))}
            <button className="btn btn-lg btn-primary">.</button>
            <button className="btn btn-lg btn-primary">_</button>
          </div>
          <div className="clear-buttons">
            <button
              className="btn btn-lg btn-primary"
              onClick={() => clearAll()}
            >
              AC
            </button>
            <button
              className="btn btn-lg btn-primary"
              onClick={() => clearRow()}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
