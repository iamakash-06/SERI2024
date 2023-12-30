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

const TableContainer = styled.div`
  max-height: 900px;
  overflow-y: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 15px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  text-align: left;
  border: 1px solid #ddd;
`;


const TalksSlider = () => {

    const tableData = [
        { day: 'Day 1', time: '10:00 AM', session: 'Session 1', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 1', time: '01:00 PM', session: 'Session 2', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 2', time: '10:00 AM', session: 'Session 3', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 2', time: '01:00 PM', session: 'Session 4', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 1', time: '10:00 AM', session: 'Session 1', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 1', time: '01:00 PM', session: 'Session 2', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 2', time: '10:00 AM', session: 'Session 3', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 2', time: '01:00 PM', session: 'Session 4', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 1', time: '10:00 AM', session: 'Session 1', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 1', time: '01:00 PM', session: 'Session 2', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 2', time: '10:00 AM', session: 'Session 3', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 2', time: '01:00 PM', session: 'Session 4', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 1', time: '10:00 AM', session: 'Session 1', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 1', time: '01:00 PM', session: 'Session 2', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 2', time: '10:00 AM', session: 'Session 3', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 2', time: '01:00 PM', session: 'Session 4', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 1', time: '10:00 AM', session: 'Session 1', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 1', time: '01:00 PM', session: 'Session 2', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 2', time: '10:00 AM', session: 'Session 3', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 2', time: '01:00 PM', session: 'Session 4', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 1', time: '10:00 AM', session: 'Session 1', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 1', time: '01:00 PM', session: 'Session 2', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 2', time: '10:00 AM', session: 'Session 3', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 2', time: '01:00 PM', session: 'Session 4', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 1', time: '10:00 AM', session: 'Session 1', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 1', time: '01:00 PM', session: 'Session 2', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 2', time: '10:00 AM', session: 'Session 3', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 2', time: '01:00 PM', session: 'Session 4', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 1', time: '10:00 AM', session: 'Session 1', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 1', time: '01:00 PM', session: 'Session 2', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },
        { day: 'Day 2', time: '10:00 AM', session: 'Session 3', speaker: 'John Doe', affiliation: 'Company A', title: 'Presentation Title' },
        { day: 'Day 2', time: '01:00 PM', session: 'Session 4', speaker: 'Jane Smith', affiliation: 'Company B', title: 'Another Title' },

        ];
    

    return (
      <div>
        <Navbar />
        <HomeImage>
          <Container>
            <HomeText>SCHEDULE & TALKS</HomeText>
            <RedLine></RedLine>
          </Container>
        </HomeImage>

        <TableContainer>
            <StyledTable>
              <thead>
                <tr>
                  <TableHeader>Day</TableHeader>
                  <TableHeader>Time</TableHeader>
                  <TableHeader>Session</TableHeader>
                  <TableHeader>Speaker</TableHeader>
                  <TableHeader>Affiliation</TableHeader>
                  <TableHeader>Title</TableHeader>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.day}</TableCell>
                    <TableCell>{data.time}</TableCell>
                    <TableCell>{data.session}</TableCell>
                    <TableCell>{data.speaker}</TableCell>
                    <TableCell>{data.affiliation}</TableCell>
                    <TableCell>{data.title}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </StyledTable>
          </TableContainer>
        </div>
  );
};

export default TalksSlider;
