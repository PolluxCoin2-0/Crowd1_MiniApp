import { Link } from "react-router-dom"

const GeneratePin = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen p-6 w-full">
      <div className="px-6 py-6 bg-white rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl w-full ">
        <h2 className="text-center mb-4 text-xl font-bold text-gray-900 nunito-font">
          Create Your PIN
        </h2>
        <form 
        // onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2 nunito-font"
              htmlFor="pin"
            >
              Enter a 4-digit PIN
            </label>
            <input
              type="password"
              id="pin"
            //   value={newPin}
            //   onChange={handlePinChange}
              maxLength={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300 text-lg transition-colors
               duration-200 placeholder-gray-400 nunito-font"
              placeholder="****"
            />
          </div>
          
          {/* only for flow purpose adding link, when integrating api got changes */}
          <Link to="/confirmPin">
          <button
            type="submit"
            className="w-full hover:scale-105 py-3 bg-yellow-gradient hover:bg-orange-gradient rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 text-black  font-bold nunito-font"
          >
            Generate PIN
          </button>
          </Link>
        </form>
      </div>
    </div>
    </div>
  )
}

export default GeneratePin
