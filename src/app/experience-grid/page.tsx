import Breadcrumb from "@/components/common/Breadcrupmb";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Topbar from "@/components/topbar/Topbar";
import PackageGrid from "@/components/travel-package-section/PackageGrid";

import React from "react";

const PackageGridPage = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Breadcrumb
        title="Experience"
        currentPage="Experience"
        bgImage="breadcrumb-bg4.jpg"
      />
      <PackageGrid />
      <Footer />
    </div>
  );
};

export default PackageGridPage;
