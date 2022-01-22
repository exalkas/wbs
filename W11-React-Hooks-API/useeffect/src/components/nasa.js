import React, {useEffect, useState} from 'react';
import axios from 'axios'


export default function DisplayMars(props) {
    
    const [photos, setPhotos] = useState()

    useEffect(() => loadMarsPhotos(), [])

    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=ChENt3efFagE79zuAc8f29XjAZdRisaA9kMMaRYZ'

    const loadMarsPhotos = async () => {
        
        const response = await axios.get(url)

        console.log(response.data.photos[0].img_src);

        setPhotos(response.data.photos)
    }

    return (
        <div style={{
            height: '50vh',
            width: '100%',
            background: `url(${ photos ? photos[0]?.img_src : null})`,
            backgroundPosition: 'contain'
        }}></div>
    )
}