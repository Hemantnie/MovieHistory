const content = document.getElementById("content");
const button = document.getElementById("button");
const imgURLList = [
"https://vignette.wikia.nocookie.net/jamesbond/images/9/95/SPECTRE_poster_1.jpg/revision/latest?cb=20150916083032",
"https://dbpost.com/wp-content/uploads/2018/09/Sholay.jpg",
"https://i.ytimg.com/vi/kwpXnF75uV4/maxresdefault.jpg",
"https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2018/03/expendables.jpg?itok=VD9B88ZX",
"https://i.ytimg.com/vi/1Ltt4IN1QAQ/maxresdefault.jpg",
"https://i.ytimg.com/vi/7lCHVO1wcqk/maxresdefault.jpg",
"https://assets3.thrillist.com/v1/image/2823683/size/gn-gift_guide_variable_c.jpg",
"https://assets3.thrillist.com/v1/image/2803089/size/gn-gift_guide_variable_c.jpg",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/solo-1530279345.jpg",
"http://innov8tiv.com/wp-content/uploads/2017/02/best-action-movies-1.jpg",
"https://m.media-amazon.com/images/M/MV5BNGJlYjVkMjQtN2NlZC00NTJhLThmZjItMTRlZDczMmE3YmI3XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_UX182_CR0,0,182,268_AL_.jpg"
]
var index = 0;

class Movie{
    constructor(name,url){
        this.name = name;
        this.url = url;
    }
    getName(){
        return this.name;
    }
    getURL(){
        return this.url;
    }
}
button.addEventListener('click',()=>{
    if(imgURLList.length > index){
        let outerDiv = document.createElement('div');
        let imgTag = document.createElement('img');
        imgTag.setAttribute('src',imgURLList[index]);
        outerDiv.appendChild(imgTag);
        content.prepend(outerDiv);
        index+=1;
    }
});

