import React from 'react';

// ── Icon SVGs (inline to avoid import coupling) ───────────────────────────────

const IconProfile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const IconKeyboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="M6 8h.001M10 8h.001M14 8h.001M18 8h.001M8 12h.001M12 12h.001M16 12h.001M7 16h10"/>
  </svg>
);

const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const IconLogout = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

// ── Menu item definitions ─────────────────────────────────────────────────────

const ITEMS = [
  { id: 'profile',     Icon: IconProfile,  label: 'My Profile',   extra: null,                                                                          danger: false },
  { id: 'shortcuts',   Icon: IconKeyboard, label: 'Shortcuts',    extra: <span style={{ fontSize: 11, fontWeight: 500, color: '#9ca3af', background: '#f3f4f6', borderRadius: 4, padding: '1px 6px', marginLeft: 'auto' }}>CTRL+K</span>, danger: false },
  { id: 'preferences', Icon: IconSettings, label: 'Preferences',  extra: null,                                                                          danger: false },
  { id: 'logout',      Icon: IconLogout,   label: 'Log out',      extra: null,                                                                          danger: true  },
] as const;

type ItemId = typeof ITEMS[number]['id'];

// ── Single context menu snapshot ───────────────────────────────────────────────

function ContextMenuSnapshot({ activeId, pressedId }: { activeId?: ItemId; pressedId?: ItemId }) {
  return (
    <div style={{ width: 224, background: '#fff', borderRadius: 12, boxShadow: '0 10px 32px rgba(0,0,0,0.12)', border: '1px solid #f3f4f6', padding: '8px 0' }}>
      {/* Header */}
      <div style={{ padding: '8px 16px 8px', borderBottom: '1px solid #f3f4f6', marginBottom: 4 }}>
        <p style={{ margin: 0, fontSize: 10, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1 }}>Signed in as</p>
        <p style={{ margin: '2px 0 0', fontSize: 13, fontWeight: 600, color: '#374151' }}>admin@salespoint.lp</p>
      </div>

      {ITEMS.map((item, i) => {
        const isActive  = activeId  === item.id;
        const isPressed = pressedId === item.id;
        const isDanger  = item.danger;

        return (
          <React.Fragment key={item.id}>
            {isDanger && <div style={{ borderTop: '1px solid #f3f4f6', margin: '4px 0' }} />}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 16px',
              background: isPressed ? (isDanger ? '#fee2e2' : '#dbeafe') : isActive ? (isDanger ? '#fef2f2' : '#eff6ff') : 'transparent',
              color: (isPressed || isActive) ? (isDanger ? '#dc2626' : '#2563eb') : isDanger ? '#dc2626' : '#4b5563',
              fontSize: 13,
              transform: isPressed ? 'scale(0.98)' : 'none',
              cursor: 'pointer',
            }}>
              <item.Icon />
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.extra}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ── States catalogue ───────────────────────────────────────────────────────────

const STATES: { label: string; activeId?: ItemId; pressedId?: ItemId }[] = [
  { label: 'Default' },
  { label: 'Hover — My Profile',   activeId: 'profile' },
  { label: 'Hover — Shortcuts',    activeId: 'shortcuts' },
  { label: 'Hover — Preferences',  activeId: 'preferences' },
  { label: 'Hover — Log out',      activeId: 'logout' },
  { label: 'Press — My Profile',   pressedId: 'profile' },
  { label: 'Press — Shortcuts',    pressedId: 'shortcuts' },
  { label: 'Press — Preferences',  pressedId: 'preferences' },
  { label: 'Press — Log out',      pressedId: 'logout' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export function ComponentStates() {
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#f8fafc', padding: 32 }}>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#000b25' }}>Component States</h2>
        <p style={{ margin: '4px 0 0', fontSize: 13, color: 'rgba(0,11,37,0.5)' }}>All interactive states shown statically — copy any to the Figma canvas.</p>
      </div>

      {/* Context Menu section */}
      <div style={{ marginBottom: 12 }}>
        <p style={{ margin: '0 0 16px', fontSize: 12, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1 }}>Context Menu — User dropdown</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
          {STATES.map(s => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#6b7280', textAlign: 'center' }}>{s.label}</span>
              <ContextMenuSnapshot activeId={s.activeId} pressedId={s.pressedId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
