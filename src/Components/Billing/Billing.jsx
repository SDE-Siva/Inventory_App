import LeftPanel from "../Billing/LeftPanel";
import CenterScrollBar from "./CenterScrollBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Billing/Billing.css";
import ImageMenu from "./ImageMenu";
import ButtonContainer from "./ButtonContainer";

export const Billing = () => {
  return (
    <div className="billing-container">
      <div className="left-container">
        <LeftPanel />
      </div>
      <div className="right-container">
        <div className="top-right">
          <div className="center-container">
            <CenterScrollBar />
          </div>
          <div className="image-container">
            <ImageMenu />
          </div>
        </div>
        <div className="button-container">
          <ButtonContainer />
        </div>
      </div>
    </div>
  );
};
export default Billing;
