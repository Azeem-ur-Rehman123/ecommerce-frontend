import React from 'react';
import Input from './InputComponent';
import List from './ListComponent';
import '../style/admin.css';

const Admin = () => {
  return (
    <div>
      <div className="container">
        <Input />
        <List />
      </div>
    </div>
  );
};

export default Admin;
