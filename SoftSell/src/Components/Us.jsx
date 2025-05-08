import { motion } from 'framer-motion'
import React from 'react'

const Us = () => {
    return (
        <section>
            <h3 className="text-2xl font-semibold text-center mb-6">Why Choose Us</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
                {[
                    { icon: "⚡", text: "Fast Valuations" },
                    { icon: "🔒", text: "Secure Transactions" },
                    { icon: "📞", text: "24/7 Support" },
                    { icon: "🚀", text: "Instant Payouts" },
                ].map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="p-6 border rounded shadow">
                        <div className="text-4xl mb-2">{step.icon}</div>
                        <h4 className="font-semibold">{step.text}</h4>
                    </motion.div>
                ))}
            </div>
        </section >
    )
}


export default Us