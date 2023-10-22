import { useState } from 'react'
import { Link } from 'react-router-dom'

import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { IoIosSearch } from 'react-icons/io'
import { BsBag } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'

import Logo from '../assets/images/Logo.webp'



export default function Navbar() {

    const [dropdown, setDropdown] = useState({
        Men: false,
        Women: false,
        kids: false,
    })

    return (
        <div className="w-full h-[20vh] fixed top-0 z-50">
            <div className="w-full h-[5vh] bg-black flex justify-center items-center">
                <h1 className="text-white">BUY 2 HOODIES AND GET THIRD ONE 50% OFF.</h1>
            </div>
            <div className="w-full h-[15vh] bg-gray-100 flex justify-around items-center">
                <div className='flex'>


                    <div>
                        <Link to='/'><img src={Logo} alt="logo" width={100} height={100} className='cursor-pointer' /></Link>

                    </div>
                    <div className='flex justify-center items-center gap-x-4' >


                        {/* Mens category */}
                        <div>
                            <div className='flex items-center'>
                                <h2 className='category-label' onClick={() => setDropdown({ Men: !dropdown.Men, Women: false, kids: false })}>Men</h2>
                                <RiArrowDropDownLine className={`${dropdown.Men ? "hidden" : "block"} mt-1 hover:cursor-pointer`} size={24} onClick={() => setDropdown({ Men: !dropdown.Men, Women: false, kids: false })} />
                                <RiArrowDropUpLine className={`${dropdown.Men ? "block" : "hidden"} mt-1 hover:cursor-pointer`} size={24} onClick={() => setDropdown({ Men: !dropdown.Men, Women: false, kids: false })} />
                            </div>
                            <ul className={`${dropdown.Men ? "block" : "hidden"} categories-box`}>
                                <li className='collections-label'>T-shirts</li>
                                <li className='collections-label'>Hoodies</li>
                                <li className='collections-label'>Oversized</li>
                                <li className='collections-label'>Sweatshirts</li>
                            </ul>
                        </div>

                        {/* womens category  */}
                        <div>
                            <div className='flex items-center'>
                                <h2 className='category-label' onClick={() => setDropdown({ Men: false, Women: !dropdown.Women, kids: false })}>Women</h2>
                                <RiArrowDropDownLine className={`${dropdown.Women ? "hidden" : "block"} mt-1 hover:cursor-pointer`} size={24} onClick={() => setDropdown({ Men: false, Women: !dropdown.Women, kids: false })} />
                                <RiArrowDropUpLine className={`${dropdown.Women ? "block" : "hidden"} mt-1 hover:cursor-pointer`} size={24} onClick={() => setDropdown({ Men: false, Women: !dropdown.Women, kids: false })} />
                            </div>
                            <ul className={`${dropdown.Women ? "block" : "hidden"} categories-box`}>
                                <li className='collections-label'>T-shirts</li>
                                <li className='collections-label'>Hoodies</li>
                                <li className='collections-label'>Oversized</li>
                                <li className='collections-label'>Sweatshirts</li>
                                <li className='collections-label'>Crop Tops</li>
                            </ul>
                        </div>


                        {/* kids category  */}
                        <div>
                            <div className='flex items-center'>
                                <h2 className='category-label' onClick={() => setDropdown({ Men: false, Women: false, kids: !dropdown.kids })}>Kids</h2>
                                <RiArrowDropDownLine className={`${dropdown.kids ? "hidden" : "block"} mt-1 hover:cursor-pointer`} size={24} onClick={() => setDropdown({ Men: false, Women: false, kids: dropdown.kids })} />
                                <RiArrowDropUpLine className={`${dropdown.kids ? "block" : "hidden"} mt-1 hover:cursor-pointer`} size={24} onClick={() => setDropdown({ Men: false, Women: false, kids: !dropdown.kids })} />
                            </div>
                            <ul className={`${dropdown.kids ? "block" : "hidden"} categories-box`}>
                                <li className='collections-label'>T-shirts</li>
                                <li className='collections-label'>Hoodies</li>
                                <li className='collections-label'>Oversized</li>
                                <li className='collections-label'>Sweatshirts</li>
                                <li className='collections-label'>Crop Tops</li>
                            </ul>
                        </div>
                        <Link className='category-label'>About us</Link>
                        <Link className='category-label'>Contact Us</Link>

                    </div>
                </div>

                <div className='flex justify-evenly items-center gap-x-4 mx-4'>
                    <div className='flex'>
                        <h2 className='category-label'>INR ₹ | India</h2>
                        <RiArrowDropDownLine size={24} className='mt-[0.5px] hover:cursor-pointer' />
                    </div>
                    <IoIosSearch size={24} className='hover:cursor-pointer' />
                    <Link to='/account/login'><GoPerson size={22} className='hover:cursor-pointer' /></Link>
                    <BsBag size={20} className='hover:cursor-pointer' />
                </div>
            </div>
        </div>
    )
}