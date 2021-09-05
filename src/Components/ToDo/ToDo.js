import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ToDoList from './ToDoList';

const ToDo = () => {
    return (
        <Container className="App">
            <h1>To-Do List</h1>
            <br />
            {/* <h1 className="App-intro">
                In this challenge your goal is to create a to do list:
            </h1>
            <hr />
            <ul> 
                <li>
                    ability to accept a task from a user
                </li>
                <li>
                    ability to add this to the state
                </li>
                <li>
                    ability to display all of the tasks
                </li>
                <li>
                    ability to evaluated if a task was completed and update the state
                </li>
            </ul> */}
            <hr />
            <div id="container">
                <ToDoList />
            </div>,
            
        </Container>
    );
};

export default ToDo