// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let isAnagram = false;
    t = t.split("");
    if(s.length==t.length){
        for(i=0;i<s.length;i++){
            let index= t.indexOf(s[i])
            if(index>=0){
                t.splice(index, 1)
            }
        }
        if(t.length==0){
            isAnagram = true;
        }
    }
    return isAnagram;  
};