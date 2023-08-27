import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../css/navi.css'
import Navbar from 'react-bootstrap/Navbar';



function NavbarMovie(){
    
        return (
          <Navbar class="navelement"  bg="dark" variant="dark" expand="lg">
            <Button variant="primary" >Home</Button>
            <DropdownButton class="Buttons" title="Genre">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Horror</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
            </DropdownButton>
            <DropdownButton class="Buttons" title="Year">
            <Dropdown.Item href="#/action-1">2023</Dropdown.Item>
            <Dropdown.Item href="#/action-2">2022</Dropdown.Item>
            <Dropdown.Item href="#/action-3">2021</Dropdown.Item>
            <Dropdown.Item href="#/action-3">2020</Dropdown.Item>
            </DropdownButton>
          </Navbar>
          
        );
  };


export default NavbarMovie;