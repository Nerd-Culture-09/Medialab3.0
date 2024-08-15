"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function  Footer()  {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Policy'
        },
        
        {
            href: 'javascript:void()',
            name: 'Company'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'About Us'
        },
    ]

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    return (
        <footer className="text-black-500 bg-white dark:bg-slate-950 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src="/logo.png" className="w-20 h-20 sm:mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px]">
                Multimedia Production Company.
                
                </p>
           <br></br>
            </div>
            <div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-2 max-w-lg sm:mx-auto sm:text-center">
                    <div className="flex-1 max-w-xl">
                    </div>
                </div>
                <div className="max-w-lg sm:mx-auto sm:text-center">
                <button
                        onClick={openDialog}
                        className="mt-2 md:mt-0 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-900 hover:bg-indigo-00 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:w-auto"
                    >
                        Contact us 
                    </button>
                </div>
            
                
                {isDialogOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-lg">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h4>
                        <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                        >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <div>
                            <label className="font-medium text-gray-900 dark:text-gray-200">First name</label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none shadow-sm rounded-lg"
                            />
                            </div>
                            <div>
                            <label className="font-medium text-gray-900 dark:text-gray-200">Last name</label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none shadow-sm rounded-lg"
                            />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-gray-900 dark:text-gray-200">Email</label>
                            <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-gray-900 dark:text-gray-200">Phone number</label>
                            <div className="relative mt-2">
                            <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r border-gray-300 dark:border-gray-600 pr-2">
                                <select className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 outline-none rounded-lg h-full">
                                <option>LS</option>
                                <option>SA</option>
                                <option>US</option>
                                </select>
                            </div>
                            <input
                                type="number"
                                placeholder="+266 5321 3789"
                                required
                                className="w-full pl-[4.5rem] pr-3 py-2 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none shadow-sm rounded-lg"
                            />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-gray-900 dark:text-gray-200">Message</label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none resize-none shadow-sm rounded-lg"></textarea>
                        </div>
                        
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <button
                            onClick={closeDialog}
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
                            >
                            Cancel
                            </button>
                            <button
                            type="submit"
                            className="mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                            Submit
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                )}
  
            </div>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li key={idx} className=" hover:text-gray-800">
                            <a key={idx} href={item.href}>
                                { item.name }
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; {new Date().getFullYear()} Media Lab rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Link href="https://www.facebook.com/profile.php?id=61554504191712">
                                <Facebook/>
                            </Link>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Link href="https://wa.me/26651910760">
                            <FaWhatsapp />
                            </Link>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Link href="https://www.youtube.com/@medialabnetwork">
                            <Youtube />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
