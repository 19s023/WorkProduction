
// CMS接続
function InitialSearch(){
    
}
function nameSearch (Initial){
    
    fetch("https://workproduction.microcms.io/api/v1/date?limit=30&fields=id,name,img", {
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
        for(let i  = 0;i <str.length;i++){
        
        var a = str[i].slice(0,1);
        console.log(str[i])
        if( a<b ){
            console.log(a);
        } else if( Initial === "か" ) {
            //console.log('か行')
        }};

        
        $('.main__line--name').empty();
        $('.main').append('<ul class="main__each"></ul>');

        //strのidとcontentsのidを照合
        for(let i  = 0;i <str.length;i++){
            
            for( let j = 0;j<contents.length;j++){
                
                if(contents[j].name == str[i] ){
                    
                    
                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p>'+ contents[j].name +'</p></li>');   
                  
                }
                   
                
            }
        
        };
        

        
        // for( let i = 0; contents.length > i; i++ ){
        //     for( let j = 0; checkI.length > j; j++ ){
        //         if( contents[i].name == checkI[j] ){
       
        //         }
        //     }
        // }

      
    });
}