import { useState } from 'react';
import './contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
    
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
          return;
        }
    
        try {
          const response = await fetch('/some/url', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const confirmResponse = window.confirm('Thank you for your message. Can I erase the form?');
            if (confirmResponse) {
              setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
              });
            }
          } else {
            const data = await response.json();
            throw new Error(data.error);
          }
        } catch (error) {
          console.error(error);
          alert('There was some problem with sending your message.');
        }
      };
    
      return<form className="conatct-form" onSubmit={handleSubmit}>
          
    
          <fieldset className="contact-form-group">
            <label className="contact-label" htmlFor="formName">Name:</label>
            <input
              id="formName"
              className="registrtationInputs form-input"
              name="name"
              type="text"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </fieldset>
    
          <fieldset className="contact-form-group">
            <label className="contact-label" htmlFor="formEmail">Email:</label>
            <input
              id="formEmail"
              className="registrtationInputs form-input"
              name="email"
              type="email"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </fieldset>
    
          <fieldset className="contact-form-group">
            <label className="contact-label" htmlFor="formSubject">Subject:</label>
            <input
              id="formSubject"
              className="registrtationInputs form-input"
              name="subject"
              type="text"
              required
              onChange={handleChange}
              value={formData.subject}
            />
          </fieldset>
    
          <fieldset className="contact-form-group">
            <label className="contact-label" htmlFor="formMessage">Message:</label>
            <textarea
              id="formMessage"
              className="contact-form-textarea"
              name="message"
              required
              onChange={handleChange}
              value={formData.message}
            />
          </fieldset>
    
          <div className="contact-form-group">
            <input id="formButton" className="registrtationInputs contact-btn" type="submit" value="Send message" />
          </div>
        </form>
}

export default Contact