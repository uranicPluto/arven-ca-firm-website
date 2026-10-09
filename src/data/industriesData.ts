export interface Industry {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  keyChallenges: string[];
  specializedSolutions: string[];
  applicableServices: string[];
}

export const industriesData: Industry[] = [
  {
    id: 'technology-saas',
    name: 'Technology & IT Services',
    slug: 'technology-saas',
    tagline: 'Tax planning, export compliance, and financial management for software enterprises.',
    description: 'We advise technology companies, software developers, and IT service exporters on GST export compliance (LUT), foreign remittances, and financial reporting.',
    iconName: 'Code',
    keyChallenges: [
      'Managing export compliance and GST filings under Letter of Undertaking (LUT)',
      'Structuring cross-border contracts and withholding tax requirements',
      'Maintaining clear financial reporting for investors and stakeholders'
    ],
    specializedSolutions: [
      'End-to-end GST export compliance and refund support',
      'Structured financial reporting and cash flow tracking',
      'Corporate tax planning and international remittance documentation'
    ],
    applicableServices: ['tax-gst', 'virtual-cfo', 'accounting']
  },
  {
    id: 'manufacturing-engineering',
    name: 'Manufacturing & Engineering',
    slug: 'manufacturing-engineering',
    tagline: 'Accounting, inventory management, and statutory audit support for industrial units.',
    description: 'Serving manufacturing businesses across Pune with structured bookkeeping, inventory reconciliations, GST compliance, and annual audit preparation.',
    iconName: 'Factory',
    keyChallenges: [
      'Managing Input Tax Credit (ITC) reconciliation across numerous vendor supplies',
      'Tracking working capital and inventory holding costs',
      'Ensuring compliance with statutory audit requirements and CARO provisions'
    ],
    specializedSolutions: [
      'Systematic monthly purchase register and GSTR-2B reconciliations',
      'Stock and working capital financial reviews',
      'Comprehensive statutory and tax audit execution'
    ],
    applicableServices: ['accounting', 'audit', 'tax-gst', 'virtual-cfo']
  },
  {
    id: 'real-estate-construction',
    name: 'Real Estate & Construction',
    slug: 'real-estate-construction',
    tagline: 'Tax structuring, compliance, and accounting for developers and contractors.',
    description: 'Providing accounting and taxation advisory for builders, contractors, and real estate developers across Pune and Maharashtra.',
    iconName: 'Building2',
    keyChallenges: [
      'Navigating complex GST rates and input credit restrictions on construction',
      'Managing subcontractor TDS compliance and vendor payments',
      'Maintaining separate project-wise accounts and financial records'
    ],
    specializedSolutions: [
      'Project-level accounting and expense tracking',
      'GST advisory on property transactions and development agreements',
      'Contractor TDS verification and annual return filings'
    ],
    applicableServices: ['tax-gst', 'accounting', 'audit', 'business-advisory']
  },
  {
    id: 'retail-trading',
    name: 'Retail & Wholesale Trade',
    slug: 'retail-trading',
    tagline: 'Bookkeeping, multi-channel GST, and margin visibility for trading businesses.',
    description: 'Assisting retailers, distributors, and trading firms in maintaining accurate financial records, handling multi-rate GST, and managing cash flow.',
    iconName: 'ShoppingBag',
    keyChallenges: [
      'Reconciling point-of-sale transactions and bank deposits',
      'Managing GST filings across multiple product tax categories',
      'Monitoring gross margins and overhead costs systematically'
    ],
    specializedSolutions: [
      'Regular bank and sales ledger reconciliations',
      'Accurate monthly and quarterly GST returns',
      'Management Information System (MIS) reports on profitability'
    ],
    applicableServices: ['accounting', 'tax-gst', 'virtual-cfo']
  },
  {
    id: 'professional-services',
    name: 'Professional Services & Consultancies',
    slug: 'professional-services',
    tagline: 'Tax optimization and compliance for consulting, medical, and legal practices.',
    description: 'Guiding doctors, lawyers, architects, and consulting firms on tax planning, presumptive taxation schemes, and partnership accounting.',
    iconName: 'Briefcase',
    keyChallenges: [
      'Evaluating presumptive taxation schemes (Section 44ADA) versus regular accounting',
      'Tracking client TDS deductions (Section 194J) and claiming credits',
      'Managing partnership firm tax structures and partner remuneration'
    ],
    specializedSolutions: [
      'Annual tax planning and Form 26AS/AIS reconciliation',
      'Bookkeeping and quarterly advance tax forecasting',
      'Partnership deed structuring and compliance'
    ],
    applicableServices: ['tax-gst', 'accounting', 'company-formation']
  },
  {
    id: 'startups-ventures',
    name: 'Startups & Growing Ventures',
    slug: 'startups-ventures',
    tagline: 'Company setup, statutory registrations, and financial foundations.',
    description: 'Supporting founders from entity incorporation through early growth with clear accounting, regulatory filings, and financial guidance.',
    iconName: 'Rocket',
    keyChallenges: [
      'Choosing the right legal entity (Private Limited vs LLP)',
      'Managing mandatory post-incorporation compliances and filings',
      'Maintaining organized financial statements from day one'
    ],
    specializedSolutions: [
      'Fast-track entity incorporation and government registrations',
      'Monthly bookkeeping and management reporting',
      'Virtual CFO financial planning and advisory'
    ],
    applicableServices: ['company-formation', 'accounting', 'virtual-cfo', 'tax-gst']
  }
];
