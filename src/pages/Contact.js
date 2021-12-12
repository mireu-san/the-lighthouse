import React from 'react'

import '../styles/Contact.css'
// import emailjs from 'emailjs-com';

function Contact() {
    return (
        <div className="contact__wallpaper"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#23252F',
            }}
        >
                <section class="contact" id="contact">
                <h1>Contact</h1>
                <div class="contact__container">
                

                <h2>Phone</h2>
                    <a href="tel:+8210-8215-8540">
                        <button 
                            class="button__contact" 
                            id="contact__btn__one"
                        >
                            📳:010-8215-8540
                        </button>
                    </a>


                <h2>Email</h2>
                    <a href="mailto:starmireu@gmail.com">
                        <button 
                        class="button__contact" 
                        id="contact__btn__two"
                        >
                            📧:starmireu@gmail.com
                        </button>
                    </a>

                <h2>Blog</h2>
                    <a href="https://silverlibrary.tistory.com/">
                        <button 
                        class="button__contact" 
                        id="contact__btn__three"
                        >
                        <i class="fas fa-comment"></i>
                            :Blog
                        </button>
                    </a>


                    <h2>Github</h2>
                    <a href="https://github.com/mireu-san">
                        <button 
                        class="button__contact" 
                        id="contact__btn__three"
                        >
                        <i class="fas fa-comment"></i>
                            :Blog
                        </button>
                    </a>
                </div>
            </section>    
        </div>
    );
};

export default Contact;
