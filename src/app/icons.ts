export const ICON_PATHS: Record<string, string> = {
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  clipboardCheck: '<rect x="6" y="3" width="12" height="4" rx="1"/><path d="M6 5H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="m9 14 2 2 4-4"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  cloud: '<path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.32-1.94A5 5 0 0 0 6.5 19h11z"/>',
  shieldCheck: '<path d="M12 22s8-3.5 8-10.5V5l-8-3-8 3v6.5C4 18.5 12 22 12 22z"/><path d="m9 12 2 2 4-4"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07l1.5-1.5"/>',
  smartphone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 5-5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/>',
  cpu: '<rect x="7" y="7" width="10" height="10" rx="1"/><rect x="10" y="10" width="4" height="4"/><path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3"/>',
  handshake: '<path d="M7 11 3 15l3 3 4-4"/><path d="m10 14 3 3a1.9 1.9 0 0 0 2.7-2.7l-3.6-3.6"/><path d="m13 11 2 2a1.9 1.9 0 0 0 2.7-2.7L14 6.6a3 3 0 0 0-4.2 0l-1 1"/><path d="M8.5 8 11 5.5a3 3 0 0 1 4.2 0"/>',
  wallet: '<path d="M20 7H5a2 2 0 0 1 0-4h12a2 2 0 0 1 2 2v2z"/><path d="M3 7v11a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H5"/><path d="M17 14h.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  plane: '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/>',
  graduationCap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12.5V17c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5"/><path d="M22 10v6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  trendingUp: '<polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>',
  userCheck: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m17 11 2 2 4-4"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  headset: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2z"/><path d="M3 14v4a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z"/><path d="M9 21h3"/>',
  mapPin: '<path d="M21 10c0 6.5-9 12.5-9 12.5S3 16.5 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  phone: '<path d="M22 16.92v2.5a2 2 0 0 1-2.18 2 19.6 19.6 0 0 1-8.54-3.04 19.3 19.3 0 0 1-5.93-5.93A19.6 19.6 0 0 1 2.31 4.4 2 2 0 0 1 4.3 2.2h2.5a2 2 0 0 1 2 1.72c.13.95.36 1.88.69 2.76a2 2 0 0 1-.45 2.11L8.1 9.83a15.7 15.7 0 0 0 6.07 6.07l1.04-1.04a2 2 0 0 1 2.11-.45c.88.33 1.81.56 2.76.69a2 2 0 0 1 1.72 2.03z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  send: '<path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7z"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  arrowUpRight: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
};

export function iconMarkup(name: string): string {
  const inner = ICON_PATHS[name] ?? '';
  return `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}
