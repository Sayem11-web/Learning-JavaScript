const imgBox = document.querySelector('#image-container');
const urlAPI = 'https://picsum.photos/v2/list';

const getPic = ()=> {
  fetch(urlAPI).then(data => data.json())
  .then(items => {
    // console.log(items); 
    items.forEach(function(picObject){
      const newContainer = document.createElement('div');
      newContainer.classList.add('img_item');

      const newImg = document.createElement('img');
      newImg.src = picObject.download_url;
      newContainer.appendChild(newImg)

      const newAuthor = document.createElement('p');
      newAuthor.textContent = picObject.author;

      newContainer.appendChild(newAuthor);
      imgBox.appendChild(newContainer);

    });
  });

};

getPic();