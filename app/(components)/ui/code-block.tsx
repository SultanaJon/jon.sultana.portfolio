import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { createHighlighter } from 'shiki';
import cx from 'classnames';

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
        __html: highlightedCode,
      }}
      className={cx(
        'w-full h-full overflow-auto [&_pre]:p-[1.2rem] [&_pre]:h-full [&_pre]:overflow-auto',
        theme === 'light' ? ' [&_pre]:bg-(--accent)!' : ''
      )}
    />
  );
};

export default CodeBlock;
