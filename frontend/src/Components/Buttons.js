import React, { useState, useEffect } from 'react'
import './Buttons.css';

const Buttons = ({ currentData, setCurrentData, deletedData, setDeletedData }) => {
    // const [count, setCount] = useState(1);
    const [insert, setInsert] = useState(false);
    const [deleteButton, setDeleteButton] = useState(false);
    const [modify, setModify] = useState(false);

    // Currently, as useEffect will be ran once at render, there will be an empty slot. I'll look into this - Tristan 
    useEffect(() => {
        const handleAddData = () => {
            setCurrentData((prevData) => [
                ...prevData,
                {
                    id: document.getElementById('inputId').value,
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
                    className: `inputData`,
                },
            ]);            
        };

        const clearInputs = () => {
            document.getElementById('inputId').value = "";
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
        // setCount(count+1);
        // console.log(count)
        console.log(currentData)
    }, [insert]); // Only re-run the effect if insert changes

    // Currently, as useEffect will be ran once at render, there will be an empty slot. I'll look into this - Tristan 
    useEffect(() => {
        // const handleDeleteData = ( deleteId ) => {
        //     setDeletedData((prevData) => [
        //         ...prevData,
        //         {
        //             id: deleteId,
        //             date: currentData[deleteId-1].date,
        //             team1: currentData[deleteId-1].team1,
        //             team2: currentData[deleteId-1].team2,
        //             betType: currentData[deleteId-1].betType,
        //             odds1: currentData[deleteId-1].odds1,
        //             bet1: currentData[deleteId-1].bet1,
        //             party1: currentData[deleteId-1].party1,
        //             sportsbook1: currentData[deleteId-1].sportsbook1,
        //             odds2: currentData[deleteId-1].odds2,
        //             bet2: currentData[deleteId-1].bet2,
        //             party2: currentData[deleteId-1].party2,
        //             sportsbook2: currentData[deleteId-1].sportsbook2,
        //             winner: currentData[deleteId-1].winner,
        //             payout: currentData[deleteId-1].payout,
        //             pAndL: currentData[deleteId-1].pAndL,
        //             verify: currentData[deleteId-1].verify,
        //             className: `deletedData`,
        //         },
        //     ]);            
        // };

        const removeData = ( deleteId ) => {
            setDeletedData((prevDeletedData) => [
                ...prevDeletedData,
                currentData.filter((item) => item.id === deleteId)
            ]);

            setCurrentData((prevCurrentData) => 
                prevCurrentData.filter((item) => item.id !== deleteId)
            );
          };

        // const deleteId = document.getElementById('deleteInput').value === "" ? 1 : document.getElementById('deleteInput').value;
        const deleteId = document.getElementById('deleteInput').value;

        // handleDeleteData(deleteId);
        removeData(deleteId);
        // setCount(count-1);
        // console.log(count)
        console.log(deletedData)
    }, [deleteButton]); // Only re-run the effect if delete changes

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
            <div>
                <input type="text" id="deleteInput" className="deleteInput" placeholder="ID #"></input>
                <button className="button-5" onClick={ () => setDeleteButton(!deleteButton) }>Delete</button>
            </div>
            <button className="button-5" onClick={ () => setModify(!modify) }>Modify</button>
            {/* <button className="button-5">______</button>
            <button className="button-5">______</button> */}
        </section>
    </>
    )
}

export default Buttons
