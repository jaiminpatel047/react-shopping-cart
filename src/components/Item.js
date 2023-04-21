import React, { useState } from "react";
import MenuItem from "../detail/MenuItem";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./style.css";
import Toaster from '../components/Toaster'


const Item = ({handleClick}) => {
  

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [content, SetContent] = useState([]);
  const changeContent = (item) => {
    SetContent([item]);
  };


  const [isActive, setIsActive] = useState(true);
  const toasterActive = () =>{
    setIsActive(!isActive);

    setTimeout(()=>{setIsActive(isActive);}, 5000)
  }

  return (
    <>
      <div className="menu-section">
        {MenuItem.map((item) => (
          <div className="menu-box" key={item.id}>
            <img className="menu-item" src={item.menuItemImg} alt="item-Imag" onClick={() => { changeContent(item); handleOpen()}} />
            <div
              className="menu-description" onClick={() => { handleClick(item); toasterActive() }}>
              <p className="menu-title" title="Details">{item.menuItemName}</p>
              <i className={`fa-solid fa-cart-shopping`}></i>
            </div>
          </div>
        ))}

         <Toaster isActive={isActive} />
      </div>
      {content.map((popUp) => {
        return (
          <Modal className="popup" open={open} onClick={handleClose}>
            <Box className="popup-container">
              <div className="popup-box" key={popUp.id}>
                <div className="popup-box-detail">
                  <div className="popup-box-img-container">
                    <img className="popup-box-img" src={popUp.menuItemImg} />
                  </div>
                </div>
                <div className="popup-box-detail">
                  <h1>{popUp.menuItemName}</h1>
                  <p>{popUp.menuDescription}</p>
                  <p className="popup-price"><span>&#8377;</span> {popUp.menuPrice}</p>

                  <button className="popup-buy-btn" title="Add to Card" onClick={() => { handleClick(popUp) }}>
                    <LocalMallIcon className="popup-buy-icon" />
                  </button>

                </div>
              </div>
            </Box>
          </Modal>
        );
      })}
    </>
  );
};

export default Item;


