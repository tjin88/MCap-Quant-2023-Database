import React from 'react'
import './DatabaseTable.css';

function DatabaseTable() {
    return (
        <>
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
                    <th>Sportsbook 1</th>
                    <th>Odds 2</th>
                    <th>Bet 2</th>
                    <th>Party 2</th>
                    <th>Sportsbook 2</th>
                    <th>Winner</th>
                    <th>Payout</th>
                    <th>P&L</th>
                    <th>Verify?</th>
                </tr>
                <tr>  {/* This will become a map function to take the data from the backend and fill the table */}
                    <td>TJin</td>
                    <td>Jan 26</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #2</td>
                    <td>Input #2</td>
                    <td>Input #2</td>
                    <td>Input #3</td>
                </tr>
                <tr>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #1</td>
                    <td>Input #2</td>
                    <td>Input #2</td>
                    <td>Input #2</td>
                    <td>Input #3</td>
                </tr>
            </table>
        </>
    )
}

export default DatabaseTable
