import React from 'react';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex gap-4'>
                <div className='w-1/2 mx-auto flex flex-col justify-center items-center px-20'>
                    <h1 className='text-5xl font-bold px-'>Become The Hero Of Your Own Story</h1>

                    <p className='my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, minima. Culpa, similique libero minus et optio repellat neque delectus minima eos dolorem, ipsam cum alias corrupti architecto dolore cumque itaque?</p>
                    <div className='w-full flex'>
                        <input className='border px-4 py-3 w-full' placeholder='Enter your Email' type="text" />
                        <button className='bg-blue-700 border-2 w-1/3 text-white font-medium border-blue-700 text-lg px-8 py-2'>Subscribe</button>
                    </div>
                </div>
                <div className='w-1/2 mx-auto text-center'>
                    <div className='flex gap-8 justify-center items-center'>
                        <div className='w-8 h-24 bg-blue-700'></div>
                        <div className='w-8 h-64 bg-[#1AD993]'></div>
                        <div className='w-8 h-32 bg-blue-700'></div>
                        <div className='w-8 h-24 bg-[#1AD993]'></div>
                        <div className='w-8 h-64 bg-blue-700'></div>
                        <div className='w-8 h-32 bg-[#1AD993]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;