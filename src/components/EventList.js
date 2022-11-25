import styles from './EventList.module.css'

export default function EventList({ events, handleClick }) {
  return (
    <div>
        {events.map(e => (
            <div className={styles.card} key={e.id}>
            <h2>{e.title}</h2>
            <p className="description">{e.description}</p>
            <p><small>{e.location} - {e.date}</small></p>
            <button onClick={() => handleClick(e.id)}>delete event</button>
            </div>
        ))}
    </div>
  )
}