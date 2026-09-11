export const BRAND_CONSTANTS = {
  name: "Coffee RUNaWAY",
  tagline: "Escape the Ordinary. Run to the Roaster.",
  phone: "+92 300 1234567",
  displayPhone: "0300 1234567",
  whatsAppPhone: "923001234567",
  whatsAppLink: "https://wa.me/923001234567?text=Hi%20Coffee%20RUNaWAY%2C%20I%20would%20like%20to%20inquire%20about...",
  operatingHours: "5:00 PM – 2:00 AM Daily",
  openingTimeHour: 17, // 5:00 PM (17:00)
  closingTimeHour: 2,  // 2:00 AM (02:00 next day)
  address: "V4XQ+CC7, ASF Rd, Faisal Cantonment, Karachi, Pakistan",
  shortAddress: "Faisal Cantonment, Karachi",
  coordinates: "V4XQ+CC7",
  googleMapsLink: "https://maps.google.com/?q=V4XQ%2BCC7,+ASF+Rd,+Faisal+Cantonment,+Karachi",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=V4XQ%2BCC7,+ASF+Rd,+Faisal+Cantonment,+Karachi&output=embed",
  socials: {
    instagram: "https://instagram.com/coffeerunaway.khi",
    facebook: "https://facebook.com/coffeerunaway",
  }
};

export const getWhatsAppOrderLink = (itemName: string, category?: string) => {
  const message = encodeURIComponent(`Hi Coffee RUNaWAY, I'd like to ask about ${itemName}${category ? ` from the ${category} menu` : ''}.`);
  return `https://wa.me/${BRAND_CONSTANTS.whatsAppPhone}?text=${message}`;
};
