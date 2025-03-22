import React, { useRef } from 'react'
import './parallex.scss'
import { motion,useScroll,useTransform} from 'framer-motion'

const Parallex = () => {

  const scrollref = useRef()

  const {scrollYProgress} = useScroll({
    target:scrollref,
    offset:["start start", "end start"]
  })

  const ytext = useTransform(scrollYProgress,[0,1],["0%","500%"])
  const yBg = useTransform(scrollYProgress,[0,1],["0%","100%"])
  return (
    <div className='parallex' ref={scrollref}>
        <motion.h1 style={{y:ytext}}>What I'm Did?</motion.h1>
        <motion.div  className="mountains"></motion.div>
        <motion.div style={{y:yBg}} className="planets"></motion.div>
        <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  )
}


export default Parallex