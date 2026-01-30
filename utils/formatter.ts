import { OneWeekOlder } from "./oneWeekOlder";

export class Formatter {
    static formatDate(value: Date): string {
        const date = new Date(value);

        if (isNaN(date.getTime())) {
            return "Invalid Date";
        }

        if (OneWeekOlder.isOlderThanOneWeek(date)) {
            return Intl.DateTimeFormat('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }).format(date);
        } else {
            const rtf = new Intl.RelativeTimeFormat('es-ES', {
                localeMatcher: "best fit",
                numeric: "always",
                style: "long",
            });

            const now = new Date();
            const diffInMs = date.getTime() - now.getTime();
            const diffInMinutes = Math.round(diffInMs / (1000 * 60));
            if (Math.abs(diffInMinutes) < 60) {
                return rtf.format(diffInMinutes, 'minute');
            } else if (Math.abs(diffInMinutes) < 1440) {
                const diffInHours = Math.round(diffInMinutes / 60);
                return rtf.format(diffInHours, 'hour');
            } else {
                const diffInDays = Math.round(diffInMinutes / 1440);
                return rtf.format(diffInDays, 'day');
            }
        }
    }
}