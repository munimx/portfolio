import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export const profile = {
  name: 'Munim Ahmad',
  title: 'Full-Stack AI Engineer',
  location: 'Lahore, Pakistan',
  email: 'munimahmad2@gmail.com',
  phoneDisplay: '+92 316 4086827',
  phoneHref: 'tel:+923164086827',
  linkedin: 'https://linkedin.com/in/munimahmad',
  github: 'https://github.com/munimx',
};

export const socialLinks = [
  {
    name: 'GitHub',
    href: profile.github,
    icon: FiGithub,
    username: '@munimx',
  },
  {
    name: 'LinkedIn',
    href: profile.linkedin,
    icon: FiLinkedin,
    username: 'in/munimahmad',
  },
  {
    name: 'Email',
    href: `mailto:${profile.email}`,
    icon: FiMail,
    username: profile.email,
  },
];

export const contactChannels = [
  {
    name: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FiMail,
  },
  {
    name: 'Phone',
    value: profile.phoneDisplay,
    href: profile.phoneHref,
    icon: FiPhone,
  },
];
