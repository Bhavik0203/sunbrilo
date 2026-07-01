'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SplitViewGlobalHub from './Split-Screen';

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${className || ''}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M7 17L17 7" />
        <path d="M8 7h9v9" />
    </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${className || ''}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);
export default function SupportForm() {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [activeTab, setActiveTab] = useState('India');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company_name: '',
        country_code: '+1',
        number: '',
        i_am_interested_in: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        const fullNumber = `${formData.country_code} ${formData.number}`;
        const payload = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            number: fullNumber,
            company_name: formData.company_name,
            i_am_interested_in: formData.i_am_interested_in
        };

        try {
            // Send to internal API route for email notification
            try {
                const emailRes = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                if (!emailRes.ok) {
                    console.error('Email API Error:', await emailRes.text());
                }
            } catch (err) {
                console.error('Failed to send email notification:', err);
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/forms/forms/6a423c6d6ff07752ede5e401/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: payload
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Form submission failed');
            }

            window.location.href = '/thank-you';
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitError(error.message || 'Something went wrong. Please try again.');
            setIsSubmitting(false);
        }
    };

    const locations = {
        India: {
            title: "Sunbrilo Technologies Pvt. Ltd.",
            address: "I-Space IT Park, Ground Floor, Pranjali Patil Nagar, Next to Seigal Maruti Showroom Bavdhan, Pune - 411021",
            mapSrc: "https://maps.google.com/maps?q=I-Space%20IT%20Park%20Bavdhan%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        USA: {
            title: "Sunbrilo Technologies Inc.",
            address: "16192 Coastal Highway, Lewes, Delaware, Zipcode 19956, USA",
            mapSrc: "https://maps.google.com/maps?q=16192%20Coastal%20Highway%2C%20Lewes%2C%20Delaware&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        UK: {
            title: "Sunbrilo Technologies Ltd.",
            address: "128, City Road, London, EC1V 2NX, UNITED KINGDOM",
            mapSrc: "https://maps.google.com/maps?q=128%2C%20City%20Road%2C%20London%2C%20EC1V%202NX&t=&z=13&ie=UTF8&iwloc=&output=embed"
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    // Animation variants
    //   const containerVariants = {
    //     hidden: { opacity: 0 },
    //     visible: {
    //       opacity: 1,
    //       transition: { staggerChildren: 0.15 }
    //     }
    //   };

    //   const itemVariants = {
    //     hidden: { opacity: 0, y: 30 },
    //     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    //   };
    const steps = [
        {
            letter: 'A',
            text: 'Discovery Call (Within 24 Hours): A dedicated account manager will reach out to understand your technical requirements and business goals.',
        },
        {
            letter: 'B',
            text: 'Architectural Consultation: Our lead engineers will review your needs and provide a high-level roadmap or proof-of-concept.',
        },
        {
            letter: 'C',
            text: 'Tailored Proposal: We deliver a transparent, milestone-based proposal designed for your specific scale and budget.',
        },
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        },
    };
    return (
        <>
            {/* Banner Section */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/contactus.png"
                        alt="Contact us banner with team"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto text-center px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" as const }}
                        className="space-y-6"
                    >
                        {/* Main Title */}
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                            Contact us
                        </h1>


                        {/* Description Paragraph */}
                        <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                            Transform your business with our cutting-edge technology solutions. Our expert team specializes in custom software development, cloud infrastructure, and digital transformation strategies that drive growth and innovation. Let us help you build the future of your enterprise.
                        </p>

                        {/* CTA Buttons */}

                    </motion.div>
                </div>

                {/* Decorative Cloud/Network Graphics */}
                <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 opacity-20">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="1" opacity="0.3" />
                        <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" opacity="0.5" />
                        <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1" opacity="0.7" />
                        <path d="M100 20 L100 180 M20 100 L180 100" stroke="white" strokeWidth="1" opacity="0.3" />
                    </svg>
                </div>
            </section>

            <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center p-6 md:p-12 font-sans text-gray-900">
                <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Content & Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" as const }}
                        className="flex flex-col space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            How Can We Support <br /> Your Growth?
                        </h1>
                        <p className="text-gray-800 text-lg max-w-md font-medium">
                            Please select the area that best describes your needs so we can connect you with the right expert.
                        </p>

                        {/* Image Container with relative positioning for the overlapping graphic */}
                        <div className="relative mt-6 max-w-[400px]">
                            {/* Main Meeting Image */}
                            <div className="relative h-[450px] w-full shadow-lg">
                                <Image
                                    src="/images/contact/contact1.png"
                                    alt="Corporate Meeting"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Overlapping Circular Growth Graphic */}
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full overflow-hidden border-8 border-[#f8f8f8] shadow-xl bg-white">
                                <Image
                                    src="/images/contact/contact2.png"
                                    alt="Growth Chart"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
                    >
                        <div className="bg-white p-8 md:p-10 rounded shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full">
                            <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                                {submitError && (
                                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                                        {submitError}
                                    </div>
                                )}

                                {/* Select Field */}


                                {/* Full Name */}
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Full Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-[#f2f2f2] p-3.5 focus:outline-none focus:ring-2 focus:ring-[#56aeff] transition" />
                                </div>

                                {/* Corporate Email Address */}
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Corporate Email Address</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-[#f2f2f2] p-3.5 focus:outline-none focus:ring-2 focus:ring-[#56aeff] transition" />
                                </div>

                                {/* Company Name */}
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Company Name</label>
                                    <input type="text" name="company_name" value={formData.company_name} onChange={handleInputChange} className="w-full bg-[#f2f2f2] p-3.5 focus:outline-none focus:ring-2 focus:ring-[#56aeff] transition" />
                                </div>

                                {/* Phone Number */}
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Phone Number</label>
                                    <div className="flex">
                                        <select name="country_code" value={formData.country_code} onChange={handleInputChange} className="bg-[#e5e5e5] text-gray-700 p-3.5 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#56aeff] transition">
                                            <option value="+1">+1 (US/CA)</option>
                                            <option value="+44">+44 (UK)</option>
                                            <option value="+91">+91 (IN)</option>
                                            <option value="+61">+61 (AU)</option>
                                            <option value="+971">+971 (UAE)</option>
                                        </select>
                                        <input
                                            type="tel"
                                            name="number"
                                            value={formData.number}
                                            onChange={handleInputChange}
                                            required
                                            pattern="\d{10}"
                                            maxLength={10}
                                            title="Mobile number must be exactly 10 digits"
                                            onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '') }}
                                            placeholder="1234567890"
                                            className="w-full bg-[#f2f2f2] p-3.5 focus:outline-none focus:ring-2 focus:ring-[#56aeff] transition"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">I am interested in....</label>
                                    <div className="relative">
                                        <select name="i_am_interested_in" value={formData.i_am_interested_in} onChange={handleInputChange} required className="w-full bg-[#f2f2f2] text-gray-600 p-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#56aeff] transition">
                                            <option value="" disabled selected>Select an option</option>
                                            <optgroup label="Services">
                                                <option>Development & Testing</option>
                                                <option>Offshoring Services</option>
                                                <option>Managed IT Services</option>
                                                <option>Cloud Solutions</option>
                                                <option>Data Analytics</option>
                                                <option>Implementation Services</option>
                                                <option>Cyber Security</option>
                                                <option>Monitoring and Support</option>
                                            </optgroup>
                                            <optgroup label="Solutions">
                                                <option>Cognitive Dining & Workforce</option>
                                                <option>Equipment Leasing Platform</option>
                                                <option>HRMS Empowering Workforce</option>
                                                <option>Asset Performance Management</option>
                                                <option>Logistics & Supply Chain</option>
                                                <option>Order Management</option>
                                                <option>Remote Geofencing Attendance</option>
                                                <option>Tablet Biometric Attendance</option>
                                            </optgroup>
                                            <option>Other</option>
                                        </select>
                                        {/* Custom dropdown arrow */}
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Brief/Message */}
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Project Brief/Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={3} className="w-full bg-[#f2f2f2] p-3.5 focus:outline-none focus:ring-2 focus:ring-[#56aeff] transition resize-none"></textarea>
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-center space-x-3 pt-2">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        className="w-5 h-5 bg-[#f2f2f2] border-none text-[#56aeff] focus:ring-0 rounded-sm cursor-pointer"
                                    />
                                    <label htmlFor="terms" className="text-sm font-medium text-gray-800">
                                        Accept <Link href="/terms-and-conditions" className="text-[#56aeff] hover:underline">Terms and Conditions</Link> and <Link href="/privacy-policy" className="text-[#56aeff] hover:underline">Privacy Policy</Link>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-4 w-full bg-[#56aeff] hover:bg-[#4596e6] disabled:bg-[#a5d2ff] text-white font-semibold text-lg py-4 transition duration-200"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* <div className="min-h-screen bg-[#f4f5f7] py-6 px-6 md:px-12 font-sans text-gray-900 overflow-hidden">
                <div className="max-w-[1200px] mx-auto">

                    
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 space-y-4"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Visit Our Global Engineering Hub
                        </h1>
                        <p className="text-gray-700 font-medium max-w-3xl mx-auto text-lg">
                            Located in the heart of India&apos;s technology corridor, our headquarters houses our elite engineering squads and 24/7 Network Operations Center (NOC).
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden max-w-5xl mx-auto"
                    >
                        <div className="flex bg-[#e5e5e5] text-gray-600 font-semibold text-sm">
                            <button
                                onClick={() => setActiveTab('India')}
                                className={`flex-1 py-4 px-4 flex items-center justify-center space-x-2 transition ${activeTab === 'India' ? 'bg-white text-blue-600 border-t-4 border-blue-600' : 'hover:bg-gray-300'}`}
                            >
                                <span className="text-lg">🇮🇳</span>
                                <span className="uppercase tracking-wider">India</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('USA')}
                                className={`flex-1 py-4 px-4 flex items-center justify-center space-x-2 transition ${activeTab === 'USA' ? 'bg-white text-blue-600 border-t-4 border-blue-600' : 'hover:bg-gray-300 border-l border-r border-gray-300'}`}
                            >
                                <span className="text-lg">🇺🇸</span>
                                <span className="uppercase tracking-wider">USA</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('UK')}
                                className={`flex-1 py-4 px-4 flex items-center justify-center space-x-2 transition ${activeTab === 'UK' ? 'bg-white text-blue-600 border-t-4 border-blue-600' : 'hover:bg-gray-300'}`}
                            >
                                <span className="text-lg">🇬🇧</span>
                                <span className="uppercase tracking-wider">UK</span>
                            </button>
                        </div>

                        <div className="p-6 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-gray-800 text-lg">{locations[activeTab as keyof typeof locations].title}</h3>
                                    <div className="flex items-start space-x-3 text-gray-600">
                                        <div className="mt-0.5 flex-shrink-0 text-[#4a9cf2]">
                                            <LocationIcon />
                                        </div>
                                        <p className="text-sm leading-relaxed">{locations[activeTab as keyof typeof locations].address}</p>
                                    </div>
                                </div>
                                <div className="space-y-3 md:mt-11">
                                   {activeTab === 'India' && (
                                      <>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <div className="flex-shrink-0 text-[#4a9cf2]">
                                                <PhoneIcon />
                                            </div>
                                            <p className="text-sm text-[#4a9cf2] font-semibold hover:underline cursor-pointer">+91 9545898353 (Sales)</p>
                                        </div>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <div className="flex-shrink-0 text-[#4a9cf2]">
                                                <PhoneIcon />
                                            </div>
                                            <p className="text-sm text-[#4a9cf2] font-semibold hover:underline cursor-pointer">+91 8788563349 (HR)</p>
                                        </div>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <div className="flex-shrink-0 text-[#4a9cf2]">
                                                <PhoneIcon />
                                            </div>
                                            <p className="text-sm text-[#4a9cf2] font-semibold hover:underline cursor-pointer">+91 7030662233 (TA)</p>
                                        </div>
                                      </>
                                   )}
                                </div>
                            </div>
                            
                            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden relative shadow-sm border border-gray-100">
                                <iframe
                                    src={locations[activeTab as keyof typeof locations].mapSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        
                        <div className="bg-[#112344] text-white py-5 px-6 flex flex-col md:flex-row justify-around items-center text-sm font-semibold space-y-3 md:space-y-0">
                            <a href="mailto:info@sunbrilotechnologies.com" className="hover:text-gray-300 transition-colors">info@sunbrilotechnologies.com</a>
                            <a href="mailto:sales@sunbrilotechnologies.com" className="hover:text-gray-300 transition-colors">sales@sunbrilotechnologies.com</a>
                            <a href="mailto:careers@sunbrilotechnologies.com" className="hover:text-gray-300 transition-colors">hr@sunbrilotechnologies.com</a>
                        </div>
                    </motion.div>
                </div>
            </div> */}
            <SplitViewGlobalHub />
            <div className="min-h-screen bg-[#f4f5f7] pt-20 px-6 md:px-12 font-sans text-gray-900 flex flex-col items-center">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-4 max-w-3xl"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Visit Our Global Engineering Hub
                    </h1>
                    <p className="text-gray-800 font-medium text-base md:text-lg">
                        We value your time. Here is what you can expect after submitting your inquiry
                    </p>
                </motion.div>

                {/* Timeline Section */}
                <div className="relative w-full max-w-4xl mx-auto px-2 md:px-6">

                    {/* Background Vertical Dashed Line */}
                    <div className="absolute left-[38px] md:left-[63px] top-4 bottom-4 border-l-[2px] border-dashed border-[#8ecae6] z-0"></div>

                    {/* Timeline Items */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col space-y-12 relative z-10 py-6"
                    >
                        {steps.map((step, index) => (
                            <motion.div variants={itemVariants} key={index} className="flex items-center w-full">

                                {/* Circular Indicator */}
                                <div className="w-16 h-16 md:w-[76px] md:h-[76px] shrink-0 bg-white rounded-full flex items-center justify-center font-bold text-xl shadow-[6px_0px_16px_rgba(110,185,255,0.4)] border border-white/50 z-10">
                                    {step.letter}
                                </div>

                                {/* Text Card */}
                                <div className="ml-6 md:ml-10 bg-white px-6 py-5 md:px-8 md:py-6 w-full shadow-[0_4px_25px_rgb(0,0,0,0.03)] rounded z-10">
                                    <p className="text-gray-800 font-medium text-[15px] md:text-base leading-relaxed">
                                        {step.text}
                                    </p>
                                </div>

                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
            <section className="relative w-full py-20 md:py-28 px-6 flex items-center justify-center overflow-hidden bg-gray-100">

                {/* Background Image */}
                <img
                    src="/images/contact/ctc.png"
                    alt="Global"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 py-20 px-20"
                />

                {/* Overlay (recommended for better text visibility) */}
                {/* <div className="absolute inset-0 bg-white/70 md:bg-white/80"></div> */}

                {/* Content */}

            </section>
        </>
    );
}