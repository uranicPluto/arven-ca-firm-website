export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  credentials: string;
  experience: string;
  bio: string;
  image: string;
  specializations: string[];
  email: string;
}

export const teamData: TeamMember[] = [
  {
    id: 'aarav-mehta',
    name: 'CA Aarav Mehta',
    designation: 'Founder & Chartered Accountant',
    credentials: 'FCA, DISA (ICAI), B.Com',
    experience: '18+ Years Experience',
    bio: 'Focused on helping businesses understand their numbers, stay compliant and make better financial decisions.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800',
    specializations: ['Corporate Tax', 'Business Advisory', 'Audit & Assurance'],
    email: 'aarav.mehta@arvenco.in'
  },
  {
    id: 'riya-shah',
    name: 'CA Riya Shah',
    designation: 'Partner — Taxation & GST',
    credentials: 'FCA, M.Com',
    experience: '12+ Years Experience',
    bio: 'Advises companies and individuals on direct tax planning, GST compliance, and departmental proceedings.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    specializations: ['Income Tax', 'GST Compliance', 'Assessments'],
    email: 'riya.shah@arvenco.in'
  }
];
