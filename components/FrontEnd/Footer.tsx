"use client";

import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function  Footer()  {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Home'
        },
        
        {
            href: 'javascript:void()',
            name: 'Opportunities'
        },
        {
            href: 'javascript:void()',
            name: 'FAQ'
        },
        {
            href: '/contactInfo',
            name: 'Contact Us'
        }
    ]

    return (
        <footer className="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src="/nu.png" className="w-20 h-20 sm:mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px]">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li className=" hover:text-gray-800">
                            <Link key={idx} href={item.href}>
                            {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024 Sebabatso rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Link href="javascript:void()">
                               <Linkedin/>
                            </Link>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Link href="javascript:void()">
                                <Facebook/>
                            </Link>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Link href="javascript:void()">
                                <Twitter/>
                            </Link>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Link href="javascript:void()">
                            <Github />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}
