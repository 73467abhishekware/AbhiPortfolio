import React from 'react';

const ContactMe = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 "> 
            <div className="bg-white rounded-lg shadow-md max-w-6xl w-full p-8 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Map */}
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Find Me Here</h2>
                    <div className="aspect-w-16 aspect-h-12 rounded-md overflow-hidden shadow-lg w-full">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509045!2d-122.41941548468176!3d37.77492977975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2d6b3a3%3A0xdea3a8a3f8790c03!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1672503768411!5m2!1sen!2sin" 
                            allowFullScreen="" 
                            loading="lazy" 
                            title="Location Map"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Get in Touch</h2>
                    <form 
                        action="https://formsubmit.co/your-email@example.com" 
                        method="POST" 
                        className="flex flex-col space-y-4"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Your Name" 
                                required 
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Your Email" 
                                required 
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                placeholder="Your Message" 
                                required
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
