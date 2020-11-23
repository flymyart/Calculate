function split(string) {
  let arr;
  arr = string.split(' ');
  return(arr);
}

let numbers = [
  {ar: '1', rim: 'I'},
  {ar: '2', rim: 'II'},
  {ar: '3', rim: 'III'},
  {ar: '4', rim: 'IV'},
  {ar: '5', rim: 'V'},
  {ar: '6', rim: 'VI'},
  {ar: '7', rim: 'VII'},
  {ar: '8', rim: 'VIII'},
  {ar: '9', rim: 'IX'},
  {ar: '10', rim: 'X'},
]

function test_rim(arr, rim) {
  if ( numbers.find(item => item.ar == arr[0]) && numbers.find(item => item.ar == arr[2])) {
    test(arr);
    rim = false;
    return [arr, rim];
  } else if ( numbers.find(item => item.rim == arr[0]) && numbers.find(item => item.rim == arr[2])) {
    rim_to_arab(arr);
    console.log(arr);
    test(arr);
    rim = true;
    return [arr, rim];
  } else if ( numbers.find(item => item.rim == arr[0]) || numbers.find(item => item.rim == arr[2])) {
    return ['Error', 'Error'];
  } else {   
    return ['Error', 'Error'];
  }
}

function rim_to_arab(arr) {
  for(let i = 0; i < 3; i=i+2) {
    let numb = numbers.find(item => item.rim == arr[i]);
    arr[i] = numb.ar
  } 
  return(arr);
}

function arab_to_rim(rez) {
  let lookup = {C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let i;
  let numb = '';

  for (i in lookup) {
    while (rez >= lookup[i]){
      numb += i;
      rez -= lookup[i];
    }  
  }
  return numb;
}

function test(arr) {
  arr[0] = Number(arr[0]);
  arr[2] = Number(arr[2]);  

  if (arr.length == 3) {
    if (!isNaN(arr[0]) && !isNaN(arr[2]))  {
     
        if(Number.isInteger(arr[0]) && Number.isInteger(arr[0])){
          return(arr);
        } else {
          return('Error');
        }   

    } else {
      return('Error');
    }
  } else {
    return('Error');
  }
  
}


function calculator(string) {
  let arg = split(string);
  let rim;
  let n = test_rim(arg, rim);
  let num = n[0];
  rim = n[1];
  let rez;

  if (num == 'Error') {
    alert(num);
  } else {
    switch(num[1]) {
      case '+':
        rez = num[0] + num[2];
        break;
      case '-':
        rez = num[0] - num[2];
        break;
      case '*':
        rez = num[0] * num[2];
        break;    
      case '/':
        rez = Math.trunc(num[0] / num[2]);
        break;
      default:
        rez = 'Error';
    }
    console.log(rim);
    if(rim === false) {
      alert(rez);
      return(rez);
    } else {
      let rN = arab_to_rim(rez);
      alert(rN);
      return(rN);
    } 
  }
}

calculator(prompt('Введите операцию', ));

