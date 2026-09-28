import { useState } from 'react';
import Icon from './Icon.jsx';
import Img from './Img.jsx';
import { contactImage, person, social } from '../data/site.js';

const NBSP = '\u00A0';
const FORM_NAME = 'contact';
const FIELDS = ['contact-name', 'contact-phone', 'contact-email', 'subject', 'contact-message'];

/**
 * Contact form handled by Netlify Forms (no backend needed). The form is in the
 * prerendered HTML with data-netlify="true", so Netlify detects it at deploy time;
 * submissions appear in Netlify -> Forms and can be emailed to you.
 */
function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const body = new URLSearchParams(new FormData(form)).toString();
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const message = {
    sent: 'Your response has been submitted',
    error: `Sorry, your message could not be sent. Please email me at ${person.email}`,
  }[status];

  return (
    <form
      className="rnt-contact-form rwt-dynamic-form row"
      name={FORM_NAME}
      id="contact-form"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p hidden>
        <label>Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <div className="col-lg-6">
        <div className="form-group">
          <label htmlFor="contact-name">Your Name</label>
          <input className="form-control form-control-lg" name={FIELDS[0]} id="contact-name" type="text" autoComplete="name" required />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label htmlFor="contact-phone">Phone Number</label>
          <input className="form-control" name={FIELDS[1]} id="contact-phone" type="text" inputMode="tel" autoComplete="tel" required />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label htmlFor="contact-email">Email</label>
          <input className="form-control form-control-sm" id="contact-email" name={FIELDS[2]} type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label htmlFor="subject">subject</label>
          <input className="form-control form-control-sm" id="subject" name={FIELDS[3]} type="text" required />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label htmlFor="contact-message">Your Message</label>
          <textarea name={FIELDS[4]} id="contact-message" cols="30" rows="10" required></textarea>
        </div>
      </div>
      <div className="col-lg-12">
        <button name="submit" type="submit" value="SEND MESSAGE" className="rn-btn" disabled={status === 'sending'}>
          <span>SEND MESSAGE</span>
          <Icon name="arrow-right" />
        </button>
      </div> <br />
      <span id="msg" role="status" aria-live="polite">{message}</span>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">Contact</span>
              <h2 className="title">Get in touch with me</h2>
            </div>
          </div>
        </div>

        <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
          <div className="col-lg-5">
            <div className="contact-about-area">
              <div className="thumbnail">
                <Img image={contactImage} alt="Contact Asif Mohamed Mohideen" />
              </div>
              <div className="title-area">
                <h4 className="title">{person.name}</h4>
                <span>{person.role}</span>
              </div>
              <div className="description">
                <p>I&apos;m willing to work as a freelancer.You can contact me via </p>
                <span className="mail">Email: <a href={`mailto:${person.email}`}>{`${person.email} ${NBSP}`}<i className="fas fa-envelope" aria-hidden="true"></i></a></span>
                <span className="mail">Phone Number: <a href={`tel:${person.phone}`}>{`${person.phoneDisplay} ${NBSP}`}<i className="fas fa-phone-alt" aria-hidden="true"></i></a></span>
                <span className="mail">Resume: <a href={person.resume}>{`Download ${NBSP}`}<i className="fas fa-download" aria-hidden="true"></i></a></span>
              </div>
              <div className="social-area">
                <div className="name">YOU CAN FIND ME IN</div>
                <div className="social-icone">
                  <a href={social.instagram} aria-label="Instagram profile"><Icon name="instagram" /></a>{' '}
                  <a href={social.linkedin} aria-label="LinkedIn profile"><Icon name="linkedin" /></a>{' '}
                  <a href={social.github} aria-label="GitHub profile"><Icon name="github" /></a>{' '}
                  <a href={social.whatsapp} className="whatsapp-icon" aria-label="Chat on WhatsApp"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos-delay="600" className="col-lg-7 contact-input">
            <div className="contact-form-wrapper">
              <div className="introduce">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
