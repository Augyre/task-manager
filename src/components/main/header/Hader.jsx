import "./Header.scss"

export default function Header() {
    return (
        <div className="container">
            <header className="header">
                <div className="header__text">
                    <h1 className="pink">Dash<span className="black">Board</span></h1>
                </div>

                <search className="header__search">
                    <form className="search-form">
                        <input type="search" className="search-form__input" placeholder="Search your task here..." />
                        <button className="search-form__btn btn-1"><img src="/img/header/search.svg" alt="search" className="btn-img" /></button>
                    </form>
                </search>

                <div className="header__info">
                    <div className="info__alert">
                        <button className="info__alert-button btn-1">
                            <img src="/img/header/not.svg" alt="not" className="btn-img" />
                        </button>
                        <button className="info__alert-button btn-1">
                            <img src="/img/header/cal.svg" alt="cal" className="btn-img" />
                        </button>
                    </div>
                    <div className="info_date">
                        <p className="info__date-day">Tuesday</p>
                        <p className="info__date-time">20/06/2023</p>
                    </div>
                </div>
            </header>
        </div>
    )
}