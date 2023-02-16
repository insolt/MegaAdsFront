import  React, {SyntheticEvent, useContext, useState} from 'react';
import './Header.css';
import {Btn} from "../common/btn";
import {SearchContext} from "../../contexts/serchcontext";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputValue, setInputValue] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputValue);
    }

    return(
        <header>
            <p><strong>Mega</strong> Ogloszenia</p>
            <Btn text='Dodaj ogloszenie' to="/add"/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/> <Btn text='Szukaj'/>
            </form>
        </header>
    )
}