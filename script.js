/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
 arr.map((student)=>{
  if(student.marks>50)
  console.log(student.name)
 })
}

function PrintStudentsbyForEach() {
  arr.forEach((student)=>{
    if(student.marks>50)
    console.log(student.name)
  })
}

function addData() {
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr);
}

function removeFailedStudent() {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].marks < 50) {
      arr.splice(i, 1);
    }
  }
 console.log(arr);
}

let arr1 = [
  { id: 4, name: "ram", age: "13", marks: 45 },
  { id: 5, name: "sham", age: "22", marks: 95 },
  { id: 6, name: "lakshan", age: "10", marks: 75 },
];
function concatenateArray() {
  console.log(arr.concat(arr1));
}
