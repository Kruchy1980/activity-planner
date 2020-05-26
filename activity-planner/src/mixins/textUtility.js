export default {
    methods: {
        textUtility_capitalizedWord(word) {
            if (word && typeof word === "string") {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
        }
    }
}