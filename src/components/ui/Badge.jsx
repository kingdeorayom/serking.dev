import { cn } from "@/utils/cn";

const Badge = ({ className, label }) => {
    return (
        <div
            className={cn(
                "focus:ring-ring inline-flex items-center rounded-full border border-neutral-100 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-hidden dark:border-neutral-800",
                className
            )}
        >
            {label}
        </div>
    );
};

export default Badge;
