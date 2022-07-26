import '../styles/About.scss';
import aboutImage from '../assets/sudhanshu-jain-1.jpg';

function About() {
    return (
        <div className="about-section">
            <div className="head">
                <h1>About Me</h1>
                {/* <hr className="head-line"/> */}
            </div>
            <div className="content">
                <div className="image">
                    <img src={aboutImage} alt="Sudhanshu-Jain" />
                </div>
                <div className="parahs">
                    <p>
                        Hello, I am Sudhanshu and I enjoy creating things through code whether its websites, apps, games or even graphics.
                    </p>
                    <p>
                        I have been working in Web Development for more than two years. I have a solid grasp on Object Oriented Principles and Data Structure.
                        I have contributed in designing databases, creating user facing applications and setting up pipelines for the same.
                        I have also worked in graphics programming and game development as my personal projects.
                    </p>
                    <p>
                        I love to learn about computer technologies to their core and always aspire to write professional, clean and quality code.
                        I am fascinated by web3 and how it could reshape the future of internet.
                    </p>
                    <p>
                        In my free time, I try to cover songs on my guitar or spend time chatting with friends and family.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;