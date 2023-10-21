import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { BiLogoTiktok } from 'react-icons/bi'
import { ImPinterest } from 'react-icons/im'
import { LiaCcAmex,LiaCcVisa } from 'react-icons/lia'
import { SiApplepay } from 'react-icons/si'
import { FaCcDiscover,FaGooglePay } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="w-full h-60 mt-10">
            <div className="w-full border-y-[2px] border-gray-100 py-6">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

                    {/* subscribe to emails  */}
                    <div className="flex-row justify-between items-center">
                        <h2 className="text-xl font-medium text-gray-600 my-4">Subscribe to our emails</h2>
                        <input type="text" className="w-80 h-10 border-gray-400 border-2 text-black mb-4 px-4" placeholder="Email" /> 
                    </div>

                    {/* social media icons  */}
                    <div className='flex justify-center items-center gap-x-4'>
                        <AiOutlineInstagram className='social-media-icons'/>
                        <AiFillYoutube className='social-media-icons'/>
                        <BiLogoTiktok className='social-media-icons'/>
                        <ImPinterest className='social-media-icons'/>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto flex justify-between items-center py-12 px-6'>
                <div className='flex flex-col'>

                    {/* country/region  */}
                    <label htmlFor="country" className='text-xs text-gray-500'>Country/region</label>
                    <select name="country" id="" className='w-28 h-10 border-2 border-gray-400 my-3'>
                        <option value="india">INR ₹ | India</option>
                        <option value="india">INR ₹ | India</option>
                        <option value="india">INR ₹ | India</option>
                        <option value="india">INR ₹ | India</option>
                    </select>
                    <h6 className='text-xs text-gray-400 mt-6'>© 2023, Vibezon</h6>
                </div>

                {/* payment gateways  */}
                <div className='flex justify-center items-center gap-x-4'>
                    <LiaCcAmex className='w-8 h-8'/>
                    <SiApplepay className='w-8 h-8'/>
                    <FaCcDiscover className='w-6 h-6'/>
                    <FaGooglePay className='w-8 h-8'/>
                    <LiaCcVisa className='w-8 h-8'/>
                </div>
            </div>
        </div>
    )
}