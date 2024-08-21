"use client";

import { useState } from 'react';
import {Cover} from "../ui/cover"

export default function Projects() {
    

    return (
        <div className="">

            <h3 className="text-2xl md:text-2xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            <Cover>Related Projects</Cover>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-4">
                        
                    <div className="relative">
                        <a href="https://youtu.be/gQV9k2bV0nI" target="_blank" rel="noopener noreferrer">
                            <img 
                            className="h-auto max-w-full rounded-lg" 
                            src="/grooveg.png" 
                            alt="Description of the image" 
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-sm">
                            Groove Galaxy Episode w/ Scott_2407 LIVE at Quthing Fuleng Guest House
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

        