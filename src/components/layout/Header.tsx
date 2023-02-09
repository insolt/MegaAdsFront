import React from 'react';
import './Header.css';
import {Btn} from "../common/btn";

export const Header = () => {
    return(
        <header>
            <p><strong>Mega</strong> Ogloszenia</p>
            <Btn text='Dodaj ogloszenie' />
            <div className="search">
                <input type="text"/> <Btn text='Szukaj'/>
            </div>
        </header>
    )
}