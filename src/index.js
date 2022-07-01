const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) =>{
        event.preventDefault()
        const input = document.querySelector('input#searchByID');
        // console.log(input.value);
        // event.target.children('searchByID')
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')
  
            //changing the content
            title.innerText = data.title;
            summary.innerText = data.summary;
        })
        // event.target.children[1].value
    })
  }
  
  document.addEventListener('DOMContentLoaded', init);