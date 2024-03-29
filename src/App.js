import logo from './logo.svg';
import './App.css';
import './components/InputPanel';
import InputPanel from "./components/InputPanel";
import {useState} from "react";
import ResultsPanel from "./components/ResultsPanel";
import axios from "axios";

function App() {
    const [results, setResults] = useState([]);

    function handleCallback(searchWord) {
        let url;
        if (searchWord === "") {
            url = `http://localhost:3000/dictionary/endpoint2`
        } else {
            url = `http://localhost:3000/dictionary/endpoint1?word=${searchWord}`
        }
        axios.get(url)
            .then((response) => {
                setResults(response.data.words)
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <div className="App">
            <header className="App-header">
            <div>
                <InputPanel
                    parentCallback={handleCallback}
                />
                </div>
                <div>
                    <ResultsPanel
                        resultList={results}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
