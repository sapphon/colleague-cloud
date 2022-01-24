import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Client from './Client'

function App() {
  const blank = {
    centerCDSID: "cshaugh1",
    centerId: -1,
    assignments:[]
  }

  const blankAssignment = {
    startDate: null,
    endDate: null,
    productId:-1,
    people:[]
  }

  const blankCloud = {} //cdsid : number of days

  const [cloudData, setCloudData] = useState(blank);
  const [cloud, setCloud] = useState(null)
  const spaceUuid = 'a3f32596-e17f-11ea-a9ee-005056836670'

  useEffect(() => {
    Client.getPeopleInSpace(spaceUuid).then((response) => {
      const centerPerson = response.data.find((x) => x.cdsId = blank.centerCDSID)
      const newCloudData = cloudData;
      newCloudData.centerId = centerPerson.id;
      setCloudData(newCloudData);
    })
  }, [cloudData.centerCDSID])
  /*
    useEffect(() => {
      Client.getAssignmentsV2ForSpaceAndPerson(spaceUuid, cloudData.centerId).then((response) => {
        const newAssignments = [];
        response.data.forEach(datum => {
          const newAssignment = blankAssignment;
          newAssignment.startDate = datum.startDate;
          newAssignment.endDate = datum.endDate;
          newAssignment.productId = datum.productId;
          newAssignments.push(newAssignment);
        })
        const newCloudData = cloudData;
        newCloudData.assignments = newAssignments;
        setCloudData(newCloudData);
      })
    }, [cloudData.centerId])

    useEffect(() => {}, [cloudData.assignments])
  */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
