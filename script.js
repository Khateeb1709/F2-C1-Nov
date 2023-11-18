const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  // Log all developers from the array to the console.
  data.forEach((obj) => {
    if (obj.profession === "developer") {
      console.log(obj);
    }
  });
}

// 2. Add Data
function addData() {
  // Add a new data object to the array using details collected from a prompt.
  let n = prompt("Enter name:");
  const newAge = parseInt(prompt("Enter age:"));
  let p = prompt("Enter profession:");

  let newData = { name: n, age: newAge, profession: p };
  data.push(newData);
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  // Extract and remove all admins from the array.
  const allAdmins = data.filter((person) => person.profession !== "admin");
  console.log(allAdmins);
}

// 4. Concatenate Array
function concatenateArray() {
  // Combine two arrays (create a dummy array as an example) and log the result.
  const newData = [
    { name: "Yousuf", age: 22, profession: "Doctor" },
    { name: "Hasan", age: 28, profession: "Senior Manager" },
  ];

  const arr = data.concat(newData);
  console.log(arr);
}

// 5. Average Age
function averageAge() {
  // Compute and log the average age of all people in the array
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log(average);
}

// 6. Age Check
function checkAgeAbove25() {
  // Validate if there's at least one person in the array who's older than 25.
  // const check = data.some((person) => person.age > 25);
  // console.log(check);

  for(let obj of data){
    if(obj.age > 25){
      console.log(true);
      return;
    }
  }
  console.log(false);
}

// 7. Unique Professions
function uniqueProfessions() {
  //  Log all distinct professions present in the array.
  let professionsSet = new Set(data.map(person => person.profession));
  console.log("Unique Professions:", [...professionsSet]);
}

// 8. Sort by Age
function sortByAge() {
  // Organize the array by age in ascending order
  const dummyArr = [...data];
  dummyArr.sort((a,b) => a.age - b.age);
  console.log(dummyArr);
}

// 9. Update Profession
function updateJohnsProfession() {
  // Adjust 'john's profession to 'manager'
  data.forEach((person) => {
    if(person.name === "john"){
      person.profession = "manager";
    }
  });
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  // Calculate and print the total number of developers and admins in the array.
  let dev = data.filter(obj => obj.profession === 'developer');
  let admins = data.filter(obj => obj.profession === 'admin');
  console.log(`Total Developers: ${dev.length}, Total Admins: ${admins.length}`);
}
