import Breadcrumb from '@/components/common/Breadcrupmb'
import Header from '@/components/layout/Header'
import Topbar from '@/components/topbar/Topbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb title="Shop Page" currentPage="Shop" bgImage='breadcrumb-bg1.jpg' />

      <div className="shop-page pt-100 mb-100">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-3 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="shop-sidebar">
                <div className="single-widgets widget_search mb-30">
                  <form>
                    <div className="wp-block-search__inside-wrapper">
                      <button type="submit" className="wp-block-search__button">
                        <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.2746 9.04904C11.1219 7.89293 11.5013 6.45957 11.3371 5.0357C11.1729 3.61183 10.4771 2.30246 9.38898 1.36957C8.30083 0.436668 6.90056 -0.050966 5.46831 0.00422091C4.03607 0.0594079 2.67747 0.653346 1.66433 1.66721C0.651194 2.68107 0.0582276 4.04009 0.00406556 5.47238C-0.0500965 6.90466 0.43854 8.30458 1.37222 9.39207C2.30589 10.4795 3.61575 11.1744 5.03974 11.3376C6.46372 11.5008 7.89682 11.1203 9.05232 10.2722H9.05145C9.07769 10.3072 9.10569 10.3405 9.13719 10.3729L12.5058 13.7415C12.6699 13.9057 12.8924 13.9979 13.1245 13.998C13.3566 13.9981 13.5793 13.906 13.7435 13.7419C13.9076 13.5779 13.9999 13.3553 14 13.1232C14.0001 12.8911 13.908 12.6685 13.7439 12.5043L10.3753 9.13566C10.344 9.104 10.3104 9.07475 10.2746 9.04817V9.04904ZM10.5004 5.68567C10.5004 6.31763 10.3759 6.9434 10.1341 7.52726C9.89223 8.11112 9.53776 8.64162 9.0909 9.08849C8.64403 9.53535 8.11352 9.88983 7.52967 10.1317C6.94581 10.3735 6.32003 10.498 5.68807 10.498C5.05611 10.498 4.43034 10.3735 3.84648 10.1317C3.26262 9.88983 2.73211 9.53535 2.28525 9.08849C1.83838 8.64162 1.48391 8.11112 1.24207 7.52726C1.00023 6.9434 0.875753 6.31763 0.875753 5.68567C0.875753 4.40936 1.38276 3.18533 2.28525 2.28284C3.18773 1.38036 4.41177 0.873346 5.68807 0.873346C6.96438 0.873346 8.18841 1.38036 9.0909 2.28284C9.99338 3.18533 10.5004 4.40936 10.5004 5.68567Z" />
                        </svg>
                      </button>
                      <input type="search" className="wp-block-search__input" placeholder="Search Product" required />
                    </div>
                  </form>
                </div>
                <div className="single-widgets mb-30">
                  <div className="widget-title">
                    <h5>Cart</h5>
                  </div>
                  <div className="cart-menu">
                    <ul className="product-list">
                      <li className="single-product">
                        <div className="product-img">
                          <Image width={250} height={220} src="/assets/img/innerpages/checkout-product-img1.jpg" alt="" />
                          <button type="reset" className="close-btn"><i className="bi bi-x" /></button>
                        </div>
                        <div className="content">
                          <h6><Link href="product-details">SwiftMove Travel Wear</Link></h6>
                          <span>2 x $190.00</span>
                        </div>
                      </li>
                      <li className="single-product">
                        <div className="product-img">
                          <Image width={250} height={220} src="/assets/img/innerpages/checkout-product-img2.jpg" alt="" />
                          <button type="reset" className="close-btn"><i className="bi bi-x" /></button>
                        </div>
                        <div className="content">
                          <h6><Link href="product-details">Coastal Wanderer</Link></h6>
                          <span>1 x $148.00</span>
                        </div>
                      </li>
                    </ul>
                    <div className="total-price">
                      <span>Subtotal</span>
                      <strong>$528.00</strong>
                    </div>
                    <div className="btn-area">
                      <Link href="/cart" className="primary-btn1 mb-15">
                        <span>
                          View Cart
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                          </svg>
                        </span>
                        <span>
                          View Cart
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                          </svg>
                        </span>
                      </Link>
                      <Link href="/checkout" className="primary-btn1 black-bg">
                        <span>
                          Checkout
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                          </svg>
                        </span>
                        <span>
                          Checkout
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="single-widgets mb-30">
                  <div className="widget-title">
                    <h5>Category</h5>
                  </div>
                  <div className="checkbox-container">
                    <ul>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Fashion (06)</span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Smart Watch (05) </span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Perfume (10)</span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Wall Printing (04)</span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Sunglasess (02)</span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Uncategorized (06)</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-widgets">
                  <div className="widget-title">
                    <h5>Tag:</h5>
                  </div>
                  <ul className="tag-list">
                    <li><Link href="/shop">Shoe,</Link></li>
                    <li><Link href="/shop">Watch,</Link></li>
                    <li><Link href="/shop">Fashion,</Link></li>
                    <li><Link href="/shop">Perfume,</Link></li>
                    <li><Link href="/shop">Printing,</Link></li>
                    <li><Link href="/shop">Glasess</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-lg-2 order-1">
              <div className="row gy-5 mb-60">
                <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="product-card">
                    <div className="product-card-img-wrap">
                      <Link href="product-details" className="product-card-img">
                        <Image width={250} height={220} src="/assets/img/innerpages/product-img1.jpg" alt="" />
                      </Link>
                      <Link href="/cart" className="cart-btn">
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                          <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                        </svg>
                        Add to Cart
                      </Link>
                    </div>
                    <div className="product-card-content">
                      <h6><Link href="product-details">Jetsetter Collection</Link></h6>
                      <span>$345.0 <del>$455.0</del></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="product-card">
                    <div className="product-card-img-wrap">
                      <Link href="product-details" className="product-card-img">
                        <Image width={250} height={220} src="/assets/img/innerpages/product-img2.jpg" alt="" />
                      </Link>
                      <Link href="/cart" className="cart-btn">
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                          <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                        </svg>
                        Add to Cart
                      </Link>
                    </div>
                    <div className="product-card-content">
                      <h6><Link href="product-details">First-Class Fashion</Link></h6>
                      <span>$356.0</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="product-card">
                    <div className="product-card-img-wrap">
                      <Link href="product-details" className="product-card-img">
                        <Image width={250} height={220} src="/assets/img/innerpages/product-img3.jpg" alt="" />
                      </Link>
                      <Link href="/cart" className="cart-btn">
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                          <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                        </svg>
                        Add to Cart
                      </Link>
                    </div>
                    <div className="product-card-content">
                      <h6><Link href="product-details">GlobeTrek Outfit</Link></h6>
                      <span>$210.0</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="product-card">
                    <div className="product-card-img-wrap">
                      <Link href="product-details" className="product-card-img">
                        <Image width={250} height={220} src="/assets/img/innerpages/product-img4.jpg" alt="" />
                      </Link>
                      <Link href="/cart" className="cart-btn">
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                          <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                        </svg>
                        Add to Cart
                      </Link>
                    </div>
                    <div className="product-card-content">
                      <h6><Link href="product-details">Island Breeze Attire</Link></h6>
                      <span>$90.0</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="product-card">
                    <div className="product-card-img-wrap">
                      <Link href="product-details" className="product-card-img">
                        <Image width={250} height={220} src="/assets/img/innerpages/product-img5.jpg" alt="" />
                      </Link>
                      <Link href="/cart" className="cart-btn">
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                          <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                        </svg>
                        Add to Cart
                      </Link>
                    </div>
                    <div className="product-card-content">
                      <h6><Link href="product-details">First-Class Fashion</Link></h6>
                      <span>$160.00 <del>$220.00</del></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="product-card">
                    <div className="product-card-img-wrap">
                      <Link href="product-details" className="product-card-img">
                        <Image width={250} height={220} src="/assets/img/innerpages/product-img6.jpg" alt="" />
                      </Link>
                      <Link href="/cart" className="cart-btn">
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                          <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                        </svg>
                        Add to Cart
                      </Link>
                    </div>
                    <div className="product-card-content">
                      <h6><Link href="product-details">SwiftMove Travel Wear</Link></h6>
                      <span>$120.0</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="product-card">
                    <div className="product-card-img-wrap">
                      <Link href="product-details" className="product-card-img">
                        <Image width={250} height={220} src="/assets/img/innerpages/product-img7.jpg" alt="" />
                      </Link>
                      <Link href="/cart" className="cart-btn">
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                          <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                        </svg>
                        Add to Cart
                      </Link>
                    </div>
                    <div className="product-card-content">
                      <h6><Link href="product-details">Rugged Traveler Collection</Link></h6>
                      <span>$45.0</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="product-card">
                    <div className="product-card-img-wrap">
                      <Link href="product-details" className="product-card-img">
                        <Image width={250} height={220} src="/assets/img/innerpages/product-img8.jpg" alt="" />
                      </Link>
                      <Link href="/cart" className="cart-btn">
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                          <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                        </svg>
                        Add to Cart
                      </Link>
                    </div>
                    <div className="product-card-content">
                      <h6><Link href="product-details">TravelEase Apparel</Link></h6>
                      <span>$238.0</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="product-card">
                    <div className="product-card-img-wrap">
                      <Link href="product-details" className="product-card-img">
                        <Image width={250} height={220} src="/assets/img/innerpages/product-img9.jpg" alt="" />
                      </Link>
                      <Link href="/cart" className="cart-btn">
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                          <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                        </svg>
                        Add to Cart
                      </Link>
                    </div>
                    <div className="product-card-content">
                      <h6><Link href="product-details">CityScape Collection</Link></h6>
                      <span>$190.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination-area wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="paginations-button">
                  <a href="#">
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M7.86133 9.28516C7.14704 7.49944 3.57561 5.71373 1.43276 4.99944C3.57561 4.28516 6.7899 3.21373 7.86133 0.713728" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                    Prev
                  </a>
                </div>
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item">
                    <a href="#">04</a>
                  </li>
                </ul>
                <div className="paginations-button">
                  <a href="#">
                    Next
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M1.42969 9.28613C2.14397 7.50042 5.7154 5.7147 7.85826 5.00042C5.7154 4.28613 2.50112 3.21471 1.42969 0.714705" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default page
