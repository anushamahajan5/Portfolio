export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="project-container">
          <ul className="projects-grid">
            {/* MindsDB Semantic App */}
            <li className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{fontSize: '35px'}}>
                    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
                  </svg>
                </div>
                <div className="external-links">
                  <a className="github-icon" href="https://github.com/anushamahajan5/MindsDB_SemanticApp" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a className="open-icon" href="https://drive.google.com/file/d/1-4EXA5nU2v-onwUYrHLChLY7GsxwwOlz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1l5-4v10l-5-4z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-title">Company Knowledge Assistant, Quira Quest</div>
              <div className="card-desc">
                AI-powered company knowledge assistant using MindsDB and OpenAI for semantic search, document summarization, and automated workflows. Features include knowledge base querying, AI chat, feedback analysis, and scheduled updates.
              </div>
              <p className="text-sm text-gray-400 mb-4">Flask, MindsDB, OpenAI, Bootstrap, ChromaDB</p>
            </li>
            {/* MERN Chat App */}
            <li className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{fontSize: '35px'}}>
                    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
                  </svg>
                </div>
                <div className="external-links">
                  <a className="github-icon" href="https://github.com/anushamahajan5/MERN-chat-app" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a className="open-icon" href="https://mern-chat-app-frontend-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1l5-4v10l-5-4z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-title">MERN Chat App</div>
              <div className="card-desc">
                Real-time chat application with authentication, group and private messaging, built using the MERN stack and Socket.io. Features responsive UI, notifications, and user search.
              </div>
              <p className="text-sm text-gray-400 mb-4">MongoDB, Express, React, Node.js, Socket.io</p>
            </li>
            {/* Sample React Calendar App */}
            <li className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{fontSize: '35px'}}>
                    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
                  </svg>
                </div>
                <div className="external-links">
                  <a className="github-icon" href="https://github.com/anushamahajan5/sample-react-calendar-app" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a className="open-icon" href="https://sample-react-calendar-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1l5-4v10l-5-4z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-title">Sample React Calendar App</div>
              <div className="card-desc">
                A simple and interactive calendar app built with React. Allows users to add, edit, and delete events with a clean and intuitive UI.
              </div>
              <p className="text-sm text-gray-400 mb-4">React, JavaScript, CSS</p>
            </li>
            <li className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{fontSize: '35px'}}>
                    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
                  </svg>
                </div>
                <div className="external-links">
                  <a className="github-icon" href="http://colab.research.google.com/github/anushamahajan5/MOSAIC/blob/main/code.ipynb" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a className="open-icon" href="https://colab.research.google.com/github/anushamahajan5/MOSAIC/blob/main/code.ipynb" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1l5-4v10l-5-4z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-title">Diagnosis Of Lung Abnormalities</div>
              <div className="card-desc">
                Exploratory Project: Processed 2,000 lung sound files into spectrograms using Librosa for image processing. Achieved 96% accuracy with a CNN model for lung abnormalities analysis (crackles & wheezes).
              </div>
              <p className="text-sm text-gray-400 mb-4">Librosa, CNN, Python </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}