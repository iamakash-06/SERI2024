// HomeScreen.js
import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import Navbar from '../components/navbar';

const HomeImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.ipfa.org/wp-content/uploads/2020/11/GI-Forum-background-image-6000x3220-dark-1400x861.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px;
`;

const Container = styled.div`
  width: 70%;
  margin: auto;
`;

const DetailsPara = styled.p`
  color: black;
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 0px;
  margin-right: 120px;
  margin-left: 120px;
  line-height: 1.5;
  color: rgba(33,33,33,1);
`;  

const HomeText = styled.h1`
  color: white;
  font-size: 70px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0px;
  margin-right: 100px;
  margin-left: 100px;
`;

const RedLine = styled.hr`
  border: 5px solid red;
  width: 100%;
`;

const Details = styled.h2`
  text-align: center;
  font-size: 50px;
  margin-top: 30px;
  margin-bottom: 0px;
`;

const DetailsParaContainer = styled.div`
  width: 90%;
  margin: auto;
`;

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <HomeImage>
        <Container>
          <HomeText>SOFTWARE ENGINEERING RESEARCH IN INDIA (SERI) 2024 UPDATE MEETING</HomeText>
          <RedLine></RedLine>
        </Container>
      </HomeImage>
      <Details>JUNE 2-3 2023,  AMRITA UNIVERSITY</Details>
      <DetailsParaContainer>
        <DetailsPara>
        The SERI Update Meetings, which are conducted annually, are informal events, with the aim of bringing together faculty, students, industrial researchers, and practitioners working in software engineering, to present and discuss advances in their areas of interest. The 2024 edition of SERI will be hosted by Goa University, and will be an in-person meeting, spanning June 2nd full day and June 3rd morning session.  This event is sponsored by the India Chapter of SIGSOFT Special Interest Group of ACM, Goa University, Government of Goa Directorate of Higher Education, and ACM India Council.
        </DetailsPara>
        <DetailsPara>
        Talks will delve into foundational aspects, algorithms, approaches, or experiences, focusing on novel or interesting insights, relating to any aspect of software engineering such as requirements, design, development, analysis, testing, verification, or deployment.
        </DetailsPara>
        <DetailsPara>
        Please use the following form to request to attend the meeting: Participation form.
        </DetailsPara>
        <DetailsPara>
        The deadline to submit the form is May 10th, 2023.
        </DetailsPara>
        <DetailsPara style = {{color: "blue"}}>
        Participation is open only to persons who have been notified by the organizers, and who have completed the participation confirmation form that has been shared by the organizers.
        </DetailsPara>
        <DetailsPara style = {{color: "blue"}}>
        There will be no registration fee to attend the meeting. Partial travel support of up to Rs. 10,000 per PhD student and up to Rs. 5,000 per student for those pursuing other programs would be provided, to bonafide students who have submitted the participation confirmation form that has been shared by the organizers. The support will be in the form of reimbursement  against actual bills submitted during the workshop, subject to the maximum limit mentioned. Inter-city travel cost to and from Goa from the town where the student is studying, and accommodation in Goa (June 1st and 2nd nights),  are admissible expenses. 
        </DetailsPara>

      </DetailsParaContainer>
    </div>
  );
};

export default HomeScreen;
