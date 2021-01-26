$(function(){
    // CMS接続
    fetch("https://workproduction.microcms.io/api/v1/date?limit=100", {
        headers: {
            "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
        }
    })
    .then(res => res.json())
    .then(json => {

        let animalName = sessionStorage.getItem('thisAnimalInfo');
        let animalInfo = sessionStorage.getItem('animalInfo');
        contents = json.contents;

        for( let i = 0; contents.length > i; i++ ){
            if( contents[i].name == animalName ){
                $('.name').append(contents[i].name);
                $('.img').attr('src', contents[i].img.url );
                $('.prefecturejp').append(contents[i].prefecturejp);
                $('.type').append(contents[i].type);
                $('.bodyWeight').append(contents[i].bodyWeight);
                $('.bodyLength').append(contents[i].bodyLength);
                $('.population').append(contents[i].population);
                $('.animalInfo').append(contents[i].animalInfo);
            }
        }

        sessionStorage.setItem('animalInfo', animalInfo);
    });
});