import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 w-full">
    <div className="px-6 py-5 bg-white rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl w-full ">
     <div className="flex justify-end cursor-pointer">
     <RiCloseLargeFill />
    </div>
    <p className="text-center font-semibold text-lg pb-4">Welcome to Crowd1 Mini</p>
    <div className="flex flex-row items-center justify-between space-x-2 pb-3 w-full">
     <Link to="/askforregistration" className="w-1/2 whitespace-nowrap text-center bg-gradient-to-r from-[#FF9950] to-[#FFC84D] text-base font-semibold px-4 py-3 rounded-2xl">
       Import Wallet
     </Link>
    </div>
     </div>
     </div>
  )
}

export default WelcomeScreen
