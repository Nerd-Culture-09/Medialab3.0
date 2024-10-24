"use client";


import {Cover} from "../ui/cover";

export default function Projects() {
    

    return (
        <div className="">
            <div className="py-14 flex w-full justify-center" >
                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Related Projects
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-4">
                        
                    <div className="relative">
                        <a href="https://youtu.be/Zrs9J4JDdx0" target="_blank" rel="noopener noreferrer">
                            <img 
                            className="h-auto max-w-full rounded-lg" 
                            src="/groovegalaxy.png" 
                            alt="Description of the image" 
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-sm">
                            Groove Galaxy Episode w/Mlu LIVE at Café What [Stella&apos;s Groove]
                            </span>
                        </a>
                    </div>
                </div>
                <div className="grid gap-4">
                        
                    <div className="relative">
                        <a href="https://youtu.be/b-VsK5c1cGs" target="_blank" rel="noopener noreferrer">
                        <img 
                            className="h-auto max-w-full rounded-lg" 
                            src="/nkhekhe.png" 
                            alt="Description of the image" 
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-sm">
                                Nkhekhe Innovations | Revolutionizing the Future
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

       
    );
 }

        