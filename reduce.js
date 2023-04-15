const arr = [1,2,3,4,5,6,7,8];
const names = ['Elie', 'Colt', 'Tim', 'Matt'];
const nArr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

function isEven(val){
    return val % 2 === 0;
  }


  function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }


  function partition(arr, func){
return arr.reduce(function(ar, next ){
        result = func(next);
        if (result=== true)
        {ar[0].push(next)}
        else {ar[1].push(next)}
        return ar;



},[[],[]])


  };






  function addKeyAndValue(args, title, Inst){
    idx=0;
        return args.reduce(function(acc, next){
           acc[idx]=next;
           acc[idx][title]=Inst;
           idx++;
               return acc;
    },[])};


    function extractValue(arr, key){
        return nArr.reduce(function(ar,next){
            ar.push(next[key]);
            return ar;
        },[]);}


        function vowelCount(str){
            const vowels = "aeiou";//init vowels
           strAry = str.toLowerCase().split("");//puts string to array
          
           return strAry.reduce(function(st, next){//string array reduces
                    for(v of vowels)//checks for vowels loop
                     {let found = v.indexOf(next)//returns 0 or positive if a vowel is found
              
                if (found >= 0)//if it is a vowel
                {
                       if(st[next])//if the key exists in array
                {st[next]+=1}//the value is incresed
                else{st[next]=1}//otherwise the key and value are init to 1
                        }
                    }
        return st;//returns the reduced string aqrray
            },{});//we have to init the result as an object in this line
        }