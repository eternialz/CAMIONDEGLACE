export const StringHelper = {
    randomString: () => {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 10; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    },
    capitalize: s => {
        if (typeof s !== 'string') {
            return '';
        }
        return s.charAt(0).toUpperCase() + s.slice(1);
    },
    compare(str1, str2) {
        let score = 0; // Range: [0, 100]
        const length = Math.min(str1.length, str2.length);
        for (let i = 0; i < length; i++) {
            if (str1[i] == str2[i]) {
                score += 10;
            } else if (str1[i].toLowerCase() == str2[i].toLowerCase()) {
                score += 5;
            }
        }
        return score;
    },
};
