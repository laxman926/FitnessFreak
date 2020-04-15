function cal(){
  var nameVal = document.getElementById('name').value
      ageVal = document.getElementById('age').value
      weightVal = document.getElementById('weight').value
      highVal = document.getElementById('high').value
      calories = 66 + (13.7 * weightVal) + (5 * highVal) - (6.8 * ageVal)

  document.getElementById('result').style.transform = "scale(1)"
  document.getElementById('givemename').innerHTML = nameVal
  document.getElementById('calories').innerHTML = Math.round(calories) + ' calories'

  var nameLength = nameVal.length;
      ageeLength = ageVal.length;
      weighteLength = weightVal.length;
      lengthLength = highVal.length;
  if(nameLength == 0 || ageeLength == 0 || weighteLength == 0 || lengthLength == 0)
  { 
    alert("Enter the values")
  }
    else if (!isNaN(nameVal) || isNaN(ageVal) || isNaN(weightVal) || isNaN(highVal))
    { 
     alert("Enter the values")
  }

}
