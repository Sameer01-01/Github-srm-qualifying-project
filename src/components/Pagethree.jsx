import me from '../assets/me.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Pagethree = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (

        <>
            <div className="bg-black bg-opacity-95 pt-52">

                <div className="text-xl text-rose-500 text-center font-semibold">Testimonials</div>
                <div className="text-5xl text-white text-center font-bold pt-10">Discover the Success Stories of Our Students</div>


                <div className="w-3/4 m-auto">
                    <div className="mt-20">
                        <Slider {...settings}>
                            {data.map((d, index) => (
                                <div
                                    key={index}
                                    className="bg-neutral-900 border-2 border-zinc-700 rounded-2xl h-[290px] w-[280px] hover:border-white">
                                    
                                    <div>
                                        <p className="text-white px-3 py-3">
                                            {d.text}
                                        </p>
                                    </div>
                                    <div className='flex'>

                                        <img src={d.img} alt="" className='h-12 w-12 ml-3 mt-5 rounded-full' />
                                        <div className='mt-4 ml-4'>
                                            <p className='text-white font-semibold text-xl'>{d.name}</p>
                                            <p className='text-white'>{d.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>




        </>
    );
};

const data = [

    {
        text: 'I have been following takeUforward since the introduction of the SDE sheet. Practicing those problems landed me my first internship as a Problem Setter (Technical Writer) at the startup Kalvium. Recognizing weaknesses in recursion and DP, I tackled tho...',
        name: 'Aditya Mane',
        position: 'SDE Intern @Rupeek Fintech',
        img: me
    },
    {
        text: 'I have been following takeUforward since the introduction of the SDE sheet. Practicing those problems landed me my first internship as a Problem Setter (Technical Writer) at the startup Kalvium. Recognizing weaknesses in recursion and DP, I tackled tho...',
        name: 'Aditya Mane',
        position: 'SDE Intern @Rupeek Fintech',
        img: me
    },
    {
        text: 'I have been following takeUforward since the introduction of the SDE sheet. Practicing those problems landed me my first internship as a Problem Setter (Technical Writer) at the startup Kalvium. Recognizing weaknesses in recursion and DP, I tackled tho...',
        name: 'Aditya Mane',
        position: 'SDE Intern @Rupeek Fintech',
        img: me
    },
    {
        text: 'I have been following takeUforward since the introduction of the SDE sheet. Practicing those problems landed me my first internship as a Problem Setter (Technical Writer) at the startup Kalvium. Recognizing weaknesses in recursion and DP, I tackled tho...',
        name: 'Aditya Mane',
        position: 'SDE Intern @Rupeek Fintech',
        img: me
    },
    {
        text: 'I have been following takeUforward since the introduction of the SDE sheet. Practicing those problems landed me my first internship as a Problem Setter (Technical Writer) at the startup Kalvium. Recognizing weaknesses in recursion and DP, I tackled tho...',
        name: 'Aditya Mane',
        position: 'SDE Intern @Rupeek Fintech',
        img: me
    },
    {
        text: 'I have been following takeUforward since the introduction of the SDE sheet. Practicing those problems landed me my first internship as a Problem Setter (Technical Writer) at the startup Kalvium. Recognizing weaknesses in recursion and DP, I tackled tho...',
        name: 'Aditya Mane',
        position: 'SDE Intern @Rupeek Fintech',
        img: me
    },


]



export default Pagethree