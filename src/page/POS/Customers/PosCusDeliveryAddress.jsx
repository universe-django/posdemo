import { useLocation } from 'react-router-dom';
import PosCustomersLayout from './PosCustomersLayout';
import { FcSearch } from 'react-icons/fc';
import { useEffect } from 'react';


const PosCusDeliveryAddress = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = "POS Customers Delivery Address";
    }, [location]);

    return (
        <>
            <div className="container mx-auto">
                <div className="pt-5 text-blue-500 font-semibold pb-2">
                    <p className='text-center'>Customer Delivery Address</p>
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
                    <div className="flex justify-center text-sm">
                        <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Clear</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Top</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Previous</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Next</p>
                        <p className='px-2 py-[1px] text-black bg-[#99A940] hover:bg-[#C7D276] cursor-pointer'>Bottom</p>
                        <p className='px-2 py-[1px] text-white bg-[#A98540] hover:bg-[#CEB37F] cursor-pointer'>Add</p>
                        <p className='px-1 py-[1px] text-white bg-blue-500 hover:bg-blue-300 cursor-pointer'>-</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 px-2 pb-2">
                        {/* Delivery Address */}
                        <div className="flex gap-1">
                            <div className="w-2/5">
                                <div className="flex justify-end items-center text-xs text-labelBlue">
                                    <p>Delivery Address </p>
                                    <div className="text-lg">
                                        <FcSearch />
                                    </div>
                                </div>
                            </div>
                            <div className="w-3/5">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' value={0} autoFocus />
                            </div>
                        </div>
                        {/* Name */}
                        <div className="flex gap-1">
                            <div className="w-2/5">
                                <div className="flex justify-end items-center text-xs text-labelBlue">
                                    <p>Name</p>
                                    <div className="text-lg">
                                        <FcSearch />
                                    </div>
                                </div>
                            </div>
                            <div className="w-3/5">
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
                        {/* Saluation */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Saluation</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="select" selected>Select</option>
                                        <option value="Dr">Dr</option>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Ms">Ms</option>
                                        <option value="Prof">Prof</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* First Name */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>First Name</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Middle Name */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Middle Name</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Last Name */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Last Name</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Title */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Title</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
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
                        {/* Fax */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Fax</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Url */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Url</p>
                            </div>
                            <div className="w-2/3">
                                <input type="url" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
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
                        {/* Warehouse */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-customRed'>*Warehouse</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs' required>
                                        <option value="General Store" selected>General Store</option>
                                        <option value="Consignments">Consignments</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Marked */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Marked</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select" selected>Select</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Region */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Region</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select" selected>Select</option>
                                        <option value="Region-01-BO">Region-01-BO</option>
                                        <option value="Region-01-Franchise">Region-01-Franchise</option>
                                        <option value="Region-HO">Region-HO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Territory */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Territory</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select" selected>Select</option>
                                        <option value="Territory-01-BO">Territory-01-BO</option>
                                        <option value="Territory-01-Franchise">Territory-01-Franchise</option>
                                        <option value="Territory-HO">Territory-HO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Salesperson */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Salesperson</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select1" selected>Select1</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Project Manager */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Project Manager</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select" selected>Select</option>
                                        <option value="shuvo@gmail.com">shuvo@gmail.com</option>
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
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select" selected>Select</option>
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
                        {/* Credit Card No */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Credit Card No</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Expiry Month (MM) */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Expiry Month (MM)</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Expiry Year (YYYY) */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Expiry Year (YYYY)</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Bank Routing No */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Bank Routing No</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Bank Account */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Bank Account</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Shipping Code */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Shipping Code</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select" selected>Select</option>
                                        <option value="DHL">DHL</option>
                                        <option value="Pickup">Pickup</option>
                                        <option value="Van">Van</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Shipping Prpduct */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Shipping Prpduct</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select" selected>Select</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Residence? */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Residence?</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <div className="">
                                        <input type="checkbox" name="stock_type" id="Yes" value="Yes" />
                                        <label for="Yes"> Yes</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Saturday Delivery? */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Saturday Delivery?</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <div className="">
                                        <input type="checkbox" name="stock_type" id="Yes" value="Yes" />
                                        <label for="Yes"> Yes</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tax Scope */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Tax Scope</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select" selected>Select</option>
                                        <option value="Exempted">Exempted</option>
                                        <option value="Mushak 11 ka-Local">Mushak 11 ka-Local</option>
                                        <option value="Mushak 11-Imported">Mushak 11-Imported</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Tax Number */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Tax Number</p>
                            </div>
                            <div className="w-2/3">
                                <input type="text" className='w-full px-1 text-sm border border-black rounded focus:bg-focusColor' />
                            </div>
                        </div>
                        {/* Delivery Zone */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Delivery Zone</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select" selected>Select</option>
                                        <option value="Zone A">Zone A</option>
                                        <option value="Zone B">Zone B</option>
                                        <option value="Zone C">Zone C</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Time Slot */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Time Slot</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="None" selected>None</option>
                                        <option value="Afternoon">Afternoon</option>
                                        <option value="Evening">Evening</option>
                                        <option value="Morning">Afternoon</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Property Type */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Property Type</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select" selected>Select</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Lift Availability */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Lift Availability</p>
                            </div>
                            <div className="w-2/3">
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black rounded text-xs'>
                                        <option value="Select" selected>Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Floor */}
                        <div className="flex gap-1">
                            <div className="w-1/3">
                                <p className='float-end text-xs text-labelBlue'>Floor</p>
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

export default PosCusDeliveryAddress;