var mat=[
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    
   ]
   var arr=[];
 for(var i=0; i<mat.length; i++){
     for(var j=0; j<mat.length; j++){
            arr.push(mat[i][j]);
     }
 }
 console.log(arr);