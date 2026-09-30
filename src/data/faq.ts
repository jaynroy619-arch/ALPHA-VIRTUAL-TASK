export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const MAIN_FAQS: FAQItem[] = [
  {
    id: 'services-overview',
    category: 'General',
    question: 'What services do you provide?',
    answer:
      'Alpha Virtual Task specializes in 14 core virtual and data solutions: Data Entry, Data Collection, Data Cleaning, Data Formatting, Data Conversion, Data Processing, Data Management, Excel & Spreadsheet Services, Web Research, Audio/Video Transcription, Translation, Proofreading, Quality Assurance (QA), and Content Quality Assurance (CQA).',
  },
  {
    id: 'how-to-work',
    category: 'Getting Started',
    question: 'How can I work with Alpha Virtual Task?',
    answer:
      'Working with us is straightforward and hassle-free: 1. Explore our services and identify what you need. 2. Click "Work With Us" to reach us directly on WhatsApp, Email, or Phone. 3. Discuss your requirements, deadlines, and files with our team. 4. Agree on fair pricing and timeline. 5. We complete the work to your exact satisfaction.',
  },
  {
    id: 'account-required',
    category: 'Getting Started',
    question: 'Do I need to create an account?',
    answer:
      'No. You do not need to register, create accounts, or remember passwords. You can directly contact us through WhatsApp (+91 7738767859), email (alphavirtualtask@gmail.com), or phone.',
  },
  {
    id: 'request-service',
    category: 'Getting Started',
    question: 'How do I request a service?',
    answer:
      'Simply click the "Work With Us" button anywhere on the website or navigate to our Contact page. Select your preferred channel (WhatsApp, Email, or Phone Call), share a brief summary of what you need, and we will respond promptly to organize the details.',
  },
  {
    id: 'send-files',
    category: 'Workflow & Files',
    question: 'Can I send files?',
    answer:
      'Yes. You can share files securely through WhatsApp, email attachments, or shared cloud links (Google Drive, OneDrive, Dropbox, WeTransfer). We treat all client materials with strict confidentiality.',
  },
  {
    id: 'pricing-structure',
    category: 'Pricing & Payment',
    question: 'How is the price decided?',
    answer:
      'Pricing depends on the type, complexity, volume, and specific requirements of the work. Because every project is unique, we discuss your scope first and provide a clear, transparent, and fair quote with zero hidden surprises.',
  },
  {
    id: 'currencies-inr-usd',
    category: 'Pricing & Payment',
    question: 'Do you accept INR and USD?',
    answer:
      'Yes. Our primary currency is ₹ INR for domestic clients in India, and our secondary currency is $ USD for international clients. Payment methods and invoicing details are confirmed during your project discussion.',
  },
  {
    id: 'turnaround-time',
    category: 'Delivery & Revisions',
    question: 'How long does a project take?',
    answer:
      'Turnaround depends on project volume and complexity. Small tasks and standard batches can often be delivered within 24 to 48 hours, while larger continuous database or research projects are scheduled with agreed milestones. We always commit to deadlines before starting.',
  },
  {
    id: 'revisions-policy',
    category: 'Delivery & Revisions',
    question: 'Can I request revisions?',
    answer:
      'Yes, absolutely. Our motto is "Your Trust Our Priority". If any deliverable requires adjustments or fine-tuning based on the initial agreed scope, we address it promptly until you are satisfied.',
  },
  {
    id: 'contact-support',
    category: 'Support',
    question: 'How can I contact support or check progress?',
    answer:
      'You have direct access to our team throughout the project. Reach us anytime via WhatsApp at +91 7738767859 or email at alphavirtualtask@gmail.com during operating hours (Mon–Sat, 9:00 AM – 8:00 PM IST).',
  },
];
