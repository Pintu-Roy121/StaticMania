import React from 'react';
import icon from '../../Images/png-transparent-spotify-podcast-spotify-logo-text-logo-music-download-removebg-preview.png'
import apple from '../../Images/Podcasts_(iOS).svg.png'
import sound from '../../Images/58e91984eb97430e819064f9.png'
import google from '../../Images/Google_Podcasts_icon.svg'

const Podcast = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between mt-20'>
            <h1 className='text-2xl font-semibold'>Podcast Available On</h1>
            <div className='flex gap-2 items-center'>
                <img className='w-9' src={apple} alt="" />
                <h1 className='text-xl font-semibold'>Apple Podcast</h1>
            </div>
            <div className='flex gap-2 items-center'>
                <img className='w-9' src={sound} alt="" />
                <h1 className='text-lg font-bold'>SOUNDCLOUD</h1>
            </div>
            <div className='flex gap-2 items-center'>
                <img className='w-9' src={google} alt="" />
                <h1 className='text-xl font-semibold'>Google Podcast</h1>
            </div>
            <div className='flex gap-2 items-center'>
                <img className='w-9' src={icon} alt="" />
                <h1 className='text-xl font-bold'>Spotify</h1>
            </div>
        </div>
    );
};

export default Podcast;