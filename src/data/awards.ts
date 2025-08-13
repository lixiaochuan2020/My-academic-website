export interface Award {
  id: string;
  title: string;
  titleChinese?: string;
  year: number;
  organization: string;
}

export const awards: Award[] = [
  {
    id: "outstanding-graduate",
    title: "Outstanding Graduates",
    year: 2025,
    organization: "Tsinghua University"
  },
  {
    id: "special-class-scholarship",
    title: "Special-Class Scholarship",
    year: 2024,
    organization: "Tsinghua University"
  },
  {
    id: "comprehensive-excellence",
    title: "Comprehensive Excellence Scholarship",
    year: 2023,
    organization: "Tsinghua University"
  }
];