
export const ArrayHelper = {
    shuffle: (array) => {
        // Take list of events and return shuffled version of it
        let arrLength = array.length;
        for (let i = 0; i < 2 * arrLength; i++){
            // Do lots of random permutations
            let idx1 = Math.floor(Math.random() * arrLength);
            let idx2 = Math.floor(Math.random() * arrLength);
            let tmp = array[idx1];
            array[idx1] = array[idx2];
            array[idx2] = tmp;
        }
        return array;
    }
}