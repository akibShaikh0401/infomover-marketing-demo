'use clint'
import Image from 'next/image'
import React from 'react';
import {Button} from 'primereact/button';

export default function Home() {
    return (
        <>
            <div className={'bg-secondary responsive-container text-black'}>
                <div className="flex align-items-center justify-content-between">
                    <div>
                        <div>
                            {/*<Image onClick={() => router.push('/')} src={'/vercel.svg'} className={'cursor-pointer'}*/}
                            {/*       width={100}*/}
                            {/*       height={70} alt=""/>*/}
                            <div className="text-xl cursor-pointer">
                                Infomover
                            </div>
                        </div>
                    </div>
                    <div className={'xl:flex hidden align-items-center'}>
                        {/*{menuItems?.map((item, index) => {*/}
                        {/*    return (*/}
                        {/*        <div key={index} className={'mx-3 cursor-pointer text-sm'}*/}
                        {/*             onClick={() => navigateOnClickOfMenuOptions(item.link)}>*/}
                        {/*            {item.label}*/}
                        {/*        </div>*/}
                        {/*    )*/}
                        {/*})}*/}

                        <div className={'mx-3 cursor-pointer text-sm'}>
                            Product
                        </div>
                        <div className={'mx-3 cursor-pointer text-sm'}>
                            Solution
                        </div>
                        <div className={'mx-3 cursor-pointer text-sm'}>
                            Blog
                        </div>
                        <div className={'mx-3 cursor-pointer text-sm'}>
                            Pricing
                        </div>
                        <div className={'mx-3 cursor-pointer text-sm'}>
                            Demo
                        </div>
                    </div>
                    <div className={'xl:flex hidden'}>
                        <Button className={'text-sm'} label={'Sign In'}></Button>
                    </div>
                </div>
            </div>

            <div className={'bg-primary-50'}>

                <div className="w-full primary-bg-50 responsive-container" style={{overflowX: 'hidden'}}>

                    <div className="grid mx-0  pb-7 pt-8">
                        <div className="xl:col-6 col-12">
                            <div>

                                <div className='marketing-hero-header text-primary line-height-2 font-semibold'>
                                    Workforce Analytics
                                </div>
                                <div className='marketing-hero-header text-900 mb-5 font-light line-height-2'>
                                    for Productivity-Focused Teams
                                </div>

                                <div className='text-900 mb-6 text-sub-title font-normal'>
                                    Work in a more informed way with <span className="text-primary font-semibold">actionable data insights. </span>
                                    Become <span className='font-semibold'>more productive, improve workflows </span>
                                    and create <span className='font-semibold'>more efficient processes.</span>
                                </div>
                                <div className='flex gap-3'>
                                    <div>
                                        <Button label="Try for Demo"
                                                className='text-sm font-bold     py-3 px-6' size="large"/>
                                    </div>
                                    <div>
                                        <Button label="Book a Demo" size="large"
                                                className='p-button-outlined border-round text-sm  font-bold py-3 px-6 '/>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="xl:col-6 col-12">
                            {/*<img className='w-full h-30rem'*/}
                            {/*     src="/public/placeholder.png" alt="banner"/>*/}
                            <Image src={'/noun-image-placeholder.svg'}
                                   className="w-full"
                                   width="100"
                                   height={400} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="responsive-container">
                <div>
                    <div className='bg-white grid py-8 justify-content-center'>
                        <div className={'text-center lg:col-6 col-12'}>
                            <div className='marketing-content-header'>
                                Everything You Need to Foster Sustainable Productivity
                            </div>
                            <div className="mt-3 text-default">
                                Insightful makes your team more productive, efficient and accountable – in the office,
                                remote or hybrid.
                            </div>
                        </div>
                    </div>

                    <div className="py-7 xl:px-0 px-4 bg-white">
                        <div className="grid justify-content-between">
                            <div className="lg:col-6 col-12 px-0 mx-0">
                                <div className="marketing-content-header">
                                    Productivity Management
                                </div>

                                <div className="mt-3 text-default">
                                    In-depth productivity insights help you understand and support how your team works
                                    throughout the day. Measure productivity, increase focus time, spot trends and
                                    patterns,
                                    and prevent employee burnout.
                                </div>

                                <div className="text-primary text-lg mt-6 font-medium hover:underline cursor-pointer">
                                    Leverage Productivity Insights
                                </div>
                            </div>
                            <div className="lg:col-6 justify-content-end col-12 px-0 mx-0">
                                {/*<img className='w-full h-30rem'*/}
                                {/*     src="/public/placeholder.png" alt="banner"/>*/}
                                <Image src={'/noun-image-placeholder.svg'}
                                       className="w-full"
                                       width="100"
                                       height={400} alt=""/>
                            </div>
                        </div>


                        <div className="grid justify-content-between py-6">
                            <div className="lg:col-6 col-12 justify-content-start">
                                {/*<img className='w-full h-30rem'*/}
                                {/*     src="/public/placeholder.png" alt="banner"/>*/}
                                <Image src={'/noun-image-placeholder.svg'}
                                       className="w-full"
                                       width="100"
                                       height={400} alt=""/>
                            </div>
                            <div className="lg:col-6 col-12">
                                <div className="marketing-content-header">
                                    Hybrid & Remote
                                </div>

                                <div className="mt-3 text-default">
                                    Unify your team wherever they’re located and give your people the flexibility of
                                    remote
                                    work without sacrificing productivity.
                                </div>
                                <div className="mt-3 text-default">
                                    See what impact location has on performance, gain visibility into employee activity,
                                    and
                                    remotely capture time and attendance.
                                </div>
                                <div className="text-primary text-lg mt-6 font-medium hover:underline cursor-pointer">
                                    Explore Flexible Work
                                </div>
                            </div>

                        </div>


                        <div className="grid justify-content-between">
                            <div className="lg:col-6 col-12">
                                <div className="marketing-content-header">
                                    Time & Attendance
                                </div>

                                <div className="mt-3 text-default">
                                    Automate your team’s time and attendance to always have visibility into when they’re
                                    working and make shift scheduling simple.
                                </div>
                                <div className="mt-3 text-default">
                                    Sort time and attendance by timeframe, schedule shifts based on past data and easily
                                    export attendance data for payroll.
                                </div>

                                <div className="text-primary text-lg mt-6 font-medium hover:underline cursor-pointer">
                                    Automate Time & Attendance
                                </div>
                            </div>
                            <div className="lg:col-6 col-12">
                                {/*<img className='w-full h-30rem'*/}
                                {/*     src="/public/placeholder.png" alt="banner"/>*/}
                                <Image src={'/noun-image-placeholder.svg'}
                                       className="w-full"
                                       width="100"
                                       height={400} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='bg-white grid py-8 justify-content-center'>
                    <div className={'text-center lg:col-6 col-12'}>
                        <div className='marketing-content-header'>
                            Surfacing Actionable Insights in the Noise Of Daily Work
                        </div>
                        {/*<div className="mt-3  text-gray-700">*/}
                        {/*    Insightful makes your team more productive, efficient and accountable – in the office,*/}
                        {/*    remote or hybrid.*/}
                        {/*</div>*/}


                    </div>
                    <div className="col-10 mt-5">
                        <Image src={'/noun-image-placeholder.svg'}
                               className="w-full"
                               width="100"
                               height={400} alt=""/>
                    </div>
                </div>

                <div className='bg-white grid py-8 justify-content-center border-top-1 surface-border mx-7'>
                    <div className={'text-center lg:col-6 col-12'}>
                        <div className='marketing-content-header'>
                            Insights that Enable Your Team to do Great Work, Daily
                        </div>
                        <div className="mt-3 text-default text-900">
                            Insightful enables productivity-minded teams to work more effectively with practical
                            insights
                            that help you make more informed decisions about your people and processes.
                            No more relying on hunches or assumptions.
                        </div>
                    </div>
                </div>

                <div className="pt-7 xl:px-0 px-4 bg-white">
                    <div className="grid justify-content-between">
                        <div className="lg:col-6 col-12">
                            {/*<img className='w-full h-30rem'*/}
                            {/*     src="/public/placeholder.png" alt="banner"/>*/}
                            <Image src={'/noun-image-placeholder.svg'}
                                   className="w-full"
                                   width="100"
                                   height={400} alt=""/>
                        </div>
                        <div className="lg:col-5 col-12">
                            <div
                                className="flex border-bottom-1 border-dotted border-top-none border-x-none surface-border pb-2">
                                <div className="mr-4">
                                    <div className="border-1 border-circle px-2 py-1 bg-primary">
                                        <i className="pi pi-check p-0 m-0"></i>
                                    </div>
                                    {/*<Button icon="pi pi-check" rounded className="cursor-auto p-button-sm"/>*/}
                                </div>
                                <div className="mt-1 font-light w-29rem line-height-3">
                                    Helps <span className="font-bold">companies</span> of all sizes be more productive
                                    and
                                    efficient.
                                </div>
                            </div>

                            <div
                                className="flex border-bottom-1 border-dotted border-top-none border-x-none surface-border pb-2 mt-4">
                                <div className="mr-4">
                                    <div className="border-1 border-circle px-2 py-1 bg-primary">
                                        <i className="pi pi-check p-0 m-0"></i>
                                    </div>
                                    {/*<Button icon="pi pi-check" rounded className="cursor-auto p-button-sm"/>*/}
                                </div>
                                <div className="mt-1 font-light w-29rem line-height-3">
                                    Equips <span className="font-bold"> leaders </span> with a better way to manage and
                                    more
                                    visibility.
                                </div>
                            </div>

                            <div
                                className="flex mt-4">
                                <div className="mr-4">
                                    <div className="border-1 border-circle px-2 py-1 bg-primary">
                                        <i className="pi pi-check p-0 m-0"></i>
                                    </div>
                                    {/*<Button icon="pi pi-check" rounded className="cursor-auto p-button-sm"/>*/}
                                </div>
                                <div className="mt-1 font-light w-29rem line-height-3">
                                    Gives <span className="font-bold"> employees </span> more work flexibility and
                                    wellbeing
                                    support.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='bg-white pb-7 mt-3'>
                    <div className={'flex justify-content-center'}>
                        <div className='flex gap-3'>
                            {/*<div>*/}
                            {/*    <Button label="Try for Demo" className='text-sm font-bold border-noround py-3 px-6'*/}
                            {/*            size="large"/>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <Button label="Book a Demo" size="large"*/}
                            {/*            className='bg-transparent text-900 text-sm border-600 font-bold border-noround py-3 px-6 hover:bg-gray-900 hover:text-white hover:border-600'/>*/}

                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>

            <div className="surface-ground">
                <div className='responsive-container'>
                    <div className='grid text-xs'>
                        <div className='col-2 mt-3'>
                            <div className='ml-5'>
                                <div className="text-xl">
                                    Productiviti
                                </div>
                            </div>
                        </div>

                        <div className='lg:col-10 col-12 grid justify-content-end'>
                            <div
                                className='lg:col-5 col-12 xl:flex block xl:px-0 px-6 justify-content-end text-sm gap-6'>
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

                            <div className='lg:col-3 col-12 flex justify-content-end mr-5 mt-2 gap-2 text-sm'>

                                <div>
                                    <Button icon="pi pi-facebook" rounded outlined aria-label="Filter"/>
                                </div>
                                <div>
                                    <Button icon="pi pi-twitter" rounded outlined aria-label="Filter"/>
                                </div>
                                <div>
                                    <Button icon="pi-linkedin" rounded outlined aria-label="Filter"/>
                                </div>
                                <div>
                                    <Button icon="pi pi-youtube" rounded outlined aria-label="Filter"/>
                                </div>

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
                </div>
            </div>
        </>
    )
}
