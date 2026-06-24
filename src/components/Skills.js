import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As a dedicated and versatile software engineer, I possess a comprehensive set of skills that enable me to design, develop, and deploy high-quality software solutions. My expertise spans across various programming languages, frameworks, and tools, ensuring I can tackle diverse challenges in the tech landscape. Below is a snapshot of my key skills and proficiencies.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Programming languages</h5>
                                <p>Java, Python, C#, PHP, Javascript/Typescript</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Backend frameworks" />
                                <h5>Backend & Frameworks</h5>
                                <p>Spring Boot, .NET Core, Flask, Django, Symfony</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Frontend frameworks" />
                                <h5>Frontend</h5>
                                <p>Angular, React, NgRx, HTML, CSS, SCSS</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Databases and messaging" />
                                <h5>Databases & Messaging</h5>
                                <p>SQL Server, MySQL, MongoDB, Couchbase, Kafka</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Cloud and DevOps" />
                                <h5>Cloud & DevOps</h5>
                                <p>Azure, AWS, Docker, CI/CD, GitHub Actions, Azure DevOps</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Certifications</h5>
                                <p>Microsoft: AZ-900<br />  Scaled Agile: SAFe Practitioner (6.0)
                                </p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
