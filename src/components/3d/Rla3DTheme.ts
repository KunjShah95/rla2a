
export function checkDarkMode(): boolean {
  return document.documentElement.classList.contains('dark') || 
         document.documentElement.getAttribute('data-theme') === 'dark' ||
         window.matchMedia('(prefers-color-scheme: dark)').matches;
}

interface ThemeObserverProps {
  checkDarkMode: () => boolean;
  onThemeChange: (isDarkMode: boolean) => void;
}

export function setupThemeObserver({ checkDarkMode, onThemeChange }: ThemeObserverProps) {
  const themeObserver = new MutationObserver(() => {
    const newDarkMode = checkDarkMode();
    onThemeChange(newDarkMode);
  });

  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class', 'data-theme']
  });

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleSystemThemeChange = () => {
    if (!document.documentElement.classList.contains('dark') && 
        !document.documentElement.getAttribute('data-theme')) {
      const newDarkMode = mediaQuery.matches;
      onThemeChange(newDarkMode);
    }
  };

  mediaQuery.addEventListener('change', handleSystemThemeChange);

  const cleanup = () => {
    themeObserver.disconnect();
    mediaQuery.removeEventListener('change', handleSystemThemeChange);
  };

  return { cleanup };
}
