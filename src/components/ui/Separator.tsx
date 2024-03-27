import { cn } from "@/utils/cn";

const Separator = ({ className }: { className?: string }) => {
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
