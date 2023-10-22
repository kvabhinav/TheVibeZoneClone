import homeWallpaper from '../assets/images/homeWallpaper.png'
import kidsModel from '../assets/images/kidsModel.png'
import menModel from '../assets/images/menModel.png'
import womenModel from '../assets/images/womenModel.png'
import minimalism from '../assets/images/minimalism.png'


import { BsArrowRight, BsArrowRightShort } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { GoArrowRight } from 'react-icons/go'

import { HiOutlineArrowRight, HiOutlineArrowNarrowRight, HiArrowRight } from 'react-icons/hi'

export default function Home() {
    return (
        <div className='w-full z-0 mt-[20vh]'>
            <div className='relative'>
                <img src={homeWallpaper} alt="wallpaper" className='w-full h-full brightness-50' />
                <div className='absolute left-[47%] bottom-4 text-center'>
                    <h1 className='text-white text-2xl font-bold'>Own Your Style!</h1>
                    <button className='w-28 h-11 bg-white text-sm mt-4 '>shop</button>
                </div>
            </div>

            <div className='text-center max-w-3xl mx-auto py-12'>
                <h1 className='text-5xl'>Why Vibezon ?</h1>
                <p className='tracking-widest leading-6 text-sm font-normal text-gray-500 my-6'>Elevate your style with our minimal clothing brand that transcends fleeting trends and embraces timeless elegance. Our commitment to sustainability means you can look good while feeling good about your choices. Our versatile pieces effortlessly transition from day to night, ensuring your wardrobe is as adaptable as you are. Experience the confidence boost that comes from understated sophistication, simplified shopping, and the knowledge that you're supporting local businesses. With exceptional quality that outlasts fast fashion, choosing us means you're not just following a trend; you're setting a new standard for style and sustainability. Make the smart choice, choose our minimal clothing brand today.</p>
                <button className='w-28 h-11 text-white bg-black'>About Us</button>
            </div>


            {/* collections sections  */}
            <div className="max-w-6xl mx-auto mb-16">
                <h1 className='text-[42px] mr-auto ml-6 mb-8'>Collections</h1>
                <div className='flex gap-x-2 justify-center items-center'>
                    <div className='group'>
                        <div className='w-[362px] box-border overflow-hidden'>
                            <img src={menModel} alt="menModel collections" className='collection-images' />
                        </div>

                        <div className='flex justify-start items-center gap-x-2  mt-2'>
                            <h2 className='text-lg'>Men</h2>
                            <BsArrowRight className='w-6 h-6 ml-[0.5px]  hidden group-hover:block' />
                            <GoArrowRight className='w-6 h-6  group-hover:hidden' />
                        </div>

                    </div>
                    <div className='group'>
                        <div className='w-[362px] box-border overflow-hidden'>
                            <img src={womenModel} alt="womenModel collections" className='collection-images' />
                        </div>

                        <div className='flex justify-start items-center gap-x-2  mt-2'>
                            <h2 className='text-lg'>Women</h2>
                            <BsArrowRight className='w-6 h-6 ml-[0.5px]  hidden group-hover:block' />
                            <GoArrowRight className='w-6 h-6  group-hover:hidden' />
                        </div>
                    </div>
                    <div className='group'>
                        <div className='w-[362px] box-border overflow-hidden'>
                            <img src={kidsModel} alt="kidModel collections" className='collection-images' />
                        </div>

                        <div className='flex justify-start items-center gap-x-2  mt-2'>
                            <h2 className='text-lg'>Kids</h2>
                            <BsArrowRight className='w-6 h-6 ml-[0.5px]  hidden group-hover:block' />
                            <GoArrowRight className='w-6 h-6  group-hover:hidden' />
                        </div>
                    </div>

                </div>
            </div>

            <div className='max-w-6xl mx-auto  flex px-6'>
                <img src={minimalism} alt="" className='w-[550px]' />
                <div className=' px-20'>
                    <h1 className='text-4xl my-8'>Minimalism</h1>
                    <p className='leading-8 text-gray-700'>Embracing a minimalist clothing style is more than just a fashion choice; it's a lifestyle statement. It's about curating a wardrobe of timeless pieces that effortlessly mix and match, saving you time and stress while still ensuring you look impeccably chic. Minimalist fashion allows you to invest in high-quality garments that last longer, reducing waste and benefiting both your wallet and the environment. By adopting a minimalist clothing style, you're not just simplifying your wardrobe; you're simplifying your life, freeing yourself from the burden of excess, and embracing a more mindful and sustainable approach to fashion.</p>
                    <button className='w-28 h-11 text-white bg-black my-8'>Shop</button>
                </div>

            </div>

        </div>
    )
}