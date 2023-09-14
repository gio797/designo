import styled from "styled-components";
import AboutHeader from "../../components/about/AboutHeader";

function About() {
  return (
    <>
      <AboutHeader />
    </>
  );
}

export default About;

const TalentContainer = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--cream);
  padding-bottom: 80px;
`;

const PosterImg = styled.img`
  width: 100%;
`;

// const TalentTitle = styled(AboutTitle)`
//   color: var(--tColor);
// `;

// const TalentDescription = styled(AboutDescription)`
//   color: var(--darkText);
// `;

const AboutLocations = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 48px;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

const AboutLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LocationImageBox = styled.div`
  width: 202px;
  height: 202px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.197569) 100%
  );
`;

const LocationImage = styled.img`
  width: 100%;
  height: 100%;
`;

const LocationName = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 5px;
  color: var(--darkText);
  text-transform: uppercase;
  margin-top: 48px;
  text-align: center;
`;

const ViewLocation = styled.button`
  text-decoration: none;
  padding: 18px;
  background-color: var(--tColor);
  color: var(--light);
  border-radius: 8px;
  border: none;
  margin-top: 32px;
  font-weight: 500;
  font-size: 15px;
  line-height: 21.68px;
  letter-spacing: 1px;
`;
