import { motion } from 'framer-motion';


const AnimTest = () => {
  const divVariant1 ={
    hidden: {
      scale: .8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: .4
      }
    }
  }

  const divVariant2 ={
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: .3,
        duration: .9,
      }
    }
  }

const item ={
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
  }
}

	return (
		<>
      <motion.div initial="hidden" animate="visible" variants={divVariant1}>
        <h1>Knock knock Neo</h1>
      </motion.div>
      {/* staggered list */}
      <motion.div initial="hidden" animate="visible" variants={divVariant2}>
        {/* <p>Wake up</p> */}
        <motion.p variants={item}>
            Wake up
        </motion.p>
        <motion.p variants={item}>
          The Matrix has you
        </motion.p>
        <motion.p variants={item}>
          Follow the white rabbit
        </motion.p>
      </motion.div>
		</>
	);
}


export default AnimTest;