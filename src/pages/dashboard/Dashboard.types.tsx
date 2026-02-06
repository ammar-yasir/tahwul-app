export interface StatCardData {
  label: string;
  value: string | number;
  icon: string;
}

export interface Status {
  label: string;
  color: string;
  textColor: string;
}

export interface MileStone {
  id: number;
  status: string;
}

export interface CategoryCard {
  id: string;
  name: string;
  milestones: MileStone[];
}

export interface CategoryData {
  id: number;
  title: string;
  progress: string;
  cards: CategoryCard[];
}

export interface Activity {
  title: string;
  time: string;
}
