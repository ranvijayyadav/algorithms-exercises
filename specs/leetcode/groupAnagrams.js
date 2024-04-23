// This is brute force sol


// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let result= [];
    let arrStrs= strs.map(str=>{return {key: str, isAna: false }})
    for(let i= 0; i<arrStrs.length;i++){
        let arrRes = [];
        if(!arrStrs[i].isAna){
            arrRes.push(arrStrs[i].key);
        }
        for(j=i+1;j<arrStrs.length;j++){
            if(!arrStrs[j].isAna && isAnagram(arrStrs[i].key, arrStrs[j].key)){
                arrRes.push(arrStrs[j].key);
                arrStrs[j].isAna= true;
                arrStrs[i].isAna= true
            }
        }
        if(arrRes.length){
            result.push(arrRes)
        }
    }
    return result;
};

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