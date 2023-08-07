const container = document.querySelector('.container');
const chooseBtn = document.querySelector('.btn');


const createGrid = (squaresPerSide) => {
  const gridSize = squaresPerSide * squaresPerSide;
  for (let i = 0; i < gridSize; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.style.width = '16px';
    gridDiv.style.height = '16px';
    gridDiv.classList.add('gridDiv');
    container.appendChild(gridDiv);
  }
  
  const gridDivs = document.querySelectorAll('.gridDiv');
  
  gridDivs.forEach(gridDiv => {
    gridDiv.addEventListener('mouseover', () => {
      gridDiv.classList.add('hover');
    })
  });
}


chooseBtn.addEventListener('click', () => {
  const squaresPerSide = parseInt(window.prompt('Enter amount of squares per side(max 100).'));
  if (squaresPerSide > 100) {
    window.alert("You've entered over a 100, click button again.")
  } else {
    if (container.childNodes.length !== 0) { // checks if element is empty
      const gridDivs = document.querySelectorAll('.gridDiv');
      gridDivs.forEach(gridDiv => {
        container.removeChild(gridDiv);
      });
    }
    createGrid(squaresPerSide);
  }
});



