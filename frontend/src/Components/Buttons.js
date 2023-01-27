import React, { useState, useEffect } from 'react'
import './Buttons.css';

const Buttons = ({ setCurrentData }) => {
    const [count, setCount] = useState(1);
    const [insert, setInsert] = useState(false);
    const [deleteButton, setDeleteButton] = useState(false);
    const [modify, setModify] = useState(false);

    useEffect(() => {
        const handleAddData = () => {
            setCurrentData((prevData) => [
                ...prevData,
                {
                    id: "",
                    date: "",
                    team1: "",
                    team2: "",
                    betType: "",
                    odds1: "",
                    bet1: "",
                    party1: "",
                    sportsbook1: "",
                    odds2: "",
                    bet2: "",
                    party2: "",
                    sportsbook2: "",
                    winner: "",
                    payout: "",
                    pAndL: "",
                    verify: "",
                    className: `input${count}`,
                },
            ]);
        };

        handleAddData();
        setCount(count+1);
    }, [insert]); // Only re-run the effect if insert changes

    return (
    <>
        {/* <section className="buttons_section">
            <button className="button">Insert</button>
            <button className="button">Delete</button>
            <button className="button">Modify</button>
            <button className="button">______</button>
        </section> */}
        <section className="buttons_section">
            <button className="button-5" onClick={ () => setInsert(!insert) }>Insert</button>
            <button className="button-5" onClick={ () => setDeleteButton(!deleteButton) }>Delete</button>
            <button className="button-5" onClick={ () => setModify(!modify) }>Modify</button>
            {/* <button className="button-5">______</button>
            <button className="button-5">______</button> */}
        </section>
    </>
    )
}

export default Buttons
