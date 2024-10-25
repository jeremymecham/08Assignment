function printText() {
    let sentence = document.getElementById('textInput').value;
    let amount = document.getElementById('repeatCount').value;
    const output = document.getElementById('output')
    for (i = 0; i < amount; i++) {
        let newSentence = document.createElement('p');
        newSentence.textContent = `${i + 1}. ${sentence}`;
        output.appendChild(newSentence);
    }
}