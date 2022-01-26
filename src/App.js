import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Client from './Client'
import Cloud from "./Cloud";

function App() {
    const blank = {
        centerCDSID: "cshaugh1",
        centerId: -1,
        assignments: []
    }

    const blankAssignment = {
        startDate: null,
        endDate: null,
        productId: -1,
        people: []
    }

    const blankCloud = {}

    const [assignmentData, setAssignmentData] = useState(blank);
    const [cloud, setCloud] = useState(null)
    const spaceUuid = 'a3f32596-e17f-11ea-a9ee-005056836670'

    useEffect(() => {
        Client.getPeopleInSpace(spaceUuid).then((response) => {
            const centerPerson = response.data.find((x) => x.cdsId = blank.centerCDSID)
            const newAssignmentData = assignmentData;
            newAssignmentData.centerId = centerPerson.id;
            setAssignmentData(newAssignmentData);
        })
    }, [assignmentData.centerCDSID]);

    useEffect(() => {
        Client.getAssignmentsV2ForSpaceAndPerson(spaceUuid, assignmentData.centerId).then((response) => {
            const newAssignments = [];
            response.data.forEach(datum => {
                const newAssignment = blankAssignment;
                newAssignment.startDate = datum.startDate;
                newAssignment.endDate = datum.endDate;
                newAssignment.productId = datum.productId;
                newAssignments.push(newAssignment);
            })
            const newAssignmentData = assignmentData;
            newAssignmentData.assignments = newAssignments;
            setAssignmentData(newAssignmentData);
        })
    }, [assignmentData.centerId])

    useEffect(() => {
    }, [assignmentData.assignments])

    if (cloud == null) {
        return (<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Preparing your colleague cloud; please wait...
                </p>
            </header>
        </div>)
    } else {
        return (
            <div className="App">
                <header className="App-header">
                    <Cloud data={cloud}/>
                </header>
            </div>
        );
    }
}

export default App;
