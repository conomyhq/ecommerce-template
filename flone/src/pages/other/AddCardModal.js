import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";

function AddCardModal(props) {
  const { show, onHide, cardData, setCardData } = props;
  const [errorMsg, setErrorMsg] = useState('')

  const {cardNumber, expireDate, cvv} = cardData;

  const onClick = () => {
    if (cardNumber.length < 16) {
      setErrorMsg('Place a correct card number')
      setTimeout(() => setErrorMsg(''), 3000);
      return;
    }
    onHide()
  }

  const onChange = (e) => {
    setCardData({...cardData, [e.target.name]: e.target.value })
  }


  return (
    <Fragment>
      <Modal
        show={show}
        onHide={onHide}
        className="product-quickview-modal-wrapper"
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="modal-body">
          <div className="billing-info-wrap">
            <h3>Add Card</h3>
            <div className="row">
              <div className="col-lg-12">
                <div className="billing-info mb-20">
                  <label>Card Number</label>
                  <input 
                    className="billing-address"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => onChange(e)}
                    name="cardNumber"
                    maxLength={16}
                    />

                </div>

                {errorMsg && <p>{errorMsg}</p>}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info mb-20">
                  <label>Expiration Date</label>
                  <input 
                    type="text"
                    value={expireDate}
                    onChange={(e) => onChange(e)}
                    name="expireDate"
                    maxLength={5}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info mb-20">
                  <label>Cvv</label>
                  <input 
                    type="password"
                    value={cvv}
                    onChange={(e) => onChange(e)}
                    name="cvv"
                    maxLength={3}
                  />
                </div>
              </div>
            </div>
        
            <div className="col-lg-12">
              <div className="cart-shiping-update-wrapper">
                <div className="cart-clear">
                  <button onClick={() => onHide()}>
                    Cancel
                  </button>
                </div>
                <div className="cart-clear">
                  <button onClick={onClick}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Modal>
    </Fragment>
  );
}

AddCardModal.propTypes = {
  onHide: PropTypes.func,
  show: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    cartitems: state.cartData
  };
};

export default connect(mapStateToProps)(AddCardModal);
