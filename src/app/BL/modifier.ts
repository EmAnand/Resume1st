
export function funcEncr(str:string,key:string):string{
        let keyArr = key.split('');
        let minDis = Math.ceil(Math.random()*str.length/key.length)
        let lenIterator = minDis;
        let newStr =[];
    
        for (var i = 0; i < str.length; i++) {
            lenIterator--;
            newStr.push(str[i])
            if(str[i]==keyArr[0] || lenIterator==0 ){
                newStr.push(keyArr[0]);
                keyArr.shift();
                lenIterator=minDis;
            }
          }
    
        return newStr.join('');
    }
    
    export function    fucDecr(str:string,key:string):string{
        let keyArr = key.split('')
        let newStr=[];
        for (var i = 0; i < str.length; i++) {
            if(str[i]==keyArr[0]){
                keyArr.shift();
            }
            else{
                newStr.push(str[i])
            }
          }
          return newStr.join('')
    }

    export function generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if(d > 0){//Use timestamp until depleted
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
