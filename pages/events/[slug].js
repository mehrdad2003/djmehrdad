import {API_URL} from '@/config/index'
import styles from '@/styles/Event.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {FaPencilAlt,FaTimes} from 'react-icons/fa'
import Layout from '@/components/Layout'
import EventMap from '@/components/EventMap'
import router, { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const SingleEvent = ({evt}) => {
   
    return (
       <Layout title='eventDetail'>
         <div className={styles.event}>
           
            <span>
            {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
            </span>
            <h1>{evt.name}</h1>
            <ToastContainer/>
            {evt.image &&(
                <div className={styles.image}>
                   <Image src={evt.image.formats.medium.url?evt.image.formats.medium.url:evt.image.formats.medium.thumbnail} width={960} height={600}/>
                </div>
            )}
            <h3>Performers:</h3>
            <p>{evt.performers}</p>
            <h3>Description:</h3>
            <p>{evt.description}</p>
            <h3>Venue :{evt.venue}</h3>
            <p>{evt.address}</p>
            <EventMap evt={evt} />
            <Link href='/events'>
                <a className={styles.back}>
                    {'<'} Go back
                </a>
            </Link>
         </div>
       </Layout>
    )
}
// export async function getStaticPaths(){
//         const res=await fetch(`${API_URL}/events`)
//         const event=await res.json()
//         const paths=event.map(evt=>({
//          params:{slug:evt.slug}
//         } ))
//         return{
//             paths,
//             fallback:true
//         }
//     }
//     export async function getStaticProps({params:{slug}}){
      
//         const res=await fetch(`${API_URL}/events?slug=${slug}`)
//         const event=await res.json()
        
//         return{
//             props:{evt:event[0]},
//             revalidate:1
//         }
//     }
export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(`${API_URL}/events?slug=${slug}`)
    const events = await res.json()
  
    return {
      props: {
        evt: events[0],
      },
    }
  }

export default SingleEvent
