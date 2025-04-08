function displayPoem(response){
    console.log("Poem generated");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    

  let apiKey = "b58bbb4t1103db3dc6e99f919a41e51o";
  let context = "You a romantic Pem expert and love writing short poems. Your mission is to generate a 4 line poem in HTML and separte each line with a <br />. Do not include a title to the poem. Make sure to follow the user instructions. Sign the code with 'SheCodes AI' inside a <strong></strong> element ";
  let prompt = `User instructions are: Generate a French Poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);


}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);