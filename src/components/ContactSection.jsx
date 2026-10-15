import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Instagram, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const bookingEmail = 'sakshishruti1317@gmail.com';

export default function ContactSection() {
  useEffect(() => {
    document.title = 'Contact & Bookings | Sakshi Tiwari';
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = 'Contact Sakshi Tiwari for casting, Indian film and OTT projects, Kathak dance, editorial work, and brand collaborations.';
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    productionHouse: '',
    projectType: 'Feature Film / Web Series',
    timeline: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `${formData.projectType} inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nProduction / agency: ${formData.productionHouse || 'Not provided'}\nProject: ${formData.projectType}\nTimeline: ${formData.timeline || 'Not provided'}\n\nProject brief:\n${formData.message}`;
    window.location.href = `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact-page section-pad">
      <div className="content-width">
        <div className="page-heading contact-heading">
          <p className="eyebrow">CONTACT & BOOKINGS</p>
          <h1>Good work starts<br /><em>with a conversation.</em></h1>
          <p>For casting, campaigns, editorial, and movement-led projects.</p>
        </div>
        <div className="contact-layout">
          <aside className="contact-details">
            <p className="eyebrow">REPRESENTATION</p>
            <h2>Let’s make something with feeling.</h2>
            <p>Based in India and available to travel. For project briefs, self-tape requests, and brand partnerships, send a note with the details.</p>
            <a href={`mailto:${bookingEmail}`}><Mail /> {bookingEmail} <ArrowUpRight /></a>
            <a href="https://www.instagram.com/sakshieeyyy.xo/" target="_blank" rel="noreferrer"><Instagram /> @sakshieeyyy.xo <ArrowUpRight /></a>
            <Link to="/media-kit" className="text-link">View collaboration formats <ArrowUpRight /></Link>
          </aside>
          <div className="contact-form-wrap">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div><label htmlFor="contact-name">Your name</label><input id="contact-name" type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Name" /></div>
                <div><label htmlFor="production-house">Company or production</label><input id="production-house" type="text" value={formData.productionHouse} onChange={(e) => setFormData({...formData, productionHouse: e.target.value})} placeholder="Optional" /></div>
              </div>
              <div className="form-row">
                <div><label htmlFor="project-type">Project type</label><select id="project-type" value={formData.projectType} onChange={(e) => setFormData({...formData, projectType: e.target.value})}><option>Film or series</option><option>Brand campaign</option><option>Dance or music video</option><option>Editorial or fashion</option><option>Other collaboration</option></select></div>
                <div><label htmlFor="timeline">Timeline</label><input id="timeline" type="text" value={formData.timeline} onChange={(e) => setFormData({...formData, timeline: e.target.value})} placeholder="Optional" /></div>
              </div>
              <div><label htmlFor="project-brief">Tell us about the project</label><textarea id="project-brief" rows={5} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Role, deliverables, dates, location…" /></div>
              <button type="submit" className="button button-dark"><Send /> Open email draft</button>
              <p className="form-note">Your email app will open with the project details ready to send.</p>
              {submitted && <p className="form-note" role="status">Email draft opened. Send it from your email app to complete the inquiry.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
