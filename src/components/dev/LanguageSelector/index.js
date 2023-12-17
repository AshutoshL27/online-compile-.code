import React, { useContext } from 'react'
import Select from 'react-select'
import { availableLanguage } from '../../../constantData/availableLanguages';
import { Context } from '../../../context/Provider';
import './style.css'

function LanguageSelector({ onLanguageChange }) {
    const {language} = useContext(Context);
    return (
        <Select
            className='selector'
            options={availableLanguage}
            defaultValue={language}
            onChange={(selectedOption) => onLanguageChange(selectedOption)}
        />
    )
}

export default LanguageSelector