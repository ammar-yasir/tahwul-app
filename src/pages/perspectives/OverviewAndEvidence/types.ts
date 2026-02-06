import type { BadgeVariants } from "../../../components/Badge/Badge.types";

export type StatusType = 'Approved' | 'Pending Review' | 'Rejected' | string;

export interface IDocument {
  id: string;
  name: string;
  lead: string;
  preparer: string;
  date: string;
  dueDate: string;
  status: StatusType;
}

export const STATUS_MAP: Record<StatusType, BadgeVariants> = {
  'Approved': 'success',
  'Pending Review': 'pending',
  'Rejected': 'rejected',
  'Draft': 'draft',
};

export interface Comment {
  name: string;
  desc: string;
  date: string;
}