import { useState } from 'react';
import { FORM_INITIAL } from '../constants/pageContent';
import { validateContactForm } from '../lib/validateContactForm';

const SUCCESS_TIMEOUT = 5000;
const FAKE_API_DELAY = 2000;

export function useContactForm() {
  const [formData, setFormData] = useState(FORM_INITIAL);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const next = validateContactForm(formData);
    if (Object.keys(next).length) return setErrors(next);
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, FAKE_API_DELAY));
    setSubmitSuccess(true);
    setFormData(FORM_INITIAL);
    setTimeout(() => setSubmitSuccess(false), SUCCESS_TIMEOUT);
    setIsSubmitting(false);
  };

  return { formData, errors, isSubmitting, submitSuccess, onChange, onSubmit };
}
