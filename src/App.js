import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function App() {
  const handleSubmit = event => {
    let alert_str = ""
    let flag = 0
    var event_code = document.getElementById("event_code").value;
    if (event_code.length === 0)
      {
        alert_str = alert_str.concat("Event code is required !\n")
        flag = 1
      }
    var portfolio = document.getElementById("portfolio").value;
    if (portfolio.length === 0)
      {
        alert_str = alert_str.concat("Portfolio is required !\n")
        flag = 1
      }
    var instrument = document.getElementById("instrument").value;
    var date = document.getElementById("date").value;
    if (date.length === 0)
      {
        alert_str = alert_str.concat("Date is required !\n")
        flag = 1
      }
    var price = document.getElementById("price").value;
    var number = document.getElementById("number").value;
    var debit = document.getElementById("debit").value;
    var credit = document.getElementById("credit").value;
    var cap_rise_ratio = document.getElementById("cap_rise_ratio").value;
    var right_ratio = document.getElementById("right_ratio").value;
    var profit = document.getElementById("profit").value;
    var auction_fee = document.getElementById("auction_fee").value;
    var par_value = document.getElementById("par_value").value;
    if (flag === 1)
    {
      alert(alert_str)
    }
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    var api_url = "http://127.0.0.1:5000/addevent"
    xhr.open("POST", api_url, true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    var my_req = JSON.stringify({
      "code": event_code,
      "portfolio": portfolio,
      "instrument": instrument,
      "date": date,
      "price": price,
      "number": number,
      "debit": debit,
      "credit": credit,
      "cap_rise_ratio": cap_rise_ratio,
      "right_ratio": right_ratio,
      "profit": profit,
      "auction_fee": auction_fee,
      "par_value": par_value
})

    if (flag === 0)
    {
      xhr.send(my_req);
    }

    if (flag === 0)
    {
      alert('Form is submitted. Go check the databaseee!')
    }
  }

  return (
    <div className="App">
      <text>
      </text>
      <form action = "http://localhost:5000/uploader" method = "POST" 
         enctype = "multipart/form-data">
        <div class="mApp2">
         <input type = "file" name = "file" />
         <input type = "submit"/>
        </div>
      </form>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div class="mApp1" style={{display:"flex"}}>
            <div class="col1">
              <label>
                <p>EventCode : </p>
                <TextField EventCode id="event_code" label="EventCode" variant="outlined" />
              </label>
              <label>
                <p>Portfolio : </p>
                <TextField id="portfolio" label="Portfolio" variant="outlined" />
              </label>
              <label>
                <p>Instrument : </p>
                <TextField id="instrument" label="Instrument" variant="outlined" />
              </label>
              <label>
                <p>Date : </p>
                <TextField id="date" label="Date" variant="outlined" />
              </label>
              <label>
                <p>Price : </p>
                <TextField id="price" label="Price" variant="outlined" />
              </label>
              <label>
                <p>Number : </p>
                <TextField id="number" label="Number" variant="outlined" />
              </label>
              <label>
                <p>Debit : </p>
                <TextField id="debit" label="Debit" variant="outlined" />
              </label>
            </div>
            <div class="col2">
              <label>
                <p>Credit : </p>
                <TextField id="credit" label="Credit" variant="outlined" />
              </label>
              <label>
                <p>Cap rise ratio : </p>
                <TextField id="cap_rise_ratio" label="Cap rise ratio" variant="outlined" />
              </label>
              <label>
                <p>Right ratio : </p>
                <TextField id="right_ratio" label="Right ratio" variant="outlined" />
              </label>
              <label>
                <p>Profit : </p>
                <TextField id="profit" label="Profit" variant="outlined" />
              </label>
              <label>
                <p>Auction Fee : </p>
                <TextField id="auction_fee" label="Auction Fee" variant="outlined" />
              </label>
              <label>
                <p>Par Value : </p>
                <TextField id="par_value" label="Par Value" variant="outlined" />
              </label>
            </div>
          </div>
        </fieldset>
        <button type="submit" id='submitbutton'>Submit</button>
      </form>
    </div>
  );
}

export default App;
