export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities?: string;
  projects?: {
    name: string;
    link: string;
  }[];
}

export const experiences: Experience[] = [
  {
    id: "qwen",
    title: "Research Intern",
    company: "Qwen Team",
    period: "2024.11 - 2025.08",
    responsibilities: "Build a large-scale reinforcement learning infrastructure suitable for training computer-use agents; develop the Qwen3-Coder model.",
    projects: [
      {
        name: "Qwen3-Coder",
        link: "https://github.com/QwenLM/Qwen3-Coder"
      },
    ]
  },
];