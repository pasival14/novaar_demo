import R7 from '../../assets/EDGE/R7.png'
import R3 from '../../assets/EDGE/R3.png'
import options from '../../assets/options.svg'
import strategy from '../../assets/strategy.svg'
import knowledge from '../../assets/knowledge.svg'
import network from '../../assets/network.svg'
import call from '../../assets/call.svg'
import Cards from './Cards'

const Real = () => {

    const phoneNumber = '+2348065797525';

    return ( 
        <div>
            <div className="md:grid grid-cols-2 bg-white pt-24 md:pt-0 md:p-12">
                <div 
                className='relative md:mt-24 w-full md:w-[45vw] h-[60vh] md:h-[700px] bg-center bg-cover md:rounded-2xl'
                style={{
                    backgroundImage: `url(${R7})`
                }}
                >
                    <div className='absolute -top-[80px] -right-3 p-3 bg-white w-3/5 md:w-3/4 md:rounded-xl'>
                        <div 
                        className=' md:h-[330px] h-[200px] w-full bg-center bg-cover md:rounded-xl'
                        style={{
                            backgroundImage: `url(${R3})`
                        }}
                        />
                    </div>
                    <div className='absolute bottom-10 left-3 p-2 bg-black bg-opacity-60 rounded-lg'>
                        <div className='flex'>
                            <div className='w-12 h-12 rounded-full bg-center bg-cover'
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}
                            ></div>
                            <div className='w-12 h-12 -ml-2 rounded-full bg-center bg-cover'
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}
                            ></div>
                            <div className='w-12 h-12 -ml-2 rounded-full bg-center bg-cover'
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}
                            ></div>
                            <div className='w-12 h-12 -ml-2 rounded-full bg-center bg-cover'
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}
                            ></div>
                            <div className='w-12 h-12 -ml-2 rounded-full bg-slate-600 flex items-center justify-center'>
                                <h2 className='text-xl'>7+</h2>
                            </div>
                        </div>
                        <h2 className='text-center pt-1'>Our top real estate analysts.</h2>
                    </div>
                </div>
                <div className='relative text-black mt-12 pb-24 md:pb-0 px-4'>
                    <div>
                        <h2 className='text-white inline p-2 bg-[#5f604b] rounded-xl'>Real Estate</h2>
                        <h2 className='text-2xl md:text-4xl font-[500] py-5'>Let us find you properties that suits your needs.</h2>
                        <p className='text-[14px] md:text-lg'>In today's constantly changing real estate market, finding a place that truly feels like home can be challenging. Whether buying or selling, our real estate services are here to make the process easy and smooth for you. We keep up with market trends and really listen to what you want, ensuring your real estate experience is successful and rewarding. Find homes that offer luxury and comfort, ideal settings for your life's next chapter.</p>
                    </div>
                    <div className='my-10 md:my-7 grid grid-cols-2 gap-4'>
                        <div className='col-span-1'>
                            <img src={options} className='w-10' alt="" />
                            <h3 className='py-1 font-[600] '>Wide range of options</h3>
                            <p className='text-[13px] md:text-[14px]'>From residential and commercial to luxury estates and rental properties, we can cater to different preferences and budgets.</p>
                        </div>
                        <div className='col-span-1'>
                            <img src={knowledge} className='w-10' alt="" />
                            <h3 className='py-1 font-[600]'>Expert local knowledge</h3>
                            <p className='text-[13px] md:text-[14px]'>We have a deep understanding of the local market, including neighborhood trends, amenities, and community insights.</p>
                        </div>
                        <div className='col-span-1 mt-6'>
                            <img src={network} className='w-10' alt="" />
                            <h3 className='py-1 font-[600]'>Strong network and resources</h3>
                            <p className='text-[13px] md:text-[14px]'>Strong network of industry professionals, including mortgage brokers, inspectors, contractors, and legal advisors.</p>
                        </div>
                        <div className='col-span-1 mt-6'>
                            <img src={strategy} className='w-10' alt="" />
                            <h3 className='py-1 font-[600]'>Comprehensive marketing strategy</h3>
                            <p className='text-[13px] md:text-[14px]'>Advanced marketing techniques, such as professional photography, virtual tours, social media marketing and email campaigns.</p>
                        </div>
                    </div>
                    <div className='absolute bottom-5 left-6 flex items-center pb-8 md:pb-0 gap-7'>
                        <div className='p-2 bg-[#5f604b] rounded hover:cursor-pointer'>
                            <p className='inline text-white text-[16px]'>Request a consult</p>
                        </div>
                        <div className=''>
                            <a 
                            href={`tel:${phoneNumber}`}
                            className='flex items-center'
                            >
                                <div className='rounded-full border bg-black p-2 bg-opacity-80'>
                                    <img src={call} className='w-[20px]' alt="" />
                                </div>
                                <p className='pl-1 text-[16px]'>Call us now</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#e8e8e8] text-black pt-12 pb-16 md:pb-12 md:pt-0 md:p-28 px-4 md:px-[143px]'>
                <div className='md:pt-12 mb-10'>
                    <h2 className='flex items-center justify-center text-2xl md:text-3xl font-bold'>Real Estate Solutions</h2>
                </div>
                <Cards />
            </div>
        </div>
     );
}
 
export default Real;