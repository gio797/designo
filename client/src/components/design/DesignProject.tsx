import styled from "styled-components";
import { ProjectType } from "../../types";

const DesignProject: React.FC<{ project: ProjectType }> = ({ project }) => {
  const { image, title, description } = project;
  return (
    <ProjectItem>
      <Poster src={"https://designo-api-production.up.railway.app" + image} />
      <Wrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </Wrapper>
    </ProjectItem>
  );
};

export default DesignProject;

const Poster = styled.img`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const ProjectItem = styled.li`
  width: 100%;
  border-radius: 15px;
  background-color: var(--cream);
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 32px 30px;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  font-weight: 500px;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 5px;
  color: var(--tColor);
  text-transform: uppercase;
`;

const ProjectDescription = styled.p`
  font-weight: 400px;
  font-size: 16px;
  line-height: 26px;
  color: var(--darkText);
  margin-top: 16px;
`;
