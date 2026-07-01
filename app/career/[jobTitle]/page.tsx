'use client';

import { useState, FormEvent, ChangeEvent, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import heroBackground from '@/public/images/aboutbanner.png';
import { ArrowRight, Upload } from 'lucide-react';
import { useEffect } from 'react';
import Link from 'next/link';

export default function JobTitle() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobTitleContent />
    </Suspense>
  );
}

function JobTitleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams.get('jobId') || '';

  const [formData, setFormData] = useState({
    jobId: jobId,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentCompany: '',
    linkedInProfile: '',
    portfolioUrl: '',
    experienceYears: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    coverLetter: '',
    resume: null as File | null,
    additionalDocuments: null as FileList | null
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      // For resume, we only need one file
      if (name === 'resume') {
        setFormData({
          ...formData,
          [name]: files[0]
        });
      }
      // For additional documents, we can have multiple files
      else if (name === 'additionalDocuments') {
        setFormData({
          ...formData,
          [name]: files
        });
      }

      // Clear error when field is edited
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: ''
        });
      }
    }
  };

  const validateForm = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    // Required fields
    if (!formData.jobId) newErrors.jobId = 'Job ID is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.experienceYears) newErrors.experienceYears = 'Years of experience is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData object to handle file uploads
      const submitData = new FormData();

      submitData.append('job', formData.jobId);
      submitData.append('fullName', `${formData.firstName} ${formData.lastName}`);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('currentCompany', formData.currentCompany);
      submitData.append('linkedinUrl', formData.linkedInProfile);
      submitData.append('portfolioUrl', formData.portfolioUrl);
      submitData.append('totalExperience', String(formData.experienceYears));
      submitData.append('currentSalary', formData.currentSalary);
      submitData.append('expectedSalary', formData.expectedSalary);
      submitData.append('noticePeriod', formData.noticePeriod);
      submitData.append('coverLetter', formData.coverLetter);

      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }

      // Submit the form data
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/career/applications`, {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        // Send email via Next.js local API route
        try {
          await fetch('/api/career', {
            method: 'POST',
            body: submitData,
          });
        } catch (emailError) {
          console.error('Error sending email:', emailError);
          // Proceed anyway since application was saved
        }

        const result = await response.json();
        setSubmitMessage('Application submitted successfully!');

        window.location.href = '/thank-you';
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Submission failed: ${errorData.message || 'Please try again later'}`);
      }
    } catch (error) {
      setSubmitMessage(`Error submitting form: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  interface JobData {
    jobTitle: string;
    location: string;
    jobType: string;
    experienceLevel: string;
    salaryRange: string;
    jobDescription: string;
    postedDate: string;
    applicationDeadline: string;
    jobId: string;
    requirements?: string;
    benefits?: string;
  }

  const [jobData, setJobData] = useState<JobData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Get the current URL path
        const path = window.location.pathname;
        // Extract the slug from the URL (last part after the final slash)
        const slug = path.substring(path.lastIndexOf('/') + 1);

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/career/jobs`);
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }

        const data = await response.json();

        if (slug && slug !== 'careers') {
          // Find the job that matches the slug (case insensitive)
          const matchingJob = data.find((job: JobData) => {
            // Extract job title or job ID to match with slug
            const jobSlug: string = job.jobTitle.toLowerCase().replace(/\s+/g, '-');
            const jobIdSlug: string = job.jobId.toLowerCase();
            return jobSlug === slug.toLowerCase() || jobIdSlug === slug.toLowerCase();
          });

          if (matchingJob) {
            setJobData(matchingJob);
          } else {
            // If no matching job, default to the first one
            setJobData(data[0]);
          }
        } else {
          // If on the main careers page, show the first job
          setJobData(data[0]);
        }

        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Format date to be more readable


  // Format date to be more readable
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-[#f5f3f3] font-raleway min-h-screen pb-12">
      {/* Hero Section */}
      <section className="relative h-[440px] rounded-2xl m-4 overflow-hidden">
        {/* Banner Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Career Opportunity Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto text-white">
            <p className="text-[#ffee50] text-sm font-bold uppercase tracking-[0.2em] mb-3 font-raleway">
              CAREER OPPORTUNITY
            </p>

            {loading ? (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-raleway animate-pulse">
                Loading job details...
              </h1>
            ) : error ? (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-raleway text-red-300">
                Unable to load job data
              </h1>
            ) : jobData ? (
              <>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-raleway">
                  {jobData.jobTitle}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-gray-250">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-xs uppercase tracking-wider text-gray-300">Location</p>
                    <p className="font-semibold text-white mt-1">{jobData.location}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-xs uppercase tracking-wider text-gray-300">Position Type</p>
                    <p className="font-semibold text-white mt-1">{jobData.jobType} | {jobData.experienceLevel}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-xs uppercase tracking-wider text-gray-300">Salary Range</p>
                    <p className="font-semibold text-white mt-1">{jobData.salaryRange}</p>
                  </div>
                </div>

                {/* CTA Buttons */}
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
                    <Link href="#apply-form" className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50]">
                      <span>Apply Now</span>
                      <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808]">
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  </button>
                </div>
              </>
            ) : (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-raleway">
                No Job Listings Available
              </h1>
            )}
          </div>
        </div>
      </section>

      {/* Content split section */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        {jobData && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Job detail details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200/30">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B3808] mb-2 font-raleway font-bold">
                  JOB DESCRIPTION
                </h2>
                <div className="w-16 h-0.5 bg-[#3B3808] mb-6"></div>

                <div className="prose prose-slate max-w-none font-raleway text-gray-650 leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Overview</h3>
                    <p className="whitespace-pre-wrap">{jobData.jobDescription}</p>
                  </div>

                  {jobData.requirements && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Requirements</h3>
                      <p className="whitespace-pre-wrap">{jobData.requirements}</p>
                    </div>
                  )}

                  {jobData.benefits && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Benefits</h3>
                      <p className="whitespace-pre-wrap">{jobData.benefits}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Job meta cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/30 font-raleway">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B3808] mb-2 font-bold">
                  JOB INFORMATION
                </h2>
                <div className="w-16 h-0.5 bg-[#3B3808] mb-6"></div>

                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-800">Job ID</span>
                    <span>{jobData.jobId}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-800">Location</span>
                    <span>{jobData.location}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-800">Type</span>
                    <span>{jobData.jobType}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-800">Experience</span>
                    <span>{jobData.experienceLevel}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-800">Salary Range</span>
                    <span>{jobData.salaryRange}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-800">Posted</span>
                    <span>{formatDate(jobData.postedDate)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold text-gray-800">Deadline</span>
                    <span>{formatDate(jobData.applicationDeadline)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Application Form */}
        <div id="apply-form" className="bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200/30 mt-8">
          <div className="mb-10 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B3808] mb-2 font-raleway font-bold">
              APPLICATION FORM
            </h2>
            <div className="w-16 h-0.5 bg-[#3B3808] mx-auto mb-6"></div>
            <h3 className="text-3xl font-bold text-gray-900 font-raleway">Apply for this Role</h3>
            <p className="mt-2 text-gray-500 font-raleway">Please fill in the form below to submit your application.</p>
          </div>

          {submitMessage && (
            <div className={`mb-6 p-4 rounded-xl font-raleway text-sm border ${submitMessage.includes('successfully') ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Job ID */}
              <div>
                <label htmlFor="jobId" className="block text-sm font-semibold text-gray-705 font-raleway">
                  Job ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="jobId"
                  name="jobId"
                  value={formData.jobId}
                  onChange={handleChange}
                  className={`mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400 ${errors.jobId ? 'border-red-300' : ''}`}
                  readOnly={!!jobId}
                />
                {errors.jobId && <p className="mt-1 text-sm text-red-600 font-raleway font-semibold">{errors.jobId}</p>}
              </div>

              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-705 font-raleway">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400 ${errors.firstName ? 'border-red-300' : ''}`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600 font-raleway font-semibold">{errors.firstName}</p>}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-705 font-raleway">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400 ${errors.lastName ? 'border-red-300' : ''}`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600 font-raleway font-semibold">{errors.lastName}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-705 font-raleway">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400 ${errors.email ? 'border-red-300' : ''}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600 font-raleway font-semibold">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-705 font-raleway">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400 ${errors.phone ? 'border-red-300' : ''}`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600 font-raleway font-semibold">{errors.phone}</p>}
              </div>

              {/* Current Company */}
              <div>
                <label htmlFor="currentCompany" className="block text-sm font-semibold text-gray-705 font-raleway">
                  Current Company
                </label>
                <input
                  type="text"
                  id="currentCompany"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleChange}
                  className="mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* LinkedIn Profile */}
              <div>
                <label htmlFor="linkedInProfile" className="block text-sm font-semibold text-gray-705 font-raleway">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  id="linkedInProfile"
                  name="linkedInProfile"
                  value={formData.linkedInProfile}
                  onChange={handleChange}
                  className="mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              {/* Portfolio URL */}
              <div>
                <label htmlFor="portfolioUrl" className="block text-sm font-semibold text-gray-705 font-raleway">
                  Portfolio / Website URL
                </label>
                <input
                  type="url"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  className="mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                  placeholder="https://yourportfolio.com"
                />
              </div>

              {/* Experience Years */}
              <div>
                <label htmlFor="experienceYears" className="block text-sm font-semibold text-gray-705 font-raleway">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="experienceYears"
                  name="experienceYears"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  min="0"
                  className={`mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400 ${errors.experienceYears ? 'border-red-300' : ''}`}
                />
                {errors.experienceYears && <p className="mt-1 text-sm text-red-600 font-raleway font-semibold">{errors.experienceYears}</p>}
              </div>

              {/* Current Salary */}
              <div>
                <label htmlFor="currentSalary" className="block text-sm font-semibold text-gray-705 font-raleway">
                  Current CTC
                </label>
                <input
                  type="text"
                  id="currentSalary"
                  name="currentSalary"
                  value={formData.currentSalary}
                  onChange={handleChange}
                  className="mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                  placeholder="e.g. 8,50,000 INR"
                />
              </div>

              {/* Expected Salary */}
              <div>
                <label htmlFor="expectedSalary" className="block text-sm font-semibold text-gray-705 font-raleway">
                  Expected CTC
                </label>
                <input
                  type="text"
                  id="expectedSalary"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleChange}
                  className="mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                  placeholder="e.g. 10,00,000 INR"
                />
              </div>

              {/* Notice Period */}
              <div>
                <label htmlFor="noticePeriod" className="block text-sm font-semibold text-gray-705 font-raleway">
                  Notice Period
                </label>
                <input
                  type="text"
                  id="noticePeriod"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                  className="mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                  placeholder="e.g. Immediate / 30 Days"
                />
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-750 font-raleway">
                Cover Letter / Additional Notes
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={4}
                value={formData.coverLetter}
                onChange={handleChange}
                className="mt-1.5 block w-full px-4 py-3 bg-[#f5f3f3] border border-gray-200 rounded-xl focus:outline-none focus:border-[#3B3808] focus:ring-1 focus:ring-[#3B3808] font-raleway transition-colors text-gray-900 placeholder-gray-400"
                placeholder="Tell us why you are a good fit for this role..."
              ></textarea>
            </div>

            {/* Resume */}
            <div>
              <label htmlFor="resume" className="block text-sm font-semibold text-gray-750 font-raleway mb-2">
                Resume <span className="text-red-500">*</span>
              </label>
              <label
                htmlFor="resume"
                className={`flex flex-col items-center justify-center py-6 px-4 border-2 border-dashed rounded-xl cursor-pointer bg-[#f5f3f3] hover:bg-gray-50 hover:border-[#3B3808] transition-all group ${errors.resume ? 'border-red-300' : 'border-gray-305'}`}
              >
                <Upload className="mb-2 text-gray-450 group-hover:text-[#3B3808] transition-colors" size={24} />
                <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 font-raleway transition-colors">
                  {formData.resume ? (formData.resume as File).name : 'Upload Your Resume'}
                </span>
                <span className="text-xs text-gray-400 mt-1 font-raleway">PDF, DOC, DOCX up to 5MB</span>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
              </label>
              {errors.resume && <p className="mt-1 text-sm text-red-650 font-raleway font-semibold">{errors.resume}</p>}
            </div>

            {/* Additional Documents */}
            <div>
              <label htmlFor="additionalDocuments" className="block text-sm font-semibold text-gray-750 font-raleway mb-2">
                Additional Documents
              </label>
              <label
                htmlFor="additionalDocuments"
                className="flex flex-col items-center justify-center py-6 px-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-[#f5f3f3] hover:bg-gray-50 hover:border-[#3B3808] transition-all group"
              >
                <Upload className="mb-2 text-gray-450 group-hover:text-[#3B3808] transition-colors" size={24} />
                <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 font-raleway transition-colors">
                  {formData.additionalDocuments ? `${formData.additionalDocuments.length} files selected` : 'Upload Additional Documents'}
                </span>
                <span className="text-xs text-gray-400 mt-1 font-raleway">PDF, DOC, DOCX, JPG, PNG</span>
                <input
                  type="file"
                  id="additionalDocuments"
                  name="additionalDocuments"
                  onChange={handleFileChange}
                  multiple
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </label>
            </div>

            {/* Submit button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#3B3808] hover:bg-[#ffee50] hover:text-[#3B3808] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 font-raleway disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}