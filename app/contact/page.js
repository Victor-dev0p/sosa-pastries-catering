"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import VisualMarquee from "@/components/VisualMarquee";

const InputField = ({ id, type, placeholder, value, onChange, error, className = '' }) => (
  <div className="flex flex-col">
    <input
      id={id}
      type={type}
      name={id}
      placeholder={placeholder + " *"}
      value={value}
      onChange={onChange}
      className={`border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FA812F] 
      ${error ? 'border-[#E01E00]' : 'border-gray-300'} ${className}`}
    />
    {error && <p className="text-[#E01E00] text-xs mt-1">{error}</p>}
  </div>
);

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    useEffect(() => {
      if (submissionStatus) {
        const timer = setTimeout(() => setSubmissionStatus(null), 5000);
        return () => clearTimeout(timer);
      }
    }, [submissionStatus]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email Address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format.';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus(null);
        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmissionStatus('success');
                setFormData({ fullName: '', email: '', subject: '', message: '' });
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error("Submission failed:", error);
            setSubmissionStatus('error');
        } finally {
            setLoading(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <PageWrapper>
        <main className="min-h-screen bg-white text-[#3A2E2E] mb-30">
            {/* PAGE HEADER */}
            <section className="text-center py-20 bg-gradient-to-b from-[#FFF8E7] via-[#F9B233]/30 to-white">
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[#3A2E2E]">
                    Contact Us
                </h1>
                <p className="max-w-2xl mx-auto text-[#3A2E2E]">
                    Have a question, event idea, or special request? We'd love to hear from you.
                </p>
            </section>

            {/* CONTACT DETAILS + FORM */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
                {/* CONTACT INFO */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-serif font-semibold text-[#3A2E2E]">Get in Touch</h2>
                    <p className="text-[#3A2E2E]">
                        Whether it's an intimate gathering or a large event, Sosa is ready to bring your
                        vision to life. Reach out through any of the channels below or fill out the form
                        to get started.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-lg text-[#3A2E2E]">📍 Address</h3>
                            <p className="text-[#3A2E2E]">123 Celebration Street, Lagos, Nigeria</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-[#3A2E2E]">📞 Phone</h3>
                            <p className="text-[#3A2E2E]">+234 810 646 6601</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-[#3A2E2E]">📧 Email</h3>
                            <p className="text-[#3A2E2E]">buzugbeeseosa@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-[#3A2E2E]">🕒 Business Hours</h3>
                            <p className="text-[#3A2E2E]">Mon – Sat: 9:00 AM – 7:00 PM</p>
                            <p className="text-[#3A2E2E]">Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                {/* CONTACT FORM */}
                <motion.form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-8 space-y-6 border-2 border-[#FFF8E7]">
                    <h2 className="text-2xl font-serif font-semibold text-center mb-4 text-[#3A2E2E]">
                        Send Us a Message
                    </h2>

                    {submissionStatus === 'success' && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg" role="alert">
                            <strong className="font-bold">Success!</strong>
                            <span className="block sm:inline ml-2">Your message has been sent to the admin. We will be in touch soon.</span>
                        </div>
                    )}
                    {submissionStatus === 'error' && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg" role="alert">
                            <strong className="font-bold">Error!</strong>
                            <span className="block sm:inline ml-2">There was an error sending your message. Please try again or contact us directly.</span>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                        <InputField 
                            id="fullName" type="text" placeholder="Full Name" 
                            value={formData.fullName} onChange={handleInputChange} error={errors.fullName}
                        />
                        <InputField 
                            id="email" type="email" placeholder="Email Address" 
                            value={formData.email} onChange={handleInputChange} error={errors.email}
                        />
                    </div>

                    <InputField 
                        id="subject" type="text" placeholder="Subject" className="w-full"
                        value={formData.subject} onChange={handleInputChange} error={errors.subject}
                    />

                    <div className="flex flex-col">
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Your Message... *"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FA812F] 
                                ${errors.message ? 'border-[#E01E00]' : 'border-gray-300'}`}
                        ></textarea>
                        {errors.message && <p className="text-[#E01E00] text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#FA812F] text-white font-semibold py-3 rounded-lg hover:bg-[#E01E00] transition disabled:opacity-50 flex items-center justify-center"
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </motion.form>
            </section>

            <VisualMarquee />
        </main>
        </PageWrapper>
    );
}