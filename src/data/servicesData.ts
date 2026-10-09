import { ServiceCategory } from '../types';

export const servicesData: ServiceCategory[] = [
  {
    id: 'tax-gst',
    title: 'Tax & GST',
    slug: 'tax-gst',
    shortDesc: 'Income tax, GST compliance, tax planning and advisory.',
    tagline: 'Clear tax planning and dependable statutory compliance.',
    iconName: 'Receipt',
    categoryPillar: 'TAXATION & COMPLIANCE',
    items: [
      {
        title: 'Income Tax Planning & Returns',
        description: 'Preparation and filing of corporate and individual tax returns, advance tax computations, and tax optimization.',
        deliverables: ['Annual Tax Computations', 'ITR Acknowledgments', 'Advance Tax Schedules']
      },
      {
        title: 'GST Filings & Reconciliation',
        description: 'Monthly and quarterly GSTR-1 and GSTR-3B filings, Input Tax Credit (ITC) reconciliation, and annual returns.',
        deliverables: ['Monthly GST Filings', 'GSTR-2B Reconciliation', 'GSTR-9 Annual Return']
      },
      {
        title: 'Tax Assessments & Notices',
        description: 'Professional guidance and written representations for income tax and GST inquiries or notices.',
        deliverables: ['Written Submissions', 'Document Verification', 'Departmental Representation']
      }
    ],
    overview: 'Managing tax obligations requires accuracy, foresight, and timely execution. We assist businesses, founders, and professionals in staying fully compliant with direct and indirect tax regulations while legally optimizing their tax position.',
    whoIsItFor: [
      'Private Limited Companies & LLPs',
      'Proprietorships & Partnerships',
      'Startups & Growth Businesses',
      'Salaried Professionals & HNIs'
    ],
    commonChallenges: [
      'Managing quarterly advance tax payments accurately',
      'Matching Input Tax Credit (ITC) with supplier GSTR-2B filings',
      'Responding to income tax intimation or notice requests',
      'Selecting the appropriate tax regime for optimum savings'
    ],
    ourApproach: [
      { step: '01', title: 'Review', desc: 'We examine your financial records, income streams, and previous filings.' },
      { step: '02', title: 'Plan', desc: 'We identify applicable deductions, exemptions, and compliance requirements.' },
      { step: '03', title: 'File', desc: 'We prepare computations, perform reconciliations, and file on time.' },
      { step: '04', title: 'Support', desc: 'We assist with ongoing queries, intimations, and future planning.' }
    ],
    deliverablesList: [
      'Annual Income Tax Computation Sheet',
      'Filed ITR Acknowledgment',
      'Monthly GST Reconciliation Reports',
      'Advance Tax Calculation Schedules',
      'Notice Advisory and Response Packets'
    ],
    faqs: [
      {
        question: 'Do you handle both direct and indirect taxes?',
        answer: 'Yes, our practice manages both Income Tax (direct tax) and Goods & Services Tax (GST) for businesses and individuals.'
      },
      {
        question: 'Can you assist if we receive an Income Tax notice?',
        answer: 'Yes, we review the inquiry, verify your underlying records, and draft formal, factual responses for departmental submission.'
      }
    ],
    relatedServiceIds: ['accounting', 'audit', 'business-advisory']
  },
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    slug: 'accounting',
    shortDesc: 'Accurate accounting, financial statements and management reporting.',
    tagline: 'Reliable financial records that keep your business organized.',
    iconName: 'BarChart3',
    categoryPillar: 'FINANCIAL MANAGEMENT',
    items: [
      {
        title: 'Bookkeeping & Ledger Maintenance',
        description: 'Systematic recording of daily financial transactions, banking reconciliations, and vendor ledgers.',
        deliverables: ['Monthly Trial Balance', 'Bank Reconciliations', 'Ledger Accounts']
      },
      {
        title: 'Financial Statements Preparation',
        description: 'Drafting Balance Sheets, Profit & Loss accounts, and cash flow summaries in compliance with accounting standards.',
        deliverables: ['Balance Sheet', 'Profit & Loss Statement', 'Cash Flow Summary']
      },
      {
        title: 'Management Reporting (MIS)',
        description: 'Periodic management reports providing visibility into revenues, expenses, margins, and working capital.',
        deliverables: ['Monthly MIS Reports', 'Expense Summaries', 'Receivables Ageing']
      }
    ],
    overview: 'Well-maintained books of accounts are the foundation of any successful enterprise. We provide disciplined accounting services that give business owners clarity on their cash flow, margins, and financial health throughout the year.',
    whoIsItFor: [
      'Growing SMEs and Private Limited Companies',
      'Early-stage Startups needing organized accounts',
      'Service and Trading firms in Pune and Maharashtra',
      'Professionals and Consultants'
    ],
    commonChallenges: [
      'Unreconciled bank statements and missing expense vouchers',
      'Lack of regular visibility into monthly profitability',
      'Delays in closing accounts for year-end audit',
      'Inaccurate tracking of customer receivables and vendor payables'
    ],
    ourApproach: [
      { step: '01', title: 'Setup', desc: 'We organize your chart of accounts and standardize recording procedures.' },
      { step: '02', title: 'Process', desc: 'We record transactions, invoices, and bank statements systematically.' },
      { step: '03', title: 'Reconcile', desc: 'We perform regular bank, vendor, and tax reconciliations.' },
      { step: '04', title: 'Report', desc: 'We deliver clear monthly financial statements and management summaries.' }
    ],
    deliverablesList: [
      'Monthly Balance Sheet & Profit and Loss Account',
      'Bank Reconciliation Statements',
      'Accounts Receivable and Payable Reports',
      'Management Information System (MIS) Reports',
      'Year-End Financial Statement Schedules'
    ],
    faqs: [
      {
        question: 'Which accounting software do you work with?',
        answer: 'We work with standard platforms including Tally Prime, Zoho Books, QuickBooks, and other leading cloud accounting systems.'
      },
      {
        question: 'Can you take over existing accounts mid-year?',
        answer: 'Yes, we perform an opening balance review, reconcile transactions from the start of the financial year, and transition your accounts smoothly.'
      }
    ],
    relatedServiceIds: ['tax-gst', 'virtual-cfo', 'audit']
  },
  {
    id: 'audit',
    title: 'Audit & Assurance',
    slug: 'audit',
    shortDesc: 'Statutory, tax and internal audit support.',
    tagline: 'Thorough examination that builds stakeholder trust.',
    iconName: 'ShieldCheck',
    categoryPillar: 'AUDIT & ASSURANCE',
    items: [
      {
        title: 'Statutory Audit',
        description: 'Independent examination of financial records under the Companies Act 2013.',
        deliverables: ['Independent Auditors Report', 'Financial Statement Audit', 'Statutory Notes']
      },
      {
        title: 'Tax Audit (Section 44AB)',
        description: 'Verification of accounts and tax compliance for entities crossing prescribed turnover limits.',
        deliverables: ['Form 3CA / 3CB Report', 'Form 3CD Annexures', 'Tax Audit Schedules']
      },
      {
        title: 'Internal Audit & Controls',
        description: 'Review of operational workflows and financial controls to identify gaps and improve efficiency.',
        deliverables: ['Internal Audit Findings', 'Process Gap Analysis', 'Recommendations Memo']
      }
    ],
    overview: 'An independent audit provides assurance to shareholders, financial institutions, and regulatory bodies regarding the accuracy of your financial statements. Our team conducts disciplined audits that uphold statutory integrity while providing practical insights.',
    whoIsItFor: [
      'Companies subject to mandatory Statutory Audit',
      'Businesses crossing Section 44AB turnover thresholds',
      'Firms seeking internal process and control reviews',
      'Enterprises applying for commercial credit or bank facilities'
    ],
    commonChallenges: [
      'Meeting strict statutory filing timelines without last-minute panic',
      'Ensuring full compliance with Indian Accounting Standards and Companies Act',
      'Identifying discrepancies in revenue recognition and inventory valuation',
      'Documenting robust internal financial controls'
    ],
    ourApproach: [
      { step: '01', title: 'Scope', desc: 'We define the audit plan, timeline, and required documentation.' },
      { step: '02', title: 'Examine', desc: 'We verify transactions, ledgers, vouchers, and statutory compliances.' },
      { step: '03', title: 'Discuss', desc: 'We discuss observations and potential adjustments with management.' },
      { step: '04', title: 'Report', desc: 'We issue the formal audit report and statutory disclosures.' }
    ],
    deliverablesList: [
      'Independent Statutory Audit Report',
      'Tax Audit Report (Form 3CA/3CB and Form 3CD)',
      'Internal Financial Controls Evaluation',
      'Audit Findings & Management Letter'
    ],
    faqs: [
      {
        question: 'When is a Tax Audit under Section 44AB required?',
        answer: 'A Tax Audit is generally mandatory for businesses whose total sales or turnover exceeds prescribed limits under the Income Tax Act for the financial year.'
      },
      {
        question: 'How do you prepare for an annual audit?',
        answer: 'We provide an advance documentation checklist and work alongside your team to ensure all ledgers, reconciliations, and schedules are ready in advance.'
      }
    ],
    relatedServiceIds: ['accounting', 'tax-gst', 'business-advisory']
  },
  {
    id: 'business-advisory',
    title: 'Business Advisory',
    slug: 'business-advisory',
    shortDesc: 'Practical financial and strategic guidance for growing businesses.',
    tagline: 'Practical financial perspective for key business decisions.',
    iconName: 'Compass',
    categoryPillar: 'STRATEGIC ADVISORY',
    items: [
      {
        title: 'Financial Planning & Strategy',
        description: 'Evaluating business models, cost structures, and cash requirements to support sustainable growth.',
        deliverables: ['Financial Projections', 'Cost Analysis', 'Capital Planning Notes']
      },
      {
        title: 'Due Diligence & Valuation Support',
        description: 'Financial reviews and valuation guidance for business acquisitions, mergers, or investments.',
        deliverables: ['Financial Due Diligence Report', 'Valuation Summary', 'Risk Overview']
      },
      {
        title: 'Process & Efficiency Improvement',
        description: 'Reviewing operational and financial processes to strengthen controls and reduce overheads.',
        deliverables: ['Process Review Notes', 'Internal Control Recommendations']
      }
    ],
    overview: 'Beyond day-to-day compliance, growing businesses frequently face strategic financial decisions—from evaluating expansion opportunities to restructuring operations. We offer objective, experienced financial guidance to help you move forward with confidence.',
    whoIsItFor: [
      'Founders making significant financial commitments',
      'Businesses preparing for expansion or capital investment',
      'Entities evaluating partnership or acquisition opportunities',
      'Management teams seeking objective financial review'
    ],
    commonChallenges: [
      'Assessing the true financial viability of new business initiatives',
      'Understanding tax and compliance implications of structural changes',
      'Evaluating working capital needs during rapid growth',
      'Preparing credible financial projections for stakeholders'
    ],
    ourApproach: [
      { step: '01', title: 'Consult', desc: 'We understand the specific commercial objective and context.' },
      { step: '02', title: 'Analyze', desc: 'We evaluate historical numbers, future estimates, and market realities.' },
      { step: '03', title: 'Synthesize', desc: 'We structure clear scenarios, risks, and financial paths.' },
      { step: '04', title: 'Guide', desc: 'We assist with implementation and ongoing review.' }
    ],
    deliverablesList: [
      'Financial Evaluation & Strategy Note',
      'Scenario Analysis & Projections',
      'Due Diligence Review Summary',
      'Management Recommendations Memo'
    ],
    faqs: [
      {
        question: 'How is business advisory different from standard accounting?',
        answer: 'Accounting records past transactions. Business advisory looks forward—helping you evaluate new opportunities, manage risks, and make sound financial decisions.'
      },
      {
        question: 'Can you assist with business restructuring?',
        answer: 'Yes, we advise on the financial, taxation, and compliance aspects of business restructuring and entity reorganization.'
      }
    ],
    relatedServiceIds: ['virtual-cfo', 'company-formation', 'tax-gst']
  },
  {
    id: 'company-formation',
    title: 'Company Formation & Compliance',
    slug: 'company-formation',
    shortDesc: 'Business setup, ROC compliance and ongoing corporate requirements.',
    tagline: 'Establishing your business on sound legal and financial footing.',
    iconName: 'Building',
    categoryPillar: 'CORPORATE SERVICES',
    items: [
      {
        title: 'Entity Incorporation',
        description: 'Incorporation of Private Limited Companies, Limited Liability Partnerships (LLP), and One Person Companies.',
        deliverables: ['Certificate of Incorporation', 'MOA & AOA / LLP Agreement', 'PAN & TAN Allotment']
      },
      {
        title: 'Initial Registrations & Licenses',
        description: 'Assisting with GST registration, Profession Tax, MSME (Udyam), and Startup India recognition.',
        deliverables: ['GST Certificate', 'Udyam Registration', 'DPIIT Startup Certificate']
      },
      {
        title: 'Annual ROC Compliances',
        description: 'Timely filing of annual returns, financial statements (AOC-4, MGT-7), and director KYC with the MCA.',
        deliverables: ['Annual ROC Acknowledgments', 'DIR-3 KYC Receipts', 'Statutory Registers']
      }
    ],
    overview: 'Starting a new enterprise requires choosing the right legal structure and completing statutory registrations correctly. We guide founders through incorporation, initial registrations, and ongoing Ministry of Corporate Affairs (MCA) compliances.',
    whoIsItFor: [
      'Entrepreneurs and Founders launching new ventures',
      'Proprietors converting to Private Limited or LLP structures',
      'Foreign entities setting up Indian subsidiaries',
      'Existing companies requiring annual corporate secretarial support'
    ],
    commonChallenges: [
      'Choosing between a Private Limited Company and an LLP',
      'Drafting appropriate object clauses and partnership terms',
      'Managing mandatory post-incorporation filings like INC-20A',
      'Staying updated with annual ROC filing deadlines and director KYC'
    ],
    ourApproach: [
      { step: '01', title: 'Advise', desc: 'We recommend the most appropriate entity structure for your goals.' },
      { step: '02', title: 'Incorporate', desc: 'We handle name reservation, documentation, and MCA incorporation.' },
      { step: '03', title: 'Register', desc: 'We obtain necessary tax and commercial registrations (PAN, GST, MSME).' },
      { step: '04', title: 'Maintain', desc: 'We assist with ongoing annual ROC filings and governance requirements.' }
    ],
    deliverablesList: [
      'Certificate of Incorporation (COI)',
      'Memorandum & Articles of Association (MOA/AOA)',
      'Director Identification Numbers (DIN)',
      'Company PAN, TAN & GST Registrations',
      'Annual ROC Filing Acknowledgments'
    ],
    faqs: [
      {
        question: 'Should I register a Private Limited Company or an LLP?',
        answer: 'A Private Limited Company is suitable if you plan to raise equity funding or issue stock options. An LLP is often ideal for professional or bootstrapped businesses seeking lower compliance overhead.'
      },
      {
        question: 'How long does company registration typically take?',
        answer: 'With required KYC documents in order, the incorporation process is usually completed in 5 to 7 working days.'
      }
    ],
    relatedServiceIds: ['tax-gst', 'accounting', 'business-advisory']
  },
  {
    id: 'virtual-cfo',
    title: 'Virtual CFO',
    slug: 'virtual-cfo',
    shortDesc: 'Financial reporting, cash-flow planning and decision support for growing businesses.',
    tagline: 'Experienced financial leadership tailored to your growth stage.',
    iconName: 'LayoutDashboard',
    categoryPillar: 'FINANCIAL MANAGEMENT',
    items: [
      {
        title: 'Cash Flow Planning & Monitoring',
        description: 'Forecasting cash flows, monitoring working capital requirements, and managing operational liquidity.',
        deliverables: ['Cash Flow Projections', 'Working Capital Reviews', 'Liquidity Reports']
      },
      {
        title: 'Financial Reporting & Budgeting',
        description: 'Comprehensive monthly reporting packages, annual budget tracking, and performance analysis.',
        deliverables: ['Monthly Financial Packages', 'Budget vs Actual Analysis', 'Margin Reviews']
      },
      {
        title: 'Strategic Decision Support',
        description: 'Participating in leadership discussions to provide financial perspective on commercial initiatives.',
        deliverables: ['Decision Memos', 'Commercial Reviews', 'Stakeholder Presentations']
      }
    ],
    overview: 'As businesses grow, their financial complexities increase. Our Virtual CFO service gives you access to senior financial expertise without the overhead of a full-time executive—helping you manage cash flow, evaluate margins, and plan for the future.',
    whoIsItFor: [
      'Growing businesses needing senior financial perspective',
      'Founders who want to delegate financial oversight',
      'Companies preparing for expansion or financing',
      'Enterprises seeking structured budgeting and reporting'
    ],
    commonChallenges: [
      'Managing working capital as sales and operations scale',
      'Lack of structured financial forecasting and budgeting',
      'Time spent by founders managing accounting and compliance details',
      'Need for clear financial presentations for banks or partners'
    ],
    ourApproach: [
      { step: '01', title: 'Assess', desc: 'We review your current financial workflows, reporting, and cash cycle.' },
      { step: '02', title: 'Structure', desc: 'We establish regular reporting formats, budgets, and cash flow models.' },
      { step: '03', title: 'Monitor', desc: 'We review monthly performance and flag key trends.' },
      { step: '04', title: 'Advise', desc: 'We participate in strategic discussions and guide financial decisions.' }
    ],
    deliverablesList: [
      'Monthly Executive Financial Summary',
      'Rolling Cash Flow Forecast',
      'Annual Budget & Variance Reports',
      'Working Capital & Margin Analysis',
      'Periodic Strategic Financial Reviews'
    ],
    faqs: [
      {
        question: 'What is the role of a Virtual CFO?',
        answer: 'A Virtual CFO provides high-level financial guidance—such as cash-flow planning, budgeting, and performance review—on a flexible, part-time basis.'
      },
      {
        question: 'Is Virtual CFO service suitable for small and medium businesses?',
        answer: 'Yes, it provides the expertise of an experienced financial professional at a fraction of the cost of a full-time Chief Financial Officer.'
      }
    ],
    relatedServiceIds: ['accounting', 'business-advisory', 'tax-gst']
  }
];
