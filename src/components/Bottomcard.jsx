
import cusu from '../assets/cusu.png'

const Bottomcard = () => {
  return (
    <>
      <div className="bg-black bg-opacity-95 p-4 ">
        <div className='bg-neutral-900 rounded-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-[1100px] mx-auto p-6 sm:p-8 md:p-12'>
          <div className='flex justify-center mb-6'>
            <img src={cusu} alt="" className='w-16 sm:w-20 rounded-full' />
          </div>
          <p className='text-white text-lg sm:text-xl font-bold text-center p-2'>Still have questions?</p>
          <p className='text-white text-lg sm:text-xl font-bold text-center'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          <div className='flex justify-center mt-6'>
            <button className='bg-rose-500 text-white p-2 sm:p-3 rounded-xl hover:bg-rose-400'>Get in Touch</button>
          </div>
        </div>



        <div className='flex justify-center items-center pb-10'>

          <div className='bg-neutral-900 rounded-2xl mt-10 p-10  w-[1250px] '>
            <p className='text-rose-500 text-5xl font-bold text-center'>3,00,000+</p>
            <p className='text-white text-xl font-semibold text-center p-8'>People have ALREADY signed up across the globe</p>
            <div className='flex justify-center items-center'>

              <button className='text-white font-semibold bg-rose-500 hover:bg-rose-400 rounded-xl p-4'>Get Started Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bottomcard
