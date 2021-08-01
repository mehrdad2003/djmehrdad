import {FaPencilAlt,FaTimes} from 'react-icons/fa'
import Link from 'next/link'
import styles from '@/styles/DashboardEvent.module.css'
const DashboardEvent = ({evt,handleDelete}) => {
    return (
        <div className={styles.event}>
            <h4>
                <Link href={`/events/${evt.slug}`}>
                    <a>{evt.name}</a>
                </Link>
            </h4>
            <Link href={`/events/edit/${evt.id}`}>
                <a className={styles.edit}>
                   <FaPencilAlt/><span>Edit</span>
                </a>
            </Link>
            <a className={styles.delete} href="#" onClick={()=>handleDelete(evt.id)}>
                <FaTimes/><span>Delete</span>
            </a>
        </div>
    )
}

export default DashboardEvent
