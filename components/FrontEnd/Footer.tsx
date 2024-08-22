"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function  Footer()  {

   

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
                
            
                <div className="mt-4 flex items-center justify-center gap-x-6">
                <a
                    href="https://wa.me/26651910760"
                    className="rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Chat with Us
                    </a>
                    </div>
                
               
            
  
            </div>
            </div>
            
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
