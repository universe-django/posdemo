import { useLocation } from 'react-router-dom';
import PosCustomersLayout from './PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';
import { useEffect } from 'react';

const PosCusDocs = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "POS Customers Docs";
    }, [location]);
    
    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>Customer Docs</p>
                </div>
                <PosCustomersLayout />

                <div className="font-semibold border border-[#C0C0C0] pb-2">
                    <div className="flex justify-center text-sm">
                        <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Show</p>
                        <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Clear</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Top</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Previous</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Next</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Bottom</p>
                        <p className='px-2 py-[1px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Add</p>
                        <p className='px-2 py-[1px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Update</p>
                        <p className='px-2 py-[1px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Delete</p>
                        <p className='px-1 py-[1px] text-white bg-blue-500 hover:bg-blue-300 cursor-pointer'>+</p>
                    </div>
                    <div className="grid grid-cols-3 p-4">
                        {/* Order Number */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <div className="float-end text-xs text-labelBlue flex px-2">
                                    <p>Order <br /> Number</p>
                                    <div className="text-lg">
                                        <FcSearch />
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-20 px-1 text-sm border border-black rounded focus:bg-focusColor' value={0} autoFocus />
                            </div>
                        </div>
                        {/* File Name */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>File Name</p>
                            </div>
                            <div className="w-2/3">
                                <input type="file" className='w-full border text-sm border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Active */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Active</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <div className="">
                                        <input type="checkbox" name="stock_type" id="Yes" value="Yes" checked/>
                                        <label for="Yes"> Activate?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Defualt Folder */}
                        <div className="flex gap-1 space-y-2">
                            <div className="w-1/3 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Defualt Folder</p>
                            </div>
                            <div className="w-2/3">
                                <p>docs/x45645346/</p>
                            </div>
                        </div>
                        {/* Link */}
                        <div className="flex gap-1 space-y-2 col-span-2">
                            <div className="w-1/6 pt-2">
                                <p className='float-end text-xs text-labelBlue'>Link</p>
                            </div>
                            <div className="w-4/6">
                                <input type="url" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    );
};

export default PosCusDocs;