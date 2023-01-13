import '../App.css';
import React, {useState} from 'react';

function Navigation() {

  const [selected, setSelected] = useState('Leads');

  const leadStyle = {
    backgroundColor: selected === 'Leads' ? '#ebfffb' : '#BBE5ED'
  }

  const statsStyle = {
    backgroundColor: selected === 'Stats' ? '#ebfffb' : '#BBE5ED'
  }

  const mapStyle = {
    backgroundColor: selected === 'Map' ? '#ebfffb' : '#BBE5ED'
  }

  return (
    <section className="row" style={{paddingTop: '10px', paddingBottom: '10px'}}>
      <div className="grid" style={{paddingTop: '30px', backgroundColor: '#BBE5ED'}}>
      <div className="navButtons" style={leadStyle} onClick={() => {setSelected('Leads')}}><h3>Leads</h3></div>
      <div className="navButtons" style={statsStyle} onClick={() => {setSelected('Stats')}}><h3>Stats</h3></div>
      <div className="navButtons" style={mapStyle} onClick={() => {setSelected('Map')}}><h3>Map</h3></div>

      </div>
    </section>
  );
}

export default Navigation;