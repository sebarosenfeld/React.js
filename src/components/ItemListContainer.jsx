import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where} from "firebase/firestore";

import { ItemList } from './ItemList';

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    // const [Loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect (() => {
        const db = getFirestore();

        const refCollection = !id
        ? collection(db, "items")
        : query (collection(db,"items"), where("categoryId", "==", id))

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size !== 0) {
                (setItems(
                snapshot.docs.map ((doc) => {
                    return { id: doc.id, ...doc.data()};
                })
            )
            )};
        });
    }, [id]);

    // useEffect (() => {
    //     const myPromise = new Promise ((resolve, reject) =>{
    //         setTimeout (() => {
    //             resolve (products);
    //             setLoading (false);
    //         }, 2000);
    //     });

    //     myPromise.then((response) => {
    //         if (!id) {
    //             setItems(response);
    //         }else {
    //             const filterByCategory = response.filter(item => item.category === id);
    //             setItems(filterByCategory);
    //         }
    //     });
        
    //     return () => clearTimeout (myPromise)
    // },[id]);

    // if (Loading) {
    //     return <Container className='mt-4'>Loading...</Container>
    // }

    return (
        // <div className='bg-info'>
            <Container className='pt-4'>
                <h1>{props.greeting}</h1>
                <ItemList items={items}/>
            </Container>
        /* </div> */
    )
};