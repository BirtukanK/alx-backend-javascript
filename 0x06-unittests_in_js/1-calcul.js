function calculateNumber(type, a, b) {
  if (type === 'SUM'){
    console.log(Math.round(a) + Math.round(b))
  }
  else if (type === "SUBTRACT"){
    console.log(Math.round(a) - Math.round(b))
  }
  else if (type === "DIVIDE"){
    if (Math.round(b) === 0){
      console.log("'Error'")
    }
    else {
      console.log(Math.round(a) / Math.round(b))
  }
  }

}

module.exports = calculateNumber;
