import "./Reg.scss"

export default function Reg() {
    return (
        <div className="container">
            <div className="registration__photo">
                <img src="/img/register/man.svg" alt="man" className="registration__photo-img" />
            </div>

            <form className="form">
                <h1 className="form__title">Sign up</h1>

                <div className="form__card-wrap">
                    <div className="form__card">
                        <div className="form__card-img">
                            <img src="/img/register/name.svg" alt="name" className="form__card-img--name" />
                        </div>
                        <input type="text" className="form__card-input" placeholder="Enter First Name" />
                    </div>

                    <div className="form__card">
                        <div className="form__card-img">
                            <img src="/img/register/lastname.svg" alt="name" className="form__card-img--lastname" />
                        </div>
                        <input type="text" className="form__card-input" placeholder="Enter Last Name" />
                    </div>

                    <div className="form__card">
                        <div className="form__card-img">
                            <img src="/img/register/username.svg" alt="name" className="form__card-img--username" />
                        </div>
                        <input type="text" className="form__card-input" placeholder="Enter Username" />
                    </div>

                    <div className="form__card">
                        <div className="form__card-img">
                            <img src="/img/register/email.svg" alt="name" className="form__card-img--email" />
                        </div>
                        <input type="text" className="form__card-input" placeholder="Enter Email" />
                    </div>

                    <div className="form__card">
                        <div className="form__card-img">
                            <img src="/img/register/password.svg" alt="name" className="form__card-img--password" />
                        </div>
                        <input type="text" className="form__card-input" placeholder="Enter Password" />
                    </div>

                    <div className="form__card">
                        <div className="form__card-img">
                            <img src="/img/register/confirmpassword.svg" alt="name" className="form__card-img--confirmpassword" />
                        </div>
                        <input type="text" className="form__card-input" placeholder="Confirm password" />
                    </div>
                </div>

                <div className="form__confirm">
                    <input type="checkbox" className="form__confirm-checkbox" />
                    <p>I agree to all terms</p>
                </div>

                <button className="form__submit">Register</button>

                <p className="login__title">Already have an account?<span className="login__button"> Sign In</span></p>
            </form>
        </div>
    )
}