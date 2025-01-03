import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_auhi2nu
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_auhi2nu',
        'template_l9wk7d4',
        {
          from_name: form.name,
          to_name: 'Carlos Velasco',
          from_email: form.email,
          to_email: 'carlosed.velasco@gmail.com',
          message: form.message,
        },
        'kceHir36pG6uUeXVp'
      );
      setIsLoading(false);

      alert('Your message has been sent');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setIsLoading(false);
      alert('Something went wrong');
      console.log(error);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container">
          <p className="head-text">Let&apos;s talk</p>
          <p className="text-lg text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi! I want to give you a job..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={isLoading}>
              {isLoading ? 'Sending' : 'Send Message'}
              <img
                src="/assets/arrow-up.png"
                alt="arrow up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
