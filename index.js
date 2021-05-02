class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase + string.slice(1)
    }
    static sanitize(string) {
        return string.replace(/[^a-zA-Z]/g, '')
    }

    static titleize(sentence) {
        let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        let results = []

    }
}