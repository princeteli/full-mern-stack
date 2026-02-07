document.addEventListener("DOMContentLoaded", function () {
  // Elements ko select karna
  const textarea = document.getElementById("textarea");
  const charCount = document.getElementById("charCount");
  const warningMessage = document.getElementById("warningMessage");
  const progressBar = document.getElementById("progressBar");
  const clearButton = document.getElementById("clearButton");
  const maxLimit = 200; // Max limit set karna

  // Event listener jo character count update karega
  textarea.addEventListener("input", () => {
    let textLength = textarea.value.length;

    // Character count update karna
    charCount.innerText = textLength;

    // Agar max limit cross ho gayi toh warning dikhana
    if (textLength >= maxLimit) {
      warningMessage.innerText = "Character limit reached!";
      warningMessage.style.visibility = "visible";
      warningMessage.style.color = "red";
    } else {
      warningMessage.innerText = "";
      warningMessage.style.visibility = "hidden";
    }

    // Progress bar update
    progressBar.value = textLength;
  });

  // Clear button functionality
  clearButton.addEventListener("click", () => {
    textarea.value = "";
    charCount.innerText = "0";
    warningMessage.style.visibility = "hidden";
    progressBar.value = 0;
  });
});
