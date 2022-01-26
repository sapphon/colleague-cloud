import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Client from './FakeClient'
import Cloud from "./Cloud";

function App() {
    const blank = {
        centerCDSID: "vwillot",
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

    const [querentAssignments, setQuerentAssignments] = useState(blank);
    const [cloud, setCloud] = useState(null)
    const spaceUuid = 'a3f32596-e17f-11ea-a9ee-005056836670'

    useEffect(() => {
        Client.getPeopleInSpace(spaceUuid).then((response) => {
            const centerPerson = response.data.find((x) => x.customField1 = blank.centerCDSID)
            const newAssignmentData = querentAssignments;
            newAssignmentData.centerId = centerPerson.id;
            setQuerentAssignments(newAssignmentData);
        })
    }, [querentAssignments.centerCDSID]);

    useEffect(() => {
        Client.getAssignmentsV2ForSpaceAndPerson(spaceUuid, querentAssignments.centerId).then((response) => {
            const newAssignments = [];
            response.data.forEach(datum => {
                const newAssignment = blankAssignment;
                newAssignment.startDate = datum.startDate;
                newAssignment.endDate = datum.endDate;
                newAssignment.productId = datum.productId;
                newAssignments.push(newAssignment);
            })
            const newAssignmentData = querentAssignments;
            newAssignmentData.assignments = newAssignments;
            setQuerentAssignments(newAssignmentData);
        })
    }, [querentAssignments.centerId])

    useEffect(() => {
    }, [querentAssignments.assignments])

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
