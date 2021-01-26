// CMS接続

function InitialSearch(){
}
function nameSearch (Initial){

    fetch("https://workproduction.microcms.io/api/v1/date?limit=100&fields=id,name,img", {
        headers: {
            "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
        }
    })
    .then(res => res.json())
    .then(json => {
        contents = json.contents;

        var str = [];
        for(let i  = 0;i <contents.length;i++){
            // InitialSearch();
            // 動物の名前をstrに代入
            str.push(contents[i].name);

        }
        // 名前順に並び替え
        str.sort(function (a, b) {
           if(a<b) return -1;
            if(b>a) return 1;
            return 0;
        });
        // for(let i  = 0;i <str.length;i++){
        //     console.log(str.length);
            // //カタカナをひらがなに変更
            // var str = Initial;
            // hiraToKana(str); //アイウ
            // console.log(str);
            // function hiraToKana(str) {
            //     return str.replace(/[\u3041-\u3096]/g, function(match) {
            //         var chr = match.charCodeAt(0) + 0x60;
            //         return String.fromCharCode(chr);
            //     });
            // }

            let i = 0;
            var a = str[i].slice(0,1);
            if(Initial== a ){
                //あ行を抽出
            } else if( Initial === "あ" ) //←ここを行ごとに変更する
            {
                $('.main__each').remove();

                $('.main').append('<ul class="main__each"></ul>');
                // $('.main__each').empty();

                for(let i  = 0;i <str.length;i++){

                    for( let j = 0;j<contents.length;j++)
                    {
                        if(contents[j].name == str[i] )
                        {
                            if (str[i].match(/^ア|^イ|^ウ|^エ|^オ/))//←ここを条件ごとに変更する
                            {
                                //main__eachにcontentsを付与
                                $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p class="animalName">'+ contents[j].name +'</p></li>');
                            }
                        }
                        }
                    };
                }

                else if( Initial === "か" )
                {

                    $('.main__each').remove();

                    $('.main').append('<ul class="main__each"></ul>');

                    for(let i  = 0;i <str.length;i++){

                        for( let j = 0;j<contents.length;j++)
                        {
                            if(contents[j].name == str[i] )
                            {

                                if (str[i].match(/^カ|^キ|^ク|^ケ|^コ|^ガ|^ギ|^グ|^ゲ|^ゴ/))
                                {
                                    //main__eachにcontentsを付与
                                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p class="animalName">'+ contents[j].name +'</p></li>');
                                }
                            }
                        }
                    };
                }

                else if( Initial === "さ" )
                {

                    $('.main__each').remove();


                    $('.main').append('<ul class="main__each"></ul>');

                    for(let i  = 0;i <str.length;i++){

                        for( let j = 0;j<contents.length;j++)
                        {
                            if(contents[j].name == str[i] )
                            {

                                if (str[i].match(/^サ|^シ|^ス|^セ|^ソ|^ザ|^ジ|^ズ|^ゼ|^ゾ/))
                                {
                                    // $('.main__each').empty();
                                    //main__eachにcontentsを付与
                                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p class="animalName">'+ contents[j].name +'</p></li>');
                                }
                            }
                        }
                    };
                }

                else if( Initial === "た" )
                {
                    $('.main__each').remove();


                    $('.main').append('<ul class="main__each"></ul>');

                    for(let i  = 0;i <str.length;i++){

                        for( let j = 0;j<contents.length;j++)
                        {
                            if(contents[j].name == str[i] )
                            {

                                if (str[i].match(/^タ|^チ|^ツ|^テ|^ト|^ダ|^ヂ|^ヅ|^デ|^ド/))
                                {

                                    // $('.main__each').empty();
                                    //main__eachにcontentsを付与
                                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p class="animalName">'+ contents[j].name +'</p></li>');
                                }
                            }
                        }
                    };
                }

                else if( Initial === "な" )
                {
                    $('.main__each').remove();


                    $('.main').append('<ul class="main__each"></ul>');

                    for(let i  = 0;i <str.length;i++){

                        for( let j = 0;j<contents.length;j++)
                        {
                            if(contents[j].name == str[i] )
                            {

                                if (str[i].match(/^ナ|^ニ|^ヌ|^ネ|^ノ/))
                                {
                                    //main__eachにcontentsを付与
                                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p class="animalName">'+ contents[j].name +'</p></li>');
                                }
                            }
                        }
                    };
                }
                else if( Initial === "は" )
                {

                    $('.main__each').remove();

                    $('.main').append('<ul class="main__each"></ul>');

                    for(let i  = 0;i <str.length;i++){

                        for( let j = 0;j<contents.length;j++)
                        {
                            if(contents[j].name == str[i] )
                            {

                                if (str[i].match(/^ハ|^ヒ|^フ|^ヘ|^ホ|^バ|^ビ|^ブ|^ベ|^ボ|^パ|^ピ|^プ|^ペ|^ポ/))
                                {
                                    //main__eachにcontentsを付与
                                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p class="animalName">'+ contents[j].name +'</p></li>');
                                }
                            }
                        }
                    };
                }

                else if( Initial === "ま" )
                {
                    $('.main__each').remove();

                    $('.main').append('<ul class="main__each"></ul>');

                    for(let i  = 0;i <str.length;i++){

                        for( let j = 0;j<contents.length;j++)
                        {
                            if(contents[j].name == str[i] )
                            {

                                if (str[i].match(/^マ|^ミ|^ム|^メ|^モ/))
                                {
                                    // $('.main__each').empty();
                                    //main__eachにcontentsを付与
                                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p class="animalName">'+ contents[j].name +'</p></li>');
                                }
                            }
                        }
                    };
                }

                else if( Initial === "や" )
                {
                    $('.main__each').remove();
                    $('.main').append('<ul class="main__each"></ul>');

                    for(let i  = 0;i <str.length;i++){

                        for( let j = 0;j<contents.length;j++)
                        {
                            if(contents[j].name == str[i] )
                            {

                                if (str[i].match(/^ヤ|^ユ|^ヨ/))
                                {
                                    // $('.main__each').empty();
                                    //main__eachにcontentsを付与
                                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p class="animalName">'+ contents[j].name +'</p></li>');
                                }
                            }
                        }
                    };
                }

                else if( Initial === "ら" )
                {
                    $('.main__each').remove();
                    $('.main').append('<ul class="main__each"></ul>');

                    for(let i  = 0;i <str.length;i++){

                        for( let j = 0;j<contents.length;j++)
                        {
                            if(contents[j].name == str[i] )
                            {

                                if (str[i].match(/^ラ|^リ|^ル|^レ|^ロ/))
                                {
                                    // $('.main__each').empty();
                                    //main__eachにcontentsを付与
                                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p class="animalName">'+ contents[j].name +'</p></li>');
                                }
                            }
                        }
                    };
                }

                else if( Initial === "わ" )
                {

                    $('.main__each').remove();
                    $('.main').append('<ul class="main__each"></ul>');

                    for(let i  = 0;i <str.length;i++){

                        for( let j = 0;j<contents.length;j++)
                        {
                            if(contents[j].name == str[i] )
                            {

                                if (str[i].match(/^ワ|^ヲ|^ン/))
                                {
                                    // $('.main__each').empty();
                                    //main__eachにcontentsを付与
                                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p class="animalName">'+ contents[j].name +'</p></li>');
                                }
                            }
                        }
                    };
                }


        // $('.main__line--name').empty();
        // $('.main').append('<ul class="main__each"></ul>');

        // //strのidとcontentsのidを照合

        // for(let i  = 0;i <str.length;i++){

        //     for( let j = 0;j<contents.length;j++){

        //         if(contents[j].name == str[i] ){
        //             $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p class="animalName">'+ contents[j].name +'</p></li>');
        //         }
        //     }
        // };

        // for( let i = 0; contents.length > i; i++ ){
        //     for( let j = 0; checkI.length > j; j++ ){
        //         if( contents[i].name == checkI[j] ){

        //         }
        //     }
        // }

        $('.main__each li').on("click", function(){
            let individualAnimal = $("p", this).html();

            sessionStorage.setItem('animalInfo', individualAnimal);
            console.log( individualAnimal );
            location.href="/afterSearch/animalInfo/animalInfo.html";
        });

    });
}