import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc} from "firebase/firestore";

import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = (props) => {
    const [item, setItem] = useState(null);

    const {id} = useParams();

    useEffect (() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) => {
            setItem({id: snapshot.id, ...snapshot.data()});
        });
    }, [id]);

    // useEffect (() => {
    //     const myPromise = new Promise ((resolve, reject) =>{
    //         setTimeout (() => {
    //             resolve (products);
    //         }, 2000);
    //     });

    //     myPromise.then((response) => {
    //             const findById = response.find(item => item.id === Number(id));
    //             setItem(findById);
    //     });
    
    // },[id]);

    return (
        <Container className='mt-4'>
            <h1>{props.greeting}</h1>
            {item ? <ItemDetail item={item} /> : <>Loading...</>}
        </Container>
    )
};