import React, { useState } from 'react';
import { X, Search, Plus, ChevronDown, ChevronUp, ZoomIn, ZoomOut, Users } from 'lucide-react';
import svgPaths from "../../imports/svg-xr3x6coxx";

// ─── Types ───────────────────────────────────────────────────────────────────

interface User {
  id: string;
  name: string;
  hierarchyType: string;
  code: string;
  segment: string;
  phone: string;
  stage: string;
  isExpanded?: boolean;
  children?: User[];
}

interface NodeUser {
  id: string;
  name: string;
  role: string;
  status: 'Active' | 'Inactive';
}

interface HierarchyNode {
  label: string;
  children?: HierarchyNode[];
}

interface UsersHierarchyModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
  title?: string;
}

// ─── Org tree data ────────────────────────────────────────────────────────────

const hierarchyData: HierarchyNode = {
  label: 'Operator',
  children: [
    {
      label: 'Retail',
      children: [
        { label: 'Franchise', children: [{ label: 'Pay Desk Group', children: [{ label: 'Pay Desk', children: [{ label: 'Agent' }] }] }] },
        { label: 'Dealer',    children: [{ label: 'Pay Desk Group', children: [{ label: 'Pay Desk', children: [{ label: 'Agent' }] }] }] },
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

// ─── Node users mock data ─────────────────────────────────────────────────────

const nodeUsersData: Record<string, NodeUser[]> = {
  'Operator':   [
    { id: '1', name: 'Khalid Al-Mansouri', role: 'Chief Operations Officer', status: 'Active' },
    { id: '2', name: 'Sarah Mitchell',     role: 'System Administrator',      status: 'Active' },
    { id: '3', name: 'David Park',         role: 'Operations Analyst',         status: 'Inactive' },
  ],
  'Retail':     [
    { id: '1', name: 'Amira Hassan',  role: 'Retail Director', status: 'Active' },
    { id: '2', name: 'Tom Williams',  role: 'Retail Manager',  status: 'Active' },
  ],
  'Franchise':  [
    { id: '1', name: 'Nour Al-Amin',    role: 'Franchise Manager',    status: 'Active' },
    { id: '2', name: 'Emma Rodriguez',  role: 'Franchise Coordinator', status: 'Active' },
    { id: '3', name: 'Ali Karim',       role: 'Territory Supervisor',  status: 'Active' },
  ],
  'Dealer':     [
    { id: '1', name: 'Mohamed Hassan',  role: 'Dealer Manager',    status: 'Active'   },
    { id: '2', name: 'Fatima Al-Zahra', role: 'Sales Lead',         status: 'Active'   },
    { id: '3', name: 'John Smith',      role: 'Account Executive',  status: 'Inactive' },
  ],
  'stc Channel': [
    { id: '1', name: 'Rania Qassem', role: 'Channel Manager',     status: 'Active' },
    { id: '2', name: 'James Lee',    role: 'Channel Coordinator',  status: 'Active' },
  ],
  'Pay Desk Group': [
    { id: '1', name: 'Yasmine Khalil', role: 'Group Supervisor', status: 'Active' },
  ],
  'Pay Desk': [
    { id: '1', name: 'Hana Youssef',  role: 'Pay Desk Operator', status: 'Active' },
    { id: '2', name: 'Carlos Mendez', role: 'Pay Desk Agent',    status: 'Active' },
  ],
  'Agent':     [],
  'Wholesale': [
    { id: '1', name: 'Ibrahim Al-Sayed', role: 'Wholesale Director',   status: 'Active' },
    { id: '2', name: 'Jenny Thompson',   role: 'Wholesale Manager',     status: 'Active' },
    { id: '3', name: 'Bader Al-Otaibi', role: 'Key Account Manager',   status: 'Active' },
  ],
  'Partner':   [
    { id: '1', name: 'Layla Nasser', role: 'Partner Relations Manager', status: 'Active'   },
    { id: '2', name: 'Eric Hansen',  role: 'Business Development',       status: 'Inactive' },
  ],
  'Shops':      [{ id: '1', name: 'Mariam Al-Rashidi', role: 'Shop Supervisor', status: 'Active' }],
  'UATchiled':  [],
  'Internal Users': [{ id: '1', name: 'Tariq Al-Harbi', role: 'Internal Operations Lead', status: 'Active' }],
  'HR': [
    { id: '1', name: 'Hessa Al-Mutairi', role: 'HR Director',       status: 'Active'   },
    { id: '2', name: 'Sandra White',     role: 'HR Business Partner', status: 'Active'   },
    { id: '3', name: 'Faisal Al-Ghamdi', role: 'Recruiter',          status: 'Active'   },
    { id: '4', name: 'Nadia Saleh',      role: 'HR Coordinator',     status: 'Inactive' },
  ],
  'CXOs': [
    { id: '1', name: 'Abdulaziz Al-Shehri', role: 'CEO', status: 'Active' },
    { id: '2', name: 'Mona Al-Farsi',       role: 'CFO', status: 'Active' },
    { id: '3', name: 'Omar Hassan',         role: 'CTO', status: 'Active' },
  ],
  'Finance': [
    { id: '1', name: 'Laura Chen',       role: 'Finance Director',   status: 'Active'   },
    { id: '2', name: 'Raj Patel',        role: 'Senior Accountant',  status: 'Active'   },
    { id: '3', name: 'Dina Al-Khalidi',  role: 'Financial Analyst',  status: 'Active'   },
    { id: '4', name: 'Mike Johnson',     role: 'Accounts Payable',   status: 'Inactive' },
  ],
  'Commission': [
    { id: '1', name: 'Ahmad Badr',   role: 'Commission Manager', status: 'Active' },
    { id: '2', name: 'Lena Fischer', role: 'Commission Analyst',  status: 'Active' },
  ],
  'IT': [
    { id: '1', name: 'Samer Al-Zubaidi', role: 'IT Director',      status: 'Active'   },
    { id: '2', name: 'Priya Sharma',     role: 'Senior Developer',  status: 'Active'   },
    { id: '3', name: 'Kevin Brown',      role: 'System Engineer',   status: 'Active'   },
    { id: '4', name: 'Noura Al-Dosari',  role: 'QA Engineer',       status: 'Active'   },
    { id: '5', name: 'Felix Müller',     role: 'DevOps Engineer',   status: 'Inactive' },
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

const AVATAR_COLORS = ['#000000','#00a86b','#f59e0b','#8b5cf6','#ec4899','#06b6d4','#84cc16','#ef4444'];
function avatarColor(name: string) { return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length]; }
function initials(name: string)    { return name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase(); }

// ─── Node users modal ─────────────────────────────────────────────────────────

function NodeUsersModal({ nodeName, onClose }: { nodeName: string; onClose: () => void }) {
  const [search, setSearch] = useState('');
  const allUsers = nodeUsersData[nodeName] ?? [];
  const filtered  = allUsers.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,11,37,0.45)', backdropFilter: 'blur(2px)' }}
      onClick={onClose}
    >
      <div
        style={{ background: '#fff', borderRadius: 12, width: 480, maxHeight: '68vh', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 64px rgba(0,0,0,0.18)', overflow: 'hidden' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#f4f4f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={16} color="#000000" />
              </div>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: '#000b25' }}>{nodeName}</h3>
            </div>
            <p style={{ margin: '6px 0 0', fontSize: 12, color: 'rgba(0,11,37,0.5)' }}>
              {allUsers.length} user{allUsers.length !== 1 ? 's' : ''} assigned to this node
            </p>
          </div>
          <button
            onClick={onClose}
            style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0,11,37,0.5)', flexShrink: 0 }}
          >
            <X size={14} />
          </button>
        </div>

        {/* Search */}
        <div style={{ padding: '12px 24px', borderBottom: '1px solid #f1f5f9' }}>
          <div style={{ position: 'relative' }}>
            <Search size={13} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'rgba(0,11,37,0.35)', pointerEvents: 'none' }} />
            <input
              autoFocus
              placeholder="Search users..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', boxSizing: 'border-box', paddingLeft: 32, paddingRight: 12, height: 36, border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 13, color: '#000b25', outline: 'none', background: '#f8fafc' }}
            />
          </div>
        </div>

        {/* User list */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0' }}>
          {filtered.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', gap: 10 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={22} color="#cbd5e1" />
              </div>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: 'rgba(0,11,37,0.4)', textAlign: 'center' }}>
                {search ? 'No users match your search.' : 'No users assigned to this node.'}
              </p>
            </div>
          ) : filtered.map(user => (
            <div
              key={user.id}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 24px', borderBottom: '1px solid #f8fafc', transition: 'background 0.12s' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#f8fafc'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
            >
              {/* Avatar */}
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: avatarColor(user.name), display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 600, flexShrink: 0 }}>
                {initials(user.name)}
              </div>
              {/* Name + role */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: '#000b25', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name}</p>
                <p style={{ margin: '2px 0 0', fontSize: 12, color: 'rgba(0,11,37,0.5)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.role}</p>
              </div>
              {/* Status */}
              <span style={{
                fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 20, flexShrink: 0,
                background: user.status === 'Active' ? '#e6f7ed' : '#f5f5f5',
                color:      user.status === 'Active' ? '#0e8345'  : '#888',
              }}>
                {user.status}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '12px 24px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            style={{ height: 34, padding: '0 20px', borderRadius: 6, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: 'rgba(0,11,37,0.7)' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Org chart node ───────────────────────────────────────────────────────────

function OrgChartNode({
  node,
  path = '',
  collapsedNodes,
  toggleCollapse,
  onShowUsers,
}: {
  node: HierarchyNode;
  path?: string;
  collapsedNodes: Set<string>;
  toggleCollapse: (p: string) => void;
  onShowUsers: (label: string) => void;
}) {
  const nodePath   = path ? `${path}/${node.label}` : node.label;
  const hasChildren = !!node.children?.length;
  const childCount  = node.children?.length ?? 0;
  const isCollapsed = collapsedNodes.has(nodePath);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* ── Node box ── */}
      <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #5aaee8', borderRadius: 6, background: '#fff', whiteSpace: 'nowrap', userSelect: 'none', overflow: 'hidden' }}>
        {/* Label */}
        <span style={{ padding: '6px 10px 6px 14px', color: '#000000', fontSize: 12, fontWeight: 400 }}>
          {node.label}
        </span>

        {/* Users icon button */}
        <button
          title={`View users in ${node.label}`}
          onClick={e => { e.stopPropagation(); onShowUsers(node.label); }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 26, height: '100%', minHeight: 28, borderTop: 'none', borderRight: 'none', borderBottom: 'none', borderLeft: '1px solid #e4e4e7', background: 'transparent', cursor: 'pointer', color: '#93c5fd', padding: '0 5px', transition: 'background 0.12s, color 0.12s' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#f4f4f5'; el.style.color = '#000000'; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = '#93c5fd'; }}
          onMouseDown={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(0.9)'; }}
          onMouseUp={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </button>
      </div>

      {/* ── Connector + collapse toggle ── */}
      {hasChildren && (
        <>
          {/* Top half of vertical line */}
          <div style={{ width: 1, height: 10, background: '#93c5fd' }} />

          {/* Collapse toggle pill */}
          <button
            onClick={() => toggleCollapse(nodePath)}
            title={isCollapsed ? 'Expand' : 'Collapse'}
            style={{
              width: 18, height: 18, borderRadius: '50%', border: '1.5px solid #5aaee8',
              background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#000000', fontSize: 13, fontWeight: 700, lineHeight: 1, padding: 0, zIndex: 1, transition: 'background 0.12s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f4f4f5'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; }}
          >
            {isCollapsed ? '+' : '−'}
          </button>

          {/* Bottom half of vertical line + children */}
          {!isCollapsed && (
            <>
              <div style={{ width: 1, height: 10, background: '#93c5fd' }} />

              {/* Children row */}
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                {node.children!.map((child, i) => {
                  const isFirst = i === 0;
                  const isLast  = i === childCount - 1;
                  const isOnly  = childCount === 1;

                  return (
                    <div key={`${nodePath}/${child.label}/${i}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 16px' }}>
                      {/* Half-bars + vertical drop */}
                      <div style={{ position: 'relative', width: '100%', height: 22, display: 'flex', justifyContent: 'center' }}>
                        {!isOnly && !isFirst && <div style={{ position: 'absolute', top: 0, left: 0, right: '50%', height: 1, background: '#93c5fd' }} />}
                        {!isOnly && !isLast  && <div style={{ position: 'absolute', top: 0, left: '50%', right: 0, height: 1, background: '#93c5fd' }} />}
                        <div style={{ width: 1, height: '100%', background: '#93c5fd' }} />
                      </div>

                      <OrgChartNode
                        node={child}
                        path={nodePath}
                        collapsedNodes={collapsedNodes}
                        toggleCollapse={toggleCollapse}
                        onShowUsers={onShowUsers}
                      />
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

// ─── Main modal ───────────────────────────────────────────────────────────────

export function UsersHierarchyModal({ isOpen, onClose, brandName, title }: UsersHierarchyModalProps) {
  const [activeTab,      setActiveTab]      = useState<'list' | 'hierarchy'>('list');
  const [searchQuery,    setSearchQuery]    = useState('');
  const [selectedUsers,  setSelectedUsers]  = useState<string[]>([]);
  const [sortField,      setSortField]      = useState<string>('name');
  const [sortDirection,  setSortDirection]  = useState<'asc' | 'desc'>('asc');
  const [zoom,           setZoom]           = useState(0.85);
  const [collapsedNodes, setCollapsedNodes] = useState<Set<string>>(new Set());
  const [nodeUsersPanel, setNodeUsersPanel] = useState<string | null>(null);

  const [users] = useState<User[]>([
    {
      id: '1', name: 'Region Manager', hierarchyType: 'Region', code: 'RM-001', segment: 'Premium', phone: '+1234567890', stage: 'Active', isExpanded: true,
      children: [
        {
          id: '2', name: 'District Manager 1', hierarchyType: 'District', code: 'DM-001', segment: 'Premium', phone: '+1234567891', stage: 'Active', isExpanded: true,
          children: [
            { id: '3', name: 'Sales Rep A', hierarchyType: 'Sales Rep', code: 'SR-001', segment: 'Premium',  phone: '+1234567892', stage: 'Active' },
            { id: '4', name: 'Sales Rep B', hierarchyType: 'Sales Rep', code: 'SR-002', segment: 'Standard', phone: '+1234567893', stage: 'Active' },
          ],
        },
        { id: '5', name: 'District Manager 2', hierarchyType: 'District', code: 'DM-002', segment: 'Standard', phone: '+1234567894', stage: 'Active' },
      ],
    },
    { id: '6', name: 'Region Manager 2', hierarchyType: 'Region', code: 'RM-002', segment: 'Standard', phone: '+1234567895', stage: 'Inactive' },
  ]);

  if (!isOpen) return null;

  const toggleCollapse = (path: string) => {
    setCollapsedNodes(prev => {
      const next = new Set(prev);
      next.has(path) ? next.delete(path) : next.add(path);
      return next;
    });
  };

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev => prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]);
  };

  const toggleSelectAll = () => {
    setSelectedUsers(selectedUsers.length === users.length ? [] : users.map(u => u.id));
  };

  const handleSort = (field: string) => {
    if (sortField === field) { setSortDirection(d => d === 'asc' ? 'desc' : 'asc'); }
    else { setSortField(field); setSortDirection('asc'); }
  };

  const renderUserRow = (user: User, level = 0): React.ReactNode => {
    const isSelected  = selectedUsers.includes(user.id);
    const hasChildren = !!user.children?.length;
    return (
      <React.Fragment key={user.id}>
        <tr className={`${level % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'} h-[48px] border-b border-[#e2e8f0] hover:bg-[#f0f8ff] transition-colors`}>
          <td className="px-4 py-3" style={{ paddingLeft: `${16 + level * 24}px` }}>
            <div className="flex items-center gap-2">
              <button onClick={() => toggleUserSelection(user.id)} className="relative size-[20px] flex items-center justify-center hover:scale-110 transition-transform active:scale-95">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p17146600} stroke={isSelected ? '#000000' : '#E2E8F0'} strokeWidth="1.5" fill={isSelected ? '#000000' : 'transparent'} />
                </svg>
                {isSelected && (
                  <svg className="w-3 h-3 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              {hasChildren && (
                <button className="text-[#000000] hover:text-[#262626] transition-colors">
                  {user.isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                </button>
              )}
            </div>
          </td>
          <td className="px-4 py-3"><p className="font-medium text-[14px] text-[#000b25]">{user.name}</p></td>
          <td className="px-4 py-3"><p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">{user.hierarchyType}</p></td>
          <td className="px-4 py-3"><p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">{user.code}</p></td>
          <td className="px-4 py-3"><p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">{user.segment}</p></td>
          <td className="px-4 py-3"><p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">{user.phone}</p></td>
          <td className="px-4 py-3">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] font-medium ${user.stage === 'Active' ? 'bg-[#e6f7ed] text-[#0e8345]' : 'bg-[#f5f5f5] text-[#666666]'}`}>
              {user.stage}
            </span>
          </td>
        </tr>
        {hasChildren && user.isExpanded && user.children?.map(child => renderUserRow(child, level + 1))}
      </React.Fragment>
    );
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-[8px] shadow-2xl w-[95vw] max-w-[1400px] h-[90vh] flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-white border-b border-[#e2e8f0] px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-[20px] font-medium text-[#000b25]">{title ?? `Users Linked to ${brandName}`}</h2>
              <p className="text-[12px] text-[rgba(0,11,37,0.64)] mt-1">{selectedUsers.length} of {users.length} users selected</p>
            </div>
            <button onClick={onClose} className="text-[rgba(0,11,37,0.64)] hover:text-[#000b25] transition-colors active:scale-95">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Tabs + toolbar */}
          <div className="bg-white border-b border-[#e2e8f0] px-6 pt-3">
            <div className="flex items-center gap-0 mb-3">
              {(['list', 'hierarchy'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`h-[34px] px-5 text-[13px] font-medium rounded-t-[4px] border-b-2 transition-colors capitalize ${
                    activeTab === tab
                      ? 'text-[#000000] border-[#000000] bg-zinc-100/50'
                      : 'text-[rgba(0,11,37,0.5)] border-transparent hover:text-[#000b25]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'list' && (
              <div className="flex items-center justify-between gap-4 pb-3">
                <div className="bg-[#f8fafc] relative rounded-[4px] flex-1 max-w-[500px]">
                  <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex items-center gap-2 px-3 h-[40px]">
                    <Search className="w-4 h-4 text-[rgba(0,11,37,0.57)]" />
                    <input type="text" placeholder="Search users..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent text-[14px] text-[rgba(0,11,37,0.57)] placeholder:text-[rgba(0,11,37,0.4)] focus:outline-none" />
                  </div>
                </div>
                <button className="bg-[#000000] text-white px-4 h-[40px] rounded-[4px] flex items-center gap-2 text-[14px] font-medium hover:bg-[#262626] transition-colors active:scale-95">
                  <Plus className="w-4 h-4" /> Add Members
                </button>
              </div>
            )}

            {activeTab === 'hierarchy' && (
              <div className="flex items-center justify-between gap-4 pb-3">
                <p className="text-[12px] text-[rgba(0,11,37,0.4)]">Click <Users size={11} className="inline" /> on any node to view assigned users. Click ⊖/⊕ to expand or collapse branches.</p>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] text-[rgba(0,11,37,0.5)]">{Math.round(zoom * 100)}%</span>
                  <button onClick={() => setZoom(z => Math.max(0.4, +(z - 0.1).toFixed(1)))} className="w-[28px] h-[28px] flex items-center justify-center rounded-[4px] border border-[#e2e8f0] hover:bg-[#f8fafc] text-[rgba(0,11,37,0.64)] transition-colors active:scale-95">
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => setZoom(z => Math.min(1.5, +(z + 0.1).toFixed(1)))} className="w-[28px] h-[28px] flex items-center justify-center rounded-[4px] border border-[#e2e8f0] hover:bg-[#f8fafc] text-[rgba(0,11,37,0.64)] transition-colors active:scale-95">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => setZoom(0.85)} className="h-[28px] px-3 text-[11px] rounded-[4px] border border-[#e2e8f0] hover:bg-[#f8fafc] text-[rgba(0,11,37,0.64)] transition-colors active:scale-95">
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>

            {/* List tab */}
            {activeTab === 'list' && (
              <div className="h-full overflow-auto custom-scrollbar">
                <table className="w-full">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-[#e4e4e7] h-[48px] border-b border-[#e2e8f0]">
                      <th className="text-left px-4 py-3 w-[100px]">
                        <button onClick={toggleSelectAll} className="relative size-[20px] flex items-center justify-center hover:scale-110 transition-transform active:scale-95">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d={svgPaths.p17146600} stroke={selectedUsers.length > 0 ? '#000000' : '#E2E8F0'} strokeWidth="1.5" fill={selectedUsers.length > 0 ? '#000000' : 'transparent'} />
                          </svg>
                          {selectedUsers.length > 0 && (
                            <svg className="w-3 h-3 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                      </th>
                      {[{ label: 'Name', field: 'name' }, { label: 'Hierarchy Type', field: null }, { label: 'Code', field: 'code' }, { label: 'Segment', field: 'segment' }, { label: 'Phone', field: 'phone' }, { label: 'Stage', field: 'stage' }].map(({ label, field }) => (
                        <th key={label} className="text-left px-4 py-3">
                          {field ? (
                            <button onClick={() => handleSort(field)} className="flex items-center gap-2 hover:text-[#000000] transition-colors">
                              <p className="font-medium text-[#000b25] text-[12px]">{label}</p>
                              {sortField === field && (sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}
                            </button>
                          ) : (
                            <p className="font-medium text-[#000b25] text-[12px]">{label}</p>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>{users.map(u => renderUserRow(u, 0))}</tbody>
                </table>
              </div>
            )}

            {/* Hierarchy tab */}
            {activeTab === 'hierarchy' && (
              <div style={{ flex: 1, minHeight: 0, overflow: 'auto', background: '#e8edf2' }} className="custom-scrollbar">
                <div style={{ width: 'max-content', minWidth: '100%', minHeight: '100%', padding: '48px 64px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', boxSizing: 'border-box' }}>
                  <div style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', transition: 'transform 0.2s ease', display: 'inline-block' }}>
                    <OrgChartNode
                      node={hierarchyData}
                      collapsedNodes={collapsedNodes}
                      toggleCollapse={toggleCollapse}
                      onShowUsers={label => setNodeUsersPanel(label)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-white border-t border-[#e2e8f0] px-6 py-4 flex items-center justify-between">
            <p className="text-[12px] text-[rgba(0,11,37,0.64)]">
              {activeTab === 'list' ? `Showing ${users.length} users` : 'Organizational hierarchy chart'}
            </p>
            <button onClick={onClose} className="px-4 h-[36px] rounded-[4px] text-[14px] font-medium border border-[#e2e8f0] bg-white hover:bg-[#f8fafc] transition-colors active:scale-95">
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Node users panel — renders above the main modal */}
      {nodeUsersPanel !== null && (
        <NodeUsersModal nodeName={nodeUsersPanel} onClose={() => setNodeUsersPanel(null)} />
      )}
    </>
  );
}
