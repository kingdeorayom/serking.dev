const Message = ({ entry }) => {
    return (
        <div className="flex flex-col gap-y-1">
            <div className="w-full text-sm break-words">
                <span className="mr-1 text-neutral-600 dark:text-neutral-300">
                    {entry.created_by}:
                </span>
                {entry.body}
            </div>
        </div>
    );
};

export default Message;
