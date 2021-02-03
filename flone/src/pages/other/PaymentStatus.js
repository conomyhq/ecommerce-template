import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

import "./payment.css";



import {clearCreateTrx} from '../../redux/actions/apiActions'
import {deleteAllFromCart} from '../../redux/actions/cartActions'


const PaymentStatus = () => {
  const {createTransaction: newTransaction} = useSelector((state) => state.api)
  const dispatch = useDispatch()
  const history = useHistory()
  const {pathname} = useLocation()

  console.log(newTransaction)


  useEffect(() => {
    if (newTransaction && newTransaction.data?.success) {
      dispatch(deleteAllFromCart())
    }


  }, [newTransaction, dispatch])

  const onClick = () => {
    const { success } = newTransaction.data;
    console.log(success)
    // TODO Validaciones si la compra es correcta vaciar carro, si no el carro persiste
    // y redireccionar al carro sy fallo o a home si fue aprobada
    dispatch(clearCreateTrx())

    if (!success) {
      history.push('/checkout')
      return;
    }
    history.push('/')
    // dispatch(deleteAllFromCart())
  }

  if (newTransaction?.isLoading) {
    return (
      <div className="flone-preloader-wrapper">
        <div className="flone-preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }

  return (
    <>
      <MetaTags>
        <title>Flone | Payment</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Payment
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="compare-main-area pt-90 pb-100">
          <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {newTransaction && newTransaction.data?.success 
                  ?
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-shopbag"></i>
                    </div>
                    <div className="item-empty-area__text">
                       Purchase was made successfuly<br />{" "}
                      <button className="example" onClick={onClick}>
                         <p>Go back</p>
                      </button>
                    </div>
                  </div>
                  :
                   <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-shuffle"></i>
                    </div>
                    <div className="item-empty-area__text">
                       Something went wrong with your authorization<br />{" "}
                      <button className="example" onClick={onClick}> 
                        <p>Go back</p>
                      </button>
                    </div>
                  </div>
                }                     
                </div>
              </div>
          </div>
        </div>
      </LayoutOne>
    </>
  )
}

export default PaymentStatus
