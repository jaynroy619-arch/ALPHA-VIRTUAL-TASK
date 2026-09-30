/**
 * Alpha Virtual Task - Contact and Deep Linking Utilities
 */

export const BUSINESS_INFO = {
  name: 'Alpha Virtual Task',
  tagline: 'Your Trust Our Priority',
  type: 'Professional Virtual & Data Services',
  phoneDisplay: '+91 7738767859',
  phoneRaw: '+917738767859',
  whatsappNumber: '917738767859',
  email: 'alphavirtualtask@gmail.com',
  primaryCurrency: '₹ INR',
  secondaryCurrency: '$ USD',
  operatingHours: 'Monday – Saturday: 9:00 AM – 8:00 PM IST',
} as const;

/**
 * Generate a WhatsApp click-to-chat deep link with pre-filled inquiry text.
 */
export function createWhatsAppLink(serviceName?: string, customNote?: string): string {
  let message = '';
  if (serviceName) {
    message = `Hello Alpha Virtual Task, I am interested in your ${serviceName} service. I would like to discuss my requirements.`;
  } else {
    message = 'Hello Alpha Virtual Task, I would like to discuss a project and learn more about your services.';
  }

  if (customNote) {
    message += `\n\nNote: ${customNote}`;
  }

  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate an email mailto: link with pre-filled subject and template body.
 */
export function createEmailLink(
  serviceName?: string,
  details?: { name?: string; phone?: string; message?: string }
): string {
  const subject = serviceName
    ? `Service Inquiry - ${serviceName} | Alpha Virtual Task`
    : 'Project Inquiry | Alpha Virtual Task';

  const bodyLines = [
    'Hello Alpha Virtual Task Team,',
    '',
    serviceName
      ? `I am interested in your ${serviceName} service.`
      : 'I would like to inquire about your virtual and data services.',
    '',
    details?.name ? `Name: ${details.name}` : 'Name: [Your Name]',
    details?.phone ? `Phone / WhatsApp: ${details.phone}` : 'Phone / WhatsApp: [Your Contact Number]',
    '',
    'Project Requirements / Scope:',
    details?.message || '[Please describe your project, volume, deadlines, or preferred formats here...]',
    '',
    'Preferred Currency: [₹ INR / $ USD]',
    '',
    'Thank you,',
    details?.name || '[Your Name]',
  ];

  return `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
}

/**
 * Generate a tel: link for phone dialing.
 */
export function createPhoneLink(): string {
  return `tel:${BUSINESS_INFO.phoneRaw}`;
}
