import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building2,
  MessageSquare,
  ChevronDown,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon from "../assets/Layer_x0020_1.png";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    isNotRobot: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  const subjectOptions = [
    "General Inquiry",
    "Project Consultation",
    "Partnership Opportunity",
    "Technical Support",
    "Feedback",
    "Other",
  ];

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      badge: "Primary",
      title: "Corporate Inquiries",
      content: "hello@battlecore.com",
      href: "mailto:hello@battlecore.com",
      subContent: "We respond within 24 hours",
    },
    {
      icon: <Mail size={22} />,
      badge: "Alternative",
      title: "Priority Client Support",
      content: "support@battlecore.com",
      href: "mailto:support@battlecore.com",
      subContent: "Dedicated 24/7 technical desk",
    },
    {
      icon: <Phone size={22} />,
      badge: "Primary",
      title: "Main Office Line",
      content: "+1 (800) 582-2673",
      href: "tel:+18005822673",
      subContent: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: <Phone size={22} />,
      badge: "Alternative",
      title: "Direct / WhatsApp Line",
      content: "+1 (555) 349-8291",
      href: "tel:+15553498291",
      subContent: "Urgent assistance & WhatsApp",
    },
    {
      icon: <MapPin size={22} />,
      badge: "HQ",
      title: "Global Headquarters",
      content: "100 Innovation Way, Suite 400",
      subContent: "Austin, TX 78701, United States",
    },
    {
      icon: <MapPin size={22} />,
      badge: "Alternative",
      title: "Regional Innovation Lab",
      content: "75 Silicon Vista Blvd, Floor 8",
      subContent: "San Francisco, CA 94105, United States",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/company/battlecore",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      url: "https://twitter.com/battlecore",
      label: "Twitter",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://instagram.com/battlecore",
      label: "Instagram",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contactInfoRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubjectSelect = (subject) => {
    setFormData((prev) => ({ ...prev, subject }));
    setIsSubjectOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        isNotRobot: false,
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden min-h-screen"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#AAD468] to-[#9BC859] rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#0A1A1A] rounded-full flex items-center justify-center">
                  <img className="w-5 h-5" src={icon} alt="Battle Core Icon" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#001515] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">B</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#AAD468] mb-6 leading-tight">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-[#AAD468] to-[#9BC859] bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Get in touch with Battle Core for inquiries, consultations, or
            just to say hello
          </p>
        </div>

        {/* Responsive Form + Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="space-y-6 min-w-0">
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">
                Send us a message
              </h2>

              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <InputWithIcon
                  icon={<User />}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                />
                <InputWithIcon
                  icon={<Mail />}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
              </div>

              {/* Phone */}
              <InputWithIcon
                icon={<Phone />}
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                optional
              />

              {/* Company */}
              <InputWithIcon
                icon={<Building2 />}
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company Name"
                optional
              />

              {/* Subject Dropdown */}
              <Dropdown
                icon={<MessageSquare />}
                label="Select Subject"
                isOpen={isSubjectOpen}
                toggle={() => setIsSubjectOpen(!isSubjectOpen)}
                value={formData.subject}
                options={subjectOptions}
                onSelect={handleSubjectSelect}
              />

              {/* Message */}
              <TextareaWithIcon
                icon={<MessageSquare />}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
              />

              {/* Checkbox */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="isNotRobot"
                  id="isNotRobot"
                  checked={formData.isNotRobot}
                  onChange={handleInputChange}
                  className="w-5 h-5"
                />
                <label htmlFor="isNotRobot" className="text-white/80 text-sm">
                  I'm not a robot{" "}
                  <span className="text-white/40">(Optional)</span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#AAD468] to-[#9BC859] text-[#0A1A1A] py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:from-[#9BC859] hover:to-[#AAD468] transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0A1A1A]" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status */}
              {submitStatus === "success" && (
                <StatusMessage
                  success
                  message="Message sent successfully! We'll get back to you soon."
                />
              )}
              {submitStatus === "error" && (
                <StatusMessage
                  error
                  message="Something went wrong. Please try again."
                />
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div ref={contactInfoRef} className="space-y-8 min-w-0">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 space-y-6">
              <h2 className="text-2xl font-bold text-white">Get in touch</h2>
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-3.5 rounded-xl hover:bg-white/5 border border-white/5 hover:border-white/10 transition group"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-[#AAD468] rounded-full flex items-center justify-center text-[#0A1A1A] group-hover:scale-105 transition-transform">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[#AAD468] font-semibold text-sm">
                        {info.title}
                      </h3>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          info.badge === "Primary" || info.badge === "HQ"
                            ? "bg-[#AAD468]/20 text-[#AAD468] border border-[#AAD468]/40"
                            : "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                        }`}
                      >
                        {info.badge}
                      </span>
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white text-md sm:text-lg hover:text-[#AAD468] transition-colors break-words block"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-white text-md sm:text-lg break-words">
                        {info.content}
                      </p>
                    )}
                    <p className="text-white/60 text-xs sm:text-sm mt-0.5">
                      {info.subContent}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Follow us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#AAD468] hover:bg-[#AAD468] hover:text-[#0A1A1A] transform hover:scale-110 transition"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputWithIcon = ({ icon, optional, ...props }) => (
  <div className="relative">
    <div className="absolute left-4 top-5 text-[#AAD468] z-10">{icon}</div>
    <input
      {...props}
      className="w-full pl-12 pr-20 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#AAD468] focus:outline-none focus:ring-2 focus:ring-[#AAD468]/20 transition-all duration-300"
    />
    {optional && (
      <span className="absolute right-4 top-5 text-white/40 text-sm">
        (Optional)
      </span>
    )}
  </div>
);

const TextareaWithIcon = ({ icon, ...props }) => (
  <div className="relative">
    <div className="absolute left-4 top-5 text-[#AAD468] z-10">{icon}</div>
    <textarea
      {...props}
      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[#AAD468] focus:outline-none focus:ring-2 focus:ring-[#AAD468]/20 resize-none"
    />
  </div>
);

const Dropdown = ({
  icon,
  label,
  isOpen,
  toggle,
  value,
  options,
  onSelect,
}) => (
  <div className="relative">
    <div className="absolute left-4 top-5 text-[#AAD468] z-10">{icon}</div>
    <button
      type="button"
      onClick={toggle}
      className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-left focus:ring-2 focus:ring-[#AAD468]/20"
    >
      {value || label}
    </button>
    <ChevronDown
      className={`absolute right-4 top-5 text-white/60 transition ${
        isOpen ? "rotate-180" : ""
      }`}
      size={20}
    />
    {isOpen && (
      <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A2A2A] border border-white/20 rounded-xl z-20 overflow-hidden">
        {options.map((option, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(option)}
            className="w-full px-4 py-3 text-left text-white hover:bg-[#AAD468] hover:text-[#0A1A1A]"
          >
            {option}
          </button>
        ))}
      </div>
    )}
  </div>
);

const StatusMessage = ({ success, error, message }) => (
  <div
    className={`flex items-center space-x-2 p-4 rounded-xl ${
      success ? "bg-green-400/10 text-green-400" : "bg-red-400/10 text-red-400"
    }`}
  >
    {success ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
    <span>{message}</span>
  </div>
);

export default ContactUs;
