import React from 'react';
import { FaMicrophone } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import photo1 from '../../Images/photo-of-people-sitting-beside-table-3182755.png'
import photo2 from '../../Images/p1.png'
import photo3 from '../../Images/photo-of-women-having-conversation-3194524.png'
import photo4 from '../../Images/bitcoins-and-u-s-dollar-bills-730547.png'
import photo5 from '../../Images/top-view-of-assorted-gadgets-on-desk-3568520.png'
import photo6 from '../../Images/Mask Group.png'

const Episods = () => {
    return (
        <div className='w-11/12 bg-white mx-auto mt-24 pb-72'>
            <div className='flex justify-between items-end'>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>Recent Episodes</h1>
                    <p>
                        Apparently we had reached a great height in the <br /> atmosphere, for the sky was a dead black.</p>
                </div>
                <div>
                    <button className='bg-blue-700 text-white border-blue-700 text-lg px-8 py-2'>See All Episiodes</button>
                </div>
            </div>
            <div className='mt-16 grid grid-cols-3 gap-4'>
                <div>
                    <div className='relative '>
                        <img className='w-96' src={photo1} alt="" />
                        <div className='w-9 text-center p-2 bg-[#503AE7] rounded-full text-white absolute top-4 right-8'>
                            <FaMicrophone className='text-xl' />
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold mt-6 mb-3'>Ep 1: How to build a world-class business brand</h1>
                    <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <button className='flex gap-2 mt-3 items-center text-[#503AE7] font-semibold'>
                        <BsFillPlayCircleFill className='text-[#503AE7] text-3xl' />
                        Listen Now
                    </button>
                </div>
                <div>
                    <div className='relative '>
                        <img className='w-96' src={photo2} alt="" />
                        <div className='w-9 text-center p-2 bg-[#503AE7] rounded-full text-white absolute top-4 right-8'>
                            <FaMicrophone className='text-xl' />
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold mt-6 mb-3'>Ep 1: How to build a world-class business brand</h1>
                    <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <button className='flex gap-2 mt-3 items-center text-[#503AE7] font-semibold'>
                        <BsFillPlayCircleFill className='text-[#503AE7] text-3xl' />
                        Listen Now
                    </button>
                </div>
                <div>
                    <div className='relative '>
                        <img className='w-96' src={photo3} alt="" />
                        <div className='w-9 text-center p-2 bg-[#503AE7] rounded-full text-white absolute top-4 right-8'>
                            <FaMicrophone className='text-xl' />
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold mt-6 mb-3'>Ep 1: How to build a world-class business brand</h1>
                    <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <button className='flex gap-2 mt-3 items-center text-[#503AE7] font-semibold'>
                        <BsFillPlayCircleFill className='text-[#503AE7] text-3xl' />
                        Listen Now
                    </button>
                </div>
                <div >
                    <div className='w-96 bg-[#F4F2FF]'>
                        <div className='px-10 py-14'>
                            <h1 className='text-3xl  font-bold '>Read our <br /> articles & news</h1>
                            <button className='text-[#503AE7] font-semibold'>See More</button>
                        </div>
                        <img className='w-full flex items-end' src={photo6} alt="" />
                    </div>
                </div>
                <div>
                    <div className='relative '>
                        <img className='w-96' src={photo4} alt="" />
                        <div className='w-9 text-center p-2 bg-[#503AE7] rounded-full text-white absolute top-4 right-8'>
                            <FaMicrophone className='text-xl' />
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold mt-6 mb-3'>Ep 1: How to build a world-class business brand</h1>
                    <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <button className='flex gap-2 mt-3 items-center text-[#503AE7] font-semibold'>
                        <BsFillPlayCircleFill className='text-[#503AE7] text-3xl' />
                        Listen Now
                    </button>
                </div>
                <div>
                    <div className='relative '>
                        <img className='w-96' src={photo5} alt="" />
                        <div className='w-9 text-center p-2 bg-[#503AE7] rounded-full text-white absolute top-4 right-8'>
                            <FaMicrophone className='text-xl' />
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold mt-6 mb-3'>Ep 1: How to build a world-class business brand</h1>
                    <p>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <button className='flex gap-2 mt-3 items-center text-[#503AE7] font-semibold'>
                        <BsFillPlayCircleFill className='text-[#503AE7] text-3xl' />
                        Listen Now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Episods;