import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import "./portfolio.scss"

const items = [
    {
        id: 1,
        title: "Connectivo",
        img: "/connectivo.png",
        desc:"Connectivo is a React-based frontend web application that allows users to register, log in, create posts, and view active users. It features a smooth and responsive UI, providing an engaging social experience. Built with modern web technologies, it ensures seamless performance and usability. This project helped me enhance my skills in React, authentication, state management, and UI/UX design."
    },
    {
        id: 2,
        title: "RideOshare",
        img: "/auto.png",
        desc: "Developed a React-based Ride-sharing application for college students to reduce travel expenses by grouping travelers based on gender preferences. Implemented a cost-effective transportation solution that optimizes travel routes from bus stands to colleges, enhancing convenience and affordability.",
    },
    {
        id: 3,
        title: "TaskManagerApp",
        img: "/TaskManager.png",
        desc: "Task Manager is a frontend-based application built with HTML, CSS, and JavaScript, enabling users to perform full CRUD operations. It utilizes a JSON server to manage data without a traditional backend. The project features an intuitive UI for task creation, editing, and deletion. This project strengthened my skills in frontend development, API handling, and state management.",
    },
    {
        id: 4,
        title: "PortFolio",
        img: "/portfolio.png",
        desc: "I developed a portfolio using React.js to highlight the projects I've built throughout my career and showcase my passion for frontend development. It features a clean, responsive design with smooth animations, ensuring a dynamic user experience across all devices. With sections for my projects, skills, and contact details, this project helped me refine my skills in React, UI/UX design, animations, and mobile responsiveness.",
    }

]

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:["start start","end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y: y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>see a demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}



const Portfolio = () => {


    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressbar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio