import React from 'react';

const Detail = ({album , artists , name}) => {
    console.log("appl");
    return (
        <div>
            <div>
                <img src = {album.images[0].url}
                     alt =  {name}>
                     </img>
            </div>
            <div>
                <label htmlFor = {name}>
                    {name}
                </label>
            </div>
            <div>
                <label htmlFor = {artists[0].name}>
                    {artists[0].name}
                </label>
            </div>
        </div>
    );
}

export default Detail;