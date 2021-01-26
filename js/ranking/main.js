window.onload=function(){
    // CMS接続
    fetch("https://workproduction.microcms.io/api/v1/date?limit=100", {
        headers: {
            "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
        }
    })
    .then(res => res.json())
    .then(json => {

        contents = json.contents;
        let sortBox;
        // let sample = [ 1, 3, 5, 2, 4 ];
        // console.log( sample );
        // for( let i = 0; sample.length > i; i++ ){
        //     for( let j = 0; sample.length > j; j++ ){
        //         if( sample[i] < sample[j] ){
        //             sortBox = sample[i];
        //             sample[i] = sample[j];
        //             sample[j] = sortBox;
        //         }
        //     }
        // }
        // console.log( sample );

        // const sortAraay = data.replace(/[^0-9.]/g, '');
        let sortSampleI;
        let sortSampleJ;
        // 全長大ランキング
        //先頭の一文字しか参照していない

        console.log ( contents[0],contents[1],contents[2] );
        for( let i = 0; contents.length > i; i++ ){
            for( let j = 0; contents.length > j; j++ ){
                sortSampleI = contents[i].bodyLength.replace(/[^0-9.]/g, '');
                sortSampleJ = contents[j].bodyLength.replace(/[^0-9.]/g, '');
                if( sortSampleI < sortSampleJ ){
                    sortBox = contents[i];
                    contents[i] = contents[j];
                    contents[j] = sortBox;
                }
            }
        }
        console.log ( contents[0],contents[1],contents[2] );

        $('.main--rank__S1-img').attr('src', contents[0].img.url);
        $('.main--rank__S1-info').append('<p>' + contents[0].name + '</p><p>'+ contents[0].bodyLength +'</p>');

        $('.main--rank__S2-img').attr('src', contents[1].img.url);
        $('.main--rank__S2-info').append('<p>' + contents[1].name + '</p><p>'+ contents[1].bodyLength +'</p>');

        $('.main--rank__S3-img').attr('src', contents[2].img.url);
        $('.main--rank__S3-info').append('<p>' + contents[2].name + '</p><p>'+ contents[2].bodyLength +'</p>');


        // 全長小ランキング
        // for( let i = 0; contents.length > i; i++ ){
        //     for( let j = 0; contents.length > j; j++ ){
        //         if( contents[i].bodyLength > contents[j].bodyLength ){
        //             a=contents[j];
        //             contents[j] = contents[i];
        //             contents[i] = a;
        //         }
        //     }
        // }

        // $('.main--rank__L1-img').attr('src', contents[0].img.url);
        // $('.main--rank__L1-info').append('<p>' + contents[0].name + '</p><p>'+ contents[0].bodyLength +'</p>');

        // $('.main--rank__L2-img').attr('src', contents[1].img.url);
        // $('.main--rank__L2-info').append('<p>' + contents[1].name + '</p><p>'+ contents[1].bodyLength +'</p>');

        // $('.main--rank__L3-img').attr('src', contents[2].img.url);
        // $('.main--rank__L3-info').append('<p>' + contents[2].name + '</p><p>'+ contents[2].bodyLength +'</p>');
    });
}
