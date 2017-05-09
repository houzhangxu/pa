/**
 * Created by 章旭 on 2017/5/7.
 */
console.log("d");
top:
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            if (i === 1 && j === 1) break top;
            console.log('i=' + i + ', j=' + j);
        }
    }
console.log("ta");