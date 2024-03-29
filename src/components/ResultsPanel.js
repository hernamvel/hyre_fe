import React from "react";

function ResultsPanel({resultList}) {
    const listedResults = resultList.map((elem, index) => (
        <li key={index}>{elem}</li>
    ))
    return (
        <div>
            <div>
                <h3>Results:</h3>
                <ul>
                    {listedResults}
                </ul>
            </div>
        </div>
    )
}

export default ResultsPanel;
