import React from 'react';
import { useSelector, useDispatcher, useDispatch } from 'react-redux';
import SelectComponent from '../Select';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../actions';
import './Footer.css';

export default function Footer(props) {
    const languages = useSelector((state) => state.languages);
    const selectedLanguage = useSelector((state) => state.selectedLanguage);
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const handleChange = (value) => {
        i18n.changeLanguage(value);
        dispatch(changeLanguage(value));
    }
    return (
        <div className="navbar">
            <footer className="footer">
                <SelectComponent label={"Footer.languageDropDown"} options={languages} selectedOption={selectedLanguage} onOptionChange={handleChange} />
            </footer>
        </div>
    )
}