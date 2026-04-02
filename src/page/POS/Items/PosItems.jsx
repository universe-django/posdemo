import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FcSearch } from 'react-icons/fc';


const PosItems = () => {
    return (
        <>

            <div className="text-xs pt-5 font-semibold px-2">
                <p className='text-center text-sm font-semibold text-customBlue'>Item Master</p>
                <div className="flex w-full gap-1.5 pt-5">
                    <div className="w-2/5 border">
                        <div className="flex w-full">
                            <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Show</p>
                            <p className='bg-[#8440A9] px-1.5 text-white pb-1 font-semibold'>Clear</p>
                            <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Top</p>
                            <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Previous</p>
                            <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Next</p>
                            <p className='bg-[#99A940] px-1.5 text-black pb-1 font-semibold'>Bottom</p>
                            <p className='bg-[#A98540] px-1.5 text-white pb-1 font-semibold'>Add</p>
                            <p className='bg-[#A98540] px-1.5 text-white pb-1 font-semibold'>Update</p>
                            <p className='bg-[#A98540] px-1.5 text-white pb-1 font-semibold'>Delete</p>
                            <p className='bg-customBlue px-1 text-white pb-1 font-semibold'>-</p>
                        </div>
                        {/* <div className="flex pt-5">
                            <div className="w-1/3 space-y-2">
                                <div className="">
                                    <div className="flex px-2">
                                        <p>Item Code</p>
                                        <div className="text-lg">
                                            <FcSearch />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-customRed'>*Description</p>
                                <p>Long Description</p>
                                <p className='pt-20'>Bar Code</p>
                                <p>Visibility</p>
                                <p className='text-customRed'>*Stock Type</p>
                                <p className='text-customRed pt-5'>*Stocking Unit</p>
                                <p className='text-customRed'>*Item Group</p>
                                <p>Item Class</p>
                                <p>Item Category</p>
                                <p className='pt-3'>Brand</p>
                                <p className='text-customRed pt-2'>*Tax Category</p>
                                <p>Opening Qty</p>
                                <p>Standard Cost</p>
                                <p>Standard Selling Price</p>
                            </div>
                            <div className="w-2/3 space-y-2">
                                <input type="text" className='w-20 border border-black focus:bg-focusColor' />
                                <input type="text" className='w-full border border-black focus:bg-focusColor' />
                                <textarea name="" className='w-full h-20 border border-black focus:bg-focusColor' id=""></textarea>
                                <input type="text" className='w-40 border border-black focus:bg-focusColor' />

                                <div className="flex pt-2">
                                    <input type="checkbox" name="" id="" />
                                    <label for="hideitem?"> Hide Item?</label><br></br>
                                </div>
                                <div className="flex">
                                    <div className="">
                                        <input type="radio" name="stock_type" id="nonstock" value="Non-Stock" />
                                        <label for="nonstock"> Non-Stock</label><br></br>
                                        <input type="radio" name="stock_type" id="indent" value="Indent" />
                                        <label for="indent"> Indent</label><br></br>
                                    </div>
                                    <div className="">
                                        <input type="radio" name="stock_type" id="manufactured" />
                                        <label for="manufactured"> Manufactured</label><br></br>
                                        <input type="radio" name="stock_type" id="online-service" value="Online-Service" />
                                        <label for="online-service"> Online-Service</label><br></br>
                                    </div>
                                    <div className="">
                                        <input type="radio" name="stock_type" id="stock-n-sell" value="Stock-N-Sell" />
                                        <label for="stock-n-sell"> Stock-N-Sell</label><br></br>
                                    </div>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="select1">Select1</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="select1">Select1</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="select1">Select1</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="select1">Select1</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="select1">Select1</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="any">Any</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <input type="text" className='w-40 border border-black focus:bg-focusColor' value='0.000' />
                                <input type="text" className='w-40 border border-black focus:bg-focusColor' value='0.000' />
                                <input type="text" className='w-40 border border-black focus:bg-focusColor' value='0.000' />
                            </div>
                        </div> */}

                        <div className="pt-3">
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <div className="float-end flex px-2 text-labelBlue">
                                        <p>Item Code</p>
                                        <div className="text-lg">
                                            <FcSearch />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-1/2 px-1 text-sm rounded border border-black focus:bg-focusColor' />
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Description</p>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-full px-1 text-sm rounded border border-black focus:bg-focusColor' required/>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Long Description</p>
                                </div>
                                <div className="w-2/3">
                                    <textarea name="" className='w-full h-20 px-1 text-sm rounded border border-black focus:bg-focusColor' id=""></textarea>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Bar Code</p>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' />
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Visibility</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <input type="checkbox" name="" id="hideitem" />
                                        <label for="hideitem" className='ml-1'> Hide Item?</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Stock Type</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <div className="">
                                            <input type="radio" name="stock_type" id="nonstock" value="Non-Stock" checked/>
                                            <label for="nonstock"> Non-Stock</label><br></br>
                                            <input type="radio" name="stock_type" id="indent" value="Indent" />
                                            <label for="indent"> Indent</label><br></br>
                                        </div>
                                        <div className="">
                                            <input type="radio" name="stock_type" id="manufactured" />
                                            <label for="manufactured"> Manufactured</label><br></br>
                                            <input type="radio" name="stock_type" id="online-service" value="Online-Service" />
                                            <label for="online-service"> Online-Service</label><br></br>
                                        </div>
                                        <div className="">
                                            <input type="radio" name="stock_type" id="stock-n-sell" value="Stock-N-Sell" />
                                            <label for="stock-n-sell"> Stock-N-Sell</label><br></br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Stocking Unit</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black' required>
                                            <option value="select1" selected>Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Item Group</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black' required>
                                            <option value="select1" selected>Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Item Class</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black'>
                                            <option value="select1">Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Item Category</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black'>
                                            <option value="select1">Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Brand</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black'>
                                            <option value="select1">Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-customRed'>*Tax Category</p>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex">
                                        <select name="unit" id="unit" className='px-1 text-sm rounded border border-black' required>
                                            <option value="select1" selected>Select1</option>
                                            <option value="select2">Select2</option>
                                            <option value="select3">Select3</option>
                                            <option value="select4">Select4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Opening Qty</p>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' value='0.000' />
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Standard Cost</p>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' value='0.000' />
                                </div>
                            </div>
                            <div className="flex gap-1 space-y-2">
                                <div className="w-1/3 pt-2">
                                    <p className='float-end text-labelBlue'>Standard Selling Price</p>
                                </div>
                                <div className="w-2/3">
                                    <input type="text" className='w-40 px-1 text-sm rounded border border-black focus:bg-focusColor' value='0.000' />
                                </div>
                            </div>

                        </div>

                        {/* <div className="flex pt-5">
                            <div className="w-1/3 space-y-2">
                                <div className="">
                                    <div className="flex px-2">
                                        <p>Item Code</p>
                                        <div className="text-lg">
                                            <FcSearch />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-customRed'>*Description</p>
                                <p>Long Description</p>
                                <p className='pt-20'>Bar Code</p>
                                <p>Visibility</p>
                                <p className='text-customRed'>*Stock Type</p>
                                <p className='text-customRed pt-5'>*Stocking Unit</p>
                                <p className='text-customRed'>*Item Group</p>
                                <p>Item Class</p>
                                <p>Item Category</p>
                                <p className='pt-3'>Brand</p>
                                <p className='text-customRed pt-2'>*Tax Category</p>
                                <p>Opening Qty</p>
                                <p>Standard Cost</p>
                                <p>Standard Selling Price</p>
                            </div>
                            <div className="w-2/3 space-y-2">
                                <input type="text" className='w-20 border border-black focus:bg-focusColor' />
                                <input type="text" className='w-full border border-black focus:bg-focusColor' />
                                <textarea name="" className='w-full h-20 border border-black focus:bg-focusColor' id=""></textarea>
                                <input type="text" className='w-40 border border-black focus:bg-focusColor' />

                                <div className="flex pt-2">
                                    <input type="checkbox" name="" id="" />
                                    <label for="hideitem?"> Hide Item?</label><br></br>
                                </div>
                                <div className="flex">
                                    <div className="">
                                        <input type="radio" name="stock_type" id="nonstock" value="Non-Stock" />
                                        <label for="nonstock"> Non-Stock</label><br></br>
                                        <input type="radio" name="stock_type" id="indent" value="Indent" />
                                        <label for="indent"> Indent</label><br></br>
                                    </div>
                                    <div className="">
                                        <input type="radio" name="stock_type" id="manufactured" />
                                        <label for="manufactured"> Manufactured</label><br></br>
                                        <input type="radio" name="stock_type" id="online-service" value="Online-Service" />
                                        <label for="online-service"> Online-Service</label><br></br>
                                    </div>
                                    <div className="">
                                        <input type="radio" name="stock_type" id="stock-n-sell" value="Stock-N-Sell" />
                                        <label for="stock-n-sell"> Stock-N-Sell</label><br></br>
                                    </div>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="select1">Select1</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="select1">Select1</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="select1">Select1</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="select1">Select1</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="select1">Select1</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <select name="unit" id="unit" className='border border-black'>
                                        <option value="any">Any</option>
                                        <option value="select2">Select2</option>
                                        <option value="select3">Select3</option>
                                        <option value="select4">Select4</option>
                                    </select>
                                </div>
                                <input type="text" className='w-40 border border-black focus:bg-focusColor' value='0.000' />
                                <input type="text" className='w-40 border border-black focus:bg-focusColor' value='0.000' />
                                <input type="text" className='w-40 border border-black focus:bg-focusColor' value='0.000' />
                            </div>
                        </div> */}
                    </div>

                    <div className="w-3/5">
                        <div className="flex border gap-1 justify-between py-2 bg-[#F4F6F8]">
                            <FaLessThan className='text-blue-500 border bg-[#E8ECF0]' />
                            <div className="">
                                Item List
                            </div>
                            <div className="flex gap-1">
                                <input type="text" name="" value='50' className='border border-black w-12 h-4' />
                                <FaGreaterThan className='text-blue-500 border bg-[#E8ECF0]' />
                            </div>
                        </div>
                        <div className="grid grid-cols-8 gap-0.5">
                            <p className='bg-[#C6DCDD]'>Items Code</p>
                            <p className='bg-[#C6DCDD]'>Descriptions</p>
                            <p className='bg-[#C6DCDD]'>Long Description</p>
                            <p className='bg-[#C6DCDD]'>Item Group</p>
                            <p className='bg-[#C6DCDD]'>Item Class</p>
                            <p className='bg-[#C6DCDD]'>Item Category</p>
                            <p className='bg-[#C6DCDD]'>Standard Cost</p>
                            <p className='bg-[#C6DCDD]'>Standard Selling Price</p>
                            <p>110033</p>
                            <p>Mobile</p>
                            <p></p>
                            <p>Finished Goods</p>
                            <p></p>
                            <p></p>
                            <p>10,000.0000</p>
                            <p>12,000.0000</p>
                            <p>110033</p>
                            <p>Mobile</p>
                            <p></p>
                            <p>Finished Goods</p>
                            <p></p>
                            <p></p>
                            <p>10,000.0000</p>
                            <p>12,000.0000</p>
                            <p>110033</p>
                            <p>Mobile</p>
                            <p></p>
                            <p>Finished Goods</p>
                            <p></p>
                            <p></p>
                            <p>10,000.0000</p>
                            <p>12,000.0000</p>
                            <p>110033</p>
                            <p>Mobile</p>
                            <p></p>
                            <p>Finished Goods</p>
                            <p></p>
                            <p></p>
                            <p>10,000.0000</p>
                            <p>12,000.0000</p>
                            <p>110033</p>
                            <p>Mobile</p>
                            <p></p>
                            <p>Finished Goods</p>
                            <p></p>
                            <p></p>
                            <p>10,000.0000</p>
                            <p>12,000.0000</p>
                            <p>110033</p>
                            <p>Mobile</p>
                            <p></p>
                            <p>Finished Goods</p>
                            <p></p>
                            <p></p>
                            <p>10,000.0000</p>
                            <p>12,000.0000</p>
                            <p>110033</p>
                            <p>Mobile</p>
                            <p></p>
                            <p>Finished Goods</p>
                            <p></p>
                            <p></p>
                            <p>10,000.0000</p>
                            <p>12,000.0000</p>
                            <p>110033</p>
                            <p>Mobile</p>
                            <p></p>
                            <p>Finished Goods</p>
                            <p></p>
                            <p></p>
                            <p>10,000.0000</p>
                            <p>12,000.0000</p>
                        </div>
                        <div className="grid grid-cols-8 gap-0.5">
                            <div className='flex items-center gap-1 bg-[#C6DCDD]'>Count<FaArrowRightLong /></div>
                            <p className='bg-[#C6DCDD]'>29000</p>
                            <p className='bg-[#C6DCDD]'></p>
                            <p className='bg-[#C6DCDD]'></p>
                            <p className='bg-[#C6DCDD]'></p>
                            <p className='bg-[#C6DCDD]'></p>
                            <p className='bg-[#C6DCDD]'></p>
                            <p className='bg-[#C6DCDD]'></p>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PosItems;