import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { setCloudStorageData } from "../../utils/TelegramCloudStorage";
import { encryptString } from "../../utils/Encryption";
import { toast } from "react-toastify";

const GeneratePin = () => {
  const [newPin, setNewPin] = useState(""); // State to store the input PIN
  const navigate = useNavigate();

  // Function to handle PIN input
  const handlePinChange = (e) => {
    const pin = e.target.value;

    // Validate to ensure it's only 4 digits and numeric
    if (/^\d{0,4}$/.test(pin)) {
      setNewPin(pin);
    } else {
      toast.error("PIN must be a 4-digit number.");
    }
  };

  // Function to submit and generate the PIN
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the PIN length
    if (newPin.length === 4) {
      const encryptData = encryptString(newPin);
      window.Telegram.WebApp.CloudStorage.removeItems(
        "userDataCrowd1Mini",
        "encryptedCrowd1Mini",
        (value, value2) => {
          console.log(value2);
        }
      );
      sessionStorage.clear();
      setCloudStorageData("encryptedCrowd1Mini", encryptData);
      navigate("/confirmPin");
    } else {
      toast.error("Please enter a 4-digit PIN.");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen p-6 w-full bg-black">
      <div
        className="absolute top-[10%] left-0 w-[1000px] h-[50px] bg-blue blur-3xl rounded-[50%] opacity-70"
        style={{
          transform: "translate(-50%, -50%) rotate(-130deg)",
        }}
      ></div>
      <div className="px-6 py-6 bg-black border-[1px] border-white border-opacity-10 rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl w-full ">
        <h2 className="text-center mb-4 text-xl font-bold text-white nunito-font">
          Create Your PIN
        </h2>
        <form 
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2 nunito-font"
              htmlFor="pin"
            >
              Enter a 4-digit PIN
            </label>
            <input
              type="password"
              id="pin"
             value={newPin}
             onChange={handlePinChange}
              maxLength={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300 text-lg transition-colors
               duration-200 placeholder-gray-400 nunito-font"
              placeholder="****"
            />
          </div>
          
          {/* only for flow purpose adding link, when integrating api got changes */}
          <button
            type="submit"
            className="w-full hover:scale-105 py-3 bg-yellow-gradient hover:bg-orange-gradient rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 text-black  font-bold nunito-font"
          >
            Generate PIN
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default GeneratePin
