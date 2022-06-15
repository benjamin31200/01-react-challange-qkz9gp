import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Contacts(Props) {

console.log(Props);
const isDeletable = Boolean;
  return (
    <div>
        <h3>Nom:{Props.name} </h3>
        <h4>téléphone:{Props.phone} </h4>
        <h4>Email:{Props.mail} </h4>
        { Props.isDeletable ? <button>supprimer</button> : null } 
        
    </div>
  );
}

export const App = (
  // write your React Code here
  <div>
    <div>
    <h1 className="text-center">My contacts list 📱</h1>
    </div>
    <div>
    <Contacts name="Emmanuel" phone="0678451233" mail="Emmanuel@gmail.com" isDeletable/>
    <Contacts name="Juliette" phone="0645219650" mail="Juliette@gmail.com" isDeletable/>
    <Contacts name="Henry" phone="0647101216" mail="Henry@gmail.com" isDeletable/>
    <Contacts name="Thomas" phone="0678985247" mail="Thomas@gmail.com" isDeletable/>
    <Contacts name="Sophie" phone="06784514142" mail="Sophie@gmail.com" isDeletable/>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
