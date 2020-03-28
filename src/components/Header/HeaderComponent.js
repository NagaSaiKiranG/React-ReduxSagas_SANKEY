import React from 'react';
import logo from '../../assets/logos/logo2.png';
import './Header.css';
import {useTranslation} from 'react-i18next';
import Chart from "react-google-charts";

const Header = (props) => {
    const {t, i18n} = useTranslation();
    const handleLangugae = () => {
      i18n.changeLanguage('ko')
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
      </div>
    );
}

export default Header;