import {useState,useEffect} from 'react';

const useCategory = () => {
   
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('./data/category.json')
        .then(res => res.json())
        .then(data => setCategory(data))

    }, [])
    
    return [category];
};

export default useCategory;