import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const toRotate = ["Full Stack Developer", "Web Developer", "Full Stack Developer"];
    const period = 2000;
    
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }
  )

  const onButtonClick = () => {
    const pdfUrl = "https://drive.google.com/file/d/1GL_aYWXzjCtYsBAOJa8TlMYyAG1DIrLW/view";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onButtonClick1 = () => {
    const linkedinUrl = "https://www.linkedin.com/in/shivam-singh-negi-222853311";
    window.open(linkedinUrl, "_blank");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi, I'm Shivam Singh Negi`}{" "}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Web Developer",  "Full Stack Developer"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    A full stack engineer, crafting scalable, responsive and efficient web applications with growing proficiency as an AI developer. 🚀
                  </p>
                  <button onClick={onButtonClick}>Resume</button>
                  <button onClick={onButtonClick1} className="linkedin1">LinkedIn</button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
