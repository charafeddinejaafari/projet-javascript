var content = document.querySelector('.courses');
  
  function creationCours(path, title, price) {
      let div = document.createElement('div');
      div.setAttribute('class', 'card col-3 me-4 mb-3 mydiv');
      //me:espace des cotés et mb:espace top et bottom
      div.setAttribute('style', 'text-align: center;');
      let img = document.createElement('img'),
          p = document.createElement('p'),
          span = document.createElement('span');
          div.setAttribute('style', 'text-align: center;');
      img.src = path;
      img.setAttribute('class', 'card-img');
      img.setAttribute('style', 'height:170px;');
      let contenu = document.createTextNode(title);
      p.appendChild(contenu);
      p.setAttribute('class', 'card-tilte');
      let contenu2 = document.createTextNode(price);
      span.appendChild(contenu2);
      span.setAttribute('class', 'card-text')
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(span);
      content.append(div)
  }
  var i;
  for(i=0;i<3;i++){
    var r=Math.round(Math.random()*16);
    creationCours(courses[r].image, courses[r+2].title, courses[r+3].price);
  }
  function cd(){
    window.location.href="index.html";
  }