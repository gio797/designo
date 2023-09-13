import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectType } from "../../types";
import { useParams } from "react-router-dom";
import { getCategoryProjects } from "../../axios";
import DesignProjects from "../../components/design/DesignProjects";

function Design() {
  const [data, setData] = useState<ProjectType[]>([]);

  const { category } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCategoryProjects(category || "");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [category]);

  return (
    <>
      <Banner>
        <BannerTitle>Web Design</BannerTitle>
        <BannerDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          incidunt fuga minima esse? Minus tempora veritatis obcaecati natus
          nihil inventore omnis magnam eius at. Velit reiciendis modi ratione
          nobis deserunt!
        </BannerDescription>
      </Banner>
      <Wrapper>
        {data.length > 0 ? <DesignProjects projects={data} /> : null}
      </Wrapper>
    </>
  );
}

export default Design;

const Banner = styled.div`
  width: 100%;
  height: 320px;
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--tColor);
`;

const BannerTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: var(--light);
  text-align: center;
  text-transform: capitalize;
`;

const BannerDescription = styled.h2`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: var(--light);
  text-align: center;
  margin-top: 24px;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;
`;

const ProjectsLinks = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 96px;
`;
