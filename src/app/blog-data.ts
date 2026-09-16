export interface BlogTocEntry {
  id: string;
  label: string;
}

export interface BlogSubsection {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
  listType?: 'ordered' | 'unordered';
  outro?: string[];
}

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  listType?: 'ordered' | 'unordered';
  outro?: string[];
  subsections?: BlogSubsection[];
}

export interface BlogContent {
  category: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  readTime: string;
  author: string;
  toc: BlogTocEntry[];
  sections: BlogSection[];
}

export interface BlogMeta {
  slug: string;
  icon: string;
  image: string;
  date: string;
}

export type BlogPost = BlogMeta & BlogContent;

export const BLOG_POSTS: BlogMeta[] = [
  {
    slug: '5-hr-technology-trends-2024',
    icon: 'cpu',
    image: '/images/blog/hr-technology-trends.jpg',
    date: '2024-01-10',
  },
  {
    slug: 'payroll-automation-save-time-boost-accuracy',
    icon: 'wallet',
    image: '/images/blog/payroll-automation.jpg',
    date: '2024-02-14',
  },
  {
    slug: 'top-5-hr-challenges-small-businesses',
    icon: 'users',
    image: '/images/blog/hr-challenges-small-business.jpg',
    date: '2024-03-20',
  },
];
