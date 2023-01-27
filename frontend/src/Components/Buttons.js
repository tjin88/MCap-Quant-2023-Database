import React, { useState, useEffect } from 'react'
import './Buttons.css';

const Buttons = ({ currentData, setCurrentData }) => {
    const [count, setCount] = useState(1);
    const [insert, setInsert] = useState(false);
    const [deleteButton, setDeleteButton] = useState(false);
    const [modify, setModify] = useState(false);

    // Currently, as useEffect will be ran once at render, there will be an empty slot. I'll look into this - Tristan 
    useEffect(() => {
        const handleAddData = () => {


            setCurrentData((prevData) => [
                ...prevData,
                {
                    // id: "",
                    date: document.getElementById('inputDate').value,
                    team1: document.getElementById('inputTeam1').value,
                    team2: document.getElementById('inputTeam2').value,
                    betType: document.getElementById('inputBetType').value,
                    odds1: document.getElementById('inputOdds1').value,
                    bet1: document.getElementById('inputBet1').value,
                    party1: document.getElementById('inputParty1').value,
                    sportsbook1: document.getElementById('inputSportsbook1').value,
                    odds2: document.getElementById('inputOdds2').value,
                    bet2: document.getElementById('inputBet2').value,
                    party2: document.getElementById('inputParty2').value,
                    sportsbook2: document.getElementById('inputSportsbook2').value,
                    winner: document.getElementById('inputWinner').value,
                    payout: document.getElementById('inputPayout').value,
                    pAndL: document.getElementById('inputPandL').value,
                    verify: document.getElementById('inputVerify').value === "YES" ? 1 : -1,
                    className: `input${count}`,
                },
            ]);            
        };

        const clearInputs = () => {
            // document.getElementById('inputId').value = "";
            document.getElementById('inputDate').value = "";
            document.getElementById('inputTeam1').value = "";
            document.getElementById('inputTeam2').value = "";
            document.getElementById('inputBetType').value = "";
            document.getElementById('inputOdds1').value = "";
            document.getElementById('inputBet1').value = "";
            document.getElementById('inputParty1').value = "";
            document.getElementById('inputSportsbook1').value = "";
            document.getElementById('inputOdds2').value = "";
            document.getElementById('inputBet2').value = "";
            document.getElementById('inputParty2').value = "";
            document.getElementById('inputSportsbook2').value = "";
            document.getElementById('inputWinner').value = "";
            document.getElementById('inputPayout').value = "";
            document.getElementById('inputPandL').value = "";
            document.getElementById('inputVerify').value = "";
        };

        handleAddData();
        clearInputs();
        setCount(count+1);
        console.log(count)
        console.log(currentData)
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
