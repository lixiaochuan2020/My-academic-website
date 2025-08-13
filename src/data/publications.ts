export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  special?: string; // for spotlight, etc.
  paperLink?: string;
  codeLink?: string;
}

export const publications: Publication[] = [
  {
    id: "osworld-g",
    title: "Scaling Computer-Use Grounding via UI Decomposition and Synthesis",
    authors: "Tianbao Xie*, Jiaqi Deng*, Xiaochuan Li*, Junlin Yang*, Haoyuan Wu, Jixuan Chen, Wenjing Hu, Xinyuan Wang, Yuhui Xu, Zekun Wang, Yiheng Xu, Junli Wang, Doyen Sahoo, Tao Yu, Caiming Xiong",
    venue: "arXiv",
    year: 2025,
    paperLink: "https://arxiv.org/abs/2505.13227",
    codeLink: "https://github.com/xlang-ai/OSWorld-G"
  },
  {
    id: "montessori-instruct",
    title: "Montessori-Instruct: Generate Influential Training Data Tailored for Student Learning",
    authors: "Xiaochuan Li, Zichun Yu, Chenyan Xiong",
    venue: "ICLR",
    year: 2025,
    paperLink: "https://arxiv.org/abs/2410.14208",
    codeLink: "https://github.com/cxcscmu/Montessori-Instruct"
  },
  {
    id: "osworld",
    title: "OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments",
    authors: "Tianbao Xie, Danyang Zhang, Jixuan Chen, Xiaochuan Li, Siheng Zhao, Ruisheng Cao, Toh Jing Hua, Zhoujun Cheng, Dongchan Shin, Fangyu Lei, Yitao Liu, Yiheng Xu, Shuyan Zhou, Silvio Savarese, Caiming Xiong, Victor Zhong, Tao Yu",
    venue: "NIPS 2024 D&B Track",
    year: 2024,
    paperLink: "https://arxiv.org/abs/2404.07972",
    codeLink: "https://os-world.github.io/"
  },
  // {
  //   id: "adversarial-factoid",
  //   title: "Evaluating Robustness of Generative Search Engine on Adversarial Factoid Questions",
  //   authors: "Xuming Hu*, Xiaochuan Li*, Junzhe Chen, Yinghui Li, Yangning Li, Xiaoguang Li, Yasheng Wang, Qun Liu, Lijie Wen, Philip S. Yu, Zhijiang Guo",
  //   venue: "ACL 2024 Findings",
  //   year: 2024,
  //   paperLink: "https://arxiv.org/abs/2403.12077",
  //   codeLink: "https://github.com/HKUSTGZ-NLP/Adversarial-Attack"
  // },
  // {
  //   id: "factual-knowledge",
  //   title: "Towards Understanding Factual Knowledge of Large Language Models",
  //   authors: "Xuming Hu*, Junzhe Chen*, Xiaochuan Li*, Yufei Guo, Lijie Wen, Philip S. Yu, Zhijiang Guo",
  //   venue: "ICLR",
  //   year: 2024,
  //   special: "Spotlight",
  //   paperLink: "https://openreview.net/pdf?id=9OevMUdods",
  //   codeLink: "https://github.com/THU-BPM/Pinocchio"
  // },
  // {
  //   id: "songc-compiler",
  //   title: "SongC: A Compiler for Hybrid Near-Memory and In-Memory Many-Core Architecture",
  //   authors: "Junfeng Lin*, Huanyu Qu*, Songchen Ma*, Xinglong Ji, Hongyi Li, Xiaochuan Li, Chenhang Song, Weihao Zhang",
  //   venue: "IEEE Transactions on Computers",
  //   year: 2023,
  //   paperLink: "https://ieeexplore.ieee.org/abstract/document/10242088",
  //   codeLink: "https://github.com/openBII/BiMap"
  // }
];