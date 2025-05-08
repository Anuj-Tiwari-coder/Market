import { motion } from 'framer-motion'
import React from 'react'

const Buy_and_sell = () => {
    return (
        <section>
            <h3 className="text-2xl font-semibold text-center mb-6">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                    { icon: "📤", title: "Upload License" },
                    { icon: "💰", title: "Get Valuation" },
                    { icon: "🏦", title: "Get Paid" },
                ].map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="p-6 border rounded shadow"
                    >
                        <div className="text-4xl mb-2">{step.icon}</div>
                        <h4 className="font-semibold">{step.title}</h4>
                    </motion.div>
                ))}
            </div>~
        </section>
    )
}

export default Buy_and_sell