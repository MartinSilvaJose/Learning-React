import './TwitterFollowCard.css';

export function TwitterFollowCard({isFollowing, userName, children}) {

    const urlAvatar = `https://unavatar.io/${userName}`;
    
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
                <button className='tw-followCard-button'>
                    {isFollowing ? 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
    )
}