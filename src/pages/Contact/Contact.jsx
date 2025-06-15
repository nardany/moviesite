import style from "./Contact.module.css"
export default function Contact(){
    return(
        <div className={style.contactContainer}>
            <div className={style.contactForm}>
                    <div className={style.nameInputForm} >
                            <h3>Full Name</h3>
                            <div className={style.inputNames}>
                            <div>
                                    <input type="text" />
                                    <p>First Name</p>
                            </div>
                            <div>
                                    <input type="text" />
                                    <p>Last Name</p>
                            </div>
                            </div>
                    </div>
                    <div className={style.emailForm}>
                        <h3>Email</h3>
                        <div >
                            <input type="text" />
                            <p>example@example.com</p>
                        </div>
                    </div>
                    <div>
                    <div className={style.messageForm}>
                            <h3>Messege</h3>
                            <input type="text" />
                    </div>
                    </div>
                    <div className={style.submitForm}>
                        <button>Submit</button>
                    </div>
            </div>
        </div>
    )
}