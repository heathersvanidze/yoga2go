import { Dev } from "./Dev";
import "../styles/About.css";
import katepic from './Images/katepic.jpeg';
import Elizabethpic from './Images/Elizabethpic.jpeg';
import Heatherpic from './Images/Heatherpic.jpeg';
import sarahpic from './Images/sarahpic.jpeg';
import Valentinapic from './Images/Valentinapic.jpeg';

export function About() {

    return (
        <div>
            <h1>Meet the Yoga2Go Developers</h1>
            <Dev name="Elizabeth King"/> <Dev bio="Web Designer with knowledge of UX/UI design and front-end development. My background is in writing and copyediting, and I aspire to freelance work in all of these areas. I have a passion for creating wondrous things and hope to never stop learning."/> <img src={Elizabethpic} alt="Bio Picture" height="200"/> <Dev link="https://github.com/elizabethkatk"/>
            <Dev name="Heather Stout Svanidze"/> <Dev bio="Front end developer with a background in cross-cultural communication. After over a decade in French-English translation, I was ready to pivot to a career with more room for innovation and variety, so I decided to break into web development. I enjoy the challenging combination of creativity and problem-solving that development provides. Yoga helped me stay sane through lockdown and feel at home in my body again after having four children."/> <img src={Heatherpic} alt="Bio Picture" height="200"/> <Dev link="https://github.com/heathersvanidze"/>
            <Dev name="Kate Baker"/> <Dev bio="Experienced educator who is keenly pursuing a career switch to front end development. Passionate about sharing the benefits of daily yoga for meditation."/> <img src={katepic} alt="Bio Picture" height="200"/> <Dev link="https://github.com/KateVB2 "/>
            <Dev name="Khalina Boyce"/> <Dev bio=""/>
            <Dev name="Kris Jackson"/> <Dev bio=""/>
            <Dev name="Sarah Allen"/> <Dev bio="Aspiring Network or DevOps Engineer; currently a full-time student studying Network Technologies. I have a background in WordPress site development and management as well as strong marketing skills. I enjoy being challenged and am always looking for opportunities to grow."/> <img src={sarahpic} alt="Bio Picture" height="200"/> <Dev link="https://github.com/ravenwooddesigns"/>
            <Dev name="Tina Flower"/> <Dev bio="Lorem ipsum"/>
            <Dev name="Valentina Provida"/> <Dev bio="Passionate cyber security analyst and computer digital forensic specialist with practical, hands-on experience. Skilled in risk/vulnerability management, networking protocols, IT regulatory compliance, incident response, business continuity, and disaster recovery planning. Yoga brings balance in my life!"/> <img src={Valentinapic} alt="Bio Picture" height="200"/> <Dev link="https://github.com/vprovida"/>
        </div>
    )
}

