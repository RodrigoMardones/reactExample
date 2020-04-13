import React, { useState, useEffect } from 'react';
import DetailMovieCard from '../components/details/detailmoviecard';
import axios from 'axios';
const apikey = 'ae63dfca';



const Details =  (props) => {
    const { id } = props.match.params;
    let [detail, detailSet] = useState({})
    useEffect(() => {
        const source = axios.CancelToken.source();
        const fetchData = async () => {
            const result = await axios({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params : {
                    apiKey : apikey,
                    i : id
                }
            })
            detailSet(result.data);
        }
        fetchData();
        return () => {
            source.cancel();
        };
    }, [id])

    return (
        <DetailMovieCard movie={detail} />
    )
}
export default Details;