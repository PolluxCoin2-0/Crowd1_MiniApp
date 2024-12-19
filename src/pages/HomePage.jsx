import { RxAvatar } from "react-icons/rx";
import { RiExchangeLine } from "react-icons/ri";
import poxImg from "../assets/polluxchain.png";
import walletImg from "../assets/wallet.png";
import silverRewardImg from "../assets/silver-medal.png";
import goldRewardImg from "../assets/gold-medal.png";
import earningImg from "../assets/earning.png";
import { useState } from "react";
import SwitchWalletModal from "./connectWallet/SwitchWalletModal";

const HomePage = () => {
    const [openWalletModal, setOpenWalletModal] = useState(false);

   
  return (
    <div className="bg-black min-h-screen p-4">
        <div
        className="absolute top-[10%] left-0 w-[1000px] h-[50px] bg-blue blur-3xl rounded-[50%] opacity-70"
        style={{
          transform: "translate(-50%, -50%) rotate(-130deg)",
        }}
      ></div>


        <div className="bg-black border-[1px] border-white border-opacity-10 rounded-2xl flex flex-row justify-between items-center p-2">
        <div className="flex flex-row items-center space-x-2 ">
        <RxAvatar size={20} className="text-white"/>
        <p className="text-white nunito-font">
            ksdfn...lkjkg
        </p>
        </div>
        <div className="flex flex-row items-center space-x-2"
         onClick={() =>
            setOpenWalletModal(!openWalletModal)
          }>
        <p className="text-white nunito-font text-sm">Switch Wallet</p>
        <RiExchangeLine size={20} className="text-white"/>
        </div>
        </div>

        {/* crowd1 balance */}
        <div className="bg-black border-[1px] border-white border-opacity-10 rounded-2xl mt-4 flex flex-row justify-between items-center p-2">
             <div>
                <div className="flex flex-row items-center space-x-4">
                    <img src={poxImg} alt="" className="w-6" />
                    <p className="text-white text-2xl font-bold nunito-font">0</p>
                </div>
                <p className="text-white text-sm font-bold nunito-font pt-2">Crowd1 Balance</p>
             </div>
             <div>
                <img src={walletImg} alt="" className="w-14"/>
             </div>
        </div>
        
        {/* Gold pool reward */}
        <div className="bg-black border-[1px] border-white border-opacity-10 rounded-2xl mt-4 flex flex-row justify-between items-center p-2">
             <div>
                <div className="flex flex-row items-center space-x-4">
                    <img src={poxImg} alt="" className="w-6"/>
                    <p className="text-white text-2xl font-bold nunito-font">0</p>
                </div>
                <p className="text-white text-sm font-bold nunito-font pt-2">Gold Pool Reward</p>
             </div>
             <div>
                <img src={goldRewardImg} alt="" className="w-14"/>
             </div>
        </div>
         
         {/* silver pool reward */}
        <div className="bg-black border-[1px] border-white border-opacity-10 rounded-2xl mt-4 flex flex-row justify-between items-center p-2">
             <div>
                <div className="flex flex-row items-center space-x-4">
                    <img src={poxImg} alt="" className="w-6"/>
                    <p className="text-white text-2xl font-bold nunito-font">0</p>
                </div>
                <p className="text-white text-sm font-bold nunito-font pt-2">Silver Pool Reward</p>
             </div>
             <div>
                <img src={silverRewardImg} alt="" className="w-14"/>
             </div>
        </div>
       
       {/* crowd1 earning */}
        <div className="bg-black border-[1px] border-white border-opacity-10 rounded-2xl mt-4 flex flex-row justify-between items-center p-2">
             <div>
                <div className="flex flex-row items-center space-x-4">
                    <img src={poxImg} alt="" className="w-6"/>
                    <p className="text-white text-2xl font-bold nunito-font">0</p>
                </div>
                <p className="text-white text-sm font-bold nunito-font pt-2">Total Referral Earning</p>
             </div>
             <div>
                <img src={earningImg} alt="" className="w-14"/>
             </div>
        </div>

        {/* Mint button */}
        <div className="flex justify-center mt-4">
        <button 
        className="nunito-font w-full text-center bg-yellow-gradient hover:bg-orange-gradient text-lg font-bold px-8 py-2 rounded-2xl ">
         Mint
      </button>
      </div>

      {/* Open switch wallet modal */}
      {openWalletModal && (
        <SwitchWalletModal
        setOpenWalletModal={setOpenWalletModal}
        openWalletModal={openWalletModal}
        />
      )}
    </div>
  )
}

export default HomePage
