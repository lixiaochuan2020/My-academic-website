export interface ProfileData {
  name: string;
  chineseName: string;
  institution: string;
  department: string;
  email: string;
  socialLinks: {
    github?: string;
    twitter?: string;
    googleScholar?: string;
    cv?: string;
  };
}

export const profileData: ProfileData = {
  name: "Xiaochuan Li",
  chineseName: "李晓川",
  institution: "Carnegie Mellon University",
  department: "Language Technologies Institute",
  email: "xiaochu4 [at] andrew.cmu.edu",
  socialLinks: {
    github: "https://github.com/lixiaochuan2020",
    twitter: "https://twitter.com/xiaochuanlee", 
    googleScholar: "https://scholar.google.com/citations?user=97QHT-0AAAAJ&hl=en",
    cv: "/files/Xiaochuan_s_CV_20250813.pdf"
  },
};
