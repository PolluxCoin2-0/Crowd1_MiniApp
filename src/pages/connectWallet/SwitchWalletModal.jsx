import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const ListOfWalletModal = () => {
    // for now only, manage it later
    const [closeWalletModal, setCloseWalletModal] = useState(true);
    const handleCloseWalletModal = () => {
        setCloseWalletModal(false);
    }
    if(!closeWalletModal) return null;
//   const dispatch = useDispatch();
//   const ListOfWalletAddresses = useSelector((state)=>state?.wallet?.walletAddressArray)

//   const handleActiveWalletAddress=(wallet)=>{
//     dispatch(setActiveWalletAddress(wallet));
//     setIsListOfWalletAddressModalOpen(!isListOfWalletAddressModalOpen);
//   }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-black  p-6 rounded-lg shadow-lg w-80 max-h-[80vh] overflow-y-auto min-h-1/2">
      <div
        className="absolute top-[10%] left-0 w-[1000px] h-[50px] bg-blue blur-3xl rounded-[50%] opacity-20"
        style={{
          transform: "translate(-50%, -50%) rotate(-130deg)",
        }}
      ></div>
      <div className="flex justify-end cursor-pointer">
        <RxCross2  color="#ffffff"
        // onClick={()=>setCloseWalletModal(!closeWalletModal)} 
        onClick={handleCloseWalletModal}
        />
     </div>
        <h2 className="text-xl font-semibold mb-3 text-center text-white nunito-font ">Wallet Addresses</h2>
        {/* <ul className="space-y-2">
          {ListOfWalletAddresses.length>0 ? ListOfWalletAddresses.map((wallet, index) => (
            <>
            <li key={index} className="p-2 border rounded bg-gray-100 cursor-pointer" onClick={()=>handleActiveWalletAddress(wallet)}>
              {`${wallet.slice(0, 8)}...${wallet.slice(-8)}`}
            </li>
            </>
          )) :
          <p className='text-red-500  text-center'>
            No wallet addresses found.
          </p>
        }
        </ul> */}

        <p className="text-white nunito-font ">kjfdroeitergjerflgweotifelfdfkgldg</p>

        <Link to ="/welcomescreen"
          className="flex items-center justify-center w-full mt-4 p-2 bg-yellow-gradient hover:bg-orange-gradient text-black
           font-medium rounded-lg"
        >
          <FaPlus className="mr-2 nunito-font " />
          <p className="nunito-font font-bold">Add More Wallet</p>
        </Link>
      </div>
    </div>
  );
};

export default ListOfWalletModal;