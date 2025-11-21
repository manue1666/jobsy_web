document.addEventListener("DOMContentLoaded", () => {

const carruselPublicaTitulo = document.getElementById('carruselPublicaTitulo');
const carruselPublicaTituloDescripcion = document.getElementById('carruselPublicaTituloDescripcion');
const carruselContrataTitulo = document.getElementById('carruselContrataTitulo');
const carruselContrataTituloDescripcion = document.getElementById('carruselContrataTituloDescripcion');
const carruselPromueveTitulo = document.getElementById('carruselPromueveTitulo');
const carruselPromueveTituloDescripcion = document.getElementById('carruselPromueveTituloDescripcion');

const conceJobsy = document.getElementById('conceJobsy');
const conoceDescripcion = document.getElementById('conoceDescripcion');

const tituloPublicaContrata = document.getElementById('tituloPublicaContrata');
const publicaContrataDescripcion = document.getElementById('publicaContrataDescripcion');

const descargarJobsy = document.getElementById('descargarJobsy');
const descargarDescripcion = document.getElementById('descargarDescripcion');
if(navigator.language.split('-')[0]==="es"){
    carruselPublicaTitulo.textContent = 'PUBLISH';
    carruselPublicaTituloDescripcion.textContent = 'Get your services to reach more people.';
    carruselContrataTitulo.textContent = 'CONTRACT';
    carruselContrataTituloDescripcion.textContent = 'An efficient service in the best app.';
    carruselPromueveTitulo.textContent = 'PROMOTES';
    carruselPromueveTituloDescripcion.textContent = 'Jobsy empowers service providers to reach more people.';
    
    conceJobsy.textContent = 'Meet JOBSY';
    conoceDescripcion.textContent = 'JOBSY is a mobile app designed to connect people who need technical or professional services with those who offer them. Whether youre looking for a reliable plumber, an electrician available today, or a general repair expert, JOBSY is the perfect bridge between customers and service providers.';
    tituloPublicaContrata.textContent = '"Publish or hire in a single app"';
    publicaContrataDescripcion.textContent = 'With JOBSY, posting and hiring services has never been easier';

    descargarJobsy.textContent = 'Download JOBSY';
    descargarDescripcion.textContent = 'JOBSY is a mobile app designed to connect people who need technical or professional services with those who offer them. Download it now and enjoy all its benefits.';
}
});
