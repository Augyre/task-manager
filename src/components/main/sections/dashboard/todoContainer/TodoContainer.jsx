import './TodoContainer.scss'

export default function TodoContainer() {
    return (
        <div className="todoContainer">
            <div className='invite'>
                <h1 className='invite__title'><h3 className='black'>Welcome back, name</h3> <img src="/img/todomain/handwave.svg" alt="hand" className="invite__title-hand" /></h1>
                <div className='invite__list'>
                    <button className='invite__list-btn'><img src="/img/todomain/invite.svg" alt="invite" /><p className='pink'>Invite</p></button>
                </div>
            </div>

            <div className='info'>
                <div className='info__container'>
                    <div className='todos'>
                        <div className='todos__title'>
                            <div className='todos__title-left'>
                                <img src="/img/todomain/pending.svg" alt="pending" className='left-img' />
                                <p className='pink'>To-Do</p>
                            </div>
                            <div className='todos__title-right'>
                                <img src="/img/todomain/taSK.svg" alt="invite" className='right-img' />
                                <p className='grey'>Add task</p>
                            </div>
                        </div>
                        <div className='info__todos-time'>
                            <p className='black'>20 June</p>
                            <p className='grey'>•Today</p>
                        </div>

                        <div className='todos__cards'>
                            <div className='todos__card'>
                                <div className='card-container'>
                                    <img src="/img/todomain/red.png" alt="red" className='todos-color' />
                                    <div className='card__info'>
                                        <h4 className='black'>Attend Nischal’s Birthday Party</h4>
                                        <div className='card__center'>
                                            <p className='grey card__info-center'>Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</p>
                                            <img src="/img/todomain/center.png" alt="center" className='card__center-img' />
                                        </div>
                                        <div className='card-working'>
                                            <p className='black status-text'>Priorty: Moderate</p>
                                            <p className='black status-text'>Status: Not started</p>
                                            <p className='black status-text'>Created On: 20/06/2023</p>
                                        </div>
                                    </div>
                                </div>
                                <img src="/img/todomain/MENU.svg" alt="menu" className='todos-menu' />
                            </div>
                            <div className='todos__card'>
                                <div className='card-container'>
                                    <img src="/img/todomain/red.png" alt="red" className='todos-color' />
                                    <div className='card__info'>
                                        <h4 className='black'>Attend Nischal’s Birthday Party</h4>
                                        <div className='card__center'>
                                            <p className='grey card__info-center'>Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</p>
                                            <img src="/img/todomain/center.png" alt="center" className='card__center-img' />
                                        </div>
                                        <div className='card-working'>
                                            <p className='black status-text'>Priorty: Moderate</p>
                                            <p className='black status-text'>Status: Not started</p>
                                            <p className='black status-text'>Created On: 20/06/2023</p>
                                        </div>
                                    </div>
                                </div>
                                <img src="/img/todomain/MENU.svg" alt="menu" className='todos-menu' />
                            </div>
                            <div className='todos__card'>
                                <div className='card-container'>
                                    <img src="/img/todomain/red.png" alt="red" className='todos-color' />
                                    <div className='card__info'>
                                        <h4 className='black'>Attend Nischal’s Birthday Party</h4>
                                        <div className='card__center'>
                                            <p className='grey card__info-center'>Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</p>
                                            <img src="/img/todomain/center.png" alt="center" className='card__center-img' />
                                        </div>
                                        <div className='card-working'>
                                            <p className='black status-text'>Priorty: Moderate</p>
                                            <p className='black status-text'>Status: Not started</p>
                                            <p className='black status-text'>Created On: 20/06/2023</p>
                                        </div>
                                    </div>
                                </div>
                                <img src="/img/todomain/MENU.svg" alt="menu" className='todos-menu' />
                            </div>
                        </div>
                    </div>

                    <div className='plane'>
                        <div className='plane__status'>
                            <div className='status__title'>
                                <img src="/img/todomain/complete.svg" alt="complete" className='status__title-img' />
                                <p className='pink'>Task Status</p>
                            </div>
                        </div>
                        <div className='plane__complete'>
                            <div className='complete__status'>
                                <div className='status__title'>
                                    <img src="/img/todomain/book.svg" alt="complete" className='status__title-img' />
                                    <p className='pink'>Task Status</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}