import cn from 'classnames';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col gap-3 justify-center p-8 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('animate-spin')}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
      <span className="text-xs">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
