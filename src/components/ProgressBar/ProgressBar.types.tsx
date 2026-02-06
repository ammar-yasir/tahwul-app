export interface Milestone {
  label: string;
  date: string;
  isCompleted: boolean;
}

export interface ProgressBarProps {
  milestones: Milestone[];
}