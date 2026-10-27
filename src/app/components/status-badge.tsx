import React from 'react';

type StatusType = 'Approved' | 'Rejected' | 'Pending' | 'Feeding';

interface StatusBadgeProps {
  status: StatusType;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    Approved: 'bg-[#e7f6ec] text-[#00a854] border-[#e7f6ec] dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20',
    Rejected: 'bg-[#fff1f0] text-[#f5222d] border-[#fff1f0] dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20',
    Pending: 'bg-[#fffbe6] text-[#faad14] border-[#fffbe6] dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20',
    Feeding: 'bg-[#fff7e6] text-[#fa8c16] border-[#fff7e6] dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20',
  };

  return (
    <span className={`px-4 py-1 rounded-full text-[11px] font-semibold border flex items-center justify-center w-fit min-w-[100px] mx-auto transition-all duration-200 ${styles[status]}`}>
      {status}
    </span>
  );
}