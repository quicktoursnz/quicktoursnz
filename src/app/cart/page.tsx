"use client";
import { useState, useRef, useEffect } from "react";
import Breadcrumb from '@/components/common/Breadcrupmb'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Topbar from '@/components/topbar/Topbar'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";

interface CartItem {
    id: number;
    name: string;
    sku: string;
    img: string;
    price: number;
    quantity: number;
}

const CartPage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: "Casual Outfit Set",
            sku: "D32-5H23",
            img: "/assets/img/innerpages/cart-img1.png",
            price: 148.0,
            quantity: 1,
        },
        {
            id: 2,
            name: "Luxury Beauty Item",
            sku: "D32-5H23",
            img: "/assets/img/innerpages/cart-img2.png",
            price: 200.0,
            quantity: 1,
        },
    ]);

    const tableRef = useRef<HTMLTableSectionElement | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
            setActiveIndex(null);
        }
    };

    const handleIncrement = (index: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (index: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                    : item
            )
        );
    };

    const handleQuantityChange = (index: number, value: string) => {
        const parsed = parseInt(value, 10);
        if (!isNaN(parsed) && parsed > 0) {
            setCartItems((prevItems) =>
                prevItems.map((item, i) =>
                    i === index ? { ...item, quantity: parsed } : item
                )
            );
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const pickupFee = 10; // fixed fee
    const total = subTotal + pickupFee;
    return (
        <>
            <Topbar />
            <Header />
            <Breadcrumb title="Shop Page" currentPage="Shop" bgImage='breadcrumb-bg1.jpg' />
            <div className="cart-page pt-100 mb-100">
                <div className="container">
                    <div className="row g-lg-4 gy-5">
                        <div className="col-xl-8 col-lg-7">
                            <div className="cart-shopping-wrapper">
                                <div className="cart-widget-title">
                                    <h4>My Shopping</h4>
                                </div>
                                <table className="cart-table">
                                    <thead>
                                        <tr>
                                            <th>Product Info</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody ref={tableRef}>
                                        {
                                            cartItems.map((product, index) => (
                                                <tr key={product.id}>
                                                    <td data-label="Product Info">
                                                        <div className="product-info-wrapper">
                                                            <div className="product-info-img">
                                                                <Image width={120} height={120} src={product.img} alt={product.name} />
                                                            </div>
                                                            <div className="product-info-content">
                                                                <h6>SwiftMove Travel Wear</h6>
                                                                <p><span>SKU: </span>D32-5H23</p>
                                                                <ul>
                                                                    <li>remove</li>
                                                                    <li>
                                                                        <div className="qty-btn" onClick={() => handleToggle(index)}>
                                                                            quantity
                                                                        </div>
                                                                        <div className={`quantity-area ${activeIndex === index ? "active" : ""}`}>
                                                                            <div className="quantity">
                                                                                <a className="quantity__minus" onClick={() => handleDecrement(index)}>
                                                                                    <span><i className="bi bi-dash" /></span>
                                                                                </a>
                                                                                <input
                                                                                    name="quantity"
                                                                                    type="text"
                                                                                    className="quantity__input"
                                                                                    value={product.quantity}
                                                                                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                                                                                />
                                                                                <a className="quantity__plus" onClick={() => handleIncrement(index)}>
                                                                                    <span><i className="bi bi-plus" /></span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td data-label="Price"><span>${product.price.toFixed(2)}</span></td>
                                                    <td data-label="Total">${(product.price * product.quantity).toFixed(2)}</td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                                <Link href="/shop" className="details-button">
                                    Continue Shoping
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 ">
                            <div className="cart-order-sum-area">
                                <div className="cart-widget-title">
                                    <h4>Order Summary</h4>
                                </div>
                                <div className="order-summary-wrap">
                                    <ul className="order-summary-list">
                                        <li>
                                            <strong>Sub Total</strong>
                                            <strong>${subTotal.toFixed(2)}</strong>
                                        </li>
                                        <li>
                                            Shipping
                                            <div className="order-info">
                                                <p>Shipping Free*</p>
                                                <span>Pickup fee ${pickupFee.toFixed(2)}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="coupon-area">
                                                <span>Coupon Code</span>
                                                <form>
                                                    <div className="form-inner">
                                                        <input type="text" placeholder="Your code" />
                                                        <button type="submit" className="apply-btn">Apply</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                        <li>
                                            <strong>Total</strong>
                                            <strong>${total.toFixed(2)}</strong>
                                        </li>
                                    </ul>
                                    <Link href="/checkout" className="primary-btn1 mt-40">
                                        <span>
                                            Processed Checkout
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                            </svg>
                                        </span>
                                        <span>
                                            Processed Checkout
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default CartPage
