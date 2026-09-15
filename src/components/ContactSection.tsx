import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { contactDetails } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Available for WordPress projects, WooCommerce setups, Shopify stores, and full-time remote developer opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-base font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(contactDetails.email, 'email')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Numbers */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                      Primary Phone
                    </span>
                    <a
                      href={`tel:${contactDetails.phone1}`}
                      className="text-base font-semibold text-white hover:text-teal-400 transition-colors"
                    >
                      {contactDetails.phone1}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactDetails.phone1, 'phone1')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone 1"
                >
                  {copiedField === 'phone1' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                    Secondary Phone
                  </span>
                  <a
                    href={`tel:${contactDetails.phone2}`}
                    className="text-sm font-semibold text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    {contactDetails.phone2}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(contactDetails.phone2, 'phone2')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone 2"
                >
                  {copiedField === 'phone2' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location & Socials */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-slate-300">
                  Based in <strong className="text-white">{contactDetails.location}</strong> (Open to Remote Worldwide)
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-3">
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600/20 text-slate-200 hover:text-blue-400 border border-slate-700 text-xs font-semibold transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-emerald-600/20 text-slate-200 hover:text-emerald-400 border border-slate-700 text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white font-display mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below and I will get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="text-center py-12 px-4 space-y-3 bg-emerald-500/10 rounded-xl border border-emerald-500/30">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Thank You, {formData.name}!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry has been received. You can also reach me directly at{' '}
                    <a href={`mailto:${contactDetails.email}`} className="text-emerald-400 font-semibold underline">
                      {contactDetails.email}
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold bg-slate-800 text-slate-200 rounded-lg hover:bg-slate-700 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. WordPress WooCommerce Custom Theme Development"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or job opportunity..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Mohamed Hani</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
