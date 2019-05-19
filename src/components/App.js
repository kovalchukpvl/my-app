import React from 'react';
import TV from '../img/TV.png';
import Calendar from './CalendarExample';
import ListContent from './ListContent'
import '../App.css';



class App extends React.Component {

  state = {
    checkData: false,
    dataClick: null
  }


  onPickDate = (date) => {

    // this.setState = { checkData: !this.state.checkData }
    this.setState((prevstate, props) => ({...prevstate, checkData: !this.state.checkData }))
    this.setState((prevstate, props) => ({...prevstate, dataClick: date }))

    // console.log(date.format('YYYY-MM-DD') + '  -  ' + this.state.checkData);
  }

  clickBack = () => {
    this.setState((prevstate, props) => ({...prevstate, checkData: false, dataClick: null }))
  }



  render() {

    const checkData = this.state.checkData;
    let main;

    if (!checkData) {
      main = <div className="App">
        <header className="App-header">
          <h1>SUPER FILM</h1>
        </header>

        <main className="main">
          <div className="main-div">
            <img className="main-tv" src={TV} alt="TV" />
            <p>For a list of TV shows, please select the desired month and day.</p>
          </div>

          <Calendar
            PickDate={(date) => {
              this.onPickDate(date);
  
            }}
          />

        </main>
      </div>
    }
    else {
      main = <div className="App">
        <header className="App-header">
          <button onClick={this.clickBack}>‹</button>
          <h1>SUPER FILM</h1>
        </header>
        
          <ListContent 
              dataClick={this.state.dataClick}
          />
        
      </div>
    }

    return (

      <>
        {main}
      </>


    )

  }

}


export default App;
