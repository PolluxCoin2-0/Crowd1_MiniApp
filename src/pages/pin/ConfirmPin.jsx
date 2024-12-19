import PinInput from "react-pin-input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCloudStorageData } from "../../utils/TelegramCloudStorage";
import { decryptString } from "../../utils/Encryption";
import { setPinEntered } from "../../redux/slice";

const ConfirmPin = () => {
  const navigate = useNavigate();

  const handlePinComplete = async (value) => {
    console.log(value)
    try {
      // Fetch encrypted PIN from cloud storage
      const encryptPin = await getCloudStorageData("encryptedCrowd1Mini");
      if (!encryptPin) {
        toast.error("First, Generate Your Pin!");
        return;
      }

      // Decrypt the PIN
      const pin = decryptString(encryptPin);
      console.log("Encrypted PIN:", encryptPin);
      console.log("Decrypted PIN:", pin);
      console.log("Entered PIN:", value);

      // Check if entered PIN matches
      if (pin === value) {
        // Fetch user data from cloud storage
        const storedUserAddressRaw = await getCloudStorageData(
          "userDataCrowd1Mini"
        );
        const storedUserAddress = storedUserAddressRaw
          ? JSON.parse(storedUserAddressRaw)
          : null;

        console.log("Stored User Data:", storedUserAddress);

        // Navigate if valid user data exists
        if (storedUserAddress) {
          setPinEntered(true);
          navigate("/welcomescreen");
        } else {
          toast.error("No wallet addresses found. Please generate address first.");
          navigate("/welcomescreen");     
        }
      } else {
        toast.error("Entered PIN is incorrect.");
      }
    } catch (error) {
      console.error("Error verifying PIN:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-6 bg-black">
      <div
        className="absolute top-[10%] left-0 w-[1000px] h-[50px] bg-blue blur-3xl rounded-[50%] opacity-70"
        style={{
          transform: "translate(-50%, -50%) rotate(-130deg)",
        }}
      ></div>
      <div className="px-6 py-4 bg-white rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl w-full">
        <h2 className="text-center mb-6 text-xl font-extrabold text-gray-800 nunito-font">
          Enter Your PIN
        </h2>
        <PinInput
          length={4} // 4-digit PIN
          initialValue=""
          secret
          secretDelay={100}
          onChange={(value, index) => {}}
          type="numeric"
          inputMode="number"
          style={{ display: "flex", justifyContent: "center", gap: "18px" }} // Center the inputs
          inputStyle={{
            borderColor: "gray",
            borderRadius: "15px", // Slightly smaller border radius for a compact look
            fontSize: "1.5rem", // Reduced font size for inputs
            width: "50px", // Adjusted width for each digit input
            height: "50px", // Adjusted height for each digit input
            textAlign: "center",
            transition: "border-color 0.3s ease-in-out",
            backgroundColor: "#f3f4f6", // Lighter background for inputs
          }}
          inputFocusStyle={{
            borderColor: "black",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
          }}
          onComplete={handlePinComplete}
          autoSelect={true}
          regexCriteria={/^\d{4}$/} // Ensure only 4 numeric digits
        />
        <p className="text-center mt-4 text-gray-600 text-sm md:text-base nunito-font font-semibold">
          Dont have a PIN?{" "}
          <Link
            to="/generatePin"
            className="underline nunito-font font-bold text-sm md:text-base"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-green to-blue">
              Generate One
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ConfirmPin;
