$(function(){

    // 受け取った値を書き込む
    let animalInfo = sessionStorage.getItem('animalInfo');
    $('.main__each').append(animalInfo);

    $('.main__each li').on("click", function(){
        let individualAnimal = $("p", this).html();

        sessionStorage.setItem('animalInfo', animalInfo);
        sessionStorage.setItem('thisAnimalInfo', individualAnimal);
        location.href="/afterSearch/animalInfo/animalInfo.html";
    });
});