'use clint'
import Image from 'next/image'
import React from 'react';
import {Button} from 'primereact/button';

export default function Navbar() {
    return (
        <div className={'text-black'}>
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

                    <div className={'mx-3 text-black text-sm'}>
                        Who we are
                    </div>
                    <a href={'/case-studies'} className={'mx-3 no-underline text-black text-sm'}>
                        Case studies
                    </a>
                    <div className={'mx-3 cursor-pointer text-sm'}>
                        Service
                    </div>
                </div>
                <div className={'xl:flex hidden'}>
                    <Button className={'text-sm font-light'} label={'Get in touch'}></Button>
                </div>
            </div>
        </div>
    )
}