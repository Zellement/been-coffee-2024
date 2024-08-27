export const useDateUtils = () => {
    /**
     * Returns the ordinal suffix for a given date (e.g., 1st, 2nd, 3rd).
     * @param {number} d - The date as a number.
     * @returns {string} - The ordinal suffix (e.g., 'st', 'nd', 'rd', or 'th').
     */
    const nth = (d: number): string => {
        if (d > 3 && d < 21) return 'th'
        switch (d % 10) {
            case 1:
                return 'st'
            case 2:
                return 'nd'
            case 3:
                return 'rd'
            default:
                return 'th'
        }
    }

    /**
     * Return a long user-friendly date.
     * @function
     * @param {Date} date - The date.
     * @returns {string} - Thursday, 04 January 2024
     */
    const fullDateConverter = (date: Date): string => {
        const monthArray = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        const dayArray = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]
        const day = dayArray[date.getDay()]
        const d = date.getDate()
        const dSuffix = nth(date.getDate())
        const m = monthArray[date.getMonth()]
        const y = date.getFullYear()
        return `${day}, ${d}${dSuffix} ${m} ${y}`
    }

    /**
     * Return a short user-friendly date.
     * @function
     * @param {Date} date - The date.
     * @returns {string} - 04/01/2024
     */
    const shortDateConverter = (date: Date): string => {
        const thisDate = new Date(date)
        const d = thisDate.getDate()
        const m = thisDate.getMonth()
        const y = thisDate.getFullYear()
        return `${d <= 9 ? '0' + d : d}/${m <= 9 ? '0' + (m + 1) : m + 1}/${y}`
    }

    return {
        fullDateConverter,
        shortDateConverter
    }
}
