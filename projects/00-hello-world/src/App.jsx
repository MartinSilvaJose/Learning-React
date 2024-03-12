import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

const users = [{
    userName: 'JoseLoder',
    name: 'Jose Miguel Martín Silva',
    isFollowing: true
}, {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false
}, {
    userName: 'laura14sj',
    name: 'Laura Salvador Jerez',
    isFollowing: true
}, {
    userName: 'midudev',
    name: 'Miguel Ángel Duran',
    isFollowing: true
}]


export function App() {
    return (
        <section className='blockFollowCard'>
            {users.map((user) => {
                const {userName, name, isFollowing} = user;
                return (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })}
        </section>
    )
} 