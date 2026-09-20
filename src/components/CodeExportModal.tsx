import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Download,
  Copy,
  Check,
  X,
  Sparkles,
  ExternalLink,
  Laptop,
} from 'lucide-react';
import {
  getStandaloneHTML,
  getSeparateHTML,
  getSeparateCSS,
  getSeparateJS,
} from '../utils/exportCode';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'standalone' | 'html' | 'css' | 'js'>(
    'standalone'
  );
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getCodeContent = () => {
    switch (activeTab) {
      case 'standalone':
        return getStandaloneHTML();
      case 'html':
        return getSeparateHTML();
      case 'css':
        return getSeparateCSS();
      case 'js':
        return getSeparateJS();
    }
  };

  const getFileName = () => {
    switch (activeTab) {
      case 'standalone':
        return 'mohamed-hani-portfolio.html';
      case 'html':
        return 'index.html';
      case 'css':
        return 'style.css';
      case 'js':
        return 'script.js';
    }
  };

  const currentCode = getCodeContent();
  const currentFileName = getFileName();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAll = () => {
    // Download HTML, CSS, JS individually
    handleDownload('index.html', getSeparateHTML());
    setTimeout(() => handleDownload('style.css', getSeparateCSS()), 300);
    setTimeout(() => handleDownload('script.js', getSeparateJS()), 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-lg font-bold text-white font-display flex items-center gap-2 truncate">
                Standalone HTML, CSS & JS Code
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate">
                Pure, framework-free source code ready to host on any server.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer flex-shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection & Actions Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab('standalone')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'standalone'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All-in-One (index.html)
            </button>
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'html'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              HTML
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'css'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              CSS (style.css)
            </button>
            <button
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'js'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              JS (script.js)
            </button>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleDownload(currentFileName, currentCode)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download {currentFileName}</span>
              <span className="sm:hidden">Download</span>
            </button>

            <button
              onClick={handleDownloadAll}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-semibold transition-colors cursor-pointer border border-teal-500/30"
              title="Downloads index.html, style.css, and script.js in sequence"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Download All (HTML+CSS+JS)</span>
            </button>
          </div>
        </div>

        {/* Code Content Viewer */}
        <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-slate-950 font-mono text-xs leading-relaxed text-emerald-300/90 select-text">
          <pre className="whitespace-pre-wrap break-all">{currentCode}</pre>
        </div>

        {/* Footer Note */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] sm:text-xs text-slate-500 gap-1">
          <span>File: {currentFileName} • Size: ~{(currentCode.length / 1024).toFixed(1)} KB</span>
          <span className="hidden sm:inline">100% Valid W3C Semantic HTML5 + Responsive CSS + Vanilla ES6 JS</span>
        </div>

      </div>
    </div>
  );
};
