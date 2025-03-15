import LoadingSpinner from '@/app/(components)/ui/loading-indicator';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { createHighlighter } from 'shiki';

export interface ICodeBlock {
  code: string;
  lang: string;
}

const CodeBlock = ({ code, lang }: ICodeBlock) => {
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const { theme } = useTheme();

  const editorTheme = theme == 'light' ? 'light-plus' : 'plastic';

  useEffect(() => {
    const loadHighlighter = async () => {
      const highlighter = await createHighlighter({
        themes: [editorTheme],
        langs: [lang],
      });

      setHighlightedCode(
        highlighter.codeToHtml(code, {
          lang: lang,
          theme: editorTheme,
        })
      );
    };
    loadHighlighter();
  });
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: highlightedCode || <LoadingSpinner />,
      }}
      className="w-full h-full overflow-auto p-[1.2rem] [&_pre]:rounded-lg [&_pre]:p-[1.2rem] [&_pre]:h-full [&_pre]:overflow-auto"
    />
  );
};

export default CodeBlock;
