export async function lightOrNot (setTheme) {
  const str1 = document.querySelector('.str1');
    const str2 = document.querySelector('.str2');
    const str0 = document.querySelectorAll('.str0');
    if (str1.y1.baseVal.value === 2600){
    str1.setAttribute('y1', '1759');
    str2.setAttribute('cy', '1832');
    str0.forEach(element => {
      element.style.stroke = '#000';
      element.style.strokeWidth = '20';
      
    });
    str1.style.stroke = '#000';
    str2.style.stroke = '#000';
    setTheme('light')
  }
    else {
      str1.setAttribute('y1', '2600');
      str2.setAttribute('cy', '2550');
      str0.forEach(element => {
        element.style.stroke = '#ffff00';
        element.style.strokeWidth = '80';
        
      });
      str1.style.stroke = '#ffff00';
      str2.style.stroke = '#ffff00';
      setTheme('dark')
    }
};