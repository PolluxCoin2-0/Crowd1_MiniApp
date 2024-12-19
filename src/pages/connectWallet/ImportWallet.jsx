import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";


const RegisterWallet = () => {
  
  return (
     <div className="flex items-center justify-center min-h-screen p-6 w-full bg-black">
      <div
        className="absolute top-[10%] left-0 w-[1000px] h-[50px] bg-blue blur-3xl rounded-[50%] opacity-70"
        style={{
          transform: "translate(-50%, -50%) rotate(-130deg)",
        }}
      ></div>
     <div className="px-6 py-5 bg-white rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl w-full ">
      <div className="flex justify-end cursor-pointer">
     <RxCross2 
    //  onClick={()=>navigate("/tap")}
     />
     </div>
     <p className="text-center font-bold text-lg pb-4 nunito-font">Login Your Wallet</p>
     <div className="flex flex-col items-center space-y-4 justify-between pb-3">
      <input 
    //   value={privateKey}
    //   onChange={(e)=>setPrivateKey(e.target.value)}
      placeholder="Enter your private key"
      type="text" 
      className="border-black border-[1px] border-opacity-30 bg-[#F3F3F3] rounded-2xl w-full py-3 px-4 placeholder:text-sm placeholder:font-normal nunito-font
      placeholder:text-[#00000066]" />
     
     {/* After login rediret to homepage i.e after entering the private key, hit login , redire to home page */}
     <Link to="/homepage">
     <button 
    //  onClick={handleSubmit} 
     className="nunito-font w-full text-center bg-yellow-gradient hover:bg-orange-gradient text-base font-bold px-4 py-3 rounded-2xl">
      Login Wallet
      </button>
      </Link>
     </div>
      </div>
      </div>
  );
};

export default RegisterWallet;
