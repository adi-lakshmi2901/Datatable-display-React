// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Datatable from './Datatable';
import Header from './Header';
import users from './mockdata';
function App() {
  const [text,setText]=useState('');
  const onSearching=(e)=>{
    setText(e.target.value.toLowerCase());
    // console.log(text);
  };
  return (
    <div className="App">
      <Header onSearch={onSearching}/>
      <Datatable users={users.filter((user)=>{
        return user.id.toString().includes(text) || user.first_name.toLowerCase().includes(text) ||
        user.last_name.toLowerCase().includes(text) || user.gender.toLowerCase().includes(text) ||
        user.email.toLowerCase().includes(text) || user.ip_address.includes(text)
      })}/>
    </div>
  );
}

export default App;
