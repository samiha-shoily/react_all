import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data/data'

function App() {
  const[courses, setCourses] = useState(data);
  const[index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = courses.length -1;
    if (index <0 ){
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, courses]);

  return (
    <section className= 'section'>
      <div className= 'title'>
        <h2> 
          <span> </span> Courses
        </h2>
      </div>
      <div className= 'section-centre'>
      {courses.map((topic, topicIndex) => {
        const {id, image, name, title} = topic;
        let position = "nextSlide";
          if (topicIndex === index) {
            position = "activeSlide"
          }

          if (topicIndex === index-1  || (index === 0 && topicIndex === courses.length -1)
          ){
            position = "lastSlide";
          }

        return(
          <article className={position} key= {id}>
            <img src={image} alt= {name} className='course-image' />
            <h4>{name}</h4>
            <p className ='title'>{title}</p>
  
          </article> 
        )
      }
      )}
      <button className='prev' onClick={() => setIndex(index-1)}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick= {(() => setIndex(index+1))}>
        <FiChevronRight />
      </button>
      </div>
    </section>  

  );
}

export default App;
