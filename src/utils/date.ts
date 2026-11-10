/**
 * Format a publication date consistently across the site.
 * Example: Feb 04, 2000
 */
export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    }).format(date);
}