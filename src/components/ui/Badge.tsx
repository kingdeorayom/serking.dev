import { cn } from "@/utils/cn";

const Badge = ({
    className,
    label,
}: {
    className?: string;
    label?: string;
}) => {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border border-neutral-100 dark:border-neutral-800 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                className
            )}
        >
            {label}
        </div>
    );
};

export default Badge;
