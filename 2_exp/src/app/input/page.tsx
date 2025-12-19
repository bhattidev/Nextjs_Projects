export default function Home() {
  return (
    <form action="" className="p-6 md:p-8">
      <div className="space-y-4 max-w-md mx-auto">
        {/* Target Input Field */}
        <div className="space-y-2">
          <label
            htmlFor="target"
            className="block text-sm font-semibold text-gray-700 flex items-center gap-2"
          >
            Target
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              id="target"
              type="text"
              placeholder="Enter your production target (e.g., 1000 units)"
              className="w-full px-4 py-3 pl-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Production Input Field */}
        <div className="space-y-2">
          <label
            htmlFor="production"
            className="block text-sm font-semibold text-gray-700 flex items-center gap-2"
          >
            Production
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              id="production"
              type="text"
              placeholder="Enter actual production (e.g., 850 units)"
              className="w-full px-4 py-3 pl-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center gap-2">
              Submit Data
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
