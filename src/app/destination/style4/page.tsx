import Breadcrumb from '@/components/common/Breadcrupmb'
import Destination4 from '@/components/destination-section/Destination4'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Topbar from '@/components/topbar/Topbar'
import PopularPackageV2 from '@/components/travel-package-section/PopularPackage/PopularPackageV2'
import React from 'react'

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <Breadcrumb title="Destination 04" currentPage="Destination 04" bgImage='breadcrumb-bg1.jpg'/>
<Destination4/>
<PopularPackageV2/>

      <Footer/>
    </>
  )
}

export default page
