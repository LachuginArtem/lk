import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import styled from '@emotion/styled';
import Form from './Form.jsx'; 

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: black;
  
  span {
    color: blue;
  }
`;

const ProfileIconContainer = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 81px;
  right: 107px;
  background-color: white;
  border: 1px solid gray;
  border-radius:10px;
  padding: 10px;
  list-style-type: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

const MenuItem = styled.li`
  margin-bottom: 5px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Header = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible); // Переключаем видимость формы
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <StyledHeader>
      
      
      <Logo onClick={() => window.location.reload()}><span>Главная</span></Logo>
      
      <Logo onClick={toggleForm} ><span>Рекомендательная система</span></Logo>
      <Logo><span>Помощь</span></Logo>
      
      {/* Иконка профиля */}
      <ProfileIconContainer onClick={toggleMenu}>
        { <AccountBoxIcon style={{ fontSize: 50 }} /> }
      </ProfileIconContainer>

      {/* Выдвигающееся меню */}
      {isMenuOpen && (
        <DropdownMenu>
          <MenuItem><Link to="/profile">Войти</Link></MenuItem>
          <MenuItem><Link to="/profile">Профиль</Link></MenuItem>
          <MenuItem><Link to="/settings">Настройки</Link></MenuItem>
          <MenuItem><Link to="/settings">Выход</Link></MenuItem>
        </DropdownMenu>
      )}
      
    </StyledHeader>
    {isFormVisible && <Form />}
    </>
  );
};

export default Header;