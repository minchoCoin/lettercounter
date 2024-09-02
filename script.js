function getTextBytes(str) {
    var len = 0;

    for (var i = 0; i < str.length; i++) {
        if (escape(str.charAt(i)).length == 6) {
            len++;
        }
        len++;
    }
    return len;
}

function updateCounts() {
    const inputText = document.getElementById('inputText').value;

    // Count letters (including spaces)
    const lettersWithSpaces = inputText;
    document.getElementById('lettersWithSpaces').textContent = lettersWithSpaces.length;
    
    // Count letters (excluding line-breaks)
    const lettersWithoutLineBreaks = inputText.replace(/\n/g, "");
    document.getElementById('letterWithoutLineBreaks').textContent = lettersWithoutLineBreaks.length;

    // Count letters (excluding spaces)
    const lettersWithoutSpaces = inputText.replace(/\s/g, '');
    document.getElementById('lettersWithoutSpaces').textContent = lettersWithoutSpaces.length;

    // Count words
    const wordCount = inputText.trim().split(/\s+/);
    document.getElementById('wordCount').textContent = wordCount.length;

    // Count lines
    const lineCount = inputText.split('\n');
    document.getElementById('lineCount').textContent = lineCount.length;
    
    //count bytes
    document.getElementById('bytesWithSpaces').textContent = getTextBytes(lettersWithSpaces);
    document.getElementById('bytesWithoutLineBreaks').textContent = getTextBytes(lettersWithoutLineBreaks);
    document.getElementById('bytesWithoutSpaces').textContent = getTextBytes(lettersWithoutSpaces);
  }