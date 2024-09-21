export default function ViewCounter({ slug, allViews }) {
    const viewsForSlug =
        allViews && allViews.find((view) => view.slug === slug);
    const number = new Number(viewsForSlug?.count || 0);

    return (
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            {`${number.toLocaleString()} views`}
        </p>
    );
}
