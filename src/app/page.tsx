'use clint'
import Image from 'next/image'
import React from 'react';
import {Button} from 'primereact/button';
import Navbar from "@/app/navbar/page";
import Footer from "@/app/footer/page";

export default function Home() {
    return (
        <>

            <div className={'responsive-container'}>
                <Navbar></Navbar>
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
                                    {/*<div>*/}
                                    {/*    <Button label="Try for Demo"*/}
                                    {/*            className='text-sm font-bold     py-3 px-6' size="large"/>*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                    {/*    <Button label="Book a Demo" size="large"*/}
                                    {/*            className='p-button-outlined border-round text-sm  font-bold py-3 px-6 '/>*/}

                                    {/*</div>*/}
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
            <div className={'bg-primary-50'}>
                <div className="responsive-container">
                    <Footer/>
                </div>
            </div>

        </>
    )
}
