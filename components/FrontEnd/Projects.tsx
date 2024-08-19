"use client";

import { useState } from 'react';
import {Cover} from "../ui/cover"

export default function Projects() {
    

    return (
        <div className="">

            <h3 className="text-2xl md:text-2xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            <Cover>Related Projects</Cover>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div className="relative">
                        <a href="https://youtube.com/shorts/B5bJKCzl-9M?si=oQglOStoToLqlrQ1" target="_blank" rel="noopener noreferrer">
                        <img 
                            className="h-auto max-w-full rounded-lg" 
                            src="/setup.png" 
                            alt="Description of the image" 
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-sm">
                            Setup with me to shoot a youtube video
                            </span>
                            </a>
                    </div>

                    <div className="relative">
                        <a href="https://youtu.be/3CRg2D_obUg?si=W6ltgdn6Bge6DIQw" target="_blank" rel="noopener noreferrer">
                            <img 
                            className="h-auto max-w-full rounded-lg" 
                            src="/day1.png" 
                            alt="Description of the image" 
                            />
                    <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-sm">
                    Day 1 in a life of a cinematographer
                            </span>
                    </a>
                    </div>

                </div>
                <div className="grid gap-4">
                    <div className="relative">
                        <a href="https://youtu.be/yRCX3UKsQAw?si=a40NqcJrvJ4VnE69" target="_blank" rel="noopener noreferrer">
                            <img 
                            className="h-auto max-w-full rounded-lg" 
                            src="/Day2.jpg" 
                            alt="Description of the image" 
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-sm">
                            Day 2 in a life of a cinematographer
                                    </span>
                            </a>
                    </div>

                    <div className="relative">
                        <a href="https://youtu.be/w9PrWZWRjOo?si=a130Lpi51QLWJEl3" target="_blank" rel="noopener noreferrer">
                        <img 
                        className="h-auto max-w-full rounded-lg" 
                        src="/wonder.jpg" 
                        alt="Description of the image" 
                        />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-sm">
                                Wonder what videographers use to shoot their videos?
                                </span>
                            </a>
                    </div>

                    <div className="relative">
                        <a href="https://youtu.be/Zrs9J4JDdx0?si=3ChLhgsI7dORG_91" target="_blank" rel="noopener noreferrer">
                        <img 
                        className="h-auto max-w-full rounded-lg" 
                        src="/mlu.jpg" 
                        alt="Description of the image" 
                            />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-sm">
                        Groove with Mlu
                        </span>
                            </a>
                    </div>
                </div>

                <div className="grid gap-4">
                        
                    <div className="relative">
                        <a href="https://youtu.be/gQV9k2bV0nI?si=VsRVad88YQWPILJT" target="_blank" rel="noopener noreferrer">
                            <img 
                            className="h-auto max-w-full rounded-lg" 
                            src="/scott.jpg" 
                            alt="Description of the image" 
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-sm">
                                    Groove with scott
                                </span>
                                </a>
                    </div>
                    <div className="relative">
                        <a href="https://youtube.com/shorts/rO3HbDr472w?si=JD10abzIqo61XWjN" target="_blank" rel="noopener noreferrer">
                        <img 
                            className="h-auto max-w-full rounded-lg" 
                            src="/groovegalaxy.png" 
                            alt="Description of the image" 
                            />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-sm">
                        Groove galaxy with Scott
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

       
    );
 }

        