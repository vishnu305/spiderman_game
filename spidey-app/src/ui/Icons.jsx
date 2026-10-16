// Hand-made glossy icons (SVG) for the Talking-Tom style tiles.
import React from 'react';

const S = { strokeLinecap: 'round', strokeLinejoin: 'round' };
export const IconTalk = () => (
  <svg viewBox="0 0 64 64"><path d="M12 14h40a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H30l-12 10v-10h-6a6 6 0 0 1-6-6V20a6 6 0 0 1 6-6z" fill="#fff" />
    <g stroke="#1b6fd8" strokeWidth="4" {...S}><path d="M20 30v4M27 25v14M34 22v20M41 26v12M48 30v4" /></g></svg>
);
export const IconRepeat = () => (
  <svg viewBox="0 0 64 64"><g fill="none" stroke="#fff" strokeWidth="6" {...S}><path d="M14 30a18 18 0 0 1 31-12l5 5" /><path d="M50 34a18 18 0 0 1-31 12l-5-5" /></g>
    <path d="M52 12v14H38z" fill="#fff" /><path d="M12 52V38h14z" fill="#fff" /><circle cx="32" cy="32" r="7" fill="#ffe36a" stroke="#fff" strokeWidth="3" /></svg>
);
export const IconType = () => (
  <svg viewBox="0 0 64 64"><rect x="6" y="16" width="52" height="34" rx="7" fill="#fff" />
    <g fill="#c2410c">{[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={12 + i * 7.3} y="22" width="5" height="5" rx="1.5" />)}{[0, 1, 2, 3, 4].map((i) => <rect key={'b' + i} x={15 + i * 7.3} y="30" width="5" height="5" rx="1.5" />)}<rect x="18" y="39" width="28" height="5" rx="2" /></g></svg>
);
export const IconNews = () => (
  <svg viewBox="0 0 64 64"><g stroke="#fff" strokeWidth="3.5" {...S}><path d="M24 6l8 9 8-9" fill="none" /></g>
    <rect x="6" y="15" width="52" height="38" rx="8" fill="#fff" /><rect x="11" y="20" width="32" height="28" rx="5" fill="#7c1d1d" />
    <g fill="#fff"><rect x="14" y="24" width="18" height="4" rx="1" /><rect x="14" y="31" width="26" height="3" rx="1" /><rect x="14" y="37" width="22" height="3" rx="1" /></g>
    <circle cx="50" cy="26" r="3.5" fill="#7c1d1d" /><circle cx="50" cy="36" r="3.5" fill="#7c1d1d" /><rect x="47" y="42" width="6" height="2.5" rx="1" fill="#7c1d1d" /></svg>
);
export const IconMic = ({ off }) => (
  <svg viewBox="0 0 64 64"><rect x="23" y="6" width="18" height="32" rx="9" fill="#fff" /><g fill="none" stroke="#fff" strokeWidth="5" {...S}><path d="M14 30a18 18 0 0 0 36 0" /><path d="M32 48v9M22 57h20" /></g>
    {off && <path d="M10 10l44 44" stroke="#fff" strokeWidth="7" {...S} />}{off && <path d="M10 10l44 44" stroke="#b91c1c" strokeWidth="3" {...S} />}</svg>
);
export const IconFun = () => (
  <svg viewBox="0 0 64 64"><path d="M22 54c-6-4-10-12-10-20V20a4 4 0 0 1 8 0v10V12a4 4 0 0 1 8 0v18V9a4 4 0 0 1 8 0v21V13a4 4 0 0 1 8 0v26c0 2 2 2 3 0l3-7a4 4 0 0 1 7 4l-6 14c-3 6-8 9-15 9z" fill="#fff" />
    <path d="M27 40l4 4 9-9" fill="none" stroke="#7e22ce" strokeWidth="4" {...S} /></svg>
);
export const IconSuit = () => (
  <svg viewBox="0 0 64 64"><path d="M20 8l12 8 12-8 14 8-4 14-6-2v28H16V28l-6 2-4-14z" fill="#fff" /><path d="M24 8l8 18 8-18" fill="#d4151f" />
    <path d="M26 20l6 4-6 4zM38 20l-6 4 6 4z" fill="#111" /><circle cx="32" cy="38" r="2.5" fill="#92400e" /><circle cx="32" cy="46" r="2.5" fill="#92400e" /></svg>
);
export const IconGear = () => (
  <svg viewBox="0 0 48 48"><path fill="#fff" fillRule="evenodd" d="M24 13a11 11 0 1 0 0 22a11 11 0 1 0 0-22zm0 6.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 1 1 0-9z" />
    <g fill="#fff">{[0, 45, 90, 135].map((r) => <rect key={r} x="20.5" y="3" width="7" height="42" rx="3" transform={`rotate(${r} 24 24)`} />)}</g><circle cx="24" cy="24" r="4.5" fill="#4a5f8c" /></svg>
);
export const IconWeb = () => (
  <svg viewBox="0 0 64 64"><g stroke="#fff" strokeWidth="2.5" fill="none">{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <path key={i} d={`M32 32L${32 + 28 * Math.cos((i * Math.PI) / 4)} ${32 + 28 * Math.sin((i * Math.PI) / 4)}`} />)}
    {[8, 15, 22].map((r) => <polygon key={r} points={[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `${32 + r * Math.cos((i * Math.PI) / 4)},${32 + r * Math.sin((i * Math.PI) / 4)}`).join(' ')} />)}</g>
    <ellipse cx="32" cy="34" rx="4" ry="7" fill="#111" /><circle cx="32" cy="25" r="3" fill="#111" /></svg>
);
export const IconPlay = ({ stop }) => (stop ? <svg viewBox="0 0 64 64"><rect x="16" y="16" width="32" height="32" rx="6" fill="#fff" /></svg> : <svg viewBox="0 0 64 64"><path d="M20 12l32 20-32 20z" fill="#fff" /></svg>);
export const IconNext = () => <svg viewBox="0 0 64 64"><path d="M12 14l24 18-24 18zM34 14l20 18-20 18z" fill="#fff" /></svg>;
export const IconSend = () => <svg viewBox="0 0 64 64"><path d="M8 30L56 10 42 56 30 38z" fill="#fff" /><path d="M30 38l26-28" stroke="#c2410c" strokeWidth="4" /></svg>;
export const IconSpeaker = () => <svg viewBox="0 0 64 64"><path d="M10 24h10l14-12v40L20 40H10z" fill="#fff" /><g fill="none" stroke="#fff" strokeWidth="5" {...S}><path d="M42 22a14 14 0 0 1 0 20M48 14a24 24 0 0 1 0 36" /></g></svg>;
