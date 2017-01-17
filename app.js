document.addEventListener("DOMContentLoaded", function() {

    const isStraight = function(hand) {
        if (hand.includes(1)) {
            if (hand.includes(13)) {
                hand[hand.indexOf(1)] = 14;
            }
        }

        let sortedtable = hand.sort(function(a, b) {
            return a - b;
        });
        console.log(sortedtable);
          let i = 1;
        for (let j=0; j < sortedtable.length-1; j++) {
            if (sortedtable[i] != (sortedtable[j])+1 ) {
                return false;
            }
            i++;
        }

        return true;
    };

    console.log(isStraight([7, 6, 8, 4, 5]));
    console.log(!isStraight([7, 6, 8, 4, 4]));
    console.log(isStraight([1, 10, 13, 12, 11]));
    console.log(!isStraight([10, 8, 4, 3, 2]));
    console.log(isStraight([3, 1, 4, 5, 2]));
});
