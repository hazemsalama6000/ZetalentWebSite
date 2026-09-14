export interface ModuleInfo {
  slug: string;
  order: number;
  navTitle: string;
  icon: string;
  badge: string;
  heroTitle: string;
  tagline: string;
  features: string[];
}

export const MODULES: ModuleInfo[] = [
  {
    slug: 'employees',
    order: 1,
    navTitle: 'Employees Management',
    icon: 'users',
    badge: 'EMPLOYEES',
    heroTitle: 'Comprehensive Employee Profiles',
    tagline: 'Build a complete picture of every team member with rich, structured data that powers smarter HR decisions.',
    features: [
      'Organization structures, visualized',
      'Multi-level hierarchy — country, company, currency',
      'Centralized HR documentation & asset management',
      'Customized reports for any HR need',
    ],
  },
  {
    slug: 'payroll',
    order: 2,
    navTitle: 'Payroll Management',
    icon: 'wallet',
    badge: 'PAYROLL',
    heroTitle: 'Complicated Payroll, Simplified',
    tagline: 'Handle even the most complex payroll and personnel operations with confidence, from leave to daily transactions.',
    features: [
      'Automated leave & overtime management',
      'Day-to-day transactions handled in real time',
      'Compensation, allowances & benefits administration',
      'Multi-country, multi-currency support',
    ],
  },
  {
    slug: 'self-service',
    order: 3,
    navTitle: 'Self Service & Mobile App',
    icon: 'smartphone',
    badge: 'SELF SERVICE',
    heroTitle: 'Empower Every Employee',
    tagline: 'Give your workforce the tools they need to stay informed, engaged, and productive — all from their own device.',
    features: [
      'Employee engagement & announcements',
      'Electronic pay slip distribution',
      'Requests & workflow approvals on the go',
      'Mobile app with intelligent punches',
    ],
  },
  {
    slug: 'attendance',
    order: 4,
    navTitle: 'Time Attendance',
    icon: 'clock',
    badge: 'TIME & ATTENDANCE',
    heroTitle: 'Smart Attendance Management',
    tagline: 'Track time accurately across every shift, location, and team — with intelligent recommendations built in.',
    features: [
      'Multi-shift, fully parameterized scheduling',
      'Attendance tracking across teams & locations',
      'Smart action-recommendation system',
      'Integrates with all attendance machines',
    ],
  },
  {
    slug: 'business-trip',
    order: 5,
    navTitle: 'Business Trip Management',
    icon: 'plane',
    badge: 'BUSINESS TRIP',
    heroTitle: 'Simplify Every Business Trip',
    tagline: 'Give employees and managers full visibility into travel — from request to reimbursement.',
    features: [
      'Online trip requests & manager approvals',
      'Trip budget and expense tracking',
      'Itinerary and travel details in one place',
      'Real-time trip status and reporting',
    ],
  },
  {
    slug: 'performance',
    order: 6,
    navTitle: 'Performance Appraisal',
    icon: 'clipboardCheck',
    badge: 'PERFORMANCE',
    heroTitle: 'Evaluate, Reward, and Grow',
    tagline: 'Design appraisal cycles that reflect your culture and link performance directly to compensation.',
    features: [
      'Design your own appraisal cycles',
      'Evaluate against planned targets & objectives',
      'Comprehensive analytical reports',
      'Direct pay-for-performance linkage',
    ],
  },
  {
    slug: 'talent-development',
    order: 7,
    navTitle: 'Talent Development',
    icon: 'graduationCap',
    badge: 'TALENT DEVELOPMENT',
    heroTitle: 'Develop Your Talent',
    tagline: 'Identify skill gaps and build the training programs that close them, backed by clear reporting.',
    features: [
      'Competency gap analysis',
      'Training course & calendar management',
      'Automated feedback via training surveys',
      'Full training cost & ROI analysis',
    ],
  },
  {
    slug: 'talent-acquisition',
    order: 8,
    navTitle: 'Talent Acquisition',
    icon: 'search',
    badge: 'TALENT ACQUISITION',
    heroTitle: 'Hire the Right People, Faster',
    tagline: 'Simplify job posting, interview scheduling, and offers — with a career site that reflects your brand.',
    features: [
      'Job posting, pipeline & interview scheduling',
      'Bulk email & customized career site',
      'Digitized interviews & automated offers',
      'Configurable recruitment channels',
    ],
  },
  {
    slug: 'career-path',
    order: 9,
    navTitle: 'Career Path Planning',
    icon: 'trendingUp',
    badge: 'CAREER PATHING',
    heroTitle: 'Build Careers, Not Just Jobs',
    tagline: 'Combine employee assessments with clear, competency-based career paths that motivate your people.',
    features: [
      'Competency-based career paths',
      'Assessments linked to growth planning',
      'Employees choose their own career goals',
      'Identify employees ready for promotion',
    ],
  },
  {
    slug: 'succession-planning',
    order: 10,
    navTitle: 'Succession Planning',
    icon: 'userCheck',
    badge: 'SUCCESSION PLANNING',
    heroTitle: "Plan for What's Next",
    tagline: 'Identify your key positions and potential successors well before you need them.',
    features: [
      'Identify key positions & potential successors',
      'Evaluate candidates against job requirements',
      'Assess employee readiness',
      'Targeted training to prepare successors',
    ],
  },
];
