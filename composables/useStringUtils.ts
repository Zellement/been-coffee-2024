export const useStringUtils = () => {
    /**
     * Converts a string to title case.
     * @param str - The input string.
     * @returns - The string converted to title case.
     */
    const toTitleCase = (str: string): string => {
        return str.replace(/\w\S*/g, function (txt: string): string {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        })
    }

    /**
     * Truncate a string to a specified length without cutting words.
     * @param str - The string to be truncated.
     * @param cutOff - The maximum length of the truncated string.
     * @returns - The truncated string, appended with "..." if truncated.
     */
    const truncateString = (str: string, cutOff: number = 70): string => {
        if (str.length <= cutOff) return str
        const cutStr = str.substring(0, cutOff)

        // Find the last space before the cutoff
        const lastSpaceIndex = cutStr.lastIndexOf(' ')

        // If there's no space (i.e., a single very long word), truncate at cutOff
        if (lastSpaceIndex === -1) return `${cutStr}...`

        // Otherwise, truncate at the last space to keep whole words
        return `${cutStr.substring(0, lastSpaceIndex)}...`
    }

    return {
        toTitleCase,
        truncateString
    }
}
