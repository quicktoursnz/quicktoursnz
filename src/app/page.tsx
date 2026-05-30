

import BlogSection from "@/components/blog/BlogV1";
import CounterSection from "@/components/counter-section/CounterV1";
import DestinationSection from "@/components/destination-section/DestinationSectionV1";
import FaqSection from "@/components/faq-section/FaqV1";
import BannerSection from "@/components/hero-section/Hero1";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import FilterComponent from "@/components/common/FilterComponent";
import OfferBannerSection from "@/components/offer-section/OfferBannerV1";
import OfferSection from "@/components/offer-section/OfferSectionV1";
import PartnerSection from "@/components/partner-section/PartnerSectionV1";
import LocationSearch from "@/components/search/LocationSearchV1";
import ServiceSection from "@/components/service-section/ServiceSectionV1";
import TesimonialSection from "@/components/testimonial-section/TesimonialV1";
import Topbar from "@/components/topbar/Topbar";
import DayOnePackage from "@/components/travel-package-section/DayOnePackageV1";
import OfferPackage from "@/components/travel-package-section/OfferPackageV1";
import TravelPackage from "@/components/travel-package-section/TravelPackageV1";
export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <BannerSection />
      <FilterComponent />
      <OfferSection />
      <DestinationSection />
      <ServiceSection />
      <TravelPackage />
      <OfferBannerSection />
      <OfferPackage />
      <LocationSearch />
      <PartnerSection />
      <DayOnePackage />
      <BlogSection />
      <TesimonialSection />
      <FaqSection />
      <CounterSection />
      <Footer />
    </>
  );
}
