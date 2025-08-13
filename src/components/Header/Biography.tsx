export default function Biography() {
  return (
    <div className="bg-gray-50 p-6 pt-4 pb-4">
      <div className="text-gray-900 leading-relaxed">
        <p>
          I am a first-year Ph.D. student at Carnegie Mellon University, advised by Prof. <a href="https://www.cs.cmu.edu/~cx/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors" target="_blank" rel="noopener noreferrer">Chenyan Xiong</a>. My research interests lie in Machine Learning and Natural Language Processing, with a particular focus on data-centric large language models. I am keen on:
        </p>
        <ul className="list-disc list-inside mt-2 mb-2 space-y-1">
          <li>The relationship between data and model performance.</li>
          <li>Tracing the origins of model capabilities (e.g., reasoning) to their data sources.</li>
          <li>Generating higher-quality and more effective training data.</li>
        </ul>
        <p>
        Prior to attending CMU, I earned my bachelor's degree in Software Engineering with the highest honors from Tsinghua University in 2025. During my exchange at the University of Hong Kong, I was fortunate to work with Prof. <a href="https://taoyds.github.io/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors" target="_blank" rel="noopener noreferrer">Tao Yu</a> on computer-use agents.
        </p>
      </div>
    </div>
  );
}