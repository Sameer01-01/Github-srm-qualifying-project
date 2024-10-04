
import google from '../assets/google.png'
import gfg from '../assets/gfg.png'
import medianet from '../assets/medianet.png'
import amazon from '../assets/amazon.png'
import Unacademy from '../assets/Unacademy.png'
import chaman1 from '../assets/chaman1.jpg'
import chaman2 from '../assets/chaman2.jpg'

const Pagefour = () => {
  return (
    <>
      <div className="bg-black bg-opacity-95 pt-20 pb-20 sm:pt-32 md:pt-52">
        <div className="text-rose-500 font-semibold text-lg sm:text-xl text-center">
          INSTRUCTOR
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center p-4 sm:p-6 md:p-8">
          Meet Our Exceptional Instructor
        </div>
        <div className="flex justify-center items-center px-4">
          <div className="bg-neutral-800 rounded-xl  sm:w-[600px] md:w-[800px] lg:w-[1000px]">
            <div className="flex flex-col md:flex-row">
              <img src={chaman2} alt="Instructor image" className="w-full md:w-[400px] rounded-t-xl md:rounded-xl" />
              <div className="flex md:ml-4 mt-4 md:mt-12 px-4 md:px-0">
                <img src={chaman1} alt="Instructor" className="w-16 h-16 rounded-full" />
                <div className="ml-3 mt-2 md:mt-0">
                  <p className="text-lg sm:text-xl text-white font-bold">Raj Vikramaditya</p>
                  <p className="text-sm sm:text-xl text-zinc-500">SWE-III @ Google | Founder takeUforward</p>
                  <div className="text-white pt-4">
                    <p className="p-1 sm:p-2">- Software Engineer at Google.</p>
                    <p className="p-1 sm:p-2">- Offers from Facebook London and other startups.</p>
                    <p className="p-1 sm:p-2">- Previously worked with Amazon, Media.net.</p>
                    <p className="p-1 sm:p-2">- Followed by 1 M+ people across YT, Linkedin and other socials.</p>
                    <p className="p-1 sm:p-2">- Candidate Master at Codeforces.</p>
                    <p className="p-1 sm:p-2">- 6* at Codechef.</p>
                  </div>
                  <div className="flex items-center justify-center mt-5">
                    <img src={google} alt="Google" className="w-10 sm:w-14" />
                    <img src={amazon} alt="Amazon" className="w-10 sm:w-14 mx-2" />
                    <img src={medianet} alt="Medianet" className="w-12 sm:w-16" />
                    <img src={Unacademy} alt="Unacademy" className="w-10 sm:w-14 mx-2" />
                    <img src={gfg} alt="GFG" className="w-8 sm:w-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagefour;
