import "./navbar.scss"
import React from 'react'
import {motion} from 'framer-motion'
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
       <Sidebar/>
        <div className="wrapper">
            <motion.span 
              initial={{opacity:0,scale:0.5}}
              animate={{opacity:1,scale:1}}
              transition={{duration:0.5}}
            >
              PortFolio
            </motion.span>
            <div className="social">
                <a href="https://www.facebook.com/share/1BnbgsXVRN/" target="blank"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/_deeps__.06?utm_source=qr&igsh=amxlNGJveGZ5dTBy" target="blank"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/deepankumarg/" target="blank"><img src="/image.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar