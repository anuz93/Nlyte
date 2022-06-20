/*
const testFolder = './Resources/';
readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})
*/
/*
pseudo code for scanning through a text file, storing words and their respective counts:

string fullBook = textFile //store text file content into one string

fullBook.toLowerCase() //convert whole book into lowercase

string currentWord = null //this will hold the current word in every itertation of for loop

wordCollection = [
  {

word: null
count: null

  }
] //array of objects which will hold each individual word in book with its count

for (i=0 to fullBook.length) {
  
  if fullBook[i] != " "
    currentWord =+ fullBook[i] //store each character into currentWord until space is hit
  
  if fullBook[i] == " "        
    for(j=0 to currentWord.length){
      if currentWord[j] == (, || . )
        delete currentWord[j]
    }
    for(k=0 to wordCollection.length)
      if currentWord == wordCollection[k].word
        wordCollection[k].count += 1
        currentWord == null
        continue

      wordCollection[wordCollection.length].word = currentWord
      wordCollection[wordCollection.length].word = 1
      currentWord == null
    
} //when space is hit, first "clean up" punctuations then check currentWord against array of existing words
//if currentWord matches with an existing word, increase matching word's count by 1, otherwise make new entry with count = 1
//reset currentWord, start next iteration


*/
