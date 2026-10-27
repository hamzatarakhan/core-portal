import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { Download, Search, TrendingDown, Users, AlertCircle, Tag, ChevronDown, X, Star, SlidersHorizontal, Layers, BarChart2, EyeOff } from 'lucide-react';

// ─── Palette (validated against Leading Point surface #f8fafc) ────────────────
const C = {
  blue:   '#0072CE',
  amber:  '#d97706',
  red:    '#dc2626',
  purple: '#7c3aed',
  teal:   '#0891b2',
};
const REASON_COLORS: Record<string, string> = {
  'Document Missing':  C.blue,
  'Identity Mismatch': C.amber,
  'Incomplete Form':   C.red,
  'Duplicate Entry':   C.purple,
  'Other':             C.teal,
};

// ─── Mock data ────────────────────────────────────────────────────────────────

const CHANNELS = ['All Channels', 'Direct Sales', 'InDirect Sales', 'B2B Sales', 'Enterprise'];
const REASONS  = ['All Reasons', 'Document Missing', 'Identity Mismatch', 'Incomplete Form', 'Duplicate Entry', 'Other'];

const RAW_ROWS = [
  { date: '2024-11-01', user: 'Ahmad Badr',         channel: 'Direct Sales',   reason: 'Document Missing',  count: 3 },
  { date: '2024-11-02', user: 'Layla Nasser',        channel: 'InDirect Sales', reason: 'Identity Mismatch', count: 2 },
  { date: '2024-11-03', user: 'Samer Al-Zubaidi',    channel: 'B2B Sales',      reason: 'Incomplete Form',   count: 5 },
  { date: '2024-11-05', user: 'Hessa Al-Mutairi',    channel: 'Direct Sales',   reason: 'Document Missing',  count: 1 },
  { date: '2024-11-06', user: 'Ibrahim Al-Sayed',    channel: 'Enterprise',     reason: 'Duplicate Entry',   count: 4 },
  { date: '2024-11-08', user: 'Ahmad Badr',          channel: 'Direct Sales',   reason: 'Incomplete Form',   count: 2 },
  { date: '2024-11-10', user: 'Rania Qassem',        channel: 'InDirect Sales', reason: 'Other',             count: 1 },
  { date: '2024-11-12', user: 'Layla Nasser',        channel: 'InDirect Sales', reason: 'Document Missing',  count: 3 },
  { date: '2024-11-14', user: 'Samer Al-Zubaidi',    channel: 'B2B Sales',      reason: 'Identity Mismatch', count: 2 },
  { date: '2024-11-15', user: 'Priya Sharma',        channel: 'Enterprise',     reason: 'Document Missing',  count: 6 },
  { date: '2024-11-16', user: 'Hessa Al-Mutairi',    channel: 'Direct Sales',   reason: 'Incomplete Form',   count: 2 },
  { date: '2024-11-18', user: 'Ahmad Badr',          channel: 'Direct Sales',   reason: 'Document Missing',  count: 4 },
  { date: '2024-11-19', user: 'Kevin Brown',         channel: 'B2B Sales',      reason: 'Duplicate Entry',   count: 1 },
  { date: '2024-11-20', user: 'Rania Qassem',        channel: 'InDirect Sales', reason: 'Identity Mismatch', count: 3 },
  { date: '2024-11-22', user: 'Priya Sharma',        channel: 'Enterprise',     reason: 'Incomplete Form',   count: 2 },
  { date: '2024-11-24', user: 'Layla Nasser',        channel: 'InDirect Sales', reason: 'Other',             count: 1 },
  { date: '2024-11-25', user: 'Ibrahim Al-Sayed',    channel: 'Enterprise',     reason: 'Document Missing',  count: 5 },
  { date: '2024-11-26', user: 'Kevin Brown',         channel: 'B2B Sales',      reason: 'Identity Mismatch', count: 2 },
  { date: '2024-11-28', user: 'Samer Al-Zubaidi',    channel: 'B2B Sales',      reason: 'Duplicate Entry',   count: 3 },
  { date: '2024-11-29', user: 'Ahmad Badr',          channel: 'Direct Sales',   reason: 'Incomplete Form',   count: 1 },
  { date: '2024-12-01', user: 'Hessa Al-Mutairi',    channel: 'Direct Sales',   reason: 'Document Missing',  count: 2 },
  { date: '2024-12-03', user: 'Priya Sharma',        channel: 'Enterprise',     reason: 'Duplicate Entry',   count: 4 },
  { date: '2024-12-05', user: 'Rania Qassem',        channel: 'InDirect Sales', reason: 'Document Missing',  count: 3 },
  { date: '2024-12-07', user: 'Layla Nasser',        channel: 'InDirect Sales', reason: 'Incomplete Form',   count: 2 },
  { date: '2024-12-09', user: 'Kevin Brown',         channel: 'B2B Sales',      reason: 'Other',             count: 1 },
  { date: '2024-12-11', user: 'Ibrahim Al-Sayed',    channel: 'Enterprise',     reason: 'Identity Mismatch', count: 3 },
  { date: '2024-12-13', user: 'Ahmad Badr',          channel: 'Direct Sales',   reason: 'Document Missing',  count: 5 },
  { date: '2024-12-15', user: 'Samer Al-Zubaidi',    channel: 'B2B Sales',      reason: 'Incomplete Form',   count: 2 },
  { date: '2024-12-17', user: 'Hessa Al-Mutairi',    channel: 'Direct Sales',   reason: 'Duplicate Entry',   count: 1 },
  { date: '2024-12-19', user: 'Priya Sharma',        channel: 'Enterprise',     reason: 'Document Missing',  count: 4 },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
}

function StatCard({ icon, label, value, sub, color }: {
  icon: React.ReactNode; label: string; value: string; sub: string; color: string;
}) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: '18px 20px', display: 'flex', gap: 14, alignItems: 'flex-start', flex: 1, minWidth: 0 }}>
      <div style={{ width: 38, height: 38, borderRadius: 9, background: `${color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ margin: 0, fontSize: 12, color: 'rgba(0,11,37,0.5)', fontWeight: 500 }}>{label}</p>
        <p style={{ margin: '4px 0 2px', fontSize: 24, fontWeight: 700, color: '#000b25', lineHeight: 1 }}>{value}</p>
        <p style={{ margin: 0, fontSize: 12, color: 'rgba(0,11,37,0.45)' }}>{sub}</p>
      </div>
    </div>
  );
}

function FilterSelect({ label, value, options, onChange }: {
  label: string; value: string; options: string[]; onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 11, fontWeight: 600, color: 'rgba(0,11,37,0.45)', textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ height: 34, padding: '0 10px', border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 13, color: '#000b25', background: '#fff', cursor: 'pointer', outline: 'none', minWidth: 160 }}
      >
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', fontSize: 12 }}>
      <p style={{ margin: '0 0 6px', fontWeight: 600, color: '#000b25' }}>{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} style={{ margin: '2px 0', color: p.color ?? '#000b25' }}>
          <span style={{ fontWeight: 600 }}>{p.value}</span> {p.name}
        </p>
      ))}
    </div>
  );
};

// ─── Custom checkbox ──────────────────────────────────────────────────────────

function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(v => !v)}
      style={{
        width: 15, height: 15, borderRadius: 3, flexShrink: 0, cursor: 'pointer',
        border: '1.5px solid #93c5fd',
        background: checked ? '#93c5fd' : '#eff6ff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.12s',
      }}
    >
      {checked && (
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
          <polyline points="1,3.5 3.5,6 8,1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

// ─── Grouped table ────────────────────────────────────────────────────────────

const PAGE_SIZE     = 50;  // flat mode rows per page
const GROUP_BATCH   = 25;  // rows revealed per "Show more" click

type Row = typeof RAW_ROWS[0];

function GroupedTable({ rows, groupBy }: { rows: Row[]; groupBy: 'none' | 'channel' | 'reason' }) {
  // Groups start collapsed — zero rows in DOM until user opens them
  const [expanded,   setExpanded]   = useState<Set<string>>(new Set());
  // Per-group visible row count (grows in GROUP_BATCH increments)
  const [visible,    setVisible]    = useState<Record<string, number>>({});
  // Flat-mode pagination
  const [page,       setPage]       = useState(1);

  // Reset pagination/expansion when data or groupBy changes
  const prevGroupBy = React.useRef(groupBy);
  if (prevGroupBy.current !== groupBy) {
    prevGroupBy.current = groupBy;
    setExpanded(new Set());
    setVisible({});
    setPage(1);
  }

  const toggleGroup = (key: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(key)) { next.delete(key); }
      else {
        next.add(key);
        // Initialise visible count on first open
        setVisible(v => key in v ? v : { ...v, [key]: GROUP_BATCH });
      }
      return next;
    });
  };

  const showMore = (key: string, total: number) =>
    setVisible(v => ({ ...v, [key]: Math.min((v[key] ?? GROUP_BATCH) + GROUP_BATCH, total) }));

  const groups = useMemo(() => {
    if (groupBy === 'none') return [{ key: '__all__', rows }];
    const map: { key: string; rows: Row[] }[] = [];
    rows.forEach(r => {
      const k = groupBy === 'channel' ? r.channel : r.reason;
      const g = map.find(g => g.key === k);
      if (g) g.rows.push(r); else map.push({ key: k, rows: [r] });
    });
    return map;
  }, [rows, groupBy]);

  const NCOLS = 5; // checkbox + Date + User + Channel + Reason

  // Shared header — Odoo style: light gray bg, checkbox col, medium-weight labels
  const THead = () => (
    <thead>
      <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <th style={{ width: 40, padding: '9px 14px', background: '#f8fafc' }}>
          <Checkbox />
        </th>
        {['Date', 'User', 'Channel', 'Rejection Reason'].map(col => (
          <th key={col} style={{ padding: '9px 14px 9px 0', textAlign: 'left', fontWeight: 600, fontSize: 13, color: '#000b25', whiteSpace: 'nowrap', background: '#f8fafc' }}>
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );

  // Shared detail row — plain white, no left stripe
  const DetailRow = ({ r, indent }: { r: Row; indent?: boolean }) => (
    <tr style={{ borderBottom: '1px solid #e5e7eb', background: '#fff' }}
      onMouseEnter={e => (e.currentTarget as HTMLTableRowElement).style.background = '#fafafa'}
      onMouseLeave={e => (e.currentTarget as HTMLTableRowElement).style.background = '#fff'}
    >
      <td style={{ width: 40, padding: '9px 14px' }}>
        <Checkbox />
      </td>
      <td style={{ padding: `9px 14px 9px ${indent ? 32 : 0}px`, color: '#374151', fontSize: 13 }}>{fmt(r.date)}</td>
      <td style={{ padding: '9px 14px 9px 0', fontWeight: 500, color: '#111827', fontSize: 13 }}>{r.user}</td>
      <td style={{ padding: '9px 14px 9px 0', color: '#374151', fontSize: 13 }}>{r.channel}</td>
      <td style={{ padding: '9px 14px 9px 0', fontSize: 13 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: 2, background: REASON_COLORS[r.reason] ?? C.teal, flexShrink: 0 }} />
          {r.reason}
        </span>
      </td>
    </tr>
  );

  // ── Flat mode ──────────────────────────────────────────────────────────────
  if (groupBy === 'none') {
    const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
    const pageRows   = rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    return (
      <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <THead />
          <tbody>
            {rows.length === 0
              ? <tr><td colSpan={NCOLS} style={{ padding: '48px 14px', textAlign: 'center', color: '#9ca3af', fontSize: 13 }}>No records match the selected filters.</td></tr>
              : pageRows.map((r, i) => <DetailRow key={i} r={r} />)
            }
          </tbody>
        </table>
        {totalPages > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, padding: '8px 14px', borderTop: '1px solid #e5e7eb', background: '#f9fafb' }}>
            <span style={{ fontSize: 12, color: '#6b7280' }}>
              {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, rows.length)} / {rows.length}
            </span>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
              style={{ width: 26, height: 26, border: '1px solid #d1d5db', borderRadius: 4, background: '#fff', cursor: page === 1 ? 'default' : 'pointer', fontSize: 15, color: '#6b7280', opacity: page === 1 ? 0.35 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              style={{ width: 26, height: 26, border: '1px solid #d1d5db', borderRadius: 4, background: '#fff', cursor: page === totalPages ? 'default' : 'pointer', fontSize: 15, color: '#6b7280', opacity: page === totalPages ? 0.35 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
          </div>
        )}
      </div>
    );
  }

  // ── Grouped mode ───────────────────────────────────────────────────────────
  return (
    <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <THead />
        <tbody>
          {rows.length === 0
            ? <tr><td colSpan={NCOLS} style={{ padding: '48px 14px', textAlign: 'center', color: '#9ca3af', fontSize: 13 }}>No records match the selected filters.</td></tr>
            : groups.map(group => {
                const isOpen    = expanded.has(group.key);
                const visCount  = visible[group.key] ?? GROUP_BATCH;
                const sliced    = group.rows.slice(0, visCount);
                const remaining = group.rows.length - visCount;

                return (
                  <React.Fragment key={group.key}>

                    {/* Group header — Odoo style */}
                    <tr onClick={() => toggleGroup(group.key)}
                      style={{ borderBottom: '1px solid #e5e7eb', background: '#fff', cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget as HTMLTableRowElement).style.background = '#fafafa'}
                      onMouseLeave={e => (e.currentTarget as HTMLTableRowElement).style.background = '#fff'}
                    >
                      <td colSpan={NCOLS} style={{ padding: '9px 14px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                          {/* Solid filled triangle — right when collapsed, rotates down when open */}
                          <svg width="7" height="9" viewBox="0 0 7 9"
                            style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.15s', flexShrink: 0 }}>
                            <polygon points="0,0 7,4.5 0,9" fill="#374151" />
                          </svg>
                          {groupBy === 'reason' && (
                            <span style={{ width: 9, height: 9, borderRadius: 2, background: REASON_COLORS[group.key] ?? C.teal, flexShrink: 0 }} />
                          )}
                          <span style={{ fontSize: 13, fontWeight: 500, color: '#111827' }}>
                            {group.key}
                          </span>
                          <span style={{ fontSize: 13, color: '#6b7280', fontWeight: 400 }}>
                            ( {group.rows.length} )
                          </span>
                        </span>
                      </td>
                    </tr>

                    {/* Expanded detail rows */}
                    {isOpen && sliced.map((r, i) => (
                      <DetailRow key={`${group.key}-${i}`} r={r} indent />
                    ))}

                    {/* Show more */}
                    {isOpen && remaining > 0 && (
                      <tr style={{ borderBottom: '1px solid #e5e7eb', background: '#fff' }}>
                        <td colSpan={NCOLS} style={{ padding: '8px 14px 8px 46px' }}>
                          <button
                            onClick={e => { e.stopPropagation(); showMore(group.key, group.rows.length); }}
                            style={{ fontSize: 12, fontWeight: 500, color: C.blue, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                          >
                            Show {Math.min(remaining, GROUP_BATCH)} more
                            <span style={{ color: '#9ca3af', fontWeight: 400 }}> ({remaining} remaining)</span>
                          </button>
                        </td>
                      </tr>
                    )}

                  </React.Fragment>
                );
              })
          }
        </tbody>
      </table>
    </div>
  );
}

// ─── Odoo-style search bar ─────────────────────────────────────────────────────

type GroupBy = 'none' | 'channel' | 'reason';

interface SearchPanelProps {
  dateFrom: string; setDateFrom: (v: string) => void;
  dateTo: string;   setDateTo:   (v: string) => void;
  groupBy: GroupBy; setGroupBy:  (v: GroupBy) => void;
  searchText: string; setSearchText: (v: string) => void;
  onClose: () => void;
}

function SearchPanel({ dateFrom, setDateFrom, dateTo, setDateTo, groupBy, setGroupBy, searchText, setSearchText, onClose }: SearchPanelProps) {
  const [customDate, setCustomDate] = useState(false);

  const applyPreset = (from: string, to: string) => { setDateFrom(from); setDateTo(to); onClose(); };

  const toggleGroup = (val: 'channel' | 'reason') => {
    setGroupBy(groupBy === val ? 'none' : val);
  };

  return (
    <div style={{
      position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 200,
      background: '#fff', border: '1px solid #d1d5db', borderRadius: 8,
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)', display: 'flex',
      minWidth: 620, fontSize: 13,
    }}>
      {/* Filters */}
      <div style={{ flex: 1, padding: '14px 16px', borderRight: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
          <SlidersHorizontal size={13} color="#374151" />
          <span style={{ fontWeight: 700, color: '#111827', fontSize: 13 }}>Filters</span>
        </div>
        {[
          { label: 'This Month',   from: '2024-12-01', to: '2024-12-31' },
          { label: 'Last Month',   from: '2024-11-01', to: '2024-11-30' },
          { label: 'Last 3 Months',from: '2024-10-01', to: '2024-12-31' },
        ].map(p => (
          <button key={p.label} onClick={() => applyPreset(p.from, p.to)}
            style={{ display: 'block', width: '100%', textAlign: 'left', padding: '5px 8px', borderRadius: 5, border: 'none', background: 'none', cursor: 'pointer', color: '#374151', fontSize: 13 }}
            onMouseEnter={e => (e.currentTarget.style.background = '#f3f4f6')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}
          >{p.label}</button>
        ))}
        <button onClick={() => setCustomDate(v => !v)}
          style={{ display: 'flex', alignItems: 'center', gap: 5, width: '100%', textAlign: 'left', padding: '5px 8px', borderRadius: 5, border: 'none', background: 'none', cursor: 'pointer', color: '#0072CE', fontSize: 13, marginTop: 2 }}
          onMouseEnter={e => (e.currentTarget.style.background = '#f3f4f6')}
          onMouseLeave={e => (e.currentTarget.style.background = 'none')}
        >
          <span style={{ fontSize: 16, lineHeight: 1 }}>+</span> Custom Date Range
        </button>
        {customDate && (
          <div style={{ marginTop: 8, padding: '10px 8px', background: '#f9fafb', borderRadius: 6, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[{ lbl: 'From', val: dateFrom, set: setDateFrom }, { lbl: 'To', val: dateTo, set: setDateTo }].map(({ lbl, val, set }) => (
              <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 11, color: '#6b7280', width: 28 }}>{lbl}</span>
                <input type="date" value={val} onChange={e => set(e.target.value)}
                  style={{ flex: 1, height: 28, padding: '0 8px', border: '1px solid #d1d5db', borderRadius: 5, fontSize: 12, color: '#111827', outline: 'none' }} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Group By */}
      <div style={{ flex: 1, padding: '14px 16px', borderRight: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
          <Layers size={13} color="#374151" />
          <span style={{ fontWeight: 700, color: '#111827', fontSize: 13 }}>Group By</span>
        </div>
        {([['channel', 'Channel'] as const, ['reason', 'Rejection Reason'] as const]).map(([val, lbl]) => (
          <button key={val} onClick={() => toggleGroup(val)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', textAlign: 'left', padding: '5px 8px', borderRadius: 5, border: 'none', background: 'none', cursor: 'pointer', color: groupBy === val ? '#0072CE' : '#374151', fontSize: 13, fontWeight: groupBy === val ? 600 : 400 }}
            onMouseEnter={e => (e.currentTarget.style.background = '#f3f4f6')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}
          >
            <span style={{ width: 14, display: 'inline-block', color: '#0072CE', fontSize: 14 }}>{groupBy === val ? '✓' : ''}</span>
            {lbl}
          </button>
        ))}
      </div>

      {/* Favorites */}
      <div style={{ flex: 1, padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
          <Star size={13} color="#f59e0b" fill="#f59e0b" />
          <span style={{ fontWeight: 700, color: '#111827', fontSize: 13 }}>Favorites</span>
        </div>
        <button
          style={{ display: 'flex', alignItems: 'center', gap: 5, width: '100%', textAlign: 'left', padding: '5px 8px', borderRadius: 5, border: 'none', background: 'none', cursor: 'pointer', color: '#374151', fontSize: 13 }}
          onMouseEnter={e => (e.currentTarget.style.background = '#f3f4f6')}
          onMouseLeave={e => (e.currentTarget.style.background = 'none')}
        >
          Save current search
          <ChevronDown size={12} style={{ marginLeft: 'auto', color: '#9ca3af' }} />
        </button>
      </div>
    </div>
  );
}

function OdooSearchBar({
  dateFrom, setDateFrom, dateTo, setDateTo,
  groupBy, setGroupBy, searchText, setSearchText,
}: {
  dateFrom: string; setDateFrom: (v: string) => void;
  dateTo: string;   setDateTo:   (v: string) => void;
  groupBy: GroupBy; setGroupBy:  (v: GroupBy) => void;
  searchText: string; setSearchText: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const chips: { label: string; onRemove: () => void }[] = [];
  if (groupBy === 'channel')  chips.push({ label: 'Group: Channel',          onRemove: () => setGroupBy('none') });
  if (groupBy === 'reason')   chips.push({ label: 'Group: Rejection Reason', onRemove: () => setGroupBy('none') });
  const defaultFrom = '2024-11-01', defaultTo = '2024-12-31';
  if (dateFrom !== defaultFrom || dateTo !== defaultTo)
    chips.push({ label: `${dateFrom} → ${dateTo}`, onRemove: () => { setDateFrom(defaultFrom); setDateTo(defaultTo); } });

  return (
    <div ref={ref} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {/* Search box */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap',
        border: '1px solid #d1d5db', borderRadius: 6, background: '#fff',
        padding: '4px 0 4px 10px', minHeight: 36, flex: 1,
        boxShadow: open ? '0 0 0 2px rgba(0,114,206,0.15)' : 'none',
        borderColor: open ? '#0072CE' : '#d1d5db',
        transition: 'border-color 0.15s, box-shadow 0.15s',
      }}>
        <Search size={14} color="#9ca3af" style={{ flexShrink: 0 }} />

        {/* Active chips */}
        {chips.map(chip => (
          <span key={chip.label} style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            background: '#dbeafe', color: '#0072CE', borderRadius: 4,
            fontSize: 12, fontWeight: 500, padding: '2px 6px 2px 8px', flexShrink: 0,
          }}>
            {chip.label}
            <button onClick={chip.onRemove} style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#0072CE' }}>
              <X size={11} />
            </button>
          </span>
        ))}

        {/* Text input */}
        <input
          placeholder={chips.length === 0 ? 'Search…' : ''}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onFocus={() => setOpen(true)}
          style={{ flex: 1, minWidth: 80, border: 'none', outline: 'none', fontSize: 13, color: '#111827', background: 'transparent', padding: '2px 0' }}
        />

        {/* Dropdown arrow */}
        <button
          onClick={() => setOpen(v => !v)}
          style={{
            alignSelf: 'stretch', padding: '0 10px', border: 'none', borderLeft: '1px solid #e5e7eb',
            background: open ? '#f9fafb' : '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center',
            borderRadius: '0 5px 5px 0', color: '#6b7280', flexShrink: 0,
          }}
        >
          <ChevronDown size={14} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }} />
        </button>
      </div>

      {/* Dropdown panel */}
      {open && (
        <SearchPanel
          dateFrom={dateFrom} setDateFrom={setDateFrom}
          dateTo={dateTo}     setDateTo={setDateTo}
          groupBy={groupBy}   setGroupBy={setGroupBy}
          searchText={searchText} setSearchText={setSearchText}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function OnboardingRejectionReport() {
  const [dateFrom,    setDateFrom]    = useState('2024-11-01');
  const [dateTo,      setDateTo]      = useState('2024-12-31');
  const [searchText,  setSearchText]  = useState('');
  const [groupBy,     setGroupBy]     = useState<GroupBy>('none');
  const [tab,         setTab]         = useState<'charts' | 'table'>('table');
  const [chartsVisible, setChartsVisible] = useState(false);

  const filtered = useMemo(() => RAW_ROWS.filter(r => {
    if (r.date < dateFrom || r.date > dateTo) return false;
    if (searchText && !r.user.toLowerCase().includes(searchText.toLowerCase())) return false;
    return true;
  }), [dateFrom, dateTo, searchText]);

  const totalRejections = filtered.reduce((s, r) => s + r.count, 0);
  const uniqueUsers     = new Set(filtered.map(r => r.user)).size;
  const topReason       = useMemo(() => {
    const tally: Record<string, number> = {};
    filtered.forEach(r => { tally[r.reason] = (tally[r.reason] ?? 0) + r.count; });
    return Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '—';
  }, [filtered]);

  // Trend: rejections per day
  const trendData = useMemo(() => {
    const byDate: Record<string, number> = {};
    filtered.forEach(r => { byDate[r.date] = (byDate[r.date] ?? 0) + r.count; });
    return Object.entries(byDate).sort().map(([date, total]) => ({ date: fmt(date), total }));
  }, [filtered]);

  // Per-user rejections (top 8)
  const userData = useMemo(() => {
    const byUser: Record<string, number> = {};
    filtered.forEach(r => { byUser[r.user] = (byUser[r.user] ?? 0) + r.count; });
    return Object.entries(byUser).sort((a, b) => b[1] - a[1]).slice(0, 8)
      .map(([name, total]) => ({ name: name.split(' ')[0] + ' ' + name.split(' ').slice(-1)[0].charAt(0) + '.', total }));
  }, [filtered]);

  // Reason breakdown
  const reasonData = useMemo(() => {
    const tally: Record<string, number> = {};
    filtered.forEach(r => { tally[r.reason] = (tally[r.reason] ?? 0) + r.count; });
    return Object.entries(tally).map(([name, value]) => ({ name, value }));
  }, [filtered]);

  const handleExport = () => {
    const header = 'Date,User,Channel,Reason,Count';
    const rows   = filtered.map(r => `${r.date},${r.user},${r.channel},${r.reason},${r.count}`);
    const csv    = [header, ...rows].join('\n');
    const blob   = new Blob([csv], { type: 'text/csv' });
    const url    = URL.createObjectURL(blob);
    const a      = document.createElement('a');
    a.href = url; a.download = 'onboarding-rejections.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f8fafc', overflowY: 'auto' }}>

      {/* Odoo-style toolbar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '10px 24px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        {/* Search bar — fixed width normally, grows to fill when multiple chips are active */}
        <div style={{
          width: ((groupBy !== 'none' ? 1 : 0) + ((dateFrom !== '2024-11-01' || dateTo !== '2024-12-31') ? 1 : 0) + (searchText ? 1 : 0)) > 1 ? undefined : 420,
          flex:  ((groupBy !== 'none' ? 1 : 0) + ((dateFrom !== '2024-11-01' || dateTo !== '2024-12-31') ? 1 : 0) + (searchText ? 1 : 0)) > 1 ? 1 : 'none',
        }}>
          <OdooSearchBar
            dateFrom={dateFrom}   setDateFrom={setDateFrom}
            dateTo={dateTo}       setDateTo={setDateTo}
            groupBy={groupBy}     setGroupBy={setGroupBy}
            searchText={searchText} setSearchText={setSearchText}
          />
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Right-side actions — mirrors Odoo's "Operations" + pagination */}
        <button onClick={handleExport}
          style={{ display: 'flex', alignItems: 'center', gap: 7, height: 34, padding: '0 14px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: '#374151', flexShrink: 0 }}>
          <Download size={13} /> Export <ChevronDown size={12} style={{ marginLeft: 2 }} />
        </button>

        {/* Record count + prev/next — Odoo style */}
        <span style={{ fontSize: 13, color: '#6b7280', flexShrink: 0, userSelect: 'none' }}>
          1–{filtered.length} / {filtered.length}
        </span>
        <div style={{ display: 'flex', gap: 2 }}>
          {(['‹', '›'] as const).map((arrow, i) => (
            <button key={arrow} disabled
              style={{ width: 28, height: 28, borderRadius: 5, border: '1px solid #e5e7eb', background: '#fff', cursor: 'default', fontSize: 16, color: '#d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {arrow}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* KPI tiles */}
        <div style={{ display: 'flex', gap: 16 }}>
          <StatCard
            icon={<TrendingDown size={18} color={C.red} />}
            label="Total Rejections"
            value={String(totalRejections)}
            sub="in selected period"
            color={C.red}
          />
          <StatCard
            icon={<AlertCircle size={18} color={C.amber} />}
            label="Rejection Rate"
            value={totalRejections > 0 ? `${((totalRejections / (totalRejections + 240)) * 100).toFixed(1)}%` : '0%'}
            sub="vs. total onboardings"
            color={C.amber}
          />
          <StatCard
            icon={<Users size={18} color={C.blue} />}
            label="Affected Users"
            value={String(uniqueUsers)}
            sub="unique users with rejections"
            color={C.blue}
          />
          <StatCard
            icon={<Tag size={18} color={C.purple} />}
            label="Top Reason"
            value={topReason === '—' ? '—' : topReason.split(' ')[0]}
            sub={topReason}
            color={C.purple}
          />
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
          {chartsVisible && (
            <button onClick={() => setTab('charts')} style={{ padding: '8px 20px', fontSize: 13, fontWeight: 500, border: 'none', background: 'transparent', cursor: 'pointer', color: tab === 'charts' ? '#0072CE' : 'rgba(0,11,37,0.5)', borderBottom: tab === 'charts' ? '2px solid #0072CE' : '2px solid transparent' }}>
              Charts
            </button>
          )}
          <button onClick={() => setTab('table')} style={{ padding: '8px 20px', fontSize: 13, fontWeight: 500, border: 'none', background: 'transparent', cursor: 'pointer', color: tab === 'table' ? '#0072CE' : 'rgba(0,11,37,0.5)', borderBottom: tab === 'table' ? '2px solid #0072CE' : '2px solid transparent' }}>
            Detail Table
          </button>

          {/* Charts toggle button — far right of tab bar */}
          <button
            onClick={() => { const next = !chartsVisible; setChartsVisible(next); setTab(next ? 'charts' : 'table'); }}
            title={chartsVisible ? 'Hide charts' : 'Show charts'}
            style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, padding: '4px 12px', marginBottom: 4, borderRadius: 6, border: '1px solid #e2e8f0', background: chartsVisible ? '#eff6ff' : '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 500, color: chartsVisible ? '#0072CE' : 'rgba(0,11,37,0.5)', transition: 'all 0.15s' }}
          >
            {chartsVisible ? <EyeOff size={13} /> : <BarChart2 size={13} />}
            {chartsVisible ? 'Hide Charts' : 'Show Charts'}
          </button>
        </div>

        {tab === 'charts' && chartsVisible && (
          <>
            {/* Trend line chart */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: '20px 24px' }}>
              <h3 style={{ margin: '0 0 16px', fontSize: 14, fontWeight: 600, color: '#000b25' }}>Rejection Frequency Over Time</h3>
              {trendData.length === 0 ? (
                <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0,11,37,0.35)', fontSize: 13 }}>No data for selected filters</div>
              ) : (
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={trendData} margin={{ top: 4, right: 16, bottom: 0, left: -10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="date" tick={{ fontSize: 11, fill: 'rgba(0,11,37,0.45)' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: 'rgba(0,11,37,0.45)' }} axisLine={false} tickLine={false} allowDecimals={false} />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e2e8f0', strokeWidth: 1 }} />
                    <Line type="monotone" dataKey="total" name="rejections" stroke={C.blue} strokeWidth={2} dot={{ r: 3, fill: C.blue, strokeWidth: 0 }} activeDot={{ r: 5, strokeWidth: 0 }} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Bottom row: bar + pie */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

              {/* Rejections per user */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: '20px 24px' }}>
                <h3 style={{ margin: '0 0 16px', fontSize: 14, fontWeight: 600, color: '#000b25' }}>Rejections per User</h3>
                {userData.length === 0 ? (
                  <div style={{ height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0,11,37,0.35)', fontSize: 13 }}>No data</div>
                ) : (
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={userData} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                      <XAxis type="number" tick={{ fontSize: 11, fill: 'rgba(0,11,37,0.45)' }} axisLine={false} tickLine={false} allowDecimals={false} />
                      <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: 'rgba(0,11,37,0.55)' }} axisLine={false} tickLine={false} width={72} />
                      <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
                      <Bar dataKey="total" name="rejections" fill={C.blue} radius={[0, 4, 4, 0]} maxBarSize={18} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>

              {/* Reason breakdown pie */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: '20px 24px' }}>
                <h3 style={{ margin: '0 0 16px', fontSize: 14, fontWeight: 600, color: '#000b25' }}>Rejection Reasons Breakdown</h3>
                {reasonData.length === 0 ? (
                  <div style={{ height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0,11,37,0.35)', fontSize: 13 }}>No data</div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 220 }}>
                    <ResponsiveContainer width="55%" height="100%">
                      <PieChart>
                        <Pie data={reasonData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" strokeWidth={2} stroke="#fff">
                          {reasonData.map((entry, idx) => (
                            <Cell key={`${entry.name}-${idx}`} fill={REASON_COLORS[entry.name] ?? C.teal} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, minWidth: 0 }}>
                      {reasonData.map((entry, idx) => (
                        <div key={`legend-${entry.name}-${idx}`} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                          <div style={{ width: 10, height: 10, borderRadius: 3, background: REASON_COLORS[entry.name] ?? C.teal, flexShrink: 0 }} />
                          <span style={{ fontSize: 11, color: 'rgba(0,11,37,0.6)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{entry.name}</span>
                          <span style={{ fontSize: 11, fontWeight: 600, color: '#000b25' }}>{entry.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

      </div>

      {tab === 'table' && <GroupedTable rows={filtered} groupBy={groupBy} />}

    </div>
  );
}
