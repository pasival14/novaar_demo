import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from react-icons

const SubscribeComponent = () => {
  return (
    <div className="">
      <div className="container">
        <form className=" flex items-center border-b border-gray-500 w-full max-w-md">
          <input 
            type="email" 
            placeholder="Subscribe to our newsletter" 
            className="w-full p-2 bg-transparent focus:outline-none text-white placeholder-gray-400" 
            required 
          />
          <button 
            type="submit" 
            className="ml-2 text-white hover:text-gray-400 focus:outline-none"
          >
            <FaArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubscribeComponent;
