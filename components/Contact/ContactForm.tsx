export default function ContactForm() {
    return (
      <div className="p-6 lg:p-12  rounded-md col-span-2 font-sans">
        <h2 className="text-xl lg:text-2xl font-bold mb-6">Get In Touch With Us</h2>
        <p className="text-gray-600 mb-8">
          If you have any questions, please don’t hesitate to send us a message.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 border-2 text-sm border-yellow-500 transition-all duration-500 text-black font-semibold rounded-sm hover:bg-white"
          >
            SEND US
          </button>
        </form>
      </div>
    );
  }
  