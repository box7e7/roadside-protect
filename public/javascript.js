function copyCode(button) {
  // Get the <code> element containing the code
  const codeElement = button.parentNode.parentNode.querySelector("code");
  
  // Get the inner text of the <code> element (preserves new lines)
  const codeText = codeElement.innerText;
  
  // Create a temporary <textarea> element
  const tempElement = document.createElement('textarea');
  
  // Set the value of the <textarea> to the code text
  tempElement.value = codeText;
  
  // Append the temporary <textarea> to the document body
  document.body.appendChild(tempElement);
  
  // Select the contents of the <textarea>
  tempElement.select();
  
  // Execute the 'copy' command to copy the selected text
  document.execCommand('copy');
  
  // Remove the temporary <textarea> from the document body
  document.body.removeChild(tempElement);
  
  // Update the button text to indicate that the code was copied
  button.innerHTML = 'Copied!';
  
  // Reset the button text after a timeout of 1000ms (1 second)
  setTimeout(() => {
    button.innerHTML = 'Copy';
  }, 1000);
}


// function copyCode(button) {
//     const codeElement = button.parentNode.parentNode.querySelector("code");
//     const codeText = codeElement.textContent;
//     const tempElement = document.createElement('textarea');
//     tempElement.value = codeText;
//     document.body.appendChild(tempElement);
//     tempElement.select();
//     document.execCommand('copy');
//     document.body.removeChild(tempElement);
//     button.innerHTML = 'Copied!';
//     setTimeout(() => {
//       button.innerHTML = 'Copy';
//     }, 1000);
//   }