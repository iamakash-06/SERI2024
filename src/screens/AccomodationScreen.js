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



const AccomodationScreen = () => {

    return (
      <div>
        <Navbar />
        <HomeImage>
          <Container>
            <HomeText>ACCOMMODATION</HomeText>
            <RedLine></RedLine>
          </Container>
        </HomeImage>
        
        </div>
  );
};

export default AccomodationScreen;
