// CMS接続
fetch("https://workproduction.microcms.io/api/v1/date?limit=100", {
    headers: {
        "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
    }
})
.then(res => res.json())
.then(json => {

    contents = json.contents;
    let animalInfo;

    for( let i = 0; contents.length > i; i++ ){
        animalInfo += '<li><img src="'+ contents[i].img.url +'"><p class="animalName">'+ contents[i].name +'</p></li>';
    }

    // 不要に入った文字列削除
    let nAnimalInfo = ("" + animalInfo).replace("undefined","");

    $('.main__each').append( nAnimalInfo );

    $('.main__each li').on("click", function(){
        let individualAnimal = $("p", this).html();

        sessionStorage.setItem('animalInfo', animalInfo);
        sessionStorage.setItem('thisAnimalInfo', individualAnimal);
        location.href="/afterSearch/animalInfo/animalInfo.html";
    });
});