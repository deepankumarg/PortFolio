import "./contact.scss"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { useRef } from "react";


const variants={
    initial:{
        opacity:0,
        y:500,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        }
    }
}


const Contact = () => {

 const formRef=useRef() 
 
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qdpzrmm', 'template_ouylsdu', formRef.current, {
        publicKey: '3VRKBeRPahhfB3ZqT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          formRef.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate" >
        <motion.div className="textcontainer" variants={variants}>
            <motion.h1 variants={variants}>Let's Work Together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>deepan.guna12@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Solasiramani, Namakkal</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>6385828009</span>
            </motion.div>
        </motion.div>
        <div className="formcontainer">
            <form 
               onSubmit={sendEmail}
               ref={formRef}
            >
                <input type="text" required placeholder="Name" name="name"/>
                <input type="email" required placeholder="Email" name="email"/>
                <textarea id="" placeholder="Message" rows={8} name="message" />
                <button>Submit</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact