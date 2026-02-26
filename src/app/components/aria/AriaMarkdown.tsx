import React from 'react';

interface AriaMarkdownProps {
  content: string;
}

// Parses inline markdown: bold, italic, inline code
function parseInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Combined regex: **bold**, *italic*, `code`
  const regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`(.+?)`)/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    if (match[1]) {
      // **bold**
      parts.push(<strong key={match.index} className="font-semibold text-white">{match[2]}</strong>);
    } else if (match[3]) {
      // *italic*
      parts.push(<em key={match.index} className="italic text-white/90">{match[4]}</em>);
    } else if (match[5]) {
      // `code`
      parts.push(
        <code key={match.index} className="px-1.5 py-0.5 rounded text-xs font-mono bg-white/10 text-cyan-300 border border-white/10">
          {match[6]}
        </code>
      );
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return parts.length > 0 ? parts : [text];
}

export const AriaMarkdown: React.FC<AriaMarkdownProps> = ({ content }) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines (handled as spacing)
    if (line.trim() === '') {
      elements.push(<div key={`gap-${i}`} className="h-1" />);
      i++;
      continue;
    }

    // Fenced code block ```
    if (line.trim().startsWith('```')) {
      const codeLines: string[] = [];
      const lang = line.trim().slice(3).trim();
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={`code-${i}`} className="my-2 rounded-lg overflow-hidden border border-white/10">
          {lang && (
            <div className="px-3 py-1 text-[10px] font-mono text-cyan-400/70 bg-white/5 border-b border-white/10 uppercase tracking-wider">
              {lang}
            </div>
          )}
          <pre className="p-3 overflow-x-auto text-xs font-mono text-emerald-300 bg-black/30 leading-relaxed whitespace-pre-wrap break-words">
            {codeLines.join('\n')}
          </pre>
        </div>
      );
      i++; // skip closing ```
      continue;
    }

    // Heading ### ## #
    const headingMatch = line.match(/^(#{1,3})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingText = headingMatch[2];
      const sizeClass = level === 1 ? 'text-base font-bold' : level === 2 ? 'text-sm font-bold' : 'text-sm font-semibold';
      elements.push(
        <p key={`h-${i}`} className={`${sizeClass} text-cyan-300 mt-2 mb-1`}>
          {parseInline(headingText)}
        </p>
      );
      i++;
      continue;
    }

    // Horizontal rule ---
    if (line.trim().match(/^---+$/)) {
      elements.push(<hr key={`hr-${i}`} className="border-white/10 my-2" />);
      i++;
      continue;
    }

    // Blockquote >
    if (line.trim().startsWith('> ')) {
      elements.push(
        <blockquote key={`bq-${i}`} className="border-l-2 border-cyan-400/50 pl-3 my-1 text-white/70 italic text-sm">
          {parseInline(line.trim().slice(2))}
        </blockquote>
      );
      i++;
      continue;
    }

    // Bullet list - or *
    if (line.trim().match(/^[-*]\s+/)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().match(/^[-*]\s+/)) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-1 space-y-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400/70 flex-shrink-0" />
              <span className="leading-relaxed">{parseInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list 1.
    if (line.trim().match(/^\d+\.\s+/)) {
      const listItems: string[] = [];
      let num = 1;
      while (i < lines.length && lines[i].trim().match(/^\d+\.\s+/)) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
        num++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-1 space-y-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 text-cyan-400/70 font-mono text-xs flex-shrink-0 w-4">{idx + 1}.</span>
              <span className="leading-relaxed">{parseInline(item)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={`p-${i}`} className="text-sm leading-relaxed">
        {parseInline(line)}
      </p>
    );
    i++;
  }

  return <div className="space-y-0.5">{elements}</div>;
};
