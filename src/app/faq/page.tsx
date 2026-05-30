import Breadcrumb from '@/components/common/Breadcrupmb'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Topbar from '@/components/topbar/Topbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Topbar />
            <Header />
            <Breadcrumb title="Ask & Question" currentPage="FAQ" bgImage='breadcrumb-bg2.jpg' />
            <div className="faq-page pt-100 mb-100">
                <div className="container">
                    <div className="row justify-content-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center">
                                <h2>General Questions</h2>
                                <p>We’re committed to offering more than just products—we provide exceptional experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="faq-wrap">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">What Services Does Your Travel Agency Provide?</button>
                                        </h5>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                A travel agency typically provides a wide range of services to ensure a smooth and enjoyable travel experience. As like- <span>Hotel booking, Flight Booking, Visa &amp; Customized Travel Pakcge etc.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Do You Offer Customized Travel Packages?</button>
                                        </h5>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                Absolutely! We offer fully customized travel packages based on your interests, budget, and schedule. Whether you're planning <span>a solo adventure, a family vacation, a romantic getaway, or a group tour</span>, our team will tailor every detail to create a personalized travel experience just for you.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">How do I book a tour or vacation package?</button>
                                        </h5>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                Booking a tour or vacation package is easy! Simply browse our website to explore destinations and packages. Once you've found the perfect option, click “Book Now” and follow the steps to complete your reservation. If you need help, our travel experts are just a call or message away to assist you with the booking process.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Do You Provide Visa Assistance?</button>
                                        </h5>
                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                Yes, we do! Our team offers complete <span>visa assistance services</span> to help you navigate the application process smoothly. From providing guidance on required documents to scheduling appointments and submitting applications, we're here to support you every step of the way.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">Do you provide travel insurance options?</button>
                                        </h5>
                                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                Yes, we do! We offer travel insurance options to ensure peace of mind during your trip. Our insurance plans cover trip cancellations, medical emergencies, lost luggage, and more. You can choose to add travel insurance during the booking process or contact our team for personalized assistance.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-page-banner mb-100" style={{ backgroundImage: 'url(/assets/img/home7/home7-testimonial-bg.jpg)' }} />
            <div className="faq-page mb-100">
                <div className="container">
                    <div className="row justify-content-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center">
                                <h2>Visa &amp; Documentation</h2>
                                <p>We’re committed to offering more than just products—we provide exceptional experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="faq-wrap">
                                <div className="accordion accordion-flush" id="accordionFlushExample2">
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-visa-headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-visa-collapseOne" aria-expanded="false" aria-controls="flush-visa-collapseOne">Do I need a visa for my destination?</button>
                                        </h5>
                                        <div id="flush-visa-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-visa-headingOne" data-bs-parent="#accordionFlushExample2">
                                            <div className="accordion-body">
                                                Visa requirements depend on your <span>nationality, destination, purpose, and duration of travel</span>. Some countries offer <span>visa-free entry</span>, while others require <span>pre-approved visas</span> or provide visa-on-arrival.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-visa-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-visa-collapseTwo" aria-expanded="false" aria-controls="flush-visa-collapseTwo">What documents are required for visa processing?</button>
                                        </h5>
                                        <div id="flush-visa-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-visa-headingTwo" data-bs-parent="#accordionFlushExample2">
                                            <div className="accordion-body">
                                                Required documents may vary by destination, but generally include a <span>valid passport, recent photographs, completed visa application form, travel itinerary, proof of accommodation, financial statements</span>, and sometimes a <span>letter of invitation or employment letter</span>. We recommend checking with the specific embassy or consulate for the most accurate and updated list.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-visa-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-visa-collapseThree" aria-expanded="false" aria-controls="flush-visa-collapseThree">How long does visa approval take?</button>
                                        </h5>
                                        <div id="flush-visa-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-visa-headingThree" data-bs-parent="#accordionFlushExample2">
                                            <div className="accordion-body">
                                                Visa processing times can vary greatly depending on the <span>country, type of visa, your nationality, and current application volumes</span>. It may take anywhere from a <span>few days to several weeks</span>. We recommend applying well in advance and checking the official embassy or consulate website for estimated processing times.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-visa-headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-visa-collapseFour" aria-expanded="false" aria-controls="flush-visa-collapseFour">Can you assist with passport renewals?</button>
                                        </h5>
                                        <div id="flush-visa-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-visa-headingFour" data-bs-parent="#accordionFlushExample2">
                                            <div className="accordion-body">
                                                Yes, we can guide you through the <span>passport renewal process</span>. While we don't issue passports ourselves, we provide <span>information, documentation checklists, and support</span> to help ensure your application is complete and correctly submitted to the relevant authority.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-visa-headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-visa-collapseFive" aria-expanded="false" aria-controls="flush-visa-collapseFive">What happens if my visa is rejected?</button>
                                        </h5>
                                        <div id="flush-visa-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-visa-headingFive" data-bs-parent="#accordionFlushExample2">
                                            <div className="accordion-body">
                                                If your visa is rejected, we will help you <span>understand the reason for the denial</span> and guide you on the <span>next steps</span>. This may include correcting documentation, providing additional information, or reapplying. Our team is here to support you through the process.
                                            </div>
                                        </div>
                                    </div>
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

export default page
