import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const PHONE = '+1 (212) 555-0123';
export const PHONE_HREF = 'tel:+12125550123';
export const EMAIL = 'hello@linainteriors.com';
export const EMAIL_HREF = 'mailto:hello@linainteriors.com';
export const LOCATION = 'New York, NY 10001';
export const LOCATION_HREF = 'https://maps.google.com/?q=New+York,+NY';
export const INSTAGRAM_HANDLE = '@lina_interiors_nyc';
export const INSTAGRAM_HREF = 'https://instagram.com/lina_interiors_nyc';
export const FACEBOOK_HANDLE = 'Lina Interiors Studio';
export const FACEBOOK_HREF = 'https://facebook.com/linainteriorsstudio';

export const SOCIAL_LINKS = [
  { icon: InstagramIcon, label: INSTAGRAM_HANDLE, href: INSTAGRAM_HREF, ariaLabel: 'Instagram' },
  { icon: FacebookIcon, label: FACEBOOK_HANDLE, href: FACEBOOK_HREF, ariaLabel: 'Facebook' },
  { icon: WhatsAppIcon, label: PHONE, href: PHONE_HREF, ariaLabel: 'WhatsApp' },
  { icon: EmailIcon, label: EMAIL, href: EMAIL_HREF, ariaLabel: 'Email' },
];

export const CONTACT_INFO = [
  { icon: PhoneIcon, label: PHONE, href: PHONE_HREF },
  { icon: EmailIcon, label: EMAIL, href: EMAIL_HREF },
  { icon: LocationOnIcon, label: LOCATION, href: LOCATION_HREF },
];

export const PROJECT_TYPES = [
  { value: 'residential', label: 'Residential Design' },
  { value: 'commercial', label: 'Commercial Design' },
  { value: 'consultation', label: 'Design Consultation' },
  { value: 'renovation', label: 'Home Renovation' },
  { value: 'other', label: 'Other' },
];
