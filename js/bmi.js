function bmi(){
  var weight = document.getElementById('weight').value,
      feet = parseInt(document.getElementById('feet').value*12),
      inches = parseInt(document.getElementById('inches').value),
      height = feet + inches,
      output = document.querySelector('output'),
      formula = ~~(weight/(height*height)*703*100)/100,
      category = ''
  if (formula < 18.5){
    category = 'Underweight'
   
  } else if (18.5 < formula && formula < 25){
    category = 'Normal Weight'
  
  } else if (25 < formula && formula < 30){
    category = 'Overweight'
  
  } else if (30 < formula){
    category = 'Obese'
    
  }
  output.innerHTML = '<h1>'+formula+'</h1><h2>'+category+'</h2>'
}
bmi()