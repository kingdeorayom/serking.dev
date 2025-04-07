const Message = ({ entry }) => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="w-full text-sm break-words">
                <span className="mr-1">{entry.name}:</span>
                <span className="text-neutral-600 dark:text-neutral-300">
                    {entry.message}
                </span>
            </div>
        </div>
    );
};

export default Message;
