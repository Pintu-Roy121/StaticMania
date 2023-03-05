import React from 'react';
import logo1 from '../../Images/Logo (1).png'
import logo2 from '../../Images/Logo (2).png'
import logo3 from '../../Images/Logo (3).png'
import logo4 from '../../Images/Logo (4).png'
import logo5 from '../../Images/Logo (5).png'
import logo from '../../Images/Logo.svg'
import icon from '../../Images/png-transparent-spotify-podcast-spotify-logo-text-logo-music-download-removebg-preview.png'
import apple from '../../Images/Podcasts_(iOS).svg.png'
import sound from '../../Images/58e91984eb97430e819064f9.png'
import google from '../../Images/Google_Podcasts_icon.svg'

const Sponsore = () => {
    return (
        <div className='relative'>
            <div className='w-11/12 mx-auto bg-[#503AE7] absolute -top-52 left-12'>
                <div className='text-white py-20 px-10'>
                    <h1 className='text-3xl font-bold text-center'>Our Sponsors</h1>
                    <div className='grid grid-cols-5 gap-5 mt-16'>
                        <img className='w-36 mx-auto' src={logo1} alt="" />
                        <img className='w-36 mx-auto' src={logo2} alt="" />
                        <img className='w-36 mx-auto' src={logo3} alt="" />
                        <img className='w-36 mx-auto' src={logo4} alt="" />
                        <img className='w-36 mx-auto' src={logo5} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[#14142B]'>
                <div className='w-11/12 mx-auto pt-36 pb-24 grid text-white grid-cols-4 gap-10'>
                    <img className='w-28' src={logo} alt="" />
                    <div>
                        <h1 className='text-xl font-bold mb-5'>pages</h1>
                        <div className='flex flex-col gap-4'>
                            <li className='list-none'>Home</li>
                            <li className='list-none'>Podcast</li>
                            <li className='list-none'>Host</li>
                            <li className='list-none'>Blog</li>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-3'>Reach Us</h1>
                        <div className='flex flex-col gap-4'>
                            <li className='list-none'>Contact</li>
                            <li className='list-none'>About</li>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-3'>Subscribe</h1>
                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-3 items-center'>
                                <img className='w-9' src={apple} alt="" />
                                <h1 className='text-xl'>Apple Podcast</h1>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img className='w-9' src={sound} alt="" />
                                <h1 className='text-lg'>SOUNDCLOUD</h1>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img className='w-9' src={google} alt="" />
                                <h1 className='text-xl'>Google Podcast</h1>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img className='w-9' src={icon} alt="" />
                                <h1 className='text-xl'>Spotify</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#4027e0] text-white py-4 text-xl text-center'>
                <h1>© Copyright Finsweet 2021</h1>
            </div>
        </div>
    );
};

export default Sponsore;