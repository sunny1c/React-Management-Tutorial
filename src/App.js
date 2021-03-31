import './App.css';
import Customer from './components/Customer';
import React, {Component} from 'react';

const customer = {
  'name' : '최해원',
  'birthday' : '910522',
  'gender' : '여자',
  'job' : '직장인'
}

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
