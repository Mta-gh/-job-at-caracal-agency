import { motion } from 'framer-motion'

const AnimatedBox = () => (
  <motion.div 
    initial={{ x: -100 }} 
    animate={{ x: 0 }} 
    transition={{ duration: 1 }}
  >
    <h1>Hello World</h1>
  </motion.div>
)

export default AnimatedBox
