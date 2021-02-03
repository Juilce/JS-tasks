/*let playList = [{
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];
    let list = document.getElementsByTagName("body")[0];
    let numList = document.createElement('ol');
    list.append(numList);

    for(let i in playList){
        let li = document.createElement('li');
        li.textContent = 'Song ' + playList[i].song + ' of author ' + playList[i].author;
        numList.append(li);
    }
    */
   /* //task 2
   let dialog = document.querySelector('dialog');
   document.querySelector('#show').onclick = function() {
     dialog.show();
   };
   document.querySelector('#close').onclick = function() {
     dialog.close();
   }; */

//task 3

let count = 0;
document.querySelector('#change').onclick =  function(){
    count++;
    if(count==4){
        count=1;
    }
    nextLight();
}

    function nextLight(){
        if(count == 1){
            document.querySelector('#green').style.backgroundColor = 'green';
document.querySelector('#yellow').style.backgroundColor = 'grey';
document.querySelector('#red').style.backgroundColor = 'grey';
        } else if(count == 2){
            document.querySelector('#green').style.backgroundColor = 'grey';
            document.querySelector('#yellow').style.backgroundColor = 'yellow';
            document.querySelector('#red').style.backgroundColor = 'grey';
        } else {
            document.querySelector('#green').style.backgroundColor = 'grey';
            document.querySelector('#yellow').style.backgroundColor = 'grey';
            document.querySelector('#red').style.backgroundColor = 'red';
        }
        
    }