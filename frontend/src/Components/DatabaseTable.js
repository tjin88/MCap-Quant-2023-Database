import React from 'react'
import './DatabaseTable.css';

const DatabaseTable = ({ databaseData, currentData }) => {
    
    return (
        <table className="databaseTable">
            <tr>
                {/* <th>ID</th> */}
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
            {databaseData.map((item, index) => {
                return (
                    <tr key={index} className={`${item.className}`}>
                        {/* <td>{item.id}</td> */}
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
                        <td>{item.verify}</td>
                    </tr>
                )
            })}
            {currentData.map((item, index) => {
                return ( 
                    <tr key={index} className={`${item.className}`}>
                        {/* <td><input type="text" className="inputId" placeholder="TJin"></input></td> */}
                        <td><input type="text" className="inputDate" placeholder="Jan 26"></input></td>
                        <td><input type="text" className="inputTeam1" placeholder="Leafs"></input></td>
                        <td><input type="text" className="inputTeam2" placeholder="Senators"></input></td>
                        <td><input type="text" className="inputBetType" placeholder="Moneyline"></input></td>
                        <td><input type="text" className="inputOdds1" placeholder="1.90"></input></td>
                        <td><input type="text" className="inputBet1" placeholder="500"></input></td>
                        <td><input type="text" className="inputParty1" placeholder="Tristan"></input></td>
                        <td><input type="text" className="inputSportsbook1" placeholder="Bet365"></input></td>
                        <td><input type="text" className="inputOdds2" placeholder="1.90"></input></td>
                        <td><input type="text" className="inputBet2" placeholder="500"></input></td>
                        <td><input type="text" className="inputParty2" placeholder="Tristan"></input></td>
                        <td><input type="text" className="inputSportsbook2" placeholder="Betway"></input></td>
                        <td><input type="text" className="inputWinner" placeholder="Tristan"></input></td>
                        <td><input type="text" className="inputPayout" placeholder="950"></input></td>
                        <td><input type="text" className="inputPandL" placeholder="-50"></input></td>
                        <td><input type="text" className="inputVerify" placeholder="NO"></input></td>
                    </tr>
                )
            })}
        </table>
    )
}

export default DatabaseTable
