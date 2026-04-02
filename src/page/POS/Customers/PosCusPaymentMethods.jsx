import { useLocation } from 'react-router-dom';
import PosCustomersLayout from './PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';
import { useEffect } from 'react';
 
const PosCusPaymentMethods = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "POS Customers Payment Methods";
    }, [location]);

    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>Customer Payment Method</p>
                </div>
                <PosCustomersLayout />

                <div className="bg-slate-100 mb-1">
                    <div className="flex justify-center items-center text-blue-600 gap-1 text-[13px] font-[400] underline border border-slate-300">
                        <span className='hover:text-customRed'>None</span>
                        <span className="hover:text-customRed">1</span>
                        <span className="hover:text-customRed">2</span>
                        <span className="hover:text-customRed">3</span>
                        <span className="hover:text-customRed">4</span>
                        <span className="hover:text-customRed">5</span>
                        <span className="hover:text-customRed">6</span>
                        <span className="hover:text-customRed">7</span>
                        <span className="hover:text-customRed">8</span>
                        <span className="hover:text-customRed">9</span>
                        <span className="hover:text-customRed">A</span>
                        <span className="hover:text-customRed">B</span>
                        <span className="hover:text-customRed">C</span>
                        <span className="hover:text-customRed">D</span>
                        <span className="hover:text-customRed">E</span>
                        <span className="hover:text-customRed">F</span>
                        <span className="hover:text-customRed">G</span>
                        <span className="hover:text-customRed">H</span>
                        <span className="hover:text-customRed">I</span>
                        <span className="hover:text-customRed">J</span>
                        <span className="hover:text-customRed">K</span>
                        <span className="hover:text-customRed">L</span>
                        <span className="hover:text-customRed">M</span>
                        <span className="hover:text-customRed">N</span>
                        <span className="hover:text-customRed">O</span>
                        <span className="hover:text-customRed">P</span>
                        <span className="hover:text-customRed">Q</span>
                        <span className="hover:text-customRed">R</span>
                        <span className="hover:text-customRed">S</span>
                        <span className="hover:text-customRed">T</span>
                        <span className="hover:text-customRed">U</span>
                        <span className="hover:text-customRed">V</span>
                        <span className="hover:text-customRed">W</span>
                        <span className="hover:text-customRed">X</span>
                        <span className="hover:text-customRed">Y</span>
                        <span className="hover:text-customRed">Z</span>
                    </div>
                    <div className="flex justify-between items-center px-2 py-1">
                        <div className="flex justify-start items-center">
                            <div className="text-blue-600 border border-slate-300">|{"<"}</div>
                            <div className="text-blue-600 border border-slate-300">{"<"}</div>
                        </div>
                        <div className="flex justify-start items-center">
                            <input type="number" value={20} className='w-20 border border-black rounded focus:bg-focusColor' />
                            <div className="text-blue-600 border border-slate-300">{">"}</div>
                            <div className="text-blue-600 border border-slate-300">{">"}|</div>
                        </div>
                    </div>
                </div>
                <div className="font-semibold border border-[#C0C0C0] pb-2">
                    <div className="flex justify-center text-sm pb-4">
                        <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Clear</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Top</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Previous</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Next</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Bottom</p>
                        <p className='px-2 py-[1px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Add</p>
                        <p className='px-1 py-[1px] text-white bg-blue-500 hover:bg-blue-300 cursor-pointer'>-</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 px-2 pb-2">
                        {/* Payment Method */}
                        <div className="flex gap-1">
                            <div className="w-2/5">
                                <div className="flex justify-end items-center text-xs text-labelBlue">
                                    <p>Payment Method </p>
                                    <div className="text-lg">
                                        <FcSearch />
                                    </div>
                                </div>
                            </div>
                            <div className="w-3/5">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' autoFocus />
                            </div>
                        </div>
                        {/* Currency */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-customRed'>*Currency</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                        <option value="BDT" selected>BDT</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Payment Code */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Payment Code</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                        <option value="Selcet" selected>Selcet</option>
                                        <option value="Bkash">Bkash</option>
                                        <option value="Card">Card</option>
                                        <option value="CASH">CASH</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Change">Change</option>
                                        <option value="Discount">Discount</option>
                                        <option value="Due">Due</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Account Name */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Account Name</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Name */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Name</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Address 1 */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Address 1</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Address 2 */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Address 2</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* City */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>City</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* State/Province */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>State/Province</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Zip/Postal Code */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Zip/Postal Code</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Country */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-customRed'>*Country</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                        <option value="Bangladesh" selected>Bangladesh</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Email */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Email</p>
                            </div>
                            <div className="w-2/3">
                                <input type="email" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Phone</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PosCusPaymentMethods;