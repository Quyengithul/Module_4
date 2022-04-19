var array=['Yaakov',
'John',
'Jen',
'Jason',
'Paul',
'Frank',
'Larry',
'Paula',
'Laura',
'Jim',
];

for(var i=0;i<9;i++)
{
  if(array[i].charAt(0)=="J"){
      console.log("Good bye "+array[i]);
  }
  else{
    console.log("Hello "+array[i]);
  }
}
