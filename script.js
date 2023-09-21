import {pattern} from './patterns.js'

function generateForm(inps, wrapper, pattern, ctx) {
  inps.forEach((el) => {

    const label = document.createElement('label');
    label.textContent = el;
    const inp = document.createElement('input');
    label.setAttribute('for', el);
    inp.setAttribute('id', el);
    inp.setAttribute('type', 'range');
    inp.setAttribute('min', 1);
    inp.setAttribute('max', 20);
    inp.setAttribute('value', 1);
    inp.setAttribute('step', 1);
    inp.setAttribute('selected', false);

    inp.addEventListener('input', () => {
      drawPattern(pattern, ctx);
    });

    inp.addEventListener('mouseover', () => {
      inp.setAttribute('selected', true);
      drawPattern(pattern, ctx);
    });

    inp.addEventListener('mouseleave', () => {
      inp.setAttribute('selected', false);
      drawPattern(pattern, ctx);
    });
    
    label.addEventListener('mouseover', () => {
      inp.setAttribute('selected', true);
      drawPattern(pattern, ctx);
    });

    label.addEventListener('mouseleave', () => {
      inp.setAttribute('selected', false);
      drawPattern(pattern, ctx);
    });

    const innerWrapper = document.createElement('div');

    innerWrapper.appendChild(label);
    innerWrapper.appendChild(inp);

    wrapper.appendChild(innerWrapper);

  })
}

function generateEpsilonForm(form, pattern, ctx) {
  const deltaLabel = document.createElement('label');
  const deltaInp = document.createElement('input');
  deltaInp.setAttribute('id', 'delta');
  deltaLabel.textContent = 'Gap: 10';

  deltaInp.setAttribute('type', 'range');
  deltaInp.setAttribute('value', 10);
  deltaInp.setAttribute('min', 0);
  deltaInp.setAttribute('max', 20);
  deltaInp.setAttribute('step', 0.5);

  deltaInp.addEventListener('input', () => {
    drawPattern(pattern, ctx);
    deltaLabel.textContent = 'Gap: ' + deltaInp.value;
  });

  const epsilonLabel = document.createElement('label');
  const epsilonInp = document.createElement('input');
  epsilonInp.setAttribute('id', 'epsilon');
  epsilonLabel.textContent = 'Width: 10';

  epsilonInp.setAttribute('type', 'range');
  epsilonInp.setAttribute('value', 10);
  epsilonInp.setAttribute('min', 0.5);
  epsilonInp.setAttribute('max', 20);
  epsilonInp.setAttribute('step', 0.5);

  epsilonInp.addEventListener('input', () => {
    drawPattern(pattern, ctx);
    epsilonLabel.textContent = 'Width: ' + epsilonInp.value;
  });

  form.appendChild(deltaInp);
  form.appendChild(deltaLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(epsilonInp);
  form.appendChild(epsilonLabel);
  form.appendChild(document.createElement('br'));
}

function drawPattern(pattern, ctx) {
  const canvas = document.getElementById('pattern-canvas');
  const width = canvas.width;
  const height = canvas.height;

  const theme = getTheme();
  
  if (theme == 'dark') {
    ctx.fillStyle = 'Black';
  } else {
    ctx.fillStyle = 'White';
  }

  ctx.fillRect(0, 0, width, height);

  for(let i=0; i < pattern.length; i++) {
    drawLine(ctx, i, pattern, width, height);
  }
  
}

function drawLine(ctx, i, pattern, width, height) {
    const {stick, candy} = pattern[i]; 
    
    const epsilon = +document.getElementById('epsilon').value;
    const delta = +document.getElementById('delta').value;
    const vertOffset = 10;

    const y = i * (height / pattern.length) + vertOffset;
    let x = 0;
    let line;
    let isStickDrawn = false;
    while (x < width) {
      if (isStickDrawn) {
        line = candy;
      } else {
        isStickDrawn = true;
        line = stick;
      }
      
      for (let j = 0; j < line.length; j++) {
        const inp = document.getElementById(line[j][0]);
        
        ctx.lineWidth = 10;
        const len = inp.value * epsilon;
        
        let color;
        const theme = getTheme();

        if (theme == 'dark') {
          if(inp.getAttribute('selected') == 'true') {
            color = line[j][1] ? 'LawnGreen': 'Red';
          } else {
            color = line[j][1] ? 'Green': 'Maroon';
          }
        } else {
          if(inp.getAttribute('selected') == 'true') {
            color = line[j][1] ? 'Blue': 'Yellow';
          } else {
            color = line[j][1] ? 'DarkBlue': 'Gold';
          }
        }
        
        for (let k = epsilon; k <= len; k+=epsilon) {

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + epsilon, y);
          ctx.strokeStyle = color;
          ctx.stroke();
          x += delta + epsilon;

        }
      }}
}

function generatePatternSelect(pattern) {
  const patternSelect = document.getElementById('pattern-select');
  
  for (let i = 0; i < pattern.length; i++){
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = pattern[i][0];
    patternSelect.appendChild(opt);
  };
  
  patternSelect.addEventListener('change', generateContent);
};

function generateContent() {
  const patternSelect = document.getElementById('pattern-select');  
  const {lollipops, inputs} = pattern[patternSelect.value][1];

  const canvas = document.getElementById('pattern-canvas');
  canvas.width = window.innerWidth;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');

  const form = document.getElementById('pattern-form');
  removeChildren(form);
  generateForm(inputs, form, lollipops, ctx);
  const epsilonForm = document.getElementById('epsilon-form');
  removeChildren(epsilonForm);
  generateEpsilonForm(epsilonForm, lollipops, ctx);

  drawPattern(lollipops, ctx);
};

function removeChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function getTheme() {
  const cb = document.getElementById('theme');
  let out;
  if (cb.checked) {
    out = 'dark';
  } else {
    out = 'light';
  }
  return out;
}

window.onload = () => {
  generatePatternSelect(pattern);
  generateContent(); 

  const cb = document.getElementById('theme');
  cb.addEventListener('click', generateContent); 
};
