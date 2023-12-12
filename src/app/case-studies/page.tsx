'use clint'
import Image from 'next/image'
import React from 'react';
import {Button} from 'primereact/button';
import {Chip} from 'primereact/chip';
import Navbar from "@/app/navbar/page";
import Footer from "@/app/footer/page";


export default function CaseStudies() {
    return (
        <>
            <div className={'case-responsive-container'}>
                <Navbar/>
            </div>
            <div className={'mt-5'}>
                <div className={'grid case-responsive-container align-items-center'}>
                    <div className="md:col-5 col-12">
                        <div>

                            <div className='marketing-hero-header text-primary line-height-2 font-semibold'>
                                Freight Forwarder Platform
                            </div>
                            {/*<div className='marketing-hero-header text-900 mb-5 font-light line-height-2'>*/}
                            {/*    A platform for freight forwarders*/}
                            {/*</div>*/}

                            <div className='text-900 py-4 text-title font-normal border-bottom-1 surface-border'>
                                A platform for freight forwarders
                            </div>
                            <div className='grid mt-2 text-gray-700'>

                                <div className={'col-7'}>
                                    <div className={'font-medium text-normal'}>
                                        CLIENT
                                    </div>
                                    <div className={'font-light text-xl'}>
                                        Transform Technologies
                                    </div>
                                </div>
                                <div className={'col-5'}>
                                    <div className={'font-medium text-normal'}>
                                        INDUSTRY
                                    </div>
                                    <div className={'font-light text-xl'}>
                                        Logistics
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={'font-medium text-normal mt-4 text-gray-700'}>
                                    CORE TECHNOLOGIES
                                </div>
                                <div className={'mt-3'}>
                                    <div className="card flex flex-wrap gap-2">
                                        <Chip label="Angular" icon="pi pi-desktop"/>
                                        <Chip label="SpringBoot" icon="pi pi-shield"/>
                                        <Chip label="AWS" icon="pi pi-database"/>
                                        <Chip label="Angular" icon="pi pi-desktop"/>

                                        <div className={'py-2 flex flex-wrap  gap-2'}>
                                            <Chip label="SpringBoot" icon="pi pi-shield"/>
                                            <Chip label="AWS" icon="pi pi-database"/>
                                            <Chip label="Angular" icon="pi pi-desktop"/>
                                        </div>
                                        <div className={'py-2 flex flex-wrap     gap-2 '}>
                                            <Chip label="SpringBoot" icon="pi pi-shield"/>
                                            <Chip label="AWS" icon="pi pi-database"/>
                                            <Chip label="Angular" icon="pi pi-desktop"/>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="md:col-7 col-12 pr-0">
                        <div className={'py-5 pl-5 bg-gray-900 text-right'}>
                            <div className={'lg:flex hidden'}>
                                <Image src={'/freight-page.png'}
                                       className="w-full"
                                       width="10000"
                                       height={500} alt=""/>
                            </div>

                            <div className={'lg:hidden flex'}>
                                <Image src={'/freight-page.png'}
                                       className="w-full"
                                       width="10000"
                                       height={390} alt=""/>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="grid case-responsive-container mt-7">
                    <div className="lg:col-3 col-12 text-sub-header mt-2">
                        <div className={'py-2'}>
                            Back to top
                        </div>
                        <div className={'py-2'}>
                            Overview
                        </div>
                        <div className={'py-2'}>
                            Problem Statement
                        </div>
                        <div className={'py-2'}>
                            Solution
                        </div>
                    </div>

                    <div className="lg:col-9 col-12 border-top-3">
                        <div className={'marketing-content-header'}>Overview</div>

                        <div className={'text-gray-600 text-title font-light mt-3'}>
                            We built this platform for transform technologies which is a sister company (Information
                            Technology company ) of a large freight forwarder that has a huge presence in UAE and 11+
                            locations all over the world. The platform integrates with Oracle Transport Management (OTM)
                            system and provides end-users with features that make doing business with our customers
                            easier.
                        </div>
                    </div>
                </div>

                <div className="grid mt-3">
                    <div className="col-12">
                        <Image src={'/containers.png'}
                               className="w-full"
                               width="10000"
                               height={700} alt=""/>
                    </div>
                </div>

                <div className="grid case-responsive-container">
                    <div className="lg:col-3 col-12">

                    </div>

                    <div className="lg:col-9 col-12 border-top-3">
                        <div className={'marketing-content-header mt-2'}>Problem statement</div>

                        <div className={'text-gray-600 text-title font-light mt-3'}>
                            One of the biggest ask was to integrate the platform with OTM such that any new shipments
                            created/updated in OTM must be available on the platform.
                        </div>

                        <div className={'mt-6 text-primary text-xl'}>
                            THE ASK
                        </div>

                        <div className="grid text-gray-600 mt-2">
                            <div className="col-12 xl:hidden">
                                <div
                                    className={'border-left-3 border-primary pl-3 marketing-content-header text-primary font-light'}>
                                    A customer portal for container business.
                                </div>
                            </div>
                            <div className="xl:col-7 col-12">

                                <div className={'line-height-4'}>
                                    Many of the bookings that the customers did were repeat bookings. So a copy booking
                                    feature was imperative in order to save time on booking creation
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    Many of the bookings that the customers did were repeat bookings. So a copy booking
                                    feature was imperative in order to save time on booking creation
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    One of the most complex features that were supposed to be implemented as shipping
                                    instructions. Shipping instructions are the details entered against each container
                                    with respect to the goods that are supposed to be shipped. An elegantly designed
                                    user interface to ease the laborious entry of data was extremely important.
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    OMany of the customers of our client used to place blanket orders of several
                                    containers. Once the container was allocated, they used to then split the allocated
                                    containers across multiple bookings. It is a complex business process that was
                                    supposed to be meticulously designed and implemented
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    Tracking, booking statuses, filtering, customer onboarding and access rights - were
                                    the other significant features that were supposed to be part of the solution.
                                </div>


                                <div className={'line-height-4 mt-5'}>
                                    One of the architectural challenges was to integrate the application with their
                                    database-based ERP; a legacy ERP that was hosted on the private data centre. Yet
                                    another key ask was that - once the client moves its operations to OTM (Oracle
                                    Transport Management) the same customer portal must seamlessly integrate with OTM
                                    APIs.
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    The application was supposed to be highly-available, concurrent, reliable and fast
                                    and also, was supposed to adhere to the standards and principles of modern-day
                                    dev-ops.
                                </div>

                            </div>
                            <div className="col-1"></div>
                            <div className="xl:col-4">
                                <div
                                    className={'border-left-3 border-primary pl-3 marketing-content-header text-primary font-light xl:flex hidden'}>
                                    A customer portal for container business.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="grid case-responsive-container">
                    <div className="lg:col-3 col-12">

                    </div>

                    <div className="lg:col-9 col-12">
                        <div className={'flex'}>
                            <Image src={'/quotes.svg'}
                                   className="text-left h-full"
                                   width="60"
                                   height={100} alt=""/>
                        </div>
                        <div className={'marketing-content-header font-light text-primary mt-3'}>
                            {/*As the company's CIO, this was the first project I gave to Infomover Technologies. They did*/}
                            a
                            wonderful job and then, there was no looking back. We have been hiring them for various
                            projects
                            since then.
                        </div>
                    </div>
                </div>

                <div className="grid case-responsive-container">
                    <div className="lg:col-3 col-12">

                    </div>

                    <div className="lg:col-9 col-12 border-top-3">
                        <div className={'marketing-content-header mt-2'}>The Solution</div>

                        <div className={'text-gray-600 text-title font-light mt-3'}>
                            One of the biggest ask was to integrate the platform with OTM such that any new shipments
                            created/updated in OTM must be available on the platform.
                        </div>

                        <div className="grid text-gray-600 mt-2">
                            <div className="col-7">

                                <div className={'line-height-4'}>
                                    We architected the application such that it could be deployed as a monolith as well
                                    as micro-services.
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    Our ux-design partner provided elegant design for split and copy booking. We
                                    designed & implemented the backend logic that worked like a charm
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    We wrote sophisticated queries to reduce round-trip to the ERP database thereby
                                    enhancing the performance by leaps and bounds.
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    We architected and implemented a custom oAuth2.0 based authentication &
                                    authorization mechanism
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    The application was built iteratively and incrementally that facilitating early
                                    feedback.
                                </div>


                                <div className={'line-height-4 mt-5'}>
                                    We wrote CRON jobs to integrate with legacy ERP. The CRONs get the latest status
                                    updates from the ERP and also push the bookings from the customer portal to the ERP.
                                    The integration layer is designed in such a way that it can be switched to OTM with
                                    negligible effort.
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    The implementation of split bookings is the most interesting thing we did which
                                    created new bookings on the fly against a given blanket order
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    The deployment architecture included clustering of ec2 instances with load balancers
                                    in front.
                                </div>

                                <div className={'line-height-4 mt-5'}>
                                    The implementation of split bookings is the most interesting thing we did which
                                    created new bookings on the fly against a given blanket order
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className={'bg-secondary text-white'}>
                    <div className={'case-responsive-container'}>
                        <div className={'grid align-items-center py-8'}>
                            <div className={'lg:col-10 col-12'}>
                                <div className={'marketing-hero-header'}>
                                    Liked what you read?
                                </div>
                                <div className={'marketing-content-header'}>
                                    Do you have a project that you need help with ?
                                </div>
                            </div>
                            <div className={'lg:col-2 col-12'}>
                                <Button className={'text-sm font-light'} label={'Want to start a project'}
                                        icon="pi     pi-arrow-right" iconPos="right"></Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={'bg-primary-50'}>
                <div className="case-responsive-container">
                    <Footer/>
                </div>
            </div>
        </>
    );
}