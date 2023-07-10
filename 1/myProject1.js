function fillWithColor() {
  const paths = document.querySelectorAll('path'); // Select all path elements

  paths.forEach((path) => {
    path.addEventListener('click', function() {
      const pathClass = path.getAttribute('class'); // Get the class of the path
      const currentFill = path.getAttribute('fill'); // Get the current fill color

      if (currentFill && currentFill !== 'none') {
        // If the path is currently filled, remove the fill attribute
        path.removeAttribute('fill');
      } else {
        // If the path is currently not filled, set the fill color based on the class
        switch (pathClass) {
          case 'st2':
            path.setAttribute('fill', '#F58996'); // Set the fill color for class1
            break;
          case 'st3':
            path.setAttribute('fill', '#ED8EA0'); // Set the fill color for class2
            break;
          case 'st4':
            path.setAttribute('fill', '#FFBAC6'); // Set the fill color for class3
            break;
          case 'st5':
            path.setAttribute('fill', '#D67289'); // Set the fill color for class1
            break;
          case 'st6':
            path.setAttribute('fill', '#E05A77'); // Set the fill color for class2
            break;
          case 'st7':
            path.setAttribute('fill', '#EB96A1'); // Set the fill color for class3
            break;
          case 'st8':
            path.setAttribute('fill', 'url(#insta)'); // Set the fill color for class1
            break;
          case 'st9':
            path.setAttribute('fill', '#FFA1B8'); // Set the fill color for class2
            break;
          case 'st10':
            path.setAttribute('fill', '#FFABBC'); // Set the fill color for class3
            break;
          case 'st11':
            path.setAttribute('fill', '#F0979D'); // Set the fill color for class1
            break;
        }
      }
    });
  });
}
