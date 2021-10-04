import {useState,useEffect} from 'react';

const useCourse = () => {
   
    const [course, setCourse] = useState([]);

    useEffect(() => {
        
        fetch('./data/course.json')
            .then(res => res.json())
        .then(data => setCourse(data))
    }, [])
    
    return [course];
};

export default useCourse;