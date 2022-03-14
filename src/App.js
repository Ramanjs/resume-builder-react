import React, { Component } from 'react';
import Resume from './components/Resume';
import ReactToPrint from 'react-to-print';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactToPrint
          trigger={() => {
            return <div className="pdf-btn">Generate PDF</div>;
          }}
          content={() => this.componentRef}
        />
        <div className="resume-container">
          <Resume ref={el => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}

export default App;
