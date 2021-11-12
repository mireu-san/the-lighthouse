export default function Contact() {
  return (
    <div className="contact">
        <div className="contact__container">
            <div className="contact__container__title">
                <h1>Contact</h1>
            </div>
            <div className="contact__container__content">
                <div className="contact__container__content__text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur consectetur,
                        nibh nisl consectetur nisl, eget consectetur nisl
                        nibh eget nibh.
                    </p>
                </div>
                <div className="contact__container__content__form">
                    <form>
                        <div className="contact__container__content__form__input">
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="contact__container__content__form__input">
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="contact__container__content__form__input">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div className="contact__container__content__form__input">
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}