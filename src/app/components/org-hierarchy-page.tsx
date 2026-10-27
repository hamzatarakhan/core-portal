import React, { useState } from 'react';
import { Search, ZoomIn, ZoomOut, Users, X, RotateCcw } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface HierarchyNode {
  label: string;
  children?: HierarchyNode[];
}

interface NodeUser {
  id: string;
  name: string;
  role: string;
  status: 'Active' | 'Inactive';
}

// ─── Tree data ────────────────────────────────────────────────────────────────

const hierarchyData: HierarchyNode = {
  label: 'Operator',
  children: [
    {
      label: 'Retail',
      children: [
        { label: 'Franchise',   children: [{ label: 'Pay Desk Group', children: [{ label: 'Pay Desk', children: [{ label: 'Agent' }] }] }] },
        { label: 'Dealer',      children: [{ label: 'Pay Desk Group', children: [{ label: 'Pay Desk', children: [{ label: 'Agent' }] }] }] },
        { label: 'stc Channel', children: [{ label: 'Pay Desk Group', children: [{ label: 'Pay Desk', children: [{ label: 'Agent' }] }] }] },
      ],
    },
    {
      label: 'Wholesale',
      children: [
        { label: 'Partner', children: [{ label: 'Shops', children: [{ label: 'UATchiled' }] }] },
      ],
    },
    {
      label: 'Internal Users',
      children: [
        { label: 'HR' }, { label: 'CXOs' }, { label: 'Finance' }, { label: 'Commission' },
        { label: 'IT' }, { label: 'Supply Chain & Operations' }, { label: 'GMs & Directors' },
        { label: 'Admins' }, { label: 'DCC' },
      ],
    },
    { label: 'External Parties' },
  ],
};

// ─── Node users data ──────────────────────────────────────────────────────────

const nodeUsersData: Record<string, NodeUser[]> = {
  'Operator':   [
    { id: '1', name: 'Khalid Al-Mansouri', role: 'Chief Operations Officer', status: 'Active'   },
    { id: '2', name: 'Sarah Mitchell',     role: 'System Administrator',      status: 'Active'   },
    { id: '3', name: 'David Park',         role: 'Operations Analyst',         status: 'Inactive' },
  ],
  'Retail':     [
    { id: '1', name: 'Amira Hassan', role: 'Retail Director', status: 'Active' },
    { id: '2', name: 'Tom Williams', role: 'Retail Manager',  status: 'Active' },
  ],
  'Franchise':  [
    { id: '1', name: 'Nour Al-Amin',   role: 'Franchise Manager',     status: 'Active' },
    { id: '2', name: 'Emma Rodriguez', role: 'Franchise Coordinator',  status: 'Active' },
    { id: '3', name: 'Ali Karim',      role: 'Territory Supervisor',   status: 'Active' },
  ],
  'Dealer':     [
    { id: '1', name: 'Mohamed Hassan',  role: 'Dealer Manager',   status: 'Active'   },
    { id: '2', name: 'Fatima Al-Zahra', role: 'Sales Lead',        status: 'Active'   },
    { id: '3', name: 'John Smith',      role: 'Account Executive', status: 'Inactive' },
  ],
  'stc Channel': [
    { id: '1', name: 'Rania Qassem', role: 'Channel Manager',    status: 'Active' },
    { id: '2', name: 'James Lee',    role: 'Channel Coordinator', status: 'Active' },
  ],
  'Pay Desk Group': [{ id: '1', name: 'Yasmine Khalil', role: 'Group Supervisor',  status: 'Active' }],
  'Pay Desk':       [
    { id: '1', name: 'Hana Youssef',  role: 'Pay Desk Operator', status: 'Active' },
    { id: '2', name: 'Carlos Mendez', role: 'Pay Desk Agent',    status: 'Active' },
  ],
  'Agent':          [],
  'Wholesale': [
    { id: '1', name: 'Ibrahim Al-Sayed', role: 'Wholesale Director',  status: 'Active' },
    { id: '2', name: 'Jenny Thompson',   role: 'Wholesale Manager',    status: 'Active' },
    { id: '3', name: 'Bader Al-Otaibi',  role: 'Key Account Manager',  status: 'Active' },
  ],
  'Partner':   [
    { id: '1', name: 'Layla Nasser', role: 'Partner Relations Manager', status: 'Active'   },
    { id: '2', name: 'Eric Hansen',  role: 'Business Development',       status: 'Inactive' },
  ],
  'Shops':          [{ id: '1', name: 'Mariam Al-Rashidi', role: 'Shop Supervisor', status: 'Active' }],
  'UATchiled':      [],
  'Internal Users': [{ id: '1', name: 'Tariq Al-Harbi', role: 'Internal Operations Lead', status: 'Active' }],
  'HR': [
    { id: '1', name: 'Hessa Al-Mutairi', role: 'HR Director',         status: 'Active'   },
    { id: '2', name: 'Sandra White',     role: 'HR Business Partner',  status: 'Active'   },
    { id: '3', name: 'Faisal Al-Ghamdi', role: 'Recruiter',            status: 'Active'   },
    { id: '4', name: 'Nadia Saleh',      role: 'HR Coordinator',       status: 'Inactive' },
  ],
  'CXOs': [
    { id: '1', name: 'Abdulaziz Al-Shehri', role: 'CEO', status: 'Active' },
    { id: '2', name: 'Mona Al-Farsi',       role: 'CFO', status: 'Active' },
    { id: '3', name: 'Omar Hassan',         role: 'CTO', status: 'Active' },
  ],
  'Finance': [
    { id: '1', name: 'Laura Chen',      role: 'Finance Director',  status: 'Active'   },
    { id: '2', name: 'Raj Patel',       role: 'Senior Accountant', status: 'Active'   },
    { id: '3', name: 'Dina Al-Khalidi', role: 'Financial Analyst', status: 'Active'   },
    { id: '4', name: 'Mike Johnson',    role: 'Accounts Payable',  status: 'Inactive' },
  ],
  'Commission': [
    { id: '1', name: 'Ahmad Badr',   role: 'Commission Manager', status: 'Active' },
    { id: '2', name: 'Lena Fischer', role: 'Commission Analyst',  status: 'Active' },
  ],
  'IT': [
    { id: '1', name: 'Samer Al-Zubaidi', role: 'IT Director',     status: 'Active'   },
    { id: '2', name: 'Priya Sharma',     role: 'Senior Developer', status: 'Active'   },
    { id: '3', name: 'Kevin Brown',      role: 'System Engineer',  status: 'Active'   },
    { id: '4', name: 'Noura Al-Dosari',  role: 'QA Engineer',      status: 'Active'   },
    { id: '5', name: 'Felix Müller',     role: 'DevOps Engineer',  status: 'Inactive' },
  ],
  'Supply Chain & Operations': [
    { id: '1', name: 'Hassan Al-Qahtani', role: 'Supply Chain Director', status: 'Active' },
    { id: '2', name: 'Ana Lima',          role: 'Operations Manager',    status: 'Active' },
    { id: '3', name: 'Walid Saad',        role: 'Logistics Coordinator', status: 'Active' },
  ],
  'GMs & Directors': [
    { id: '1', name: 'Majed Al-Rasheed', role: 'General Manager',    status: 'Active' },
    { id: '2', name: 'Christine Dupont', role: 'Operations Director', status: 'Active' },
  ],
  'Admins': [
    { id: '1', name: 'Reem Al-Subaie', role: 'System Admin',  status: 'Active'   },
    { id: '2', name: 'Tom Baker',       role: 'Database Admin', status: 'Active'   },
    { id: '3', name: 'Aisha Mahmoud',   role: 'Network Admin',  status: 'Inactive' },
  ],
  'DCC':             [{ id: '1', name: 'Saad Al-Otaibi', role: 'DCC Manager', status: 'Active' }],
  'External Parties': [],
};

// ─── Avatar helpers ───────────────────────────────────────────────────────────

const COLORS = ['#0072CE','#00a86b','#f59e0b','#8b5cf6','#ec4899','#06b6d4','#84cc16','#ef4444'];
const avatarColor = (name: string) => COLORS[name.charCodeAt(0) % COLORS.length];
const initials    = (name: string) => name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();

// ─── Node users page ──────────────────────────────────────────────────────────

const STAGE_STYLES: Record<string, { bg: string; color: string }> = {
  Active:    { bg: '#e6f7ed', color: '#0e8345' },
  Inactive:  { bg: '#f5f5f5', color: '#888'    },
  Submitted: { bg: '#f0f0f0', color: '#555'    },
};

const extendedUsersData: Record<string, Array<{ id: string; name: string; code: string; segment: string; phone: string; stage: string }>> = {};

Object.entries(nodeUsersData).forEach(([node, users]) => {
  extendedUsersData[node] = users.map((u, i) => ({
    id:      u.id,
    name:    u.name,
    code:    String(10001 + i * 111).padStart(5, '0'),
    segment: i % 3 === 0 ? 'Enterprise' : i % 3 === 1 ? 'SMB' : '',
    phone:   u.status === 'Active' ? `+966 5${50 + i} ${100 + i * 37} ${200 + i}` : '',
    stage:   u.status === 'Active' ? 'Active' : 'Submitted',
  }));
});

function NodeUsersPage({ nodeName, onBack }: { nodeName: string; onBack: () => void }) {
  const [search, setSearch] = useState('');
  const [page,   setPage]   = useState(1);
  const pageSize = 10;

  const all = extendedUsersData[nodeName] ?? [];
  const filtered = all.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.code.toLowerCase().includes(search.toLowerCase()) ||
    u.phone.toLowerCase().includes(search.toLowerCase())
  );
  const total      = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const start      = (page - 1) * pageSize;
  const rows       = filtered.slice(start, start + pageSize);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f8fafc' }}>

      {/* Top bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        <button
          onClick={onBack}
          style={{ display: 'flex', alignItems: 'center', gap: 6, height: 32, padding: '0 12px', borderRadius: 6, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', fontSize: 13, color: 'rgba(0,11,37,0.6)', fontWeight: 500 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back
        </button>
        <div style={{ width: 1, height: 20, background: '#e2e8f0' }} />
        <Users size={15} color="#0072CE" />
        <span style={{ fontSize: 14, fontWeight: 500, color: '#000b25' }}>{nodeName} — Users</span>
      </div>

      {/* Toolbar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexShrink: 0 }}>
        {/* Search */}
        <div style={{ position: 'relative', width: 280 }}>
          <Search size={13} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'rgba(0,11,37,0.35)', pointerEvents: 'none' }} />
          <input
            autoFocus
            placeholder="Search..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            style={{ width: '100%', boxSizing: 'border-box', paddingLeft: 30, paddingRight: 32, height: 34, border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 13, color: '#000b25', outline: 'none', background: '#fff' }}
          />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid #e2e8f0', cursor: 'pointer' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(0,11,37,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>
        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button style={{ height: 34, padding: '0 14px', borderRadius: 6, border: '1px solid #0072CE', background: '#fff', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: '#0072CE', display: 'flex', alignItems: 'center', gap: 6 }}>
            Operations
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <button style={{ height: 34, padding: '0 16px', borderRadius: 6, border: 'none', background: '#0072CE', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: '#fff' }}>
            Create
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(0,11,37,0.5)' }}>
            <span>{total === 0 ? '0' : `${start + 1}-${Math.min(start + pageSize, total)}`} / {total}</span>
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              style={{ width: 26, height: 26, borderRadius: 5, border: '1px solid #e2e8f0', background: '#fff', cursor: page === 1 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: page === 1 ? 0.4 : 1 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              style={{ width: 26, height: 26, borderRadius: 5, border: '1px solid #e2e8f0', background: '#fff', cursor: page === totalPages ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: page === totalPages ? 0.4 : 1 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ flex: 1, overflowY: 'auto', background: '#fff' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <th style={{ width: 40, padding: '10px 16px', textAlign: 'left' }}>
                <input type="checkbox" style={{ cursor: 'pointer' }} />
              </th>
              {['Name', 'Code', 'Segment', 'Phone', 'Stage'].map(col => (
                <th key={col} style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 600, color: '#000b25', fontSize: 13, whiteSpace: 'nowrap' }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ padding: '48px 24px', textAlign: 'center', color: 'rgba(0,11,37,0.4)', fontSize: 13 }}>
                  {search ? 'No users match your search.' : 'No users assigned to this node.'}
                </td>
              </tr>
            ) : rows.map(user => (
              <tr
                key={user.id}
                style={{ borderBottom: '1px solid #f1f5f9', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget as HTMLTableRowElement).style.background = '#f8fafc'}
                onMouseLeave={e => (e.currentTarget as HTMLTableRowElement).style.background = 'transparent'}
              >
                <td style={{ padding: '12px 16px' }}>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                </td>
                <td style={{ padding: '12px 16px', color: '#000b25', fontWeight: 400 }}>{user.name}</td>
                <td style={{ padding: '12px 16px', color: '#0072CE' }}>{user.code}</td>
                <td style={{ padding: '12px 16px', color: 'rgba(0,11,37,0.55)' }}>{user.segment}</td>
                <td style={{ padding: '12px 16px', color: 'rgba(0,11,37,0.7)' }}>{user.phone}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{
                    fontSize: 12, fontWeight: 500, padding: '3px 12px', borderRadius: 20,
                    background: (STAGE_STYLES[user.stage] ?? STAGE_STYLES.Inactive).bg,
                    color:      (STAGE_STYLES[user.stage] ?? STAGE_STYLES.Inactive).color,
                  }}>
                    {user.stage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Channel detail panel ─────────────────────────────────────────────────────

interface ToggleItem { label: string; desc: string; on: boolean; }
interface ConfigSection { title: string; items: ToggleItem[]; }

const defaultConfig: ConfigSection[] = [
  {
    title: 'Security & Access',
    items: [
      { label: 'Has OTP Validation',            desc: 'Require one-time password for authentication', on: true  },
      { label: 'Enable Multi Factor Authentication', desc: 'Add an extra layer of security',          on: false },
      { label: 'Enable Lock Account',           desc: 'Prevent user from logging in',                 on: false },
      { label: 'Send Login Notification',       desc: 'Send notifications on user login',             on: true  },
      { label: 'Allow Reset Password',          desc: 'Allow Reset Password',                         on: true  },
    ],
  },
  {
    title: 'Customer & Prospect Management',
    items: [
      { label: 'Enable Shift Planning',         desc: 'Allow shift schedule management',              on: false },
      { label: 'Enable Prospect Registration',  desc: 'Allow new prospect sign-ups',                 on: true  },
      { label: 'Enable Onboarding',             desc: 'Allow onboarding members for this hierarchy',  on: false },
    ],
  },
  {
    title: 'Commission & Incentives',
    items: [
      { label: 'Enable Commission Tracking',    desc: 'Track commissions for this channel',           on: true  },
      { label: 'Allow Incentive Plans',         desc: 'Apply incentive plans to members',             on: false },
    ],
  },
];

function Toggle({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <div
      onClick={onChange}
      style={{ width: 42, height: 24, borderRadius: 12, background: on ? '#0072CE' : '#cbd5e1', cursor: 'pointer', position: 'relative', flexShrink: 0, transition: 'background 0.2s' }}
    >
      <div style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
    </div>
  );
}

function NodeDetailPage({ nodeName, fullPath, onBack }: { nodeName: string; fullPath: string; onBack: () => void }) {
  const [config, setConfig] = useState<ConfigSection[]>(defaultConfig);
  const [codePrefix, setCodePrefix] = useState('');

  const toggle = (si: number, ii: number) => {
    setConfig(prev => prev.map((s, sIdx) => sIdx !== si ? s : {
      ...s,
      items: s.items.map((item, iIdx) => iIdx !== ii ? item : { ...item, on: !item.on }),
    }));
  };

  const pathParts = fullPath.split('/');
  const parent = pathParts.length > 1 ? pathParts[pathParts.length - 2] : '';
  const relatedMenu = pathParts.join('/');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f1f5f9', overflowY: 'auto' }}>

      {/* Top bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        <button
          onClick={onBack}
          style={{ display: 'flex', alignItems: 'center', gap: 6, height: 32, padding: '0 12px', borderRadius: 6, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', fontSize: 13, color: 'rgba(0,11,37,0.6)', fontWeight: 500 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back
        </button>
        <div style={{ width: 1, height: 20, background: '#e2e8f0' }} />
        <div style={{ width: 28, height: 28, borderRadius: 7, border: '1px solid #dbedf8', background: '#f0f7ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0072CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
          </svg>
        </div>
        <span style={{ fontSize: 14, fontWeight: 500, color: '#000b25' }}>{nodeName}</span>
      </div>

      {/* Content */}
      <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 1100, width: '100%', boxSizing: 'border-box' }}>

        {/* Channel Information */}
        <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9' }}>
            <h2 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#000b25' }}>Channel Information</h2>
          </div>
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'rgba(0,11,37,0.5)', marginBottom: 7, fontWeight: 500 }}>
                  Name <span style={{ color: '#93c5fd', fontSize: 11 }}>?</span>
                </label>
                <input
                  defaultValue={nodeName}
                  style={{ width: '100%', boxSizing: 'border-box', height: 38, border: '1px solid #e2e8f0', borderRadius: 6, padding: '0 12px', fontSize: 13, color: '#000b25', outline: 'none', background: '#fff' }}
                />
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'rgba(0,11,37,0.5)', marginBottom: 7, fontWeight: 500 }}>
                  Code Prefix <span style={{ color: '#93c5fd', fontSize: 11 }}>?</span>
                </label>
                <input
                  value={codePrefix}
                  onChange={e => setCodePrefix(e.target.value)}
                  style={{ width: '100%', boxSizing: 'border-box', height: 38, border: '1px solid #e2e8f0', borderRadius: 6, padding: '0 12px', fontSize: 13, color: '#000b25', outline: 'none', background: '#fff' }}
                />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'rgba(0,11,37,0.5)', marginBottom: 7, fontWeight: 500 }}>
                  Parent <span style={{ color: '#93c5fd', fontSize: 11 }}>?</span>
                </label>
                <div style={{ height: 38, border: '1px solid #e2e8f0', borderRadius: 6, padding: '0 12px', fontSize: 13, color: '#0072CE', background: '#f8fafc', display: 'flex', alignItems: 'center' }}>
                  {parent || '—'}
                </div>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'rgba(0,11,37,0.5)', marginBottom: 7, fontWeight: 500 }}>
                  Related Menu <span style={{ color: '#93c5fd', fontSize: 11 }}>?</span>
                </label>
                <div style={{ height: 38, border: '1px solid #e2e8f0', borderRadius: 6, padding: '0 12px', fontSize: 13, color: '#0072CE', background: '#f8fafc', display: 'flex', alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  Sales Team/{relatedMenu}
                </div>
              </div>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'rgba(0,11,37,0.5)', marginBottom: 7, fontWeight: 500 }}>
                Full Name <span style={{ color: '#93c5fd', fontSize: 11 }}>?</span>
              </label>
              <div style={{ height: 38, border: '1px solid #e2e8f0', borderRadius: 6, padding: '0 12px', fontSize: 13, color: 'rgba(0,11,37,0.6)', background: '#f8fafc', display: 'flex', alignItems: 'center' }}>
                {fullPath.replace(/\//g, ' / ')}
              </div>
            </div>
          </div>
        </div>

        {/* Channel Configuration */}
        <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9' }}>
            <h2 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#000b25' }}>Channel Configuration</h2>
          </div>
          <div>
            {config.map((section, si) => (
              <div key={section.title}>
                <div style={{ padding: '16px 24px 10px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 3, height: 16, borderRadius: 2, background: '#0072CE', flexShrink: 0 }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#000b25' }}>{section.title}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  {section.items.map((item, ii) => (
                    <div
                      key={item.label}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '16px 24px', borderTop: '1px solid #f1f5f9', borderRight: ii % 2 === 0 ? '1px solid #f1f5f9' : 'none' }}
                    >
                      <div>
                        <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: '#000b25' }}>{item.label}</p>
                        <p style={{ margin: '3px 0 0', fontSize: 12, color: 'rgba(0,11,37,0.45)' }}>{item.desc}</p>
                      </div>
                      <Toggle on={item.on} onChange={() => toggle(si, ii)} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, paddingBottom: 8 }}>
          <button
            onClick={onBack}
            style={{ height: 36, padding: '0 20px', borderRadius: 6, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: 'rgba(0,11,37,0.6)' }}
          >
            Cancel
          </button>
          <button
            style={{ height: 36, padding: '0 20px', borderRadius: 6, border: 'none', background: '#0072CE', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: '#fff' }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Users icon button ────────────────────────────────────────────────────────

function UsersIconButton({ label, onShowUsers, count }: { label: string; onShowUsers: () => void; count: number }) {
  const [hovered, setHovered] = useState(false);
  const badge = count > 99 ? '99+' : String(count);
  return (
    <button
      title={`Users in ${label}`}
      onClick={e => { e.stopPropagation(); onShowUsers(); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 28, minHeight: 30,
        borderTop: 'none', borderRight: 'none', borderBottom: 'none', borderLeft: `1px solid ${hovered ? '#dbedf8' : '#dbedf8'}`,
        background: hovered ? '#eff6ff' : 'transparent',
        cursor: 'pointer',
        color: hovered ? '#0072ce' : 'rgb(147 197 253)',
        padding: '0 6px',
        transition: 'background 0.12s, color 0.12s',
      }}
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      {count > 0 && (
        <span style={{
          position: 'absolute', top: 3, right: 2,
          minWidth: 13, height: 13, borderRadius: 7,
          background: '#0072ce', color: '#fff',
          fontSize: 8, fontWeight: 700, lineHeight: '13px',
          textAlign: 'center', padding: '0 2px',
          pointerEvents: 'none',
        }}>
          {badge}
        </span>
      )}
    </button>
  );
}

function CollapseButton({ collapsed, onClick }: { collapsed: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      title={collapsed ? 'Expand children' : 'Collapse children'}
      onClick={e => { e.stopPropagation(); onClick(); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 22, minHeight: 30,
        borderTop: 'none', borderRight: 'none', borderBottom: 'none', borderLeft: `1px solid ${hovered ? '#dbedf8' : '#dbedf8'}`,
        background: hovered ? '#eff6ff' : 'transparent',
        cursor: 'pointer', padding: '0 4px',
        borderRadius: '0 5px 5px 0',
        transition: 'background 0.12s',
        color: hovered ? '#0072ce' : 'rgb(147 197 253)',
      }}
    >
      <svg
        width="10" height="10" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: collapsed ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.18s' }}
      >
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </button>
  );
}

// ─── Org chart node ───────────────────────────────────────────────────────────

function OrgNode({
  node, path = '',
  collapsed, toggleCollapse, onShowUsers, onShowDetail,
}: {
  node: HierarchyNode;
  path?: string;
  collapsed: Set<string>;
  toggleCollapse: (p: string) => void;
  onShowUsers: (label: string) => void;
  onShowDetail: (label: string, fullPath: string) => void;
}) {
  const nodePath    = path ? `${path}/${node.label}` : node.label;
  const hasChildren = !!node.children?.length;
  const childCount  = node.children?.length ?? 0;
  const isCollapsed = collapsed.has(nodePath);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Node card */}
      <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #5aaee8', borderRadius: 7, background: '#fff', whiteSpace: 'nowrap', boxShadow: '0 1px 4px rgba(0,114,206,0.07)' }}>
        <span
          onClick={e => { e.stopPropagation(); onShowDetail(node.label, nodePath); }}
          style={{ padding: '7px 10px 7px 14px', color: '#0072CE', fontSize: 12.5, fontWeight: 400, letterSpacing: 0.1, cursor: 'pointer', borderRadius: '5px 0 0 5px', transition: 'background 0.12s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#eff6ff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          {node.label}
        </span>
        {/* Users button */}
        <UsersIconButton onShowUsers={() => onShowUsers(node.label)} label={node.label} count={nodeUsersData[node.label]?.length ?? 0} />
        {/* Collapse toggle — only shown when node has children */}
        {hasChildren && (
          <CollapseButton collapsed={isCollapsed} onClick={() => toggleCollapse(nodePath)} />
        )}
      </div>

      {/* Connector + children */}
      {hasChildren && (
        <>
          {!isCollapsed && (
            <>
              <div style={{ width: 2, height: 20, background: '#93c5fd', marginTop: -1, marginBottom: -1 }} />
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                {node.children!.map((child, i) => {
                  const isFirst = i === 0;
                  const isLast  = i === childCount - 1;
                  const isOnly  = childCount === 1;

                  return (
                    <div key={`${nodePath}/${child.label}/${i}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 10px' }}>
                      <div style={{ position: 'relative', width: '100%', height: 22, display: 'flex', justifyContent: 'center', marginBottom: -2 }}>
                        {!isOnly && !isFirst && <div style={{ position: 'absolute', top: 0, left: -1,   right: '50%', height: 2, background: '#93c5fd' }} />}
                        {!isOnly && !isLast  && <div style={{ position: 'absolute', top: 0, left: '50%', right: -1,   height: 2, background: '#93c5fd' }} />}
                        <div style={{ width: 2, height: '100%', background: '#93c5fd' }} />
                      </div>
                      <OrgNode node={child} path={nodePath} collapsed={collapsed} toggleCollapse={toggleCollapse} onShowUsers={onShowUsers} onShowDetail={onShowDetail} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function OrgHierarchyPage({ data = hierarchyData, initialZoom = 1 }: { data?: HierarchyNode; initialZoom?: number } = {}) {
  const [zoom,        setZoom]        = useState(initialZoom);
  const [collapsed,   setCollapsed]   = useState<Set<string>>(new Set());
  const [nodePanel,   setNodePanel]   = useState<string | null>(null);
  const [detailNode,  setDetailNode]  = useState<{ label: string; fullPath: string } | null>(null);

  const toggleCollapse = (path: string) => {
    setCollapsed(prev => {
      const next = new Set(prev);
      next.has(path) ? next.delete(path) : next.add(path);
      return next;
    });
  };

  if (nodePanel) {
    return <NodeUsersPage nodeName={nodePanel} onBack={() => setNodePanel(null)} />;
  }

  if (detailNode) {
    return (
      <NodeDetailPage
        nodeName={detailNode.label}
        fullPath={detailNode.fullPath}
        onBack={() => setDetailNode(null)}
      />
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f8fafc' }}>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', background: '#fff', borderBottom: '1px solid #e2e8f0', flexShrink: 0 }}>
        <div>
          <p style={{ margin: 0, fontSize: 13, color: 'rgba(0,11,37,0.45)' }}>
            Click a <strong style={{ fontWeight: 600 }}>node label</strong> to view channel details · Click the <strong style={{ fontWeight: 600 }}>users icon</strong> to view assigned members
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: 'rgba(0,11,37,0.45)', minWidth: 36, textAlign: 'right' }}>{Math.round(zoom * 100)}%</span>
          <button
            onClick={() => setZoom(z => Math.max(0.4, +(z - 0.1).toFixed(1)))}
            style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0,11,37,0.6)' }}
          >
            <ZoomOut size={14} />
          </button>
          <button
            onClick={() => setZoom(z => Math.min(1.6, +(z + 0.1).toFixed(1)))}
            style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0,11,37,0.6)' }}
          >
            <ZoomIn size={14} />
          </button>
          <button
            onClick={() => { setZoom(initialZoom); setCollapsed(new Set()); }}
            style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0,11,37,0.6)' }}
            title="Reset zoom and expand all"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', background: '#e8edf2' }}>
        <div style={{ width: 'max-content', minWidth: '100%', minHeight: '100%', padding: '40px 40px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', boxSizing: 'border-box' }}>
          <div style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', transition: 'transform 0.2s ease', display: 'inline-block' }}>
            <OrgNode
              node={data}
              collapsed={collapsed}
              toggleCollapse={toggleCollapse}
              onShowUsers={label => setNodePanel(label)}
              onShowDetail={(label, fullPath) => setDetailNode({ label, fullPath })}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
