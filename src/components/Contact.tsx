import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using FormSubmit - No signup required!
      // Emails will be sent directly to syednajafturab@gmail.com
      const response = await fetch('https://formsubmit.co/syednajafturab@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact from ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "syednajafturab@gmail.com",
      href: "mailto:syednajafturab@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+92 3254810358",
      href: "tel:+923254810358"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Faisalabad, Pakistan",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
              Get In Touch
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="glass-glow p-6 md:p-8 rounded-2xl relative group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-400">Let's Connect</h3>
                <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design.
                </p>

                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="group/contact flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover-scale"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white group-hover/contact:scale-110 transition-transform duration-300 shadow-xl animate-glow-pulse">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-semibold text-white group-hover/contact:text-blue-400 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-400 group-hover/contact:text-gray-300 transition-colors break-all">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-glow p-6 md:p-8 rounded-2xl relative group z-10 animate-slide-in-right hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-purple-400 relative z-10">Send a Message</h3>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-3 relative z-10 animate-bounce-in">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-green-300 text-sm">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-3 relative z-10 animate-bounce-in">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-300 text-sm">
                    Sorry, there was an error sending your message. Please try again or contact me directly via email.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
                <div className="animate-scale-up" style={{ animationDelay: '100ms' }}>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-300 mb-2 relative z-10">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 glass border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-sm md:text-base ${errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-600 focus:ring-blue-500'
                      } relative z-10`}
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div className="animate-scale-up" style={{ animationDelay: '200ms' }}>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-300 mb-2 relative z-10">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 glass border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-sm md:text-base ${errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-600 focus:ring-blue-500'
                      } relative z-10`}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div className="animate-scale-up" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-300 mb-2 relative z-10">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 glass border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none text-sm md:text-base ${errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-600 focus:ring-blue-500'
                      } relative z-10`}
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base ${isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 hover-glow'
                    } relative z-10 animate-scale-up`}
                  style={{ animationDelay: '400ms' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;