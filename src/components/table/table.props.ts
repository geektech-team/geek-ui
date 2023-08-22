export interface Col {
  key: string;
  display: string;
  width: string;
  rowSpan: number;
  colSpan: number;
  parents: Col[];
}
export interface HeaderItem {
  key: string;
  display: string;
  width: string;
  children?: HeaderItem[];
  parents?: Col[];
}

export interface TableProps {
  header: HeaderItem[];
  data: Record<string, any>[];
}
