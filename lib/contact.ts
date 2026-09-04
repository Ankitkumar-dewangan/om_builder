export const contact = {
  phone: '+91 91098 38902',
  phoneHref: 'tel:+919109838902',
  alternatePhone: '+91 88890 16532',
  alternatePhoneHref: 'tel:+918889016532',
  whatsapp: '919109838902',
  email: 'omsunbuildsolar@gmail.com',
  address: 'Janta Market, Beside Of Biji Office, Padmanabhpur, Durg (C.G.)',
  website: 'https://www.omsunbuild.com',
  social: { instagram: '', facebook: '' },
} as const

export function whatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export function emailUrl(subject = 'Solar enquiry for OM SUNBUILD', body = '') {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function productEnquiry(product: string) {
  return {
    message: `Hello OM SUNBUILD, I am interested in ${product}.`,
    subject: `Product enquiry: ${product}`,
  }
}

export function projectEnquiry(project: string) {
  return {
    message: `Hello OM SUNBUILD, I am interested in a solar installation similar to ${project}.`,
    subject: `Project enquiry: ${project}`,
  }
}
