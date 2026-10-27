import React from 'react';
import { OrgHierarchyPage } from './org-hierarchy-page';

// ─── STC Hierarchy tree ─────────────────────────────────────────────────────────

const stcHierarchyData = {
  label: 'Operator',
  children: [
    { label: 'Direct Sales' },
    {
      label: 'InDirect Sales',
      children: [
        {
          label: 'Distributor',
          children: [
            {
              label: 'Field Manager',
              children: [
                {
                  label: 'DSM',
                  children: [
                    { label: 'Dealer', children: [{ label: 'D-Child' }] },
                  ],
                },
              ],
            },
            { label: 'POS' },
            { label: 'Partner X' },
          ],
        },
        { label: 'Partner' },
        { label: 'Jarir Shop' },
        { label: 'SWAT Partner' },
        { label: 'FTTH Partner' },
        { label: 'Express Partner' },
      ],
    },
    {
      label: 'B2B Sales',
      children: [
        {
          label: 'B2B GM',
          children: [
            {
              label: 'Sales Managers',
              children: [
                {
                  label: 'Sales Account Managers',
                  children: [{ label: 'Sales Account Manager Child' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Enterprise Business Unit',
      children: [
        {
          label: 'VP',
          children: [
            {
              label: 'EBU GM',
              children: [
                {
                  label: 'Senior Manager',
                  children: [
                    {
                      label: 'Vertical Manager',
                      children: [
                        {
                          label: 'Key Account Manager',
                          children: [
                            {
                              label: 'Indirect Partners',
                              children: [{ label: 'Indirect Staff' }],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { label: 'Custom Hierarchy' },
    {
      label: 'All Sales Channel',
      children: [
        { label: 'Sales Champion' },
        { label: 'Team Leader' },
        { label: 'Account Manager' },
        { label: 'Regional Manager' },
        { label: 'Mass Market Developer' },
      ],
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export function StcHierarchyPage() {
  return <OrgHierarchyPage data={stcHierarchyData} initialZoom={0.75} />;
}
