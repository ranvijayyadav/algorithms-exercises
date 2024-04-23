/**
 * @param {string} s
 * @return {string}
 * custom solution
 */
var makeGood = function(s) {

    let result = s;
    let isRepeted = true;
    while(isRepeted) {

        let isArepeat = false;
        for(let i = 0;i<result.length;i++){
            console.log(result, "before edit")
            if(result[i] && result[i+1] && findRepeted(`${result[i]}${result[i+1]}`) ){
                result = result.slice(0,i)+result.slice(i+2)
                console.log(result, "after edit")
                isArepeat = true;
            }
            if(!result) {
                isArepeat = false
            }
            isRepeted = isArepeat;
        }
    }
    
    return result;
};

var findRepeted = function(s) {
    if(s[0]!== s[1] &&  s[0].toLowerCase()=== s[1].toLowerCase()){
        console.log(s)
        return true
    } else {
        return false
    }
};


var makeGoodBetter = function(s) {
    const stack = [];
    
    for (const char of s) {
        if (stack.length > 0 && findRepeted(`${char}${stack[stack.length - 1]}`)) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};

// Given a string s of lower and upper case English letters.

// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

// Notice that an empty string is also good.

 

// Example 1:

// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
// Example 2:

// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""
// Example 3:

// Input: s = "s"
// Output: "s"