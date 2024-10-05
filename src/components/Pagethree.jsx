import me from '../assets/me.jpg'
import devp from '../assets/devp.jpg'
import jyti from '../assets/jyti.png'
import avf from '../assets/avf.png'
import shr from '../assets/shr.png'
import adta from '../assets/adta.png'
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
            <div className="bg-black bg-opacity-95 pt-52 w-full overflow-x-hidden">
                <div className="text-xl text-rose-500 text-center font-semibold">Testimonials</div>
                <div className="text-5xl text-white text-center font-bold pt-10">
                    Discover the Success Stories of Our Students
                </div>

                {/* Slider container */}
                <div className="w-full sm:w-3/4 mx-auto">
                    <div className="mt-20">
                        <Slider {...settings}>
                            {data.map((d, index) => (
                                <div
                                    key={index}
                                    className="bg-neutral-900 border-2 border-zinc-700 rounded-2xl h-[290px] w-[280px] flex justify-center items-center hover:border-white">
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
        text: 'TakeUforwards guidance played a pivotal role in landing my first SWE job in 2022. Their approach, akin to an elder brothers mentorship, made a significant difference. The clear explanations and emphasis on problem-solving intuition solidified my un...',
        name: 'Devanshi Mane',
        position: 'Software Engineer @Wells Fargo',
        img: devp
    },
    {
        text: 'Strivers A-Z sheet was the single most valuable resource I used during my job search. Even in this challenging times of recession, I was fortunate to secure a position. The clarity of the lessons in sheet were in my s..',
        name: 'Avish Mittal',
        position: 'SDE-1 @AMDOCS',
        img: avf
    },
    {
        text: "I utilized takeUforward's DSA sheet, particularly focusing on math, array, and string problems. The platforms emphasis on exploring brute force, improved, and optimal solutions resonated with me. Right before my Siemens interview, I reviewed their s...",
        name: 'Jyoti kiran Patil',
        position: 'Technical Intern @Siemens',
        img: jyti
    },
    {
        text: 'Coming from a mechanical engineering background, I found studying DSA particularly challenging. However, Strivers exceptional SDE sheet proved to be a game-changer. By leveraging this resource, I was able to successfully clear my very first technica...',
        name: 'Sameer Yadav',
        position: '2nd year student @SRM university',
        img: me
    },
    {
        text: 'TakeUforward played a pivotal role in my transition from a service-based to a product-based career path. Their well-structured DSA questions, paired with in-depth video explanations, were instrumental. The platforms emphasis on exploring brute for...',
        name: 'Shreya Singh',
        position: 'Software Engineer @Deutsche Telekom',
        img: shr
    },
    {
        text: 'I have been following takeUforward since the introduction of the SDE sheet. Practicing those problems landed me my first internship as a Problem Setter (Technical Writer) at the startup Kalvium. Recognizing weaknesses in recursion and DP, I tackled tho...',
        name: 'Aditya Mane',
        position: 'SDE Intern @Rupeek Fintech',
        img: adta
    },
];

export default Pagethree;
