const CANVAS_SIZE = 640;
const container = document.querySelector('.grid');
const chooseBtn = document.querySelector('.btn');


const getRandomColor = () => {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);

  return `rgb(${randomR}, ${randomG}, ${randomB})`
}

const createGrid = (squaresPerSide) => {
  const gridSize = Math.round(CANVAS_SIZE / squaresPerSide);
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.style.width = `${gridSize}px`;
    gridDiv.style.height = `${gridSize}px`;
    gridDiv.classList.add('gridDiv');
    container.appendChild(gridDiv);
  }
  
  const gridDivs = document.querySelectorAll('.gridDiv');
  
  gridDivs.forEach(gridDiv => {
    gridDiv.addEventListener('mouseover', () => {
      gridDiv.style.backgroundColor = getRandomColor();
    })
  });
}


chooseBtn.addEventListener('click', () => {
  const squaresPerSide = parseInt(window.prompt('Enter amount of squares per side(max 100).'));
  if ((squaresPerSide > 100) || (typeof squaresPerSide !== "number")) {
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



