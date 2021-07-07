import React from "react";

import styled from "styled-components";

const MainContainer = styled``;
const TopContainer = styled``;
const TopBar = styled``;
const MenuContainer = styled``;

const TopMenuContainer = styled``;
const TopItem = styled``;
const MiddleMenuContainer = styled``;
const MenuItem = styled``;
const BottomMenucontainer = styled``;
const CustomOrderBottom = styled``;
const Title = styled``;

/* 
Main Cointainer
  Top Container
    Top Bar 
  MenuContainer
    Top Bowls Container 
      Bowl1 Bowl 2
    Signature Bowls 
      MenuItem
    Entradas 
      MenuItem
  Custom Order Button
*/

const MainMenu = () => {
  return (
    <MainContainer>
      <TopContainer>
        <TopBar>{/* Menu */}</TopBar>
        <MenuContainer>
          <TopMenuContainer>
            <Title>Title</Title>
            {/*
          ARRAY.foreach(product => <TopItem product= {product} />)
          */}
          </TopMenuContainer>
          <MiddleMenuContainer>
            <Title>Title</Title>
            {/*
          ARRAY.foreach(product => <MenuItem product= {product} >)
          */}
          </MiddleMenuContainer>
          <BottomMenucontainer>
            <Title>Title</Title>
            {/*
          ARRAY.foreach(product => <MenuItem product= {product} >)
          */}
          </BottomMenucontainer>
        </MenuContainer>
      </TopContainer>
      <CustomOrderBottom />
    </MainContainer>
  );
};

export default MainMenu;
