import PinInput from "react-pin-input";
import { Link } from "react-router-dom";

const ConfirmPin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-6">
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
        // onComplete={handlePinComplete}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
      <p className="text-center mt-4 text-gray-600 text-sm md:text-base nunito-font font-semibold">
        Don't have a PIN?{" "}
        {/* Use Link instead of <a> for internal navigation */}
        <Link to ="/generatepin"
          className=" underline nunito-font font-bold text-sm md:text-base"
        >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-green to-blue">
          Generate One
          </span>
        </Link>
      </p>
    </div>
  </div>
  )
}

export default ConfirmPin;
