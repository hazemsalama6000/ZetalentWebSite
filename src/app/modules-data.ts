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
  { slug: 'employees', order: 1, icon: 'mEmployees' },
  { slug: 'payroll', order: 2, icon: 'mPayroll' },
  { slug: 'self-service', order: 3, icon: 'mSelfService' },
  { slug: 'attendance', order: 4, icon: 'mAttendance' },
  { slug: 'business-trip', order: 5, icon: 'mBusinessTrip' },
  { slug: 'performance', order: 6, icon: 'mPerformance' },
  { slug: 'talent-development', order: 7, icon: 'mTalentDevelopment' },
  { slug: 'talent-acquisition', order: 8, icon: 'mTalentAcquisition' },
  { slug: 'career-path', order: 9, icon: 'mCareerPath' },
  { slug: 'succession-planning', order: 10, icon: 'mSuccession' },
];
