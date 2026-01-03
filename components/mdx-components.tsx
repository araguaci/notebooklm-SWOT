import React from 'react';

export function Callout({ type = 'info', children }: { type?: 'info' | 'success' | 'warning' | 'danger'; children: React.ReactNode }) {
  const styles = {
    info: 'bg-blue-500/10 border-blue-500/50 text-blue-300',
    success: 'bg-green-500/10 border-green-500/50 text-green-300',
    warning: 'bg-yellow-500/10 border-yellow-500/50 text-yellow-300',
    danger: 'bg-red-500/10 border-red-500/50 text-red-300',
  };

  return (
    <div className={`rounded-lg border p-4 my-4 ${styles[type]}`}>
      {children}
    </div>
  );
}

export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-white/10 rounded-lg">
        {children}
      </table>
    </div>
  );
}

// Export table subcomponents for proper MDX rendering
export const THead = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-white/5">{children}</thead>
);

export const TBody = ({ children }: { children: React.ReactNode }) => (
  <tbody>{children}</tbody>
);

export const TR = ({ children }: { children: React.ReactNode }) => (
  <tr className="border-b border-white/10 hover:bg-white/5">{children}</tr>
);

export const TH = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-3 text-left font-bold text-white">{children}</th>
);

export const TD = ({ children }: { children: React.ReactNode }) => (
  <td className="px-4 py-3 text-gray-300">{children}</td>
);

export function Card({ title, variant = 'default', children }: { title?: string; variant?: 'default' | 'success' | 'warning' | 'info' | 'danger'; children: React.ReactNode }) {
  const styles = {
    default: 'bg-white/[0.02] border-white/10',
    success: 'bg-green-500/10 border-green-500/50',
    warning: 'bg-yellow-500/10 border-yellow-500/50',
    info: 'bg-blue-500/10 border-blue-500/50',
    danger: 'bg-red-500/10 border-red-500/50',
  };

  return (
    <div className={`rounded-xl border p-4 ${styles[variant]}`}>
      {title && <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>}
      <div className="text-gray-300">{children}</div>
    </div>
  );
}

export function Grid({ columns = 2, children }: { columns?: number; children: React.ReactNode }) {
  const gridCols = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-2';
  
  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-4 my-6`}>
      {children}
    </div>
  );
}

