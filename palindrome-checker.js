function palindrome(str) {
  let trim = /[a-z0-9]/ig;
  str = str.match(trim);
  str = str.join("").toLowerCase();

  for(let i = 0; i < str.length; i++){
    if(str[i] != str[str.length - 1 - i]){
      return false;
    }
  }

  return true;
}



palindrome("A man, a plan, a canal. Panama");
