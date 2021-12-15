
function reduceArr(array) {
    if (array == 0||null)
        return 0
    else
     var i, total=0;
    for(i=0; i< array.length; i++)
        total += array[i];
    return total;
}

console.log(reduceArr([6, 36, 5]));


const student ={
    Name :  [" Jess", "Lane", "Jake", "Students name ", "Mike"],
    metod :function removeStudentName(studentName) {
    const studentname = this.Name.filter(function (val) {
    return !(val === "Students name ");
    })
} 
}
console.log(student.metod(student.Name));