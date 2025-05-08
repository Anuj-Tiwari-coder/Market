import { motion } from 'framer-motion'
import React from 'react'

const Hero = () => {
    return (
        <section className="text-center space-y-6">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold"
            >
                Maximize Your Unused Software Value
            </motion.h2>
            <p className="text-lg">Resell unused software licenses with ease and security.</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Sell My Licenses
            </button>
        </section>
    )
}

export default Hero