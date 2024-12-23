import {useState} from 'react'

const Contact = () => {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData); // For now, log the form data
      // You can integrate an API here for form submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    };
  
  return (
    <>
    <div className='flex justify-evenly bg-gray-100'>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 w-96">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-[#9A1D20]">
          Contact <span className='text-[#9A491D]'>Us</span>
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We'd love to hear from you. Fill out the form below.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <div className="mt-1">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter the subject"
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#9A1D20] hover:bg-[#613637] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9A1D20]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
 
    <div className='bg-gray-100 mt-28 ml-7'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.532038080123!2d83.46375037453554!3d27.700854825779526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968700410dd797%3A0x2d4c28d055842324!2sTraffic%20Chowk!5e0!3m2!1sen!2snp!4v1726558901422!5m2!1sen!2snp" 
    width="600"
     height="450"
     style={{border:"0"}} allowfullscreen="" 
     loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">

      </iframe>
      </div>
</div>

    </>
  )
}

export default Contact