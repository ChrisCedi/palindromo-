const wordValidation = (word) => {
  let wordArray = [];
  for (i = 0; i < word.length; i++) {
    if (word[i] !== " ") {
      wordArray.push(
        word[i]
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );
    }
  }
  let inOrder = wordArray.join("");
  let reverseOrden = wordArray.reverse().join("");

  return inOrder === reverseOrden ? true : false;
};

console.log(wordValidation("Acude ave una cita meta matemática nueva educa"));
