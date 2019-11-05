import React from 'react';
import {CustomInput, Input, Form, Button} from 'reactstrap';
import './App.css';

function App(){
  return(
    <React.Fragment>
    <div className="bgcolor">
    <div className="container">
    <div className="row">
    <div className="col-5 offset-7 userbox">
    <Form>
    <div className="container mt-4 mb-4">
    <h5 align="center">Sign into our account</h5>
    <div className="row mt-4 m-2">
    <div className="col-6">
    <CustomInput label="Personal" id="chk1" name="chk" className="form" type="radio"/>
    </div>
    <div className="col-6">
    <CustomInput label="Commercial" id="chk2" name="chk" className="form" type="radio"/>
    </div>
    </div>
    <div className="row mt-4 m-2">
    <Input id="username" name="username" placeholder="Username" type="name" className="input" color="primary"/>
    <Input type="password" placeholder="Password" className="mt-3"/>
    <CustomInput className="mt-3" label="Keep me signed in" id="checkbox" name="checkbox" type="checkbox"/>
    <br/>
    <Button className="mt-4" color="danger" style={{width:'100%'}}>SIGN IN</Button>
    </div>
    </div>
    </Form>
    </div>
    </div>
    </div>
    </div>
    </React.Fragment>
  );
}
export default App;