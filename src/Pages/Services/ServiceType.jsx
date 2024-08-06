import { motion } from "framer-motion";

const ServiceType = ({ flextype, image, h1, h2, h3, text1, text2, text3 }) => {

    return ( 
        <div className= {`w-full flex ${flextype} border-t items-center justify-center`}>
            <motion.div 
            className="w-1/2 flex items-center justify-center"
            initial={{x: '100%'}}
            animate={{x: 0}}
            transition = {{ duration: 0.7 }}
            >
                {image}
            </motion.div>
            <div className="w-1/2 border-x">
                <div className="text-black py-12  duration-700 hover:bg-black hover:text-white text-balance flex-col space-x-12">
                    <h2 className="text-lg px-12">{h1}</h2>
                    <p className="text-md pt-2">{text1}</p>
                </div>
                <hr />
                <div className="text-black py-12 hover:bg-black duration-700 hover:text-white text-balance flex-col space-x-12">
                    <h2 className="text-lg px-12">{h2}</h2>
                    <p className="text-md pt-2">{text2}</p>
                </div>
                <hr />
                <div className="text-black py-12 hover:bg-black duration-700 hover:text-white text-balance flex-col space-x-12">
                    <h2 className="text-lg px-12">{h3}</h2>
                    <p className="text-md pt-2">{text3}</p>
                </div>
            </div>
        </div>
     );
}
 
export default ServiceType;