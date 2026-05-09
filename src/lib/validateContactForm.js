import { FORM_ERRORS } from '../constants/pageContent';

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const MESSAGE_MIN_LENGTH = 10;

export function validateContactForm(formData) {
  const errors = {};
  if (!formData.name.trim()) errors.name = FORM_ERRORS.nameRequired;
  if (!formData.email.trim()) errors.email = FORM_ERRORS.emailRequired;
  else if (!EMAIL_REGEX.test(formData.email)) errors.email = FORM_ERRORS.emailInvalid;
  if (!formData.message.trim()) errors.message = FORM_ERRORS.messageRequired;
  else if (formData.message.trim().length < MESSAGE_MIN_LENGTH) errors.message = FORM_ERRORS.messageTooShort;
  return errors;
}
