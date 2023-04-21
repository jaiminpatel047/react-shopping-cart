import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Toaster = ({isActive}) => {

  return (
    <>
      <div className="toaster-container">
          <div className={`${isActive ? 'hideToaster' : ''}`}>
            <div className="toaster">
              <button className="toaster-close-button">
                <CloseIcon />
              </button>
              <div className="toaster-icon">
                <NotificationsIcon />
              </div>
              <div className="toaster-description">
                <p className="toaster-title">Successful</p>
                <p className="toaster-message">added to the cart</p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Toaster;
