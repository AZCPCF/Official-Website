
export interface DocEntry {
  id: string;
  title: string;
  path: string;
  content: string;
  searchable: string;
  language: 'en' | 'fa';
  category: string;
  weight: number;
}