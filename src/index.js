const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    //return event.target.children[1].value // => <input id="searchByID" type="text" placeholder="Enter ID here">
    const input = document.querySelector('input#searchByID');
    console.log(input.value);

    fetch( `http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(data => {
      // replace data retrived from serve with html element using DOM
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');
      //change the contents of our title and summary elements based on the retrieved data.

      title.textContent = data.title;
      summary.textContent = data.summary;

    });
  });
}

document.addEventListener('DOMContentLoaded', init);

// 