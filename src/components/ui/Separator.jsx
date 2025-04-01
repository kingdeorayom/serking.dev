import { cn } from "@/utils/cn";

const Separator = ({ className }) => {
    return (
        <hr
            className={cn(
                "border-neutral-200 dark:border-neutral-700",
                className
            )}
        />
    );
};

export default Separator;
