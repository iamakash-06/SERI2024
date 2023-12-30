import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import Navbar from '../components/navbar';

const HomeImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.ipfa.org/wp-content/uploads/2020/11/GI-Forum-background-image-6000x3220-dark-1400x861.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 100px;
`;

const Container = styled.div`
  width: 70%;
  margin: auto;
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


const OrganizerName = styled.td`
  width: 35%;
  font-size: 22px;

`;

const OrganizerInstitution = styled.td`
  font-size: 22px;

`;

const Details = styled.h2`
  font-size: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Organizers = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const RedLineSmall = styled.hr`
  border: 2px solid red;
  width: 90%;
`;


const OrganizerScreen = () => {

    const organizers = [
        { name: 'Ramrao Wagh', institution: 'Goa University' },
        { name: 'Maria Choudhary', institution: 'Oracle Inc and ACM India' },
        { name: 'Vandana Naik', institution: 'Directorate of Higher Education, Govt. of Goa' },
        { name: 'Veena T', institution: 'NIT Goa' },
        { name: 'Jarret Fernandes', institution: 'Goa University' },
        { name: 'Payaswini P', institution: 'Goa University' },
        { name: 'S Baskar', institution: 'Goa University' },
        { name: 'Hanumant Redkar', institution: 'Goa University' },
        { name: 'Venkatesh Prabhu', institution: 'Goa University' },
        { name: 'Teja Kundaikar', institution: 'Goa University' },
        { name: 'Poonam Sadekar', institution: 'Goa University' },
        { name: 'Ameya Tilve', institution: 'Don Bosco' },
        { name: 'Marusca', institution: 'GEC' },
        { name: 'Senhal Bhogan', institution: 'AITD' },
        { name: 'Amey Karkare', institution: 'IIT Kanpur' },
        { name: 'R D Naik', institution: 'TCS Research' },
        { name: 'Raghu Reddy', institution: 'IIIT Hyderabad' },
        { name: 'Raghavan Komondoor', institution: 'Indian Institute of Science, Bangalore' },
        { name: 'Pranav Shetgaonkar', institution: 'Goa University' },
        { name: 'Rajendra Gaonkar', institution: 'Goa University' },
        { name: 'Akshay Shirodkar', institution: 'Goa University' },
        { name: 'Sanket Narvekar', institution: 'Goa University' },
        { name: 'Ashutosh Prabhu', institution: 'Goa University' },
        { name: 'Shreyes Prabhu', institution: 'Goa University' },
        { name: 'Baban Gawas', institution: 'Goa University' },
        // Add other organizers
      ];

    return (
      <div>
        <Navbar />
        <HomeImage>
          <Container>
            <HomeText>ORGANIZERS</HomeText>
            <RedLine></RedLine>
          </Container>
        </HomeImage>

        <Organizers>

            <Details>ORGANIZING COMMITEE</Details>
            <table>
                {organizers.map((organizer) => (
                    <tr>
                        <OrganizerName>{organizer.name}</OrganizerName>
                        <OrganizerInstitution>{organizer.institution}</OrganizerInstitution>
                    </tr>
                ))}
            </table>

        </Organizers>
        <RedLineSmall></RedLineSmall>
        <Organizers>

            <Details>PROGRAMMING COMMITEE</Details>
            <table>
                {organizers.map((organizer) => (
                    <tr>
                        <OrganizerName>{organizer.name}</OrganizerName>
                        <OrganizerInstitution>{organizer.institution}</OrganizerInstitution>
                    </tr>
                ))}
            </table>

        </Organizers>
        </div>
  );
};

export default OrganizerScreen;
