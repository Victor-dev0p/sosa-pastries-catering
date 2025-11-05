"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIG ---
const headerImages = [
  '/qim.webp',
  '/qim1.jpg',
  '/qim2.png',
];

// --- REUSABLE COMPONENTS ---

const InputField = ({ label, id, placeholder, type = 'text', required = false, children, className = '', value, onChange, error, name }) => (
  <div className={`flex flex-col ${className}`}>
    <label htmlFor={id} className="text-gray-800 text-sm font-medium mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children || (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value || ''}
        onChange={onChange}
        name={name || id}
        className={`p-3 bg-white/70 rounded-lg border focus:bg-white outline-none transition duration-200 text-gray-700 
          ${error ? 'border-red-500' : 'border-transparent focus:border-blue-400'}`}
      />
    )}
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const Checkbox = ({ id, label, checked, onChange }) => (
    <label htmlFor={id} className="flex items-center space-x-2 cursor-pointer">
        <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
            className="h-5 w-5 text-gray-800 rounded border-gray-300 focus:ring-gray-800"
        />
        <span className="text-gray-800 font-medium">{label}</span>
    </label>
);

// --- STEP COMPONENTS (EXTERNALIZED FOR STABILITY) ---

const Step1 = ({ formData, handleInputChange, errors }) => (
    <motion.div
      key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">Your Information</h2>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[45%]"><InputField label="First Name" id="firstName" placeholder="First" required value={formData.firstName} onChange={handleInputChange} error={errors.firstName} /></div>
        <div className="flex-1 min-w-[45%] mt-6 md:mt-0"><InputField label="Last Name" id="lastName" placeholder="Last" required value={formData.lastName} onChange={handleInputChange} error={errors.lastName} /></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <InputField label="Email" id="email" type="email" placeholder="example@domain.com" required value={formData.email} onChange={handleInputChange} error={errors.email} />
        <InputField label="Phone" id="phone" placeholder="080 123 4567" required value={formData.phone} onChange={handleInputChange} error={errors.phone} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <InputField label="What is the best time to reach you?" id="bestTime" placeholder="Morning / Evening" value={formData.bestTime} onChange={handleInputChange} />
        <InputField label="Preferred Contact Method" id="contactMethod" placeholder="Email" value={formData.contactMethod} onChange={handleInputChange} />
      </div>
    </motion.div>
);

const Step2 = ({ formData, handleInputChange, errors }) => (
    <motion.div
      key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">Tell us about your service needs</h2>
      <div>
          <label className="text-gray-800 text-sm font-medium mb-2 block">
              Requested Service Type {errors.serviceTypes && <span className="text-red-500">*</span>}
          </label>
          <div className="flex flex-wrap gap-6 md:gap-10">
              {Object.keys(formData.serviceTypes).map(service => (
                  <Checkbox key={service} id={service} label={service} checked={formData.serviceTypes[service]} onChange={handleInputChange} />
              ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">Please select all that apply</p>
          {errors.serviceTypes && <p className="text-red-500 text-xs mt-1">{errors.serviceTypes}</p>}
      </div>
    </motion.div>
);

const Step3 = ({ formData, handleInputChange, errors }) => (
    <motion.div
      key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">Tell us about your event</h2>
      
      <div>
        <label className="text-gray-800 text-sm font-medium mb-2 block">Type of Event</label>
        <div className="flex flex-wrap gap-6">
            {['Wedding', 'Corporate Event', 'Private Celebration'].map(type => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="eventType" value={type} checked={formData.eventType === type} onChange={handleInputChange} className="h-4 w-4 text-gray-800 border-gray-300 focus:ring-gray-800" />
                    <span className="text-gray-800">{type}</span>
                </label>
            ))}
        </div>
      </div>

      <div>
        <label className="text-gray-800 text-sm font-medium mb-2 block">Do you already have a Venue?</label>
        <div className="flex flex-wrap gap-6">
            {['Yes', 'No'].map(status => (
                <label key={status} className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="hasVenue" value={status} checked={formData.hasVenue === status} onChange={handleInputChange} className="h-4 w-4 text-gray-800 border-gray-300 focus:ring-gray-800" />
                    <span className="text-gray-800">{status}</span>
                </label>
            ))}
        </div>
      </div>

      {formData.hasVenue === 'Yes' && (
        <InputField label="Venue Name" id="venueName" placeholder="" required value={formData.venueName} onChange={handleInputChange} error={errors.venueName} />
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <InputField label="Date of Event" id="eventDate" type="date" placeholder="" required value={formData.eventDate} onChange={handleInputChange} error={errors.eventDate} />
        <InputField label="Estimate Guest Count" id="guestCount" placeholder="Please only use numbers" type="number" required value={formData.guestCount} onChange={handleInputChange} error={errors.guestCount} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="anythingElse" className="text-gray-800 text-sm font-medium mb-1">Anything Else</label>
        <textarea
            id="anythingElse"
            placeholder="Please let us know anything else you feel is important for your event."
            rows="4"
            value={formData.anythingElse}
            onChange={handleInputChange}
            className="p-3 bg-white/70 rounded-lg border border-transparent focus:border-blue-400 focus:bg-white outline-none transition duration-200 text-gray-700 resize-none"
        />
      </div>
    </motion.div>
);

// --- MAIN COMPONENT ---
export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', bestTime: '', contactMethod: '',
    serviceTypes: { Catering: true, Rentals: false, 'Event Planning': false },
    eventType: 'Wedding',
    hasVenue: 'No',
    venueName: '',
    eventDate: '',
    guestCount: '',
    anythingElse: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % headerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => setSubmissionStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  const handleInputChange = (e) => {
    const { id, value, type, checked, name } = e.target;
    
    if (errors[id] || errors[name] || errors.serviceTypes) {
      setErrors(prev => ({ ...prev, [id]: null, [name]: null, serviceTypes: null }));
    }

    if (type === 'checkbox') {
        setFormData(prev => ({
            ...prev,
            serviceTypes: { ...prev.serviceTypes, [id]: checked }
        }));
    } else if (type === 'radio') {
        setFormData(prev => ({ ...prev, [name]: value }));
    } else {
        setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  // --- VALIDATION FUNCTIONS (NO CHANGES HERE) ---
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    const selectedCount = Object.values(formData.serviceTypes).filter(v => v).length;
    if (selectedCount === 0) {
        newErrors.serviceTypes = 'Please select at least one service type.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.eventType.trim()) newErrors.eventType = 'Event Type is required.';
    
    if (formData.hasVenue === 'Yes' && !formData.venueName.trim()) {
        newErrors.venueName = 'Venue Name is required if you have one.';
    }

    if (!formData.eventDate.trim()) newErrors.eventDate = 'Event Date is required.';
    if (!formData.guestCount.trim()) {
        newErrors.guestCount = 'Guest count is required.';
    } else if (isNaN(Number(formData.guestCount))) {
        newErrors.guestCount = 'Must be a number.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- NAVIGATION (NO CHANGES HERE) ---
  const handleNext = () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = validateStep1();
    } else if (currentStep === 2) {
      isValid = validateStep2();
    } else {
      isValid = true;
    }
    
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // --- SUBMISSION (NO CHANGES HERE) ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep3()) {
        return;
    }

    setLoading(true);
    setSubmissionStatus(null);
    
    const submissionData = {
      name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      bestTime: formData.bestTime,
      contactMethod: formData.contactMethod,
      service: Object.keys(formData.serviceTypes).filter(key => formData.serviceTypes[key]).join(', '),
      projectDetails: `
        Event Type: ${formData.eventType} | 
        Venue: ${formData.hasVenue === 'Yes' ? formData.venueName : 'TBD'} | 
        Date: ${formData.eventDate} | 
        Guests: ${formData.guestCount}
      `,
      message: formData.anythingElse,
      budget: 0,
      currency: 'NGN', 
    };

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', bestTime: '', contactMethod: '',
          serviceTypes: { Catering: true, Rentals: false, 'Event Planning': false },
          eventType: 'Wedding', hasVenue: 'No', venueName: '', eventDate: '', guestCount: '', anythingElse: '',
        });
        setCurrentStep(1);
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    } finally {
      setLoading(false);
    }
  };

  // --- RENDER LOGIC (UPDATED TO USE EXTERNAL COMPONENTS) ---
  const renderStep = () => {
    const stepProps = { formData, handleInputChange, errors };
    switch (currentStep) {
      case 1: return <Step1 {...stepProps} />;
      case 2: return <Step2 {...stepProps} />;
      case 3: return <Step3 {...stepProps} />;
      default: return <Step1 {...stepProps} />;
    }
  };


  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      
      {/* Animated Header Background with Quote */}
      <div className="w-full h-80 relative overflow-hidden flex items-center justify-center bg-gray-500/50">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${headerImages[currentImageIndex]})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-blue-300/80 backdrop-blur-sm p-4 sm:p-8 max-w-sm sm:max-w-lg w-full text-center rounded-lg shadow-2xl mx-4">
            <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-gray-700 uppercase mb-1 sm:mb-2 border-b border-gray-500 inline-block pb-1">
              REQUEST A QUOTE
            </h3>
            <p className="text-lg sm:text-2xl font-serif italic text-gray-800">
              Focus on Forever, We'll Handle the Details.
            </p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-3xl mt-12 z-10 p-4"> 
        <form onSubmit={handleSubmit} className="bg-blue-100 p-8 md:p-10 rounded-xl shadow-2xl">
          
          {/* Progress Bar & Step Indicator */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2 font-semibold">Step {currentStep} of {totalSteps}</p>
            <div className="h-2 bg-white rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gray-800 rounded-full"
                initial={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, type: 'tween' }}
              />
            </div>
          </div>
          
          {/* Current Step Content */}
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          {/* Submission Status Message */}
          {submissionStatus === 'success' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline ml-2">Your quote request has been submitted successfully. A confirmation email is on its way. Check your inbox/spam</span>
            </motion.div>
          )}

          {submissionStatus === 'error' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline ml-2">There was an issue submitting your quote. Please try again.</span>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-blue-200">
            {currentStep > 1 && (
              <button type="button" onClick={handlePrev} className="px-6 py-3 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition duration-200">Previous</button>
            )}
            <div className={currentStep === 1 ? 'w-full flex justify-end' : ''}>
              {currentStep < totalSteps ? (
                <button
                  type="button" onClick={handleNext} disabled={loading}
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition duration-200 shadow-md disabled:opacity-50"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit" disabled={loading}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-200 shadow-md disabled:opacity-50 flex items-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Quote'
                  )}
                </button>
              )}
            </div>
          </div>

        </form>
      </div>
      <div className='pb-20'></div>
    </div>
  );
}