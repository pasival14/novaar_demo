import delivery from '../../assets/delivery.svg'
import cost from '../../assets/cost.svg'
import management from '../../assets/management.svg'
import downtime from '../../assets/downtime.svg'
import investigation from '../../assets/investigation.svg'

const Construction = () => {
    return ( 
        <div>
            <div className="bg-white py-12 md:py-24 px-4 md:px-48 ml:px-20">
                <div className="md:grid grid-cols-2 gap-4">
                    <div className="text-black col-span-1">
                        <h2 className="text-black font-bold">Construction Management</h2>
                        <h3 className="text-2xl md:text-4xl font-bold my-2">We are experienced in this field</h3>
                        <p className="mt-3 text-[16px]">Our Construction Management service turns your detailed designs into reality smoothly and efficiently. We focus on getting every detail right, making sure everything runs smoothly from start to finish.<br className="my-2" /> We handle the complex parts of the building, so you don't have to worry. Our experienced team pays close attention to every detail, ensuring the final product is as great as you imagined.</p>
                        <div className="flex justify-between my-8">
                            <div className=" flex flex-col items-center">
                                <p className="text-2xl md:text-3xl font-bold">3+</p>
                                <p className="">Ongoing Projects</p>
                            </div>
                            <div className=" flex flex-col items-center">
                                <p className="text-2xl md:text-3xl font-bold">22+</p>
                                <p className="">Completed Projects</p>
                            </div>
                            <div className=" flex flex-col items-center">
                                <p className="text-2xl md:text-3xl font-bold">17+</p>
                                <p className="">Best Partners</p>
                            </div>
                        </div>
                        <p className="text-md p-2 my-4  md:my-0 inline bg-slate-700 text-white">Read More</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-8">
                        <div className="flex relative">
                            <div 
                            className="absolute bottom-0 left-[50px] w-[120px] h-[120px] b-center bg-cover"
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}
                            />
                            <div 
                            className="w-[350px] h-[190px] ml-[180px] b-center bg-cover"
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}
                            />
                        </div>
                        <div className="mt-[10px] flex">
                            <div 
                            className="w-[320px] h-[200px] bg-center bg-cover"
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600)'
                            }}
                            />
                            <div 
                            className="w-[180px] h-[300px] ml-[10px] bg-center bg-cover"
                            style={{
                                backgroundImage: 'url(https://images.pexels.com/photos/2100681/pexels-photo-2100681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-24 md:px-48 ml:px-20 grid grid-cols-1 justify-items-center md:grid-cols-3 gap-6">
                <div className=' justify-self-start pl-5'>
                    <h2 className="text-3xl col-span-1">Unmatched <br />Service.<br />Unmatched<br />Excellence.</h2>
                </div>
                <div className="relative p-3 px-8 w-[380px] h-[220px] border-gray-600 hover:border-white border-[5px] col-span-1">
                    <div className='absolute -top-7 opacity-90 p-2 bg-black left-12'>
                        <img src={delivery} className=" w-14" alt="" />
                    </div>
                    <h2 className='mt-8 mb-2 font-bold text-md opacity-60'>On-Time Delivery</h2>
                    <p className='text-md text-balance'>We have a track record of completing projects on schedule using advance management tools and techniques to efficiently plan, execute, and monitor all phases, minimizing delays and ensuring deadlines are consistently met.</p>
                </div>
                <div className="relative p-3 px-8 w-[380px] h-[220px] border-gray-600 hover:border-white border-[5px] col-span-1">
                    <div className='absolute -top-7 opacity-90 p-2 bg-black left-12'>
                        <img src={cost} className=" w-14" alt="" />
                    </div>
                    <h2 className='mt-8 mb-2 font-bold text-md opacity-60'>Cost Efficient Solutions</h2>
                    <p className='text-md text-balance'>Our expertise in value engineering helps to deliver high-quality construction while optimizing costs. This includes sourcing cost-effective materials, using efficient construction methods, and reducing waste.</p>
                </div>
                <div className="relative p-3 px-8 w-[380px] h-[220px] border-gray-600 hover:border-white border-[5px] col-span-1">
                    <div className='absolute -top-7 opacity-90 p-2 bg-black left-12'>
                        <img src={management} className=" w-14" alt="" />
                    </div>
                    <h2 className='mt-8 mb-2 font-bold text-md opacity-60'>Efficient Resource Management</h2>
                    <p className='text-md text-balance'>We use advanced project management software to optimize resource allocation, reduce downtime, and manage labor costs effectively. This ensures maximum productivity and cost savings throughout the construction process.</p>
                </div>
                <div className="relative p-3 px-8 w-[380px] h-[220px] border-gray-600 hover:border-white border-[5px] col-span-1">
                    <div className='absolute -top-7 opacity-90 p-2 bg-black left-12'>
                        <img src={downtime} className=" w-14" alt="" />
                    </div>
                    <h2 className='mt-8 mb-2 font-bold text-md opacity-60'>Minimized Downtime and Disruptions</h2>
                    <p className='text-md text-balance'>We plan meticulously to minimize downtime during construction. Implementing strategies such as phased construction, off-site fabrication, and effective scheduling to keep the project moving smoothly.</p>
                </div>
                <div className="relative p-3 px-8 w-[380px] h-[220px] border-gray-600 hover:border-white border-[5px] col-span-1">
                    <div className='absolute -top-7 opacity-90 p-2 bg-black left-12'>
                        <img src={investigation} className=" w-14" alt="" />
                    </div>
                    <h2 className='mt-8 mb-2 font-bold text-md opacity-60'>Proactive Risk Management</h2>
                    <p className='text-md text-balance'>We use proactive risk management practices to identify potential issues early and implement solutions quickly. This approach minimizes the risk of costly delays, budget overruns, and other unforeseen challenges.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Construction;