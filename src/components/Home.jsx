import React from 'react';
import logo from '../assets/me.jpg';

const Home = () => {
    return (
        <>
            <div className='bg-zinc-950 bg-opacity-95 bg-cover min-h-screen p-4 md:p-8 lg:p-16'>

                {/* Main Title */}
                <div className='text-2xl md:text-3xl lg:text-4xl text-white font-bold font-sans text-center'>
                    Gear up for <span className='text-rose-600'>Success: </span>Your Ultimate Preparation Hub!
                </div>

                {/* Subtitle */}
                <div className='text-zinc-500 text-center mt-2 text-xs md:text-sm lg:text-base'>
                    Navigate Your Learning Adventure: Explore DSA, Master CS Concepts, Design Systems, Hone Competitive Skills, and Ace Interviews Effortlessly
                </div>

                {/* Main Card */}
                <div className='border-2 border-gray-700 bg-zinc-800 rounded-2xl flex flex-col md:flex-row items-center p-4 md:p-8 mt-8 max-w-[calc(100%-40px)] md:max-w-[calc(100%-260px)] mx-auto'>
                    <div>
                        <img src={logo} alt="Img" className='w-24 md:w-28 rounded-3xl p-1' />
                    </div>

                    <div className='ml-0 md:ml-6 flex-grow mt-4 md:mt-0'>
                        <p className='text-white text-lg md:text-xl font-semibold mb-2'>Elevate Your Learning Journey with TUF+ Course</p>
                        <p className='text-gray-400 mb-4'>
                            Curated learning, approach-wise solutions, personalized <br /> roadmaps, expert doubt assistance, and more!
                        </p>
                    </div>

                    <div className='mt-4 md:mt-0'>
                        <button className='bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-400 transition duration-300 font-semibold'>
                            Explore Plus
                        </button>
                    </div>
                </div>

                {/* Grid Section for Cards */}
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-10 mx-auto max-w-[90%] md:max-w-[78%]'>
                    {/* Card 1 */}
                    <div className='border-2 rounded-2xl bg-zinc-800 bg-opacity-80 border-zinc-600 p-4 sm:p-6 md:p-8 hover:border-white w-full md:w-auto'>
                        <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-zinc-700 flex justify-center items-center'>
                            <img src={logo} alt="" className='w-12 sm:w-14 md:w-16 rounded-lg' />
                        </div>
                        <p className='text-white text-sm sm:text-base md:text-xl font-semibold mt-4 sm:mt-6 md:mt-7'>Striver’s DSA Sheet</p>
                        <p className='text-gray-400 text-xs sm:text-sm md:text-base mt-2 sm:mt-3'>Boost your DSA skills with our handy cheat sheets.</p>
                        <button className='bg-transparent border-2 border-white rounded-full text-white p-2 sm:p-3 sm:px-8 md:p-3 md:px-10 mt-4 sm:mt-5'>Try it free!</button>
                    </div>

                    {/* Card 2 */}
                    <div className='border-2 rounded-2xl bg-zinc-800 bg-opacity-80 border-zinc-600 p-4 sm:p-6 md:p-8 hover:border-white w-full md:w-auto'>
                        <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-zinc-700 flex justify-center items-center'>
                            <img src={logo} alt="" className='w-12 sm:w-14 md:w-16 rounded-lg' />
                        </div>
                        <p className='text-white text-sm sm:text-base md:text-xl font-semibold mt-4 sm:mt-6 md:mt-7'>Striver’s DSA Sheet</p>
                        <p className='text-gray-400 text-xs sm:text-sm md:text-base mt-2 sm:mt-3'>Boost your DSA skills with our handy cheat sheets.</p>
                        <button className='bg-transparent border-2 border-white rounded-full text-white p-2 sm:p-3 sm:px-8 md:p-3 md:px-10 mt-4 sm:mt-5'>Try it free!</button>
                    </div>

                    {/* Card 3 */}
                    <div className='border-2 rounded-2xl bg-zinc-800 bg-opacity-80 border-zinc-600 p-4 sm:p-6 md:p-8 hover:border-white w-full md:w-auto'>
                        <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-zinc-700 flex justify-center items-center'>
                            <img src={logo} alt="" className='w-12 sm:w-14 md:w-16 rounded-lg' />
                        </div>
                        <p className='text-white text-sm sm:text-base md:text-xl font-semibold mt-4 sm:mt-6 md:mt-7'>Striver’s DSA Sheet</p>
                        <p className='text-gray-400 text-xs sm:text-sm md:text-base mt-2 sm:mt-3'>Boost your DSA skills with our handy cheat sheets.</p>
                        <button className='bg-transparent border-2 border-white rounded-full text-white p-2 sm:p-3 sm:px-8 md:p-3 md:px-10 mt-4 sm:mt-5'>Try it free!</button>
                    </div>
                    {/* Card 1 */}
                    <div className='border-2 rounded-2xl bg-zinc-800 bg-opacity-80 border-zinc-600 p-4 sm:p-6 md:p-8 hover:border-white w-full md:w-auto'>
                        <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-zinc-700 flex justify-center items-center'>
                            <img src={logo} alt="" className='w-12 sm:w-14 md:w-16 rounded-lg' />
                        </div>
                        <p className='text-white text-sm sm:text-base md:text-xl font-semibold mt-4 sm:mt-6 md:mt-7'>Striver’s DSA Sheet</p>
                        <p className='text-gray-400 text-xs sm:text-sm md:text-base mt-2 sm:mt-3'>Boost your DSA skills with our handy cheat sheets.</p>
                        <button className='bg-transparent border-2 border-white rounded-full text-white p-2 sm:p-3 sm:px-8 md:p-3 md:px-10 mt-4 sm:mt-5'>Try it free!</button>
                    </div>

                    {/* Card 2 */}
                    <div className='border-2 rounded-2xl bg-zinc-800 bg-opacity-80 border-zinc-600 p-4 sm:p-6 md:p-8 hover:border-white w-full md:w-auto'>
                        <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-zinc-700 flex justify-center items-center'>
                            <img src={logo} alt="" className='w-12 sm:w-14 md:w-16 rounded-lg' />
                        </div>
                        <p className='text-white text-sm sm:text-base md:text-xl font-semibold mt-4 sm:mt-6 md:mt-7'>Striver’s DSA Sheet</p>
                        <p className='text-gray-400 text-xs sm:text-sm md:text-base mt-2 sm:mt-3'>Boost your DSA skills with our handy cheat sheets.</p>
                        <button className='bg-transparent border-2 border-white rounded-full text-white p-2 sm:p-3 sm:px-8 md:p-3 md:px-10 mt-4 sm:mt-5'>Try it free!</button>
                    </div>

                    {/* Card 3 */}
                    <div className='border-2 rounded-2xl bg-zinc-800 bg-opacity-80 border-zinc-600 p-4 sm:p-6 md:p-8 hover:border-white w-full md:w-auto'>
                        <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-zinc-700 flex justify-center items-center'>
                            <img src={logo} alt="" className='w-12 sm:w-14 md:w-16 rounded-lg' />
                        </div>
                        <p className='text-white text-sm sm:text-base md:text-xl font-semibold mt-4 sm:mt-6 md:mt-7'>Striver’s DSA Sheet</p>
                        <p className='text-gray-400 text-xs sm:text-sm md:text-base mt-2 sm:mt-3'>Boost your DSA skills with our handy cheat sheets.</p>
                        <button className='bg-transparent border-2 border-white rounded-full text-white p-2 sm:p-3 sm:px-8 md:p-3 md:px-10 mt-4 sm:mt-5'>Try it free!</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;
