import Banner from "../../components/home/Banner";
import styled from "styled-components";
import Projects from "../../components/home/Projects";

function Home() {
  return (
    <>
      <Banner />
      <Wrapper>
        <Projects />
      </Wrapper>
    </>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;
`;

const Infos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  margin-top: 120px;
`;
