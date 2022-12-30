var content = document.querySelector('.courses');    

function creationCours(path, title, price) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2 div1');
    div.setAttribute('style', 'text-align: center;');
    let img = document.createElement('img'),   
        p = document.createElement('p'), 
        span = document.createElement('span');
    img.src = path;
    img.setAttribute('class', 'card-img');
    img.setAttribute('style', 'height:170px;');
    let contenu = document.createTextNode(title); 
    p.appendChild(contenu);
   // <p> title </p>

    p.setAttribute('class', 'card-tilte');  
    let contenu2 = document.createTextNode(price);
    span.appendChild(contenu2);
    span.setAttribute('class', 'card-text');
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content.append(div)
}


courses.forEach(function(element) {
    creationCours(element.image, element.title, element.price);     }    
)
function myFunctionSearch() {
    var search,i,p,searchContent,div;
    var count=0;
    search=document.getElementById("search").value;
    filter = search.toUpperCase();
    div = document.getElementsByClassName("div1");
    for (i = 0; i < div.length; i++) {
        p = div[i].getElementsByTagName("p")[0];
        searchContent = p.textContent ;
        if ( searchContent.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
           count++;
        } 
    }
    if(count==20){document.getElementById("notfound").setAttribute("style","display:inline ;font-size: 40px;");}
    else{document.getElementById("notfound").setAttribute("style","display:none ;font-size: 40px;");}
}



    function myFunctionPrice() {
        var r,i,p,priceContent;
        var count=0;
        r=document.getElementById("r").value;
        document.getElementById("price").innerHTML=r+'$';
        console.log(r);
        div = document.getElementsByClassName("div1");
        for (i = 0; i < div.length; i++) {
            p = div[i].getElementsByTagName("span")[0];
            priceContent = p.textContent ;
            if ( Number(priceContent)<=r) {
                div[i].style.display = "";
            } else {
                div[i].style.display = "none";
                count++;
                
               
            } 
        }
        console.log(count);
        if(count==20){document.getElementById("notfound").setAttribute("style","display:inline ;font-size: 40px;");}
        else{document.getElementById("notfound").setAttribute("style","display:none ;font-size: 40px;");}
    }

    function Button1(){

        var i,div ;
        div = document.getElementsByClassName("div1");
        for(i=0;i<courses.length;i++){
            div[i].style.display = "";}  
        }
        function Button2(){
        
            var i,div ;
            div = document.getElementsByClassName("div1");
            for(i=0;i<courses.length;i++){
                if(courses[i].category=='HTML'){
                div[i].style.display = "";}
            else {
                    div[i].style.display = "none";
                   
                } 
            }
        }
        function Button3(){
        
        var i,div ;
        div = document.getElementsByClassName("div1");
        for(i=0;i<courses.length;i++){
            if(courses[i].category=='CSS'){
            div[i].style.display = "";}
        else {
                div[i].style.display = "none";
               
            } 
        }
        }
        function Button4(){
        
        var i,div ;
        div = document.getElementsByClassName("div1");
        for(i=0;i<courses.length;i++){
            if(courses[i].category=='JS'){
            div[i].style.display = "";}
        else {
                div[i].style.display = "none";
               
            } 
        }
        }
        function Button5(){
        
        var i,div ;
        div = document.getElementsByClassName("div1");
        for(i=0;i<courses.length;i++){
            if(courses[i].category=='PHP'){
            div[i].style.display = "";}
        else {
                div[i].style.display = "none";
               
            } 
        }
        }

    
        
