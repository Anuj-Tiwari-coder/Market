import React from 'react'

const Contact = () => {
    return (
        <section>
            <h3 className="text-2xl font-semibold text-center text-black dark:text-white mb-6">Get in Touch</h3>
            <form className="max-w-xl mx-auto space-y-4">
                <input className="w-full p-2 border rounded" type="text" placeholder="Name" required />
                <input className="w-full p-2 border rounded" type="email" placeholder="Email" required />
                <input className="w-full p-2 border rounded" type="text" placeholder="Company" required />
                <select className="w-full p-2 border rounded " required>
                    <option value="">Select License Type</option>
                    <option value="Windows">Windows</option>
                    <option value="Adobe">Adobe</option>
                    <option value="Other">Other</option>
                </select>
                <textarea className="w-full p-2 border rounded" placeholder="Your Message" rows="4" required></textarea>
                <button className="w-full bg-blue-600 text-gray-300 p-2 rounded hover:bg-blue-700" type="submit">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Contact