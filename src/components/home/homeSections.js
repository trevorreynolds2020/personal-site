import About from "./about/About";
import WorkContainer from "./work/WorkContainer";
import Contact from "./contact/Contact";

const SECTIONS = [
    {
        name: "about",
        component: About
    },
    {
        name: "projects",
        component: WorkContainer
    },
    {
        name: "contact",
        component: Contact
    }
]   

export default SECTIONS;