import { useState } from 'react';
import './TwitterFollowCard.css';

export function TwitterFollowCard({userName, children, initialIsFollowing = false}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const urlAvatar = `https://unavatar.io/${userName}`;

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const classNameButton = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    ;


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={urlAvatar}
                    alt="El avatar de JoseLoder"
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={classNameButton} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}