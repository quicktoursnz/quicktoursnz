import Breadcrumb from '@/components/common/Breadcrupmb'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import ProductDetails from '@/components/products/ProductDetails'
import Topbar from '@/components/topbar/Topbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb title="Product Details" currentPage="Product Details" bgImage='breadcrumb-bg1.jpg' />
      <ProductDetails/>
      <Footer />
    </>
  )
}

export default page
