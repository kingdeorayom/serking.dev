const Card = ({ children }) => (
    <div className="border border-neutral-200 dark:border-neutral-700 hover:bg-slate-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded-md flex items-center justify-between p-3">
        {children}
    </div>
);

export default Card;
