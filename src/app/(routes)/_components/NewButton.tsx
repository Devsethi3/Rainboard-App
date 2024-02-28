"use client"

import Image from "next/image";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";

const NewButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    return (
        <div>
            <FiPlus onClick={() => setIsOpen(!isOpen)} className="text-4xl cursor-pointer hover:bg-[#ffffff35] p-2 rounded-lg bg-[#ffffff1c]" />
            {isOpen && <form className="w-[500px] bg-white rounded-md shadow-xl p-4 py-6 fixed text-black top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] min-h-[50vh]">
                <div className="flex border-b-2 pb-3 mb-8 items-center justify-between">
                    <h2 className="text-3xl font-bold">Create Organization</h2>
                    <IoClose onClick={() => setIsOpen(!isOpen)} className="text-4xl opacity-70 text-red-800 p-2 hover:bg-slate-100 rounded-full cursor-pointer" />
                </div>
                <div className="flex items-center gap-6">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-12 h-12 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-100  hover:bg-gray-50"
                    >
                        {!selectedFile ? (
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <MdOutlineFileUpload className="text-2xl opacity-60" />
                            </div>
                        ) : null}
                        {selectedFile ? (
                            <Image
                                src={window.URL.createObjectURL(selectedFile)}
                                width={500}
                                height={800}
                                alt="selected-image"
                                className="object-contain h-[90%]"
                            />
                        ) : null}
                        <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                        // onChange={(e) => {
                        //     setSelectedFile(e.target.files[0])
                        // }}
                        />
                    </label>
                    <div className="flex flex-col gap-2">
                        <p>Profile Image</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 mt-6">
                    <div className="flex flex-col">
                        <label htmlFor="organization-name" className="text-sm opacity-80">Organization Name</label>
                        <input type="text" className="outline-none border-2 w-full py-2 px-4 rounded-md  focus-visible:ring-1 focus-visible:ring-[#4F46E5]" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="slug-url" className="text-sm opacity-80">Slug URL</label>
                        <input type="text" className="outline-none border-2 w-full py-2 px-4 rounded-md  focus-visible:ring-1 focus-visible:ring-[#4F46E5]" />
                    </div>
                </div>
                <button className="py-2.5 px-6 rounded-md bg-[#4F46E5] text-white mt-8">Create Organization</button>
            </form>}
        </div>
    )
}

export default NewButton