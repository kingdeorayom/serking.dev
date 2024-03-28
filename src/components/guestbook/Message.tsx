const Message = ({ entry }: any) => {
    return (
        <div className="flex flex-col gap-y-1">
            <div className="w-full text-sm break-words">
                <span className="text-neutral-600 dark:text-neutral-300 mr-1">
                    {entry.created_by}:
                </span>
                {entry.body}
            </div>
        </div>
    );
};

export default Message;
