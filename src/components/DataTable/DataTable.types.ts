import type { ReactNode } from "react";

export interface Column<T> {
  key: keyof T | string; // The key in your data object
  label: string;         // The text shown in the header
  sortable?: boolean;    // Whether to show the sort icon
  // Custom render function for complex cells (like the document link or status badge)
  render?: (value: any, record: T) => ReactNode; 
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onSort?: () => void;
}

export interface TableHeaderProps {
  title: string;
  onSort?: () => void;
  isSortable?: boolean;
}