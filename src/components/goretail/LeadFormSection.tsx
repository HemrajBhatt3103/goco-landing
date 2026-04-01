"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

interface FormData {
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  businessName: string;
  businessType: string;
  businessLocation: string;
}

interface FormErrors {
  [key: string]: string;
}

const businessTypes = [
  "Clothing Store",
  "Sneaker Store",
  "Electronics Shop",
  "Boutique Retail",
  "Home & Living",
  "Other",
];

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.ownerName.trim()) {
    errors.ownerName = "Name is required";
  }

  if (!data.ownerPhone.trim()) {
    errors.ownerPhone = "Phone number is required";
  } else if (!/^[\+]?[\d\s\-\(\)]{7,}$/.test(data.ownerPhone.trim())) {
    errors.ownerPhone = "Enter a valid phone number";
  }

  if (!data.ownerEmail.trim()) {
    errors.ownerEmail = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.ownerEmail.trim())) {
    errors.ownerEmail = "Enter a valid email address";
  }

  if (!data.businessName.trim()) {
    errors.businessName = "Business name is required";
  }

  if (!data.businessType) {
    errors.businessType = "Select a business type";
  }

  if (!data.businessLocation.trim()) {
    errors.businessLocation = "Location is required";
  }

  return errors;
}

export default function LeadFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    businessName: "",
    businessType: "",
    businessLocation: "",
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
    async (e: React.FormEvent) => {
      e.preventDefault();

      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);

      try {
        const response = await fetch("/api/goretail-leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Submission failed");

        setSubmitted(true);
      } catch {
        setSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
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
              Thanks. We&apos;ll contact you shortly.
            </h2>
            <p className="text-secondary/60 text-lg">
              Your request has been received. Our team will reach out within 24 hours to get your store live.
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
            Get Started
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-secondary mt-3 mb-4">
            Get started today.
          </h2>
          <p className="text-lg text-secondary/60 max-w-xl mx-auto">
            Fill in your details and we&apos;ll set up GoRetail for your store.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              label="Your Name"
              name="ownerName"
              type="text"
              placeholder="John Doe"
              value={formData.ownerName}
              error={errors.ownerName}
              onChange={handleChange}
            />
            <FormField
              label="Phone Number"
              name="ownerPhone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.ownerPhone}
              error={errors.ownerPhone}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              label="Email Address"
              name="ownerEmail"
              type="email"
              placeholder="john@store.com"
              value={formData.ownerEmail}
              error={errors.ownerEmail}
              onChange={handleChange}
            />
            <FormField
              label="Business Name"
              name="businessName"
              type="text"
              placeholder="Your store name"
              value={formData.businessName}
              error={errors.businessName}
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
                  errors.businessType
                    ? "border-red-400/50"
                    : "border-secondary/10"
                }`}
              >
                <option value="" className="bg-primary text-secondary">
                  Select type
                </option>
                {businessTypes.map((type) => (
                  <option
                    key={type}
                    value={type}
                    className="bg-primary text-secondary"
                  >
                    {type}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.businessType}
                </p>
              )}
            </div>
            <FormField
              label="Business Location"
              name="businessLocation"
              type="text"
              placeholder="City, Country"
              value={formData.businessLocation}
              error={errors.businessLocation}
              onChange={handleChange}
            />
          </div>

          <div className="pt-4 flex justify-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 bg-secondary text-primary rounded-full text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Set Up My Store"
              )}
            </motion.button>
          </div>

          <p className="text-center text-xs text-secondary/40">
            We&apos;ll contact you shortly to get your store live.
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
