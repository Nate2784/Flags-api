fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => {
          const flagsContainer = document.querySelector('.flags-container');
      
          data.forEach(country => {
            const flagDiv = document.createElement('div');
            flagDiv.style.display = 'flex';
            flagDiv.style.width = '560px';
      
            const flagImg = document.createElement('img');
            flagImg.src = country.flags.svg;
            flagImg.alt = country.name.common;
            flagImg.classList.add('flag');
      
            const infoContainer = document.createElement('div');
            infoContainer.classList.add('info-container');
      
            flagImg.addEventListener('click', () => {
              document.querySelectorAll('.info-container').forEach(container => {
                container.innerHTML = '';
              });
      
              const countryName = document.createElement('h2');
              countryName.textContent = country.name.common;
      
              const infoList = document.createElement('ol');
              const infoKeys = Object.keys(country).slice(0, 7); 
              infoKeys.forEach(key => {
                const infoItem = document.createElement('li');
                infoItem.textContent = `${key}: ${country[key]}`;
                infoList.appendChild(infoItem);
              });
      
              infoContainer.appendChild(countryName);
              infoContainer.appendChild(infoList);
            });
      
            flagDiv.appendChild(flagImg);
            flagDiv.appendChild(infoContainer);
            flagsContainer.appendChild(flagDiv);
          });
        })
        .catch(error => console.log('Error:', error));