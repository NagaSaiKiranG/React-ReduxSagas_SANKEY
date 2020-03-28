import React, { useState } from 'react';
import {useTranslation} from 'react-i18next';

const SelectComponent = (props) => {
    //const [selectedOption, selectOption] = useState(props.selectedOption);
    const selectedOption = props.selectedOption;
    const {t} = useTranslation();
    const handleChange = (event) => {
        //selectOption(event.target.value);
        props.onOptionChange(event.target.value);
    }
    const optionsList = renderOptions(props);

    return (
        <label>
            {t(props.label)}
            <select value={selectedOption} onChange={handleChange}>
                {optionsList}
            </select>
        </label>
    )
}

const renderOptions = (props) => {
    const optionsList = []
    props.options.forEach((opt, index)=>{
        optionsList.push(<option value={opt.value} key={"option - "+index}>{opt.name}</option>)
    })
    return optionsList;
}

export default SelectComponent;