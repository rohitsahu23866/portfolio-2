import React from 'react'

const Contact = () => {
    return (
        <div className="max-w-[1200px] mx-auto bg-white py-20 px-6" id="Contact">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
            </div>
            <div className="max-w-[800px] mx-auto mt-8">
                <div className="bg-gray-100 p-10 rounded-lg shadow-md">
                    <form action="https://getform.io/f/brolozva" method="POST">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="bg-white w-full p-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="bg-white w-full p-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    className="bg-white w-full p-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                                    rows="4"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full p-4 mt-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Contact;