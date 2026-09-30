export interface ServiceProcessStep {
  step: number;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'Data Operations' | 'Spreadsheets & Analytics' | 'Research & Content' | 'Quality Assurance';
  shortDesc: string;
  description: string;
  iconName: string;
  whatWeHelpWith: string[];
  typicalTasks: string[];
  deliverables: string[];
  suitableCustomers: string[];
  simpleProcess: ServiceProcessStep[];
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'data-entry',
    name: 'Data Entry',
    category: 'Data Operations',
    shortDesc: 'Accurate, high-speed manual and digital data entry for structured business workflows.',
    description: 'Alpha Virtual Task provides dependable, error-checked data entry services designed to relieve your internal staff from repetitive manual input. We handle diverse sources—from handwritten documents and scanned invoices to digital forms and legacy platforms—maintaining strict confidentiality and typographic accuracy.',
    iconName: 'Database',
    whatWeHelpWith: [
      'Digitalizing offline documents, receipts, and handwritten records',
      'Entering product details and inventory into eCommerce stores',
      'Updating customer CRM profiles, member directories, and leads',
      'Migrating offline paper logs to structured digital databases',
    ],
    typicalTasks: [
      'Alphanumeric data input into web apps or ERP systems',
      'Invoice, receipt, and utility bill transcription',
      'Online and offline form filling',
      'Contact card and directory compilation',
      'Data verification against original physical scans',
    ],
    deliverables: [
      'Clean spreadsheet files (Excel / Google Sheets / CSV)',
      'Direct updates made into client cloud portal or software',
      'Detailed entry summary log noting any ambiguities found',
    ],
    suitableCustomers: [
      'Small to medium businesses modernizing physical paperwork',
      'eCommerce merchants managing hundreds of SKU listings',
      'Real estate agents and legal consultants organizing client files',
      'Independent professionals requiring daily administrative support',
    ],
    simpleProcess: [
      { step: 1, title: 'Share Source Material', desc: 'Send your scanned PDFs, images, or online form links via email or cloud share.' },
      { step: 2, title: 'Scope & Guidelines Confirmation', desc: 'We align on field schemas, naming conventions, and turnaround deadlines.' },
      { step: 3, title: 'Entry & Dual Verification', desc: 'Our team enters the data with continuous double-checks for zero errors.' },
      { step: 4, title: 'Delivery & Adjustments', desc: 'Receive your final structured file or portal confirmation with full support.' },
    ],
    faqs: [
      {
        question: 'Can you handle handwritten documents or receipts?',
        answer: 'Yes. Legible handwritten notes, signed forms, and receipts can be transcribed accurately with questionable text flagged for your review.',
      },
      {
        question: 'How do you guarantee accuracy in data entry?',
        answer: 'We employ dual-pass verification where sample batches are systematically cross-checked against source records prior to delivery.',
      },
    ],
  },
  {
    id: 'data-collection',
    name: 'Data Collection',
    category: 'Data Operations',
    shortDesc: 'Systematic gathering of business information, directories, product listings, and market data.',
    description: 'We execute systematic, targeted data compilation from public registers, online portals, enterprise directories, and niche industry resources. Whether you need prospect contacts, vendor pricing, or institutional records, our collection process ensures relevant, deduplicated datasets.',
    iconName: 'FolderDown',
    whatWeHelpWith: [
      'Compiling business directories and contact lists',
      'Gathering competitor pricing, catalogues, and public rates',
      'Extracting real estate property records and public tax rolls',
      'Aggregating event speaker profiles and organizational leads',
    ],
    typicalTasks: [
      'Extracting contact details from public registries and industry associations',
      'Mapping store locations, addresses, and telephone lines',
      'Collecting technical specifications from manufacturer portals',
      'Compiling social profiles, handles, and public company data',
    ],
    deliverables: [
      'Structured Excel / CSV datasets with verified fields',
      'Summary of data sources and collection dates',
      'Deduplicated master contact repositories',
    ],
    suitableCustomers: [
      'B2B sales teams preparing verified prospect outreach lists',
      'Market researchers mapping local services and competitors',
      'Recruiters sourcing talent contacts from publicly open forums',
    ],
    simpleProcess: [
      { step: 1, title: 'Define Criteria', desc: 'Specify target geography, industry criteria, and exact fields needed.' },
      { step: 2, title: 'Sample Extraction', desc: 'We generate an initial sample of 10–20 rows to confirm exact formatting.' },
      { step: 3, title: 'Full Compilation', desc: 'Systematic collection and thorough deduplication across all sources.' },
      { step: 4, title: 'Deliver Clean Sheet', desc: 'Delivered in your preferred file format ready for immediate use.' },
    ],
    faqs: [
      {
        question: 'Do you collect data compliant with public privacy guidelines?',
        answer: 'Yes. We strictly gather publicly accessible business and professional information in accordance with open-source ethical research norms.',
      },
    ],
  },
  {
    id: 'data-cleaning',
    name: 'Data Cleaning',
    category: 'Data Operations',
    shortDesc: 'Eliminate duplicate rows, correct typographical errors, fix inconsistent casing, and validate entries.',
    description: 'Messy datasets cause failed mailings, faulty reports, and wasted time. Alpha Virtual Task cleanses damaged, inconsistent, or outdated data files. We rectify casing, normalize phone numbers and addresses, purge duplicates, and isolate blank anomalies.',
    iconName: 'Sparkles',
    whatWeHelpWith: [
      'Scrubbing large customer contact files with duplicate entries',
      'Standardizing phone codes, zip codes, and state abbreviations',
      'Trimming leading/trailing whitespace and non-printing characters',
      'Harmonizing date formats (DD/MM/YYYY vs MM/DD/YYYY)',
    ],
    typicalTasks: [
      'Deduplicating records using fuzzy match techniques',
      'Normalizing capitalization (Proper Case vs UPPERCASE vs lowercase)',
      'Validating email syntax and discarding malformed strings',
      'Isolating missing critical values into dedicated audit lists',
    ],
    deliverables: [
      'Fully sanitized Excel / CSV workbook',
      'Change log summarizing duplicates eliminated and values standardized',
      'Exception list for records requiring client-side business decisions',
    ],
    suitableCustomers: [
      'Marketers importing contact lists into email marketing platforms',
      'Operations teams migrating between ERP or CRM databases',
      'Financial analysts dealing with unformatted transaction dumps',
    ],
    simpleProcess: [
      { step: 1, title: 'Send Raw Dataset', desc: 'Provide your existing dataset along with known issues or pain points.' },
      { step: 2, title: 'Diagnostic Review', desc: 'We assess inconsistency patterns and propose cleanup rules.' },
      { step: 3, title: 'Automated + Manual Scrub', desc: 'Formulas and manual inspection remove inconsistencies and duplicates.' },
      { step: 4, title: 'Final Sanitized Handover', desc: 'Receive pristine, validated data ready for direct production import.' },
    ],
    faqs: [
      {
        question: 'Will our original raw data be safely preserved?',
        answer: 'Always. We never overwrite original files; we work on isolated copies and provide a clear audit trail.',
      },
    ],
  },
  {
    id: 'data-formatting',
    name: 'Data Formatting',
    category: 'Spreadsheets & Analytics',
    shortDesc: 'Structure raw records into uniform, readable, and presentation-ready tables and workbooks.',
    description: 'Transform unreadable, chaotic data dumps into elegantly formatted, standardized business assets. We organize columns, apply uniform typography and borders, set proper cell number types (currency, dates, percentages), and structure hierarchical tables.',
    iconName: 'LayoutGrid',
    whatWeHelpWith: [
      'Turning raw text outputs into formatted executive spreadsheets',
      'Standardizing reports across multiple branch offices or team members',
      'Setting up cohesive color-coding, borders, and visual hierarchies',
      'Preparing datasets for print or high-resolution PDF presentation',
    ],
    typicalTasks: [
      'Applying custom cell formatting for currency, percentages, and dates',
      'Setting freeze panes, print titles, and auto-fit column dimensions',
      'Creating clear section headers and total summaries',
      'Aligning numbers and text to accounting standards',
    ],
    deliverables: [
      'Formatted Microsoft Excel (.xlsx) / Google Sheets workbook',
      'Optional ready-to-share PDF export with clean page breaks',
    ],
    suitableCustomers: [
      'Executives preparing presentations for board members or investors',
      'Accountants consolidating branch revenue reports',
      'Consultants delivering client-facing analytical reports',
    ],
    simpleProcess: [
      { step: 1, title: 'Submit Unformatted File', desc: 'Provide your raw spreadsheet or plain text export.' },
      { step: 2, title: 'Review Formatting Goals', desc: 'Define your desired styling guidelines, fonts, and table structure.' },
      { step: 3, title: 'Formatting Execution', desc: 'We align fields, apply cell types, and establish visual clarity.' },
      { step: 4, title: 'Polished Handover', desc: 'Receive a sleek, presentation-ready spreadsheet.' },
    ],
    faqs: [
      {
        question: 'Can you match our corporate brand colors and fonts?',
        answer: 'Yes, provide your hex colors or brand guidelines and we will apply them to all sheets.',
      },
    ],
  },
  {
    id: 'data-conversion',
    name: 'Data Conversion',
    category: 'Data Operations',
    shortDesc: 'Seamless conversion between PDF, Word, Excel, CSV, Google Docs, and scanned formats.',
    description: 'Locked PDF tables and image scans should never hold back your productivity. We convert complex tables, non-selectable scanned PDFs, Word tables, and text files into editable, calculation-ready spreadsheets or clean structured text files without losing formatting.',
    iconName: 'Repeat',
    whatWeHelpWith: [
      'Converting locked PDF financial statements into editable Excel sheets',
      'Extracting tabular data from scanned image files (PNG/JPG/TIFF)',
      'Migrating Word tables or Google Docs records into CSV format',
      'Repackaging CSV exports into clean multi-tab workbooks',
    ],
    typicalTasks: [
      'High-fidelity PDF-to-Excel recreation with functional column math',
      'Manual correction of OCR misinterpretations (e.g. 0 vs O, 1 vs l)',
      'Rebuilding multi-column complex layouts into flat tabular format',
      'Image scan to structured text transcription',
    ],
    deliverables: [
      '100% editable Excel (.xlsx), Google Sheets, or CSV document',
      'Side-by-side verification notes ensuring total figure parity',
    ],
    suitableCustomers: [
      'Finance teams dealing with bank statements delivered in static PDF',
      'Legal teams converting paper exhibits into search-ready digital records',
      'Students and researchers converting academic reports for data analysis',
    ],
    simpleProcess: [
      { step: 1, title: 'Send PDF or Scans', desc: 'Upload your document via email or WhatsApp.' },
      { step: 2, title: 'Format Assessment', desc: 'We confirm page count, layout complexity, and delivery turnaround.' },
      { step: 3, title: 'Conversion & Math Check', desc: 'We reconstruct the tables and verify subtotals and totals match 1:1.' },
      { step: 4, title: 'Editable Delivery', desc: 'Download your fully editable file with formula calculations intact.' },
    ],
    faqs: [
      {
        question: 'Do formulas work after converting a financial PDF into Excel?',
        answer: 'Yes! We rebuild live sum and subtotals formulas rather than pasting static numbers whenever requested.',
      },
    ],
  },
  {
    id: 'data-processing',
    name: 'Data Processing',
    category: 'Data Operations',
    shortDesc: 'End-to-end data sorting, filtering, merging, splitting, and calculation pipelines.',
    description: 'Transforming high-volume transactional data into meaningful outputs requires precision processing. Alpha Virtual Task handles database extraction, batch sorting, cross-table merging (VLOOKUP / XLOOKUP / INDEX-MATCH), conditional aggregation, and structured parsing.',
    iconName: 'Cpu',
    whatWeHelpWith: [
      'Combining disparate data files into a single master sheet',
      'Splitting large national datasets into regional or representative files',
      'Cross-referencing multiple files against an identifier code',
      'Performing periodic batch calculations and summaries',
    ],
    typicalTasks: [
      'Merging customer lists using unique IDs or email keys',
      'Filtering and segmenting records by geographical zone or date range',
      'Parsing unstructured address strings into street, city, state, zip',
      'Calculating running balances, averages, and group subtotals',
    ],
    deliverables: [
      'Consolidated master spreadsheet',
      'Segmented sub-files labeled by category or geography',
      'Detailed methodology notes for recurring execution',
    ],
    suitableCustomers: [
      'Retailers processing multi-store weekly sales figures',
      'Logistics companies organizing daily consignment lists',
      'Agencies handling monthly performance metrics across clients',
    ],
    simpleProcess: [
      { step: 1, title: 'Provide Source Files', desc: 'Share your disparate files and define calculation criteria.' },
      { step: 2, title: 'Process Logic Mapping', desc: 'We review joining keys, column mappings, and desired outputs.' },
      { step: 3, title: 'Systematic Processing', desc: 'Data is merged, parsed, calculated, and cross-verified.' },
      { step: 4, title: 'Packaged Delivery', desc: 'Receive your final consolidated files ready for decision making.' },
    ],
    faqs: [
      {
        question: 'Can you handle repetitive weekly or monthly data processing?',
        answer: 'Yes, we gladly establish ongoing recurring workflows tailored to your schedule.',
      },
    ],
  },
  {
    id: 'data-management',
    name: 'Data Management',
    category: 'Data Operations',
    shortDesc: 'Ongoing database updates, record upkeep, catalog maintenance, and file indexing.',
    description: 'Keep your core digital assets organized, current, and accessible. Our data management service offers ongoing administrative stewardship: monitoring catalog inventories, cataloging files with uniform naming schemes, maintaining contact books, and updating operational records.',
    iconName: 'Server',
    whatWeHelpWith: [
      'Maintaining ongoing product inventories and stock status',
      'Organizing digital cloud drives (Google Drive / OneDrive / Dropbox)',
      'Routine auditing and updates of corporate customer directories',
      'Archiving historical records into searchable indices',
    ],
    typicalTasks: [
      'Updating price sheets when supplier lists fluctuate',
      'Standardizing digital folder trees and file naming schemes',
      'Tracking incoming customer records and logging communication dates',
      'Purging defunct records according to client retention criteria',
    ],
    deliverables: [
      'Continuously updated online master databases',
      'Comprehensive index directory of stored files and assets',
      'Periodic status summary of changes made',
    ],
    suitableCustomers: [
      'Growing agencies without a full-time database administrator',
      'eCommerce stores updating weekly price and availability levels',
      'Consultancies requiring organized client document registries',
    ],
    simpleProcess: [
      { step: 1, title: 'System Overview', desc: 'We review your database, portal, or file storage system.' },
      { step: 2, title: 'Standard Operating Procedures', desc: 'We document your maintenance rules, cadence, and permissions.' },
      { step: 3, title: 'Scheduled Execution', desc: 'Continuous or weekly updates are handled systematically.' },
      { step: 4, title: 'Status Reporting', desc: 'You receive transparent updates on records modified and maintained.' },
    ],
    faqs: [
      {
        question: 'Can you work directly within our CRM or cloud spreadsheet?',
        answer: 'Yes, we can manage data directly inside your Google Sheets, Airtable, Notion, or internal web portal.',
      },
    ],
  },
  {
    id: 'excel-spreadsheet-services',
    name: 'Excel & Spreadsheet Services',
    category: 'Spreadsheets & Analytics',
    shortDesc: 'Formulas, dynamic functions, pivot tables, clean templates, and interactive dashboards.',
    description: 'Harness the full power of Microsoft Excel and Google Sheets without spending days debugging formulas. Alpha Virtual Task designs robust formulas (XLOOKUP, INDEX/MATCH, SUMIFS, LAMBDA), dynamic pivot summaries, automated charts, and custom template workbooks tailored to your business needs.',
    iconName: 'FileSpreadsheet',
    whatWeHelpWith: [
      'Building automated financial, invoice, or quote templates',
      'Constructing interactive Pivot Tables and summary slicers',
      'Troubleshooting broken #VALUE!, #REF!, or #N/A calculation errors',
      'Designing clean, intuitive executive dashboards with charts',
    ],
    typicalTasks: [
      'Developing multi-tab models with dynamic lookup dependencies',
      'Setting up automated conditional formatting rules for alert tracking',
      'Configuring data validation dropdown menus and input controls',
      'Summarizing complex sales logs into monthly executive views',
    ],
    deliverables: [
      'Fully unlocked, formula-driven Excel (.xlsx) or Google Sheets workbook',
      'User instructions explaining cell inputs, dropdowns, and formulas',
    ],
    suitableCustomers: [
      'Business owners needing clean quote generators or cost calculators',
      'Operations directors tracking KPIs across teams',
      'Finance professionals needing faster data consolidation models',
    ],
    simpleProcess: [
      { step: 1, title: 'Describe Your Goal', desc: 'Explain what data you input and what summaries you want calculated.' },
      { step: 2, title: 'Architecture & Mockup', desc: 'We propose the sheet layout, formula methods, and controls.' },
      { step: 3, title: 'Formula Construction', desc: 'We implement dynamic formulas, checks, and formatting.' },
      { step: 4, title: 'Walkthrough & Handover', desc: 'Receive the unlocked spreadsheet with full guidance on usage.' },
    ],
    faqs: [
      {
        question: 'Will the workbook work in both Microsoft Excel and Google Sheets?',
        answer: 'We can optimize the formulas specifically for Excel or Google Sheets according to your preferred tool.',
      },
      {
        question: 'Are the formulas locked or password-protected?',
        answer: 'No, you receive complete 100% unlocked ownership of your spreadsheets and formulas.',
      },
    ],
  },
  {
    id: 'web-research',
    name: 'Web Research & Data Collection',
    category: 'Research & Content',
    shortDesc: 'Comprehensive internet research, market insights, vendor scouting, and contact discovery.',
    description: 'Accurate business decisions depend on thorough research. Our team conducts manual web research across trade directories, industry journals, social platforms, and public registries to compile deep, verified facts, vendor comparisons, contact details, and market overviews.',
    iconName: 'Search',
    whatWeHelpWith: [
      'Scouting potential suppliers, manufacturers, and trade partners',
      'Conducting competitor price and feature benchmark studies',
      'Finding decision-maker contact details (LinkedIn, corporate sites)',
      'Aggregating industry reports, statistics, and regulatory news',
    ],
    typicalTasks: [
      'Deep targeted searching using advanced query operators',
      'Compiling comprehensive competitor comparison matrixes',
      'Verifying company domains, corporate office addresses, and emails',
      'Documenting key findings with primary source citations',
    ],
    deliverables: [
      'Comprehensive research report in Word/PDF or structured Excel sheet',
      'Direct links to all original reference sources',
    ],
    suitableCustomers: [
      'Founders scouting manufacturers and evaluating niche market spaces',
      'Consultants preparing background briefs for client pitches',
      'Procurement officers sourcing verified alternative suppliers',
    ],
    simpleProcess: [
      { step: 1, title: 'Submit Research Brief', desc: 'Define your industry, targets, geography, and specific questions.' },
      { step: 2, title: 'Research Methodology', desc: 'We outline our search channels and confirm expected data points.' },
      { step: 3, title: 'Investigation & Verification', desc: 'Thorough, multi-source investigation and cross-verification.' },
      { step: 4, title: 'Report Delivery', desc: 'You receive structured findings with verified links and conclusions.' },
    ],
    faqs: [
      {
        question: 'How do you ensure information found online is reliable?',
        answer: 'We prioritize primary sources (official company pages, regulatory filings, established publications) and cross-verify facts across at least two independent channels.',
      },
    ],
  },
  {
    id: 'transcription',
    name: 'Transcription',
    category: 'Research & Content',
    shortDesc: 'Verbatim and clean-read audio and video transcription with time-stamps and speaker tagging.',
    description: 'Turn your recorded meetings, interviews, webinars, dictations, and podcasts into crisp, accurate written documents. We deliver both clean-read transcripts (removing filler words and stutters) and strict verbatim transcripts with optional speaker identification and timestamps.',
    iconName: 'Mic',
    whatWeHelpWith: [
      'Transcribing corporate Zoom meetings, team huddles, and stakeholder calls',
      'Converting audio interviews, focus groups, and academic recordings',
      'Generating video subtitles, podcast show notes, and written briefs',
      'Documenting executive voice memos and legal dictations',
    ],
    typicalTasks: [
      'Accurate speaker separation and attribution (e.g. Speaker 1, Speaker 2)',
      'Precise timestamping at requested intervals (e.g. every 2 minutes or change of speaker)',
      'Spellchecking specialized industry terminology and brand names',
      'Formatting transcripts for immediate reading or article production',
    ],
    deliverables: [
      'Clean Microsoft Word (.docx), Google Doc, or PDF transcript',
      'Optional SRT / VTT subtitle caption files for video players',
    ],
    suitableCustomers: [
      'Journalists, authors, and podcasters repurposing audio content',
      'Corporate executives documenting strategic planning meetings',
      'Academic researchers analyzing recorded qualitative interviews',
    ],
    simpleProcess: [
      { step: 1, title: 'Upload Audio/Video', desc: 'Share your file link (Drive, Dropbox, YouTube, or direct upload).' },
      { step: 2, title: 'Select Style', desc: 'Choose Clean-Read or Strict Verbatim, plus timestamp frequency.' },
      { step: 3, title: 'Transcription & Proofing', desc: 'Careful listening, manual typing, and dual-pass proofreading.' },
      { step: 4, title: 'Final Transcript Delivery', desc: 'Receive your polished document ready for publishing or reference.' },
    ],
    faqs: [
      {
        question: 'What audio formats do you accept?',
        answer: 'We accept MP3, MP4, WAV, M4A, AAC, MOV, and shared links (Google Drive, Dropbox, Loom, YouTube).',
      },
      {
        question: 'What is the difference between Clean-Read and Strict Verbatim?',
        answer: 'Clean-Read removes filler words like "um", "uh", and false starts for a smooth reading experience. Strict Verbatim records every utterance exactly as spoken.',
      },
    ],
  },
  {
    id: 'translation',
    name: 'Translation',
    category: 'Research & Content',
    shortDesc: 'Professional, context-aware human translation preserving nuanced tone and technical meaning.',
    description: 'Bridge language gaps with clear, context-accurate human translation. We translate business documents, product catalogs, customer emails, websites, and instructional manuals between English and major regional and global languages, ensuring cultural fluency and precise technical vocabulary.',
    iconName: 'Languages',
    whatWeHelpWith: [
      'Translating product descriptions, user guides, and technical manuals',
      'Adapting marketing copy, website sections, and customer notices',
      'Translating business letters, commercial proposals, and emails',
      'Localizing educational materials and survey questionnaires',
    ],
    typicalTasks: [
      'Context-aware sentence translation preserving original intent',
      'Glossary maintenance for consistent industry terminology',
      'Formatting preservation to match original layout typography',
      'Bilingual dual-column review formatting',
    ],
    deliverables: [
      'Translated text in Word (.docx), Google Docs, or PDF',
      'Optional bilingual side-by-side verification sheet',
    ],
    suitableCustomers: [
      'Businesses expanding into multi-lingual customer regions',
      'eCommerce brands localizing product listings for international buyers',
      'NGOs and educational institutions sharing guidance in regional tongues',
    ],
    simpleProcess: [
      { step: 1, title: 'Share Document', desc: 'Provide your source text and specify target language(s).' },
      { step: 2, title: 'Context & Tone Alignment', desc: 'We review the target audience (formal, technical, or conversational).' },
      { step: 3, title: 'Human Translation', desc: 'Accurate translation with cultural adaptation and terminology care.' },
      { step: 4, title: 'Review & Delivery', desc: 'Proofread and verified document delivered in your desired format.' },
    ],
    faqs: [
      {
        question: 'Do you use raw machine translation?',
        answer: 'No. All translations are carefully reviewed, adapted, and refined by human hands to guarantee tone and natural comprehension.',
      },
    ],
  },
  {
    id: 'proofreading',
    name: 'Proofreading',
    category: 'Research & Content',
    shortDesc: 'Meticulous review for grammar, syntax, punctuation, consistency, and professional flow.',
    description: 'Ensure every published word reflects professionalism and authority. Alpha Virtual Task proofreads and refines your business documents, proposals, marketing emails, academic papers, and website copy. We rectify spelling errors, punctuation oversights, awkward phrasings, and stylistic irregularities.',
    iconName: 'CheckCheck',
    whatWeHelpWith: [
      'Polishing executive presentations, pitch decks, and proposals',
      'Refining website copy, blog posts, and marketing collateral',
      'Checking academic articles, dissertations, and research papers',
      'Auditing corporate policies, SOPs, and employee handbooks',
    ],
    typicalTasks: [
      'Correcting grammatical, typographical, and punctuation errors',
      'Enhancing sentence flow, transitions, and clarity without altering core voice',
      'Ensuring consistent styling (capitalization, acronyms, numbering)',
      'Eliminating unintentional tautology and redundancies',
    ],
    deliverables: [
      'Clean final document ready for publication',
      'Marked-up version with tracked changes so you see every modification',
    ],
    suitableCustomers: [
      'Authors and content creators releasing articles or eBooks',
      'Business founders submitting high-stakes client proposals',
      'Students and researchers submitting academic dissertations',
    ],
    simpleProcess: [
      { step: 1, title: 'Send Your Text', desc: 'Submit your draft via Word document, Google Doc, or PDF.' },
      { step: 2, title: 'Specify Style Guide', desc: 'Indicate your target audience and dialect preference (US / UK English).' },
      { step: 3, title: 'Detailed Review', desc: 'Line-by-line inspection with grammar, rhythm, and tone refinement.' },
      { step: 4, title: 'Deliver Tracked Version', desc: 'Receive clean and tracked-changes documents with notes.' },
    ],
    faqs: [
      {
        question: 'Will proofreading alter my personal writing voice?',
        answer: 'Not at all. Our goal is to enhance clarity, rhythm, and correctness while strictly preserving your authentic author voice.',
      },
    ],
  },
  {
    id: 'qa-quality-assurance',
    name: 'QA — Quality Assurance',
    category: 'Quality Assurance',
    shortDesc: 'Thorough auditing, cross-verification, checklist testing, and process compliance checks.',
    description: 'Before rolling out a data project, public document, digital process, or platform update, ensure everything functions flawlessly. Our Quality Assurance service performs exhaustive verification routines, checking data outputs against specifications, validating links, and inspecting test workflows.',
    iconName: 'ShieldCheck',
    whatWeHelpWith: [
      'Auditing large datasets for missing values, format breaks, and errors',
      'Manual regression testing of web forms, payment links, and checkout flows',
      'Verifying complex report figures against source documents',
      'Checking document compliance against specified publishing checklists',
    ],
    typicalTasks: [
      'Executing systematic test checklists across browsers and devices',
      'Cross-checking numeric tables against source invoices or ledgers',
      'Logging reproducible issue reports with screenshots and severity tags',
      'Validating hyperlink integrity across lengthy digital reports or sites',
    ],
    deliverables: [
      'Comprehensive QA Audit Report detailing passes, warnings, and failures',
      'Annotated screenshots and error logs for fast resolution',
    ],
    suitableCustomers: [
      'Agencies delivering client deliverables requiring independent second-eyes review',
      'Web developers launching new eCommerce landing pages or forms',
      'Data teams preparing major migrations requiring audit assurance',
    ],
    simpleProcess: [
      { step: 1, title: 'Share Specs & Criteria', desc: 'Define acceptance criteria, test cases, and expectations.' },
      { step: 2, title: 'Audit Execution', desc: 'Rigorous checklist-driven verification across all project facets.' },
      { step: 3, title: 'Discrepancy Logging', desc: 'Clear itemization of discrepancies, severity ranks, and notes.' },
      { step: 4, title: 'Final Sign-Off', desc: 'Re-testing after corrections to ensure 100% compliance.' },
    ],
    faqs: [
      {
        question: 'What kind of deliverables can you QA?',
        answer: 'We QA datasets, spreadsheets, PDFs, web forms, landing pages, digital catalogs, and documentation.',
      },
    ],
  },
  {
    id: 'cqa-content-quality-assurance',
    name: 'CQA — Content Quality Assurance',
    category: 'Quality Assurance',
    shortDesc: 'Reviewing digital content for branding consistency, link integrity, media formatting, and accuracy.',
    description: 'Content Quality Assurance (CQA) goes beyond simple grammar proofreading. We evaluate the holistic presentation of your digital content: checking brand alignment, image resolutions, hyperlink accuracy, metadata correctness, responsive mobile presentation, and legal disclaimer visibility.',
    iconName: 'FileCheck2',
    whatWeHelpWith: [
      'Auditing digital landing pages and marketing funnels before launch',
      'Verifying brand guide conformity (fonts, logo usage, color palettes)',
      'Checking links, buttons, and call-to-actions across published articles',
      'Ensuring media assets, captions, and tables display correctly on all screens',
    ],
    typicalTasks: [
      'Click-testing every hyperlink, anchor tag, and download asset',
      'Inspecting image aspect ratios, sharpness, and alt text presence',
      'Verifying disclaimers, copyrights, and terms alignment',
      'Scoring overall visual readability and layout harmony',
    ],
    deliverables: [
      'Itemized Content QA scorecard with actionable correction points',
      'Visual screenshot annotations of formatting anomalies',
    ],
    suitableCustomers: [
      'Marketing directors launching multi-page campaigns or rebranding',
      'Publishers publishing high-volume digital guides or courses',
      'Founders maintaining high brand standards across public materials',
    ],
    simpleProcess: [
      { step: 1, title: 'Provide Content URL / Draft', desc: 'Share your staging website, publication draft, or asset pack.' },
      { step: 2, title: 'Criteria Calibration', desc: 'We align on brand guidelines, target devices, and standards.' },
      { step: 3, title: 'Comprehensive Inspection', desc: 'Exhaustive audit across text, links, visual hierarchy, and UX flow.' },
      { step: 4, title: 'Actionable Handover', desc: 'Detailed report with prioritized fixes for a flawless launch.' },
    ],
    faqs: [
      {
        question: 'How does CQA differ from regular Proofreading?',
        answer: 'Proofreading focuses strictly on textual spelling and grammar. CQA evaluates the full customer experience: links, visual alignment, media sharpness, mobile responsiveness, and brand conformity.',
      },
    ],
  },
];

export const SERVICE_CATEGORIES = [
  'All Services',
  'Data Operations',
  'Spreadsheets & Analytics',
  'Research & Content',
  'Quality Assurance',
] as const;

export function getServiceById(id: string): ServiceItem | undefined {
  return SERVICES_DATA.find((service) => service.id.toLowerCase() === id.toLowerCase());
}
