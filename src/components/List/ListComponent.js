import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Dropdown} from 'react-bootstrap';

const ListComponent = (props) => {
    // const [show, setshow] = useState("");
    // const handleDropdownClick = () => {
    //     console.log(event)
    //     if(show){
    //         setshow("")
    //     } else {
    //         setshow("show")
    //     }
    // }
    // const handleDropdownSelection = (code) => {
    //     console.log(code)
    // }
    // //const languages = ["Korean", "English"];
    // const optionsObj = useSelector((state) => state.languages)
    // const dropdownOptions = options(optionsObj,handleDropdownSelection);
    // return (
    //     <div className={"dropdown "+show}>
    //         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" onClick={handleDropdownClick()}>
    //             Dropdown button
    //         </button>
    //         <div className={"dropdown-menu " + show}>
    //             {dropdownOptions}
    //         </div>
    //     </div>
    // )
    return(
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
    </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    )
}

// const options = (optionsObj,handleDropdownSelection) => {
//     const options = [];
//     optionsObj.forEach((element,i) => {
//         options.push(<a className="dropdown-item" key={"option "+i} href="#" onClick={handleDropdownSelection(element.code)}>{element.name}</a>)
//     });
//     return options;
// }


export default ListComponent;