/**
 * Centralized Contact and WhatsApp Configuration for Boosterswala.com
 */

export const SITE_CONTACT = {
// Primary Call & Support Contact
phoneDisplay: '+91 93722 26376',
phoneRaw: '+919372226376',
phoneHref: 'tel:+919372226376',

// WhatsApp Business Direct Chat Integration
whatsappNumber: '919372226376',
whatsappDisplay: '+91 93722 26376',
whatsappUrl: 'https://wa.me/919372226376',
getWhatsAppUrl: (message?: string) => 
message 
? `https://wa.me/919372226376?text=${encodeURIComponent(message)}`
: 'https://wa.me/919372226376',

// Emails
email: 'info@boosterswala.com',
salesEmail: 'sales@boosterswala.com',
supportEmail: 'support@boosterswala.com'
};
