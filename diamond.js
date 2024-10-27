const rows = prompt("Enter the number of rows")

for (let i = 0; i < rows; i++) {
    let spaces = ""
    let stars = ""
  for (let j = 0; j < rows - i; j++){
    spaces += " "
  }
  for (let j = 0; j <(i *2) +1; j++){
    stars += "*"
  }
  console.log(spaces + stars)
}

for(let i = rows - 2; i >= 0; i--){
    let spaces = ""
    let stars = ""
  for (let j = 0; j < rows - i; j++){
    spaces += " "
  }
  for (let j = 0; j <(i *2) +1; j++){
    stars += "*"
  }
  console.log(spaces + stars)
}
