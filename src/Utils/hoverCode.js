export async function hoverCode (theme) {
  const str3 = document.querySelectorAll('.str3');
  if (theme === 'light'){
    str3.forEach(element => {
      element.style.stroke = '#fff';
    });
  }
  else {
    str3.forEach(element => {
      element.style.stroke = '#000';
    });
  }
};


export async function hoverCodeOut (theme) {
  const str3 = document.querySelectorAll('.str3');
  if (theme === 'light'){
    str3.forEach(element => {
      element.style.stroke = '#000';
    });
  }
  else {
    str3.forEach(element => {
      element.style.stroke = '#fff';
    });
  }
};