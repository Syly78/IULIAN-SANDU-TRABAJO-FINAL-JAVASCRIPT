const contenedor1 = document.getElementById('contenedor1')
const contenedor2 = document.getElementById('contenedor2')
const contenedor3 = document.getElementById('contenedor3')
const contenedor4 = document.getElementById('contenedor4')

// NASA News
fetch('../data/nasa.json')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        let contenido = '';
        if (data.nasa && Array.isArray(data.nasa)) {
            data.nasa.forEach(nasa => {
                contenido += `
                <p>${nasa.titulo}</p>
                <p>${nasa.contenido}</p>
                <p>${nasa.url}</p>
                `;
        });
        }
       if (contenedor1) {
            contenedor1.innerHTML = contenido;
        }

    })
    .catch(error => {
        console.error('Error fetching nasa.json:', error);
        contenedor1.innerHTML = '<p>Error loading nasa news.</p>'; 
    });
    
// Internacionales News
fetch('../data/internacionales.json')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
        
    .then(data => {
        let contenido = '';
        if (data.internacionales && Array.isArray(data.internacionales)) {
            data.internacionales.forEach(internacionales=> {
                contenido += `
                <p>${internacionales.titulo}</p>
                <p>${internacionales.contenido}</p>
                <p>${internacionales.url}</p>
                `;
            });
        }
        if (contenedor2) {
            contenedor2.innerHTML = contenido;
        }
    })
    .catch(error => {
        console.error('Error fetching internacionales.json:', error);
        contenedor2.innerHTML = '<p>Error loading internacionales news.</p>';
    });
    
    
// Nacionales News
fetch('../data/nacionales.json')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        let contenido = '';
        if (data.nacionales && Array.isArray(data.nacionales)) {
            data.nacionales.forEach(nacionales => {
                contenido += `
                <p>${nacionales.titulo}</p>
                <p>${nacionales.contenido}</p>
                <p>${nacionales.url}</p>
                `;
            });
        }
        if (contenedor3) {
            contenedor3.innerHTML = contenido;
        }
    })
    .catch(error => {
        console.error('Error fetching nacionales.json:', error);
        contenedor3.innerHTML = '<p>Error loading nationales news.</p>';
    });

// Deportivas News
fetch('../data/deportivas.json')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        let contenido = '';
        if (data.deportivas && Array.isArray(data.deportivas)) {
            data.deportivas.forEach(deportivas => {
                contenido += `
                <p>${deportivas.titulo}</p>
                <p>${deportivas.contenido}</p>
                <p>${deportivas.url}</p>
                `;
            });
        }
        if (contenedor4) {
            contenedor4.innerHTML = contenido;
        }
    })
    .catch(error => {
        console.error('Error fetching deportivas.json:', error);
        contenedor4.innerHTML = '<p>Error loading sports news.</p>';
    });
 