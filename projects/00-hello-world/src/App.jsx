import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'
export function App() {
    return (
        <seccion className='blockFollowCard'>
            <TwitterFollowCard  isFollowing={true} userName={'JoseLoder'}>
                Jose Miguel Martín Silva 
            </TwitterFollowCard>
            <TwitterFollowCard  isFollowing={false} userName={'pheralb'}>
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard  isFollowing={true} userName={'lauu14sj'}>
                Laura Salvador Jerez
            </TwitterFollowCard>
            <TwitterFollowCard  isFollowing={true} userName={'midudev'}>
                Miguel Ángel Duran
            </TwitterFollowCard>
        </seccion>
    )
} 