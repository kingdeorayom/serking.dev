const Card = ({ children }) => (
    <div className="flex items-center justify-between rounded-sm border border-gray-200 p-3 shadow-xs hover:bg-slate-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
        {children}
    </div>
);

export default Card;
