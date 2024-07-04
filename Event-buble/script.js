document.getElementById('outerDiv').addEventListener('click', function() {
    alert('Outer Div Clicked!');
  });
  
  document.getElementById('innerDiv').addEventListener('click', function(event) {
    alert('Inner Div Clicked!');
    event.stopPropagation(); // Prevent the event from bubbling up
  });
  