"use client";

// BenefitsSection.jsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Upload } from "lucide-react";
import Link from 'next/link';
import openrole from "@/public/images/openrole.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';


// Define TypeScript interfaces outside the component
interface Job {
  id: number;
  jobTitle?: string;
  jobId?: string;
  location?: string;
  jobType?: string;
  experienceLevel?: string;
  salaryRange?: string;
  postedDate?: string;
  applicationDeadline?: string;
  jobDescription?: string;
  requirements?: string;
  benefits?: string;
  additionalDocFiles?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

interface FormattedJob {
  id: number;
  jobTitle: string;
  link: string;
}

const BenefitsSection = () => {
  // For TypeScript in Next.js App
  //  Router
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
    resume: File | null;
  }>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [fileName, setFileName] = useState('');

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev: typeof formData) => ({ ...prev, resume: e.target.files![0] }));
      setFileName(e.target.files[0].name);
    }
  };

  interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
    resume: File | null;
  }

  interface SubmitStatus {
    success: boolean;
    message: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object to handle file upload
      const submissionData = new FormData();
      submissionData.append('firstName', formData.firstName);
      submissionData.append('lastName', formData.lastName);
      submissionData.append('phone', formData.phone);
      submissionData.append('email', formData.email);
      submissionData.append('message', formData.message);
      if (formData.resume) {
        submissionData.append('resume', formData.resume);
      }

      // Send to API endpoint
      const response = await fetch('https://api.propertydronerealty.com/applications/submit', {
        method: 'POST',
        body: submissionData,
        // Don't set Content-Type header when sending FormData
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      const result: { message: string } = await response.json();
      setSubmitStatus({
        success: true,
        message: 'Your application has been submitted successfully!'
      });

      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        resume: null
      });
      setFileName('');

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your application. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [jobs, setJobs] = useState<FormattedJob[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.propertydronerealty.com/careers');

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();

        // Transform API data to match our component's format
        const formattedJobs: FormattedJob[] = data.map((job: Job) => ({
          id: job.id,
          jobTitle: job.jobTitle || 'Job Opening',
          link: `/careers/careerdetail?id=${job.id}`
        }));

        setJobs(formattedJobs);
        setError(null);
      } catch (err) {
        console.error('Error fetching job opportunities:', err);
        setError('Failed to load job opportunities. Please try again later.');

        // Fallback data in case the API fails
        setJobs([
          {
            id: 1,
            jobTitle: 'Senior Full Stack Developer',
            link: '/careers/careerdetail?id=1'
          },
          {
            id: 2,
            jobTitle: 'Marketing Specialist',
            link: '/careers/careerdetail?id=2'
          },
          {
            id: 3,
            jobTitle: 'Product Manager',
            link: '/careers/careerdetail?id=3'
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-[#f5f3f3] font-raleway">
      {/* Hero Section */}
      <section className="relative h-[440px] rounded-2xl m-4 overflow-hidden">
        {/* Banner Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/aboutbanner.png")',
            }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-1 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto text-white">
            <p className="text-[#ffee50] text-sm font-bold uppercase tracking-[0.2em] mb-3 font-raleway">
              CAREERS
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-raleway">
              Join Our Mission to Elevate <br /> Digital & Technical Innovation
            </h1>

            {/* <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto font-raleway">
              We're building a future where technology, vision, and real estate come together. Explore roles that match your passion and be part of a team shaping the industry.
            </p> */}

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onMouseMove={handleMouseMove}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ffee50] px-6 py-3 text-sm font-semibold text-[#3B3808] transition-all cursor-pointer font-raleway"
              >
                {/* Hover Background Effect */}
                <span
                  className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                  style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    width: '100px',
                    height: '100px',
                  }}
                />
                <Link href="#open-roles" className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                  <span>View Open Roles</span>
                  <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white rounded-2xl m-4 p-8 md:p-12 shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B3808] mb-2 font-raleway">BENEFITS</h2>
            <div className="w-16 h-0.5 bg-[#3B3808] mb-6"></div>
            <h3 className="text-4xl font-bold text-gray-900 leading-tight max-w-xl font-raleway">
              Your job impacts nearly every facet of your life.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Personal Growth',
                desc: 'Support includes a generous professional development budget',
              },
              {
                title: 'Full Benefits',
                desc: 'Top-notch medical, dental, vision, life, disability, and 401k benefits',
              },
              {
                title: 'Our Culture',
                desc: 'There are many great reasons to be "OOO" and we support them',
              },
              {
                title: 'Equity for All',
                desc: 'Everyone should feel ownership over their work—literally',
              },
              {
                title: 'Collaborative Team',
                desc: 'Work with a diverse, talented, and supportive team where every voice is valued',
              },
              {
                title: 'Performance Rewards',
                desc: 'We offer competitive compensation and recognition for exceptional contributions',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#f5f3f3] hover:bg-[#3B3808] group border border-gray-200/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#ffee50] mb-3 font-raleway transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed font-raleway text-sm transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="bg-[#f5f3f3] py-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side with text and job listings */}
            <div className="w-full md:w-1/2 pr-0 md:pr-8">
              <div className="mb-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B3808] mb-2 font-raleway">OPEN ROLES</h2>
                <div className="w-16 h-0.5 bg-[#3B3808] mb-6"></div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-raleway">
                  Find your next opportunity<br />and grow with us.
                </h3>
              </div>

              <div className="rounded-xl overflow-hidden">
                {isLoading ? (
                  <div className="p-6 bg-white rounded-xl text-center shadow-sm">
                    <div className="animate-pulse flex justify-center">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <p className="mt-2 text-gray-500 font-raleway">Loading opportunities...</p>
                  </div>
                ) : error ? (
                  <div className="p-6 bg-white rounded-xl text-center text-red-500 font-raleway shadow-sm">{error}</div>
                ) : jobs.length === 0 ? (
                  <div className="p-6 bg-white rounded-xl text-center text-gray-500 font-raleway shadow-sm">
                    No open positions at the moment. Check back soon!
                  </div>
                ) : (
                  jobs.map((job) => (
                    <Link
                      key={job.id}
                      href={`/career/${job.jobTitle.toLowerCase().replace(/\s+/g, '-')}?jobId=${job.id}`}
                      className="group flex items-center justify-between p-5 bg-white hover:bg-[#3B3808] hover:text-white transition-all duration-300 rounded-xl mb-4 shadow-sm border border-gray-200/30"
                    >
                      <span className="text-gray-900 group-hover:text-white font-semibold font-raleway text-lg transition-colors">
                        {job.jobTitle}
                      </span>
                      <div className="bg-[#3B3808] text-white group-hover:bg-[#ffee50] group-hover:text-[#3B3808] p-3 rounded-full transition-colors duration-300">
                        <ArrowRight size={18} />
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>

            {/* Right side with image */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 relative h-[450px] min-h-[300px] rounded-2xl overflow-hidden shadow-lg border border-white">
              <Image
                src={openrole}
                alt="Professional woman with tablet"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Apply General Form Section */}
      <section className="bg-white rounded-2xl m-4 p-8 md:p-12 shadow-sm">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column */}
              <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B3808] mb-2 font-raleway">APPLY NOW</h2>
                <div className="w-16 h-0.5 bg-[#3B3808] mb-6"></div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6 font-raleway">
                  Join our team
                </h3>
                <p className="text-gray-600 mb-4 font-raleway text-sm leading-relaxed">
                  Don't see a position that meets your unique skillset or background?
                </p>
                <p className="text-gray-600 font-raleway text-sm leading-relaxed">
                  Send your resume and cover letter here.
                </p>
              </div>

              {/* Right column - Form */}
              <div className="w-full md:w-2/3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* File Upload Button */}
                  <div className="mb-6">
                    <label
                      htmlFor="resume"
                      className="flex flex-col items-center justify-center py-6 px-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-[#f5f3f3] hover:bg-gray-50 hover:border-[#3B3808] transition-all group"
                    >
                      <Upload className="mb-2 text-gray-400 group-hover:text-[#3B3808] transition-colors" size={24} />
                      <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 font-raleway transition-colors">
                        {fileName || 'Upload Your Resume'}
                      </span>
                      <span className="text-xs text-gray-400 mt-1 font-raleway">PDF, DOC, DOCX up to 5MB</span>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Name Fields - Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className="w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className="w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone and Email - Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message / Cover Letter Introduction"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#3B3808] hover:bg-[#ffee50] hover:text-[#3B3808] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 font-raleway disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Application'}
                    </button>
                  </div>

                  {/* Status Message */}
                  {submitStatus.message && (
                    <div className={`mt-4 p-4 rounded-xl font-raleway text-sm ${submitStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsSection;