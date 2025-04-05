const Message = ({ entry }) => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="w-full text-sm break-words">
                <span className="mr-1">
                    {/* {entry.created_by}: */}
                    {entry.name}:
                </span>
                {/* {entry.body} */}
                <span className="text-neutral-600 dark:text-neutral-300">
                    {entry.company.catchPhrase}
                </span>
            </div>
        </div>
    );
};

export default Message;
