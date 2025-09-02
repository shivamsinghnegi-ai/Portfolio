import React from 'react';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Certificates = () => {
  const certificates = [
    {
      title: "Azure Fundamentals",
      issuer: "Simplilearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfyRUr.1747590752233-e1750896000vbetattrMgj9wBFwNgqBJvtab1Jkgyn2gp3PDnAOPXOBu05EQ.png",
    },
    {
      title: "Introduction to Basic of Azure",
      issuer: "Simplilearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfyW3W.1747682115773-e1750896000vbetatWsul8gfAlAAog77P9beh-c53edxCE0LG4L4YMvQpP9A.png",
    },
    {
      title: "Getting Started with Gateway Load Balancer",
      issuer: "Simplilearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfyZ40.1747800927444-e1750896000vbetatlfMKG3nX-edGojtn6-tqSX5fcow5tem2PxBQH0AypQw.png",
    },
    {
      title: "Github Copilot Fundamentals",
      issuer: "Simplilearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfyVsT.1747800927475-e1750896000vbetatncJ-Vtsxr0wgM2LQha-BPPMsg9PQKGAyS0Nb1Rz-Yyk.png",
    },
    {
      title: "Css (Basic)",
      issuer: "HackerRank",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfyftc.1747682115985-e1750896000vbetat2xhgkfE20Y1SbOp-LY688Q35vqcB6grG-QsSKUdB2c.png",
    },
    {
      title: "Angular",
      issuer: "SoloLearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfyHFG.85380623-04bc-4a3e-bd60-c3c082a3de8f.jpeg",
    },
    {
      title: "Introduction to Python",
      issuer: "SoloLearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfynTJ.acb5884f-371a-4e98-9b72-29395a2b9f73.png",
    },
    {
      title: "Introduction to Html",
      issuer: "SoloLearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfyG4z.cd36efb7-7004-4a4b-8e88-48ccc6383959.png",
    },
    {
      title: "Introduction to JavaScript",
      issuer: "SoloLearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfAQyF.36f7beba-d766-46f4-893e-edebbad6e5b0.png",
    },
    {
      title: "JavaScript Intermediate",
      issuer: "SoloLearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfATzK.0f0e7daa-6848-4df7-b3a3-8b1189d8640a.png",
    },
    {
      title: "Introduction to C",
      issuer: "SoloLearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfAXO9.10db36c8-6727-4160-8bec-0f5a3665a7c7.png",
    },
    {
      title: "Introduction to C++",
      issuer: "SoloLearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfArW8.bda62027-6595-4402-b571-0f05c842b151.png",
    },

    {
      title: "Web Development",
      issuer: "SoloLearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfAOhM.a4e0be2a-0903-4150-920f-b15119684c2e.png",
    },
    {
      title: "Vibe Coding ",
      issuer: "SoloLearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfA2BD.0a80bb21-85dc-4977-9ddd-4e899dfae0ed.jpeg",
    },
    {
      title: "Prompt Engineering",
      issuer: "SoloLearn",
      date: "2025",
      image: "https://i.im.ge/2025/05/22/vfAqyC.4ab982e8-9f32-4cc2-888e-684582f553cd.jpeg",
    },

    {
      title: "Fullstack web Development internship program",
      issuer: "Edureka",
      date: "2024",
      image: "https://i.im.ge/2025/05/22/vfAibr.Screenshot-2025-05-22-120319.png",
    },
    {
      title: "Advanced MS Excel course",
      issuer: "Iraedu",
      date: "2024",
      image: "https://i.im.ge/2025/05/22/vfA9a0.Screenshot-2025-05-22-120343.png",
    },
  ];

  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const certificateChunks = chunkArray(certificates, 3);

  return (
    <>
      <style>
        {`
          .certificate {
            padding: 80px 0;
            position: relative;
            background-color: Black;
          }

          .certificate h2 {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 16px;
            color: White;
          }

          .certificate p {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 48px;
            color: White;
            line-height: 1.6;
            font-size: 1.1rem;
          }

          .cert-card {
            background: Black;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
            height: 100%;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .cert-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
          }

          .cert-image-container {
            position: relative;
            width: 100%;
            padding-top: 66.67%;
            overflow: hidden;
          }

          .cert-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .cert-card:hover .cert-image {
            transform: scale(1.05);
          }

          .cert-content {
            padding: 24px;
            text-align: left;
          }

          .cert-content h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: White;
            line-height: 1.3;
          }

          .cert-content p {
            font-size: 1rem;
            color: Grey;
            margin-bottom: 8px;
            line-height: 1.5;
            text-align: left;
          }

          .cert-content .cert-date {
            display: block;
            font-size: 0.9rem;
            color: #777;
            font-weight: 500;
          }

          .certificate .carousel {
            padding: 0 48px;
          }

          .certificate .carousel-control-prev,
          .certificate .carousel-control-next {
            width: 48px;
            opacity: 1;
          }

          .certificate .carousel-control-prev {
            left: -12px;
          }

          .certificate .carousel-control-next {
            right: -12px;
          }

          .certificate .carousel-control-prev-icon,
          .certificate .carousel-control-next-icon {
            width: 40px;
            height: 40px;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            position: relative;
            transition: all 0.3s ease;
          }

          .certificate .carousel-control-prev:hover .carousel-control-prev-icon,
          .certificate .carousel-control-next:hover .carousel-control-next-icon {
            background-color: rgba(0, 0, 0, 0.9);
            transform: scale(1.1);
          }

          @media (max-width: 768px) {
            .certificate {
              padding: 60px 0;
            }
            
            .certificate h2 {
              font-size: 2rem;
            }
            
            .cert-content {
              padding: 16px;
            }
            
            .cert-content h3 {
              font-size: 1.1rem;
            }
            
            .certificate .carousel {
              padding: 0 24px;
            }
          }
        `}
      </style>

      <section className="certificate" id="certificates">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Certificates</h2>
                    <p>Here are some of my achievements and certifications that showcase my expertise and continuous learning journey.</p>
                    
                    <Carousel variant="dark" interval={null}>
                      {certificateChunks.map((chunk, index) => (
                        <Carousel.Item key={index}>
                          <Row className="g-4">
                            {chunk.map((cert, idx) => (
                              <Col key={idx} xs={12} md={4}>
                                <div className="cert-card">
                                  <div className="cert-image-container">
                                    <img
                                      className="cert-image"
                                      src={cert.image}
                                      alt={cert.title}
                                    />
                                  </div>
                                  <div className="cert-content">
                                    <h3>{cert.title}</h3>
                                    <p>{cert.issuer}</p>
                                    <span className="cert-date">{cert.date}</span>
                                  </div>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Certificates;