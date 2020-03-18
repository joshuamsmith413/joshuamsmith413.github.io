

var con = document.getElementById('project-button-container');

con.addEventListener('click', e => {
  const descriptionClassName = `des-${e.target.classList[1]}`
  const description = document.getElementsByClassName(descriptionClassName)
  description[0].classList.toggle('hidden');
});
