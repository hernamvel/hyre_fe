import React, {useState} from "react";

function InputPanel({parentCallback}) {

    const [searchWord, setSearchWord] = useState("");
    function clickHandle1() {
        parentCallback(searchWord);
    }

    function clickHandle2() {
        parentCallback("");
    }

    function changeHandle(e) {
        setSearchWord(e.target.value)
    }

    return (
      <div>
          <div>
              Enter a word:<br/>
              <input type="text" value={searchWord} onChange={changeHandle}/>
              <button onClick={clickHandle1}>Search Endpoint 1</button>
          </div>
          <div>
              OR Just click below for endpoint 2:<br/>
              <button onClick={clickHandle2}>Search Endpoint 2</button>
          </div>
      </div>
    )
}

export default InputPanel;
