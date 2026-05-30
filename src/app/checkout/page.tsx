"use client"
import Breadcrumb from '@/components/common/Breadcrupmb'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Topbar from '@/components/topbar/Topbar'
import Link from 'next/link'
import React, { useState } from "react";
import Image from "next/image";
interface CartItem {
  id: number;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Resistant Panels",
    sku: "D32-5H23",
    price: 190,
    quantity: 1,
    image: "/assets/img/innerpages/checkout-product-img1.jpg",
  },
  {
    id: 2,
    name: "Crystal-Infused",
    sku: "D32-5H23",
    price: 150,
    quantity: 1,
    image: "/assets/img/innerpages/checkout-product-img2.jpg",
  },
];
const CheckoutPage: React.FC = () => {
  const [activeOption, setActiveOption] = useState<string>("paypal");
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleOptionChange = (option: string) => {
    setActiveOption(option);
  };

  const calculateSubtotal = (): number => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };
  return (
    <>
     <Topbar />
      <Header />
      <Breadcrumb title="Shop Page" currentPage="Shop" bgImage='breadcrumb-bg1.jpg' /> 

<div className="checkout-page pt-100 mb-100">
  <div className="container">
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-7">
        <div className="checkout-form-wrapper">
          <div className="checkout-form-title">
            <h4>Billing Information</h4>
          </div>
          <div className="checkout-form">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-inner two mb-25">
                    <label>Full Name*</label>
                    <input type="text" placeholder="Daniel Scoot" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner two mb-25">
                    <label>Phone Number*</label>
                    <input type="text" placeholder="(212)+ 455 645 678" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner two mb-25">
                    <label>Email Address <span>(Optional)</span></label>
                    <input type="email" placeholder="info@gmail.com" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner two mb-25">
                    <label>Your Location</label>
                    <input type="text" placeholder="Type Location" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner two mb-25">
                    <label>Street Address*</label>
                    <input type="text" placeholder="Street address" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner two mb-25">
                    <label>Postal Code*</label>
                    <input type="text" placeholder="Postal code" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-inner two mb-25">
                    <label>Short Notes*</label>
                    <textarea placeholder="Write Something..." defaultValue={""} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-inner2">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="contactCheck11" />
                      <label className="form-check-label" htmlFor="contactCheck11">
                        Save my information for next time when I purchased
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="checkout-form-wrapper">
          <div className="checkout-form-title">
            <h4>Order Summary</h4>
          </div>
          <div className="order-sum-area">
             <form>
                                        <div className="cart-menu">
                                            <div className="cart-body">
                                                <ul>
                                                    {cartItems.map((item) => (
                                                        <li className="single-item" key={item.id}>
                                                            <div className="item-area">
                                                                <div className="main-item">
                                                                    <div className="item-img">
                                                                        <Image width={90} height={90} src={item.image} alt={item.name} />
                                                                    </div>
                                                                    <div className="content-and-quantity">
                                                                        <div className="content">
                                                                            <span>{item.quantity} x ${item.price.toFixed(2)}</span>
                                                                            <h6>
                                                                                <Link href="/product-details">{item.name}</Link>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="quantity-area">
                                                                            <div className="quantity">
                                                                                <a
                                                                                    className="quantity__minus"
                                                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                                                >
                                                                                    <span>
                                                                                        <i className="bi bi-dash" />
                                                                                    </span>
                                                                                </a>
                                                                                <input
                                                                                    name="quantity"
                                                                                    type="text"
                                                                                    className="quantity__input"
                                                                                    readOnly
                                                                                    value={item.quantity}
                                                                                />
                                                                                <a
                                                                                    className="quantity__plus"
                                                                                    onClick={() => handleQuantityChange(item.id, 1)}
                                                                                >
                                                                                    <span>
                                                                                        <i className="bi bi-plus" />
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="close-btn"
                                                                    onClick={() => handleRemoveItem(item.id)}
                                                                >
                                                                    <i className="bi bi-x" />
                                                                </button>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="cart-footer">
                                                <div className="pricing-area mb-40">
                                                    <ul>
                                                        <li>
                                                            <strong>Sub Total</strong>
                                                            <strong>${calculateSubtotal().toFixed(2)}</strong>
                                                        </li>
                                                        <li>
                                                            Shipping
                                                            <div className="order-info">
                                                                <p>Shipping Free*</p>
                                                                <span>Pickup fee $10.00</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <strong>Total</strong>
                                                            <strong>${(cartItems.length > 0 ? calculateSubtotal() + 10 : 0).toFixed(2)}</strong>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="choose-payment-method">
                                                    <h6>Select Payment Method</h6>
                                                    <div className="payment-option">
                                                        <ul>
                                                            <li onClick={() => handleOptionChange('paypal')} className={`paypal ${activeOption === 'paypal' ? 'active' : ''}`}>
                                                                <Image width={45} height={20} src="/assets/img/innerpages/icon/payPal.svg" alt="" />
                                                                <div className="checked">
                                                                    <i className="bi bi-check" />
                                                                </div>
                                                            </li>
                                                            <li className={`stripe ${activeOption === 'stripe' ? 'active' : ''}`} onClick={() => handleOptionChange('stripe')}>
                                                                <Image width={45} height={20} src="/assets/img/innerpages/icon/stripe.svg" alt="" />
                                                                <div className="checked">
                                                                    <i className="bi bi-check" />
                                                                </div>
                                                            </li>
                                                            <li className={`offline ${activeOption === 'offline' ? 'active' : ''}`} onClick={() => handleOptionChange('offline')}>
                                                                <Image width={45} height={20} src="/assets/img/innerpages/icon/offline.svg" alt="" />
                                                                <div className="checked">
                                                                    <i className="bi bi-check" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="pt-25" id="StripePayment" style={{ display: activeOption === 'stripe' ? 'block' : 'none' }}>
                                                        <div className="row g-4">
                                                            <div className="col-md-12">
                                                                <div className="form-inner two">
                                                                    <label>Card Number</label>
                                                                    <input type="text" placeholder="1234 1234 1234 1234" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-inner two">
                                                                    <label>Expiry</label>
                                                                    <input type="text" placeholder="MM/YY" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-inner two">
                                                                    <label>CVC</label>
                                                                    <input type="text" placeholder="CVC" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="primary-btn1">
                                                  <span>
                                                      Place Your Order
                                                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                          <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                                      </svg>
                                                  </span>
                                                  <span>
                                                      Place Your Order
                                                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                          <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                                      </svg>
                                                  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer/>
    </>
  )
}

export default CheckoutPage
