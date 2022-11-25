import './App.css';
import React, { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [ showEvents, setShowEvents ] = useState(true);
  const [ showModal, setShowModal ] = useState(false);
  const [ events, setEvents ] = useState([]);

  const addEvent = (event) => {
    setEvents((prev) => {
      return [...prev, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(ev =>  ev.id !== id)
    })
    console.log(id)
  };


  return (
    <div className="App">
      <Title title="Events in your area" subtitle="Here you can find what is there to do around where u at" />
      {showEvents && 
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      }
      {!showEvents && 
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      }

      {showEvents && <EventList events={events} handleClick={handleClick}></EventList>}
      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent}></NewEventForm>
      </Modal>}

      <div>
      <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>

    </div>
  );
}

export default App;
