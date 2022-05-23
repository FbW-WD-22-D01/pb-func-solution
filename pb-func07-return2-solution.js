//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
    //write your code here 
  }
  
  console.log(uppercase("the quick brown fox"));
  
  // 2
  // Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
  function find_longest_word(str) {
    //write your code here 
  }
  console.log(find_longest_word("Web Development Tutorial"));
  
  // 3
  // Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
  function Longest_Country_Name(country_name) {
    //write your code here 
  }
  
  console.log(
    Longest_Country_Name(["Australia", "Germany", "United States of America"])
  );
  


//4
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));



  // Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
  function vowel_count(str1)
  {
    let vowel_list = 'aeiouAEIOU';
    let vcount = 0;
    
    for(let x = 0; x < str1.length ; x++)
    {
      if (vowel_list.indexOf(str1[x]) !== -1)
      {
        vcount += 1;
      }
    
    }
    return vcount;
  }
  console.log(vowel_count("The quick brown fox"));