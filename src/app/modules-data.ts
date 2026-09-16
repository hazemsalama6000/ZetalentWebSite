export interface ModuleInfo {
  slug: string;
  order: number;
  icon: string;
}

export interface ModuleText {
  navTitle: string;
  badge: string;
  heroTitle: string;
  tagline: string;
  features: string[];
}

export const MODULES: ModuleInfo[] = [
  { slug: 'employees', order: 1, icon: 'users' },
  { slug: 'payroll', order: 2, icon: 'wallet' },
  { slug: 'self-service', order: 3, icon: 'smartphone' },
  { slug: 'attendance', order: 4, icon: 'clock' },
  { slug: 'business-trip', order: 5, icon: 'plane' },
  { slug: 'performance', order: 6, icon: 'clipboardCheck' },
  { slug: 'talent-development', order: 7, icon: 'graduationCap' },
  { slug: 'talent-acquisition', order: 8, icon: 'search' },
  { slug: 'career-path', order: 9, icon: 'trendingUp' },
  { slug: 'succession-planning', order: 10, icon: 'userCheck' },
];
