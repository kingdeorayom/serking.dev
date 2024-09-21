import { cn } from "@/utils/cn";

const Separator = ({ className }) => {
    return (
        <hr
            className={cn(
                "border-neutral-100 dark:border-neutral-800",
                className
            )}
        />
    );
};

export default Separator;
