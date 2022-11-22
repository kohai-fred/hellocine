export function formatDate(date: string) {
    return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "2-digit" }).format(new Date(date));
}
