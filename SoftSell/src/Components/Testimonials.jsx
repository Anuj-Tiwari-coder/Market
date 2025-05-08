import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <section>
            <h3 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                    {
                        name: "John Doe",
                        role: "IT Manager",
                        company: "TechCorp",
                        feedback: "SoftSell helped us clear out unused licenses in days. Smooth process!",
                    },
                    {
                        name: "Jane Smith",
                        role: "Procurement Lead",
                        company: "CloudPro",
                        feedback: "Professional and efficient. Highly recommend for software resale!",
                    },
                ].map((review, i) => (
                    <div key={i} className="p-6 border rounded shadow text-white bg-gray-200  dark:text-white-700  dark:bg-gray-600 ">
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}>
                            <p className="italic mb-2">"{review.feedback}"</p>
                            <p className="font-bold">- {review.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{review.role}, {review.company}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Testimonials