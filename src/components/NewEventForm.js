import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
    const [ title, setTitle ] = useState('')
    const [ date, setDate ] = useState('')
    const [ location, setLocation ] = useState('manchester')

    const [ description, setDescription ] = useState('')

    const resetForm = () => {
        setTitle('')
        setDate('')
        setLocation('manchester')
        setDescription('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date,
            location: location,
            description: description,
            id: Math.floor(Math.random() * 10000)
        }
        addEvent(event)
        resetForm()
    }

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Event title:</label>
        <input 
            type="text" 
            id="title" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        ></input>
        
        <label>
            <span>Short description:</span>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></input>
        </label>

        <label>
            <span>Event Date:</span>
            <input 
                type="date" 
                onChange={(e) => setDate(e.target.value)}
                value={date}
            ></input>
        </label>
        <label>
            <span>Event Location</span>
            <select onChange={(e) => setLocation(e.target.value)}>
                <option value="manchester">Manchester</option>
                <option value="utrecht">Utrecht</option>
                <option value="london">London</option>
            </select>
        </label>
        <button>Submit</button>
    </form>
  )
}
