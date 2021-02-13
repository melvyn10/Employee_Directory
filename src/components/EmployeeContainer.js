import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import axios from "axios";
import API from "../utils/API";
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

export class EmployeeContainer extends Component {
  state = {
    getEmployeeData: "",
    employee: [],
    columns: [ 
      {
        dataField: 'id',
        text: 'Id',
        filter: textFilter(),
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'first_name',
        text: 'First Name',
        filter: textFilter(),
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'last_name',
        text: 'Last Name',
        filter: textFilter(),
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'user_name',
        text: 'User Name',
        style: {'white-space' : 'wrap'},
        sort: false
      },
      {
        dataField: 'city',
        text: 'City',
        filter: textFilter(),
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'country',
        text: 'Country',
        filter: textFilter(),
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'title',
        text: 'Title',
        filter: textFilter(),
        style: {'white-space' : 'wrap'},
        sort: true
      },
      {
        dataField: 'gender',
        text: 'Gender',
        filter: textFilter(),
        style: {'white-space' : 'wrap' },
        sort: true
      }
    ]
  
  };

  componentDidMount() {
    this.getEmployeeData();
  }

  getEmployeeData = query => {
    API.getData()
      .then(res => {
        console.log("length: ", Object.keys(res.data).length);
        console.log("res", res.data);
        this.setState({employee: JSON.parse(JSON.stringify(res.data))})}
        )
      .catch(err => console.log(err));
  };

  render() {
    console.log ("employee data", this.state.employee);
    return (

      <div className="container">  
      <div class="row" className="hdr">
      <div class="col-sm-12 btn btn-info"> 
      Employee Table
      </div>    
      </div>    
      <div  style={{ marginTop: 20 }}>  
      <BootstrapTable 
      bootstrap4  
      striped  
      hover  
      keyField='id'     
      data = { this.state.employee }
      columns={ this.state.columns } 
      filter={ filterFactory() } />  
      </div>  
      </div>

    );
  }
}

export default EmployeeContainer;
