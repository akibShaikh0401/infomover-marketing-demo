'use clint'
import Image from 'next/image'
import React from 'react';
import {Button} from 'primereact/button';

export default function Footer() {
    return (
        <>
            <div className='grid text-xs'>
                <div className='col-2 mt-3'>
                    <div className='ml-5'>
                        <div className="text-xl">
                            Productiviti
                        </div>
                    </div>
                </div>

                <div className='xl:col-10 col-12'>
                    <div className={'grid justify-content-end'}>
                        <div
                            className='col-12 xl:flex block xl:px-0 px-6 justify-content-end text-sm gap-6'>
                            <div>
                                <p>About Us</p>
                            </div>
                            <div>
                                <p>Blog</p>
                            </div>
                            <div>
                                <p>Careers</p>
                            </div>
                            <div>
                                <p>Product Updates</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-3 col-12 flex justify-content-end mr-5 mt-2 gap-2 text-sm'>

                        {/*<div>*/}
                        {/*    <Button icon="pi pi-facebook" rounded outlined aria-label="Filter"/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Button icon="pi pi-twitter" rounded outlined aria-label="Filter"/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Button icon="pi-linkedin" rounded outlined aria-label="Filter"/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Button icon="pi pi-youtube" rounded outlined aria-label="Filter"/>*/}
                        {/*</div>*/}

                    </div>

                </div>


            </div>

            {/*<Divider/>*/}
            <div className='grid p-grid'>

                <div className='col-12 grid ml-2 text-sm text-gray-500 px-5'>

                    <div className='lg:col-4 col-12 flex flex-column '>
                        <div className='flex-column align-items-start'>
                            <h3 className='text-primary'>FEATURES</h3>
                            <p className="mt-3">Platform</p>
                            <p className="mt-2">Employee Monitoring</p>
                            <p className="mt-2">Time & Attendance</p>
                            <p className="mt-2">Time Tracking</p>
                            <p className="mt-2">Automatic Time Mapping</p>
                            <p className="mt-2">Security</p>
                            <p className="mt-2">How it Works</p>
                            <p className="mt-2">Activity Monitoring</p>
                            <p className="mt-2">Productivity Monitoring</p>
                            <p className="mt-2">Screen Monitoring</p>
                            <p className="mt-2">Computer Monitoring</p>
                            <p className="mt-2">Operational Efficiency</p>
                            <p className="mt-2">On Premise</p>
                            <p className="mt-2">Integrations</p>
                        </div>
                    </div>


                    <div className='lg:col-4 col-12 flex flex-column '>
                        <div className='flex flex-column align-items-start'>
                            <h3 className='text-primary'>INDUSTRIES</h3>
                            <p className="mt-3">Remote Workers</p>
                            <p className="mt-2">Office Employees</p>
                            <p className="mt-2">Enterprise</p>
                            <p className="mt-2">Architects</p>
                            <p className="mt-2">Healthcare</p>
                            <p className="mt-2">Call center</p>
                            <p className="mt-2">Law Firm</p>
                            <p className="mt-2">Virtual Assistant</p>
                            <p className="mt-2">Data Entry</p>
                            <p className="mt-2">Finance</p>
                            <p className="mt-2">IT BPO</p>
                            <p className="mt-2">Business Process Outsourcing</p>
                        </div>
                    </div>


                    <div className='lg:col-3 col-12 flex flex-column '>
                        <div className='flex flex-column align-items-start'>
                            <h3 className='text-primary'>RESOURCES</h3>
                            <p className="mt-3">Help Center</p>
                            <p className="mt-2">Become a Partner</p>
                            <p className="mt-2">Remote Work</p>
                            <p className="mt-2">Hybrid Work</p>
                            <p className="mt-2">Work from Home</p>
                            <p className="mt-2">Success Stories</p>
                            <p className="mt-2">Timesheets</p>
                            <p className="mt-2">BPO</p>
                            <p className="mt-2">Webinars</p>
                            <p className="mt-2">Remote Research</p>
                            <p className="mt-2">Employee Burnout</p>
                        </div>
                    </div>
                </div>

                {/*<Divider/>*/}


                <div className='col-12 grid'>

                    <div className='lg:col-4 col-12'>
                        <div className='ml-6 w-12rem h-5rem'>
                            <p>Baroda</p>
                        </div>
                    </div>

                    <div className='lg:col-8 col-12 grid'>
                        <div className='col-12 flex xl:justify-content-end text-xs cursor-pointer'>
                            <div className="grid xl:px-0 px-6">
                                <div className='xl:col-2 col-12'>
                                    <p>Terms of Use</p>
                                </div>
                                <div className='xl:col-2 col-12'>
                                    <p>Privacy Policy</p>
                                </div>
                                <div className='xl:col-2 col-12'>
                                    <p>Acceptable Use Policy</p>
                                </div>
                                <div className='xl:col-2 col-12'>
                                    <p>System Status</p>
                                </div>
                                <div className='xl:col-2 col-12'>
                                    <p>Developer Platform</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<Divider/>*/}


                <div className='col-12 grid'>

                    <div className='lg:col-6 col-12'>
                        <div className='ml-6 w-12rem h-5rem'>
                            <p className='text-primary'>+1 415-704-3737</p>
                        </div>
                    </div>

                    <div className='lg:col-6 col-12 flex justify-content-end'>
                        <div className='text-sm ml-auto mr-6'>
                            <p>© 2023 Infomover.io, Inc - All Rights Reserved</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}