import Element from "./Element";
import data from '../data/data.json'


function CatalogContainer() {

    const libraryElements = data.libraryElements;
    const proyectElements = data.proyectElements;

    let libraries = [];
    let proyects = [];
    
    
    for (let i = 0; i<libraryElements.length ; i++){

        libraries.push(
            <Element 
                title={libraryElements[i].title}
                image={libraryElements[i].image}
                subtitle={libraryElements[i].subtitle}
                link={libraryElements[i].link}
            />
            
        )
    }
    for (let y = 0; y<proyectElements.length ; y++){
        
        proyects.push(
            <Element 
                title={proyectElements[y].title} 
                image={proyectElements[y].image} 
                subtitle={proyectElements[y].subtitle} 
                link={proyectElements[y].link} 
            />
        )
    }

  return (
    <div className='catalog__container'>
        {libraries}
        {proyects}
    </div>
  )};

export default CatalogContainer;