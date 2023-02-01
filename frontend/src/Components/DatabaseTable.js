import React from 'react'
import './DatabaseTable.css';

const DatabaseTable = ({ databaseData, currentData }) => {

    return (
        <table className="databaseTable">
            <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Bet Type</th>
                <th>Odds 1</th>
                <th>Bet 1</th>
                <th>Party 1</th>
                <th>Bookie 1</th>
                <th>Odds 2</th>
                <th>Bet 2</th>
                <th>Party 2</th>
                <th>Bookie 2</th>
                <th>Winner</th>
                <th>Payout</th>
                <th>P&L</th>
                <th>Verify?</th>
            </tr>
            {currentData.map((item, index) => {
                return (
                    <tr key={index} className={`${item.className}`}>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.team1}</td>
                        <td>{item.team2}</td>
                        <td>{item.betType}</td>
                        <td>{item.odds1}</td>
                        <td>{item.bet1}</td>
                        <td>{item.party1}</td>
                        <td>{item.sportsbook1}</td>
                        <td>{item.odds2}</td>
                        <td>{item.bet2}</td>
                        <td>{item.party2}</td>
                        <td>{item.sportsbook2}</td>
                        <td>{item.winner}</td>
                        <td>{item.payout}</td>
                        <td>{item.pAndL}</td>
                        <td>{item.verify}/3</td>
                    </tr>
                )
            })}
            <tr className="inputRow">
                <td><input type="text" id="inputId" className="input" placeholder="1"></input></td>
                <td><input type="text" id="inputDate" className="input" placeholder="Jan 26"></input></td>
                <td><input type="text" id="inputTeam1" className="input" placeholder="Leafs"></input></td>
                <td><input type="text" id="inputTeam2" className="input" placeholder="Senators"></input></td>
                <td><input type="text" id="inputBetType" className="input" placeholder="Moneyline"></input></td>
                <td><input type="text" id="inputOdds1" className="input" placeholder="1.90"></input></td>
                <td><input type="text" id="inputBet1" className="input" placeholder="500"></input></td>
                <td><input type="text" id="inputParty1" className="input" placeholder="Tristan"></input></td>
                <td><input type="text" id="inputSportsbook1" className="input" placeholder="Bet365"></input></td>
                <td><input type="text" id="inputOdds2" className="input" placeholder="1.90"></input></td>
                <td><input type="text" id="inputBet2" className="input" placeholder="500"></input></td>
                <td><input type="text" id="inputParty2" className="input" placeholder="Tristan"></input></td>
                <td><input type="text" id="inputSportsbook2" className="input" placeholder="Betway"></input></td>
                <td><input type="text" id="inputWinner" className="input" placeholder="Tristan"></input></td>
                <td><input type="text" id="inputPayout" className="input" placeholder="950"></input></td>
                <td><input type="text" id="inputPandL" className="input" placeholder="-50"></input></td>
                <td><input type="text" id="inputVerify" className="input" placeholder="YES/NO"></input></td>
            </tr>
        </table>
    )
}

export default DatabaseTable
