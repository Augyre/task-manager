import "./Login.scss"

export default function Login() {
    return (
        <div className="container">
            <form className="form">

                <h1 className="form__title">Sign up</h1>

                <div className="form__card-wrap">
                    <div className="form__card">
                        <div className="form__card-img">
                            <img src="/img/register/username.svg" alt="name" className="form__card-img--name" />
                        </div>
                        <input type="text" className="form__card-input" placeholder="Enter First Name" />
                    </div>

                    <div className="form__card">
                        <div className="form__card-img">
                            <img src="/img/register/password.svg" alt="name" className="form__card-img--name" />
                        </div>
                        <input type="text" className="form__card-input" placeholder="Enter First Name" />
                    </div>

                    <div className="form__confirm">
                        <input type="checkbox" className="form__confirm-checkbox" />
                        <p>Remember Me</p>
                    </div>
                </div>

                <button className="form__submit">Login</button>
            </form>

            <div className="login__photo">
                <img src="/img/login/mainphoto.svg" alt="woman" className="login__photo-img" />
            </div>
        </div>
    )
}