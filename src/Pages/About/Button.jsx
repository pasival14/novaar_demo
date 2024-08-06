import './about.css'
import { motion } from 'framer-motion';

const Button = ({ prop }) => {
    return ( 
        <motion.div 
        className='flex items-center mt-4'
        whileHover={{ scale: 1.03,
            transition: { duration: 0.2 }
         }}
        >
            <div className='my-2 clipb1 w-[300px] bg-gray-600 bg-opacity-50'>
                <button className=" bg-transparent w-full px-4 py-2 text-white rounded-lg text-sm">{prop}</button>
            </div>
            <div className='clipb2 bg-gray-600 bg-opacity-50 p-[6px] pl-8 md:-ml-5'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white" 
                className="size-6 rounded-lg"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
                </svg>
            </div>
        </motion.div>
     );
}
 
export default Button;