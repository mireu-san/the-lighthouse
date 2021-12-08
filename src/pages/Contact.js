import React from 'react'
import { StyledIndex } from '../styles/index.styled'
import '../styles/Contact.css'
// import emailjs from 'emailjs-com';

function Contact() {
    return (
        <StyledIndex>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
        <section class="contact" id="contact">
            <h1>Contact</h1>
            <h2>궁금하신 점에 대해 답변 드리겠습니다.</h2>
            <div class="contact__container">
                <a href="tel:+8210-8215-8540">
                    <button 
                        class="button__contact" 
                        id="contact__btn__one"
                    >
                        📳:010-8215-8540
                    </button>
                </a>
                <a href="mailto:starmireu@gmail.com">
                    <button 
                    class="button__contact" 
                    id="contact__btn__two"
                    >
                        📧:starmireu@gmail.com
                    </button>
                </a>
                <a href="https://silverlibrary.tistory.com/">
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
        </StyledIndex>
    );
};

export default Contact;
