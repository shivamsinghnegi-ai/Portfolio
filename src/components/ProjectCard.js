/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, texturl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a
            href={projectUrl || "https://github.com/shivamsinghnegi-ai"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
            {texturl}
          </a>
        </div>
      </div>
    </Col>
  );
};
