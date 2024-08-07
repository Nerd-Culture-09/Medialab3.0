"use client";

import { useState } from 'react';

export default function Contact_Support() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-1">
                    <div className="flex-1 max-w-xl">
                        <h3 className="text-3xl font-bold">
                            Get in contact with us.
                        </h3>

                    </div>
                    <button
                        onClick={openDialog}
                        className="mt-2 md:mt-0 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:w-auto"
                    >
                        Contact
                    </button>
                </div>
            
                {isDialogOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg w-full max-w-lg">
                            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="space-y-5"
                            >
                                <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                                    <div>
                                        <label className="font-medium">First name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-medium">Last name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="font-medium">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">Phone number</label>
                                    <div className="relative mt-2">
                                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                            <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                                <option>US</option>
                                                <option>ES</option>
                                                <option>MR</option>
                                            </select>
                                        </div>
                                        <input
                                            type="number"
                                            placeholder="+1 (555) 000-000"
                                            required
                                            className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="font-medium">Message</label>
                                    <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                                >
                                    Submit
                                </button>
                            </form>
                            <button
                                onClick={closeDialog}
                                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
