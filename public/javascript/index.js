const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", async function (getCharacters) {
    const allCharacters = await charactersAPI.getFullList();
    console.log(allCharacters);

    // const charactersApi = new CharactersApi();
    // const characters = await charactersApi.getCharacters();
    // console.log(characters);
  });

  document.getElementById("fetch-one").addEventListener("click", function (event) {});

  document.getElementById("delete-one").addEventListener("click", function (event) {});

  document.getElementById("edit-character-form").addEventListener("submit", function (event) {});

  document.getElementById("new-character-form").addEventListener("submit", function (event) {});
});
