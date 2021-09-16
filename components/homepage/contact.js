import classes from './contact.module.css';
import Link from 'next/link';

function Contact() {
  return (
    <section className={classes.contact} id='contact'>
      <h1>Contact</h1>
      <div className={classes.container}>
        <div>
          <h3>EMAIL</h3>
          <p>onur@koksuyer.com</p>
        </div>
        <div>
          <h3>SOCIAL</h3>
          <a
            href='https://www.linkedin.com/in/onurkoksuyer/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className={classes.social}>
              <i className='fi-snsuxl-linkedin'></i>
              <p>onurkoksuyer</p>
            </div>
          </a>
        </div>
        <div>
          <h3>PHONE</h3>
          <p>+90 530 247 8828</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
