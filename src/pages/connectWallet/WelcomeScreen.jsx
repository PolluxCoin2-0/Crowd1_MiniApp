import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 w-full bg-black">
      <div
        className="absolute top-[10%] left-0 w-[1000px] h-[50px] bg-blue blur-3xl rounded-[50%] opacity-70"
        style={{
          transform: "translate(-50%, -50%) rotate(-130deg)",
        }}
      ></div>
    <div className="px-6 py-5 bg-black border-[1px] border-white border-opacity-10 rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl w-full ">
     <div className="flex justify-end cursor-pointer">
     <RiCloseLargeFill color="#ffffff" size={20}/>
    </div>
    <p className="text-center font-bold text-lg pb-4 nunito-font text-white">Welcome to Crowd1 Mini</p>
    <div className="flex flex-row items-center justify-center space-x-2 pb-3 w-full">
     <Link to="/importWallet" className="nunito-font w-1/2 whitespace-nowrap text-center bg-yellow-gradient hover:bg-orange-gradient text-base font-bold px-4 py-3 rounded-2xl">
       Import Wallet
     </Link>
    </div>
     </div>
     </div>
  )
}

export default WelcomeScreen;
