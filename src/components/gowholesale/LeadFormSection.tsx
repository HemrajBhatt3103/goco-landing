"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

interface FormData {
  ownerName: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  city: string;
}

interface FormErrors {
  [key: string]: string;
}

const businessTypes = [
  "Wholesaler",
  "Semi-wholesaler",
  "Distributor",
  "Bulk Trader",
];

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.ownerName.trim()) errors.ownerName = "Name is required";
  if (!data.businessName.trim()) errors.businessName = "Business name is required";

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[\+]?[\d\s\-\(\)]{7,}$/.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!data.businessType) errors.businessType = "Select a business type";
  if (!data.city.trim()) errors.city = "City is required";

  return errors;
}

export default function LeadFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    ownerName: "",
    businessName: "",
    phone: "",
    email: "",
    businessType: "",
    city: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[name];
          return next;
        });
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      const message = [
        "Hello! I'm interested in GoWholesale.",
        "",
        "My Details:",
        `Name: ${formData.ownerName}`,
        `Business: ${formData.businessName}`,
        `Phone: ${formData.phone}`,
        `Email: ${formData.email}`,
        `Type: ${formData.businessType}`,
        `City: ${formData.city}`,
      ].join("\n");

      const phoneNumber = "916351324531";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setSubmitted(true);
    },
    [formData]
  );

  if (submitted) {
    return (
      <section id="lead-form" className="py-32 bg-primary">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-secondary mb-4">
              Redirecting to WhatsApp...
            </h2>
            <p className="text-secondary/60 text-lg">
              Your details have been prepared. Complete your request on WhatsApp to get started.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-32 bg-primary">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent">
            Early Access
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-secondary mt-3 mb-4">
            Request early access.
          </h2>
          <p className="text-lg text-secondary/60 max-w-xl mx-auto">
            Fill in your details and we&apos;ll set up GoWholesale for your business.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              label="Owner Name"
              name="ownerName"
              type="text"
              placeholder="Your full name"
              value={formData.ownerName}
              error={errors.ownerName}
              onChange={handleChange}
            />
            <FormField
              label="Business Name"
              name="businessName"
              type="text"
              placeholder="Your business name"
              value={formData.businessName}
              error={errors.businessName}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+92 300 0000000"
              value={formData.phone}
              error={errors.phone}
              onChange={handleChange}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="you@business.com"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-secondary/70 mb-2">
                Business Type
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className={`w-full px-5 py-4 rounded-xl bg-secondary/5 border text-secondary text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer ${
                  errors.businessType ? "border-red-400/50" : "border-secondary/10"
                }`}
              >
                <option value="" className="bg-primary text-secondary">
                  Select type
                </option>
                {businessTypes.map((type) => (
                  <option key={type} value={type} className="bg-primary text-secondary">
                    {type}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className="mt-1.5 text-xs text-red-400">{errors.businessType}</p>
              )}
            </div>
            <FormField
              label="City"
              name="city"
              type="text"
              placeholder="Your city"
              value={formData.city}
              error={errors.city}
              onChange={handleChange}
            />
          </div>

          <div className="pt-4 flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 bg-secondary text-primary rounded-full text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20"
            >
              Continue on WhatsApp
            </motion.button>
          </div>

          <p className="text-center text-xs text-secondary/40">
            No payment required. Our team will reach out to discuss next steps.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-secondary/70 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-5 py-4 rounded-xl bg-secondary/5 border text-secondary text-sm placeholder:text-secondary/30 focus:outline-none focus:border-accent/50 transition-colors ${
          error ? "border-red-400/50" : "border-secondary/10"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
