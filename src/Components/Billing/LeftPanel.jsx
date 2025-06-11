import "bootstrap/dist/css/bootstrap.min.css";
import "../Billing/LeftPanel.css";

export const LeftPanel = () => {
  return (
    <div className="left-layout">
      <div className="Top-section">
        <div className="total-price">Total price: $150.30</div>
        <div className="">
          <table className="price-table table table-borderless ">
            <thead className="bg-transparent" style={{ position: "sticky" }}>
              <tr>
                <th>Item</th>
                <th className="right-align">Quantity</th>
                <th className="right-align">Unit Price</th>
                <th className="right-align">Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soya Milk</td>
                <td className="right-align">5</td>
                <td className="right-align">$16.50</td>
                <td className="right-align">$33.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bottom-section">
        <div className="input-boxes">
          <div className="item-number">
            <label htmlFor="itemNumber">Item Number</label>
            <input type="number" id="itemNumber" />
          </div>
          <div className="quantity">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" />
          </div>
          <button className="btn btn-primary">Add</button>
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
          <div className="numeric-buttons">
            <button className="btn btn-lg btn-primary">7</button>
            <button className="btn btn-lg btn-primary">8</button>
            <button className="btn btn-lg btn-primary">9</button>
            <button className="btn btn-lg btn-primary">4</button>
            <button className="btn btn-lg btn-primary">5</button>
            <button className="btn btn-lg btn-primary">6</button>
            <button className="btn btn-lg btn-primary">1</button>
            <button className="btn btn-lg btn-primary">2</button>
            <button className="btn btn-lg btn-primary">3</button>
            <button className="btn btn-lg btn-primary">0</button>
            <button className="btn btn-lg btn-primary">.</button>
            <button className="btn btn-lg btn-primary">_</button>
          </div>
          <div className="clear-buttons">
            <button className="btn btn-lg btn-primary">AC</button>
            <button className="btn btn-lg btn-primary">Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
