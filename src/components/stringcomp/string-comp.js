import React, { useState } from 'react';
import { useLanguagePreferences } from '../contextapi/LanguageContext';
const StringComp = ({animals}) => {

    const a = useLanguagePreferences();

    console.log("AAAAA",a);
    // console.log("BBBBB", b);

const getAnimals = (animals) => {
    return animals.map((animal) => {
        const {id, name, desc} = animal;

        return <div key={id} onClick={(event) => {
            itemClicked(desc);
        }}>{name}</div>
    })
}

const itemClicked = (test) => {
    
    setDesc(test);
}

const [desc, setDesc] = useState('');

return <div> 
    {getAnimals(animals)}

    <div>{desc}</div>
</div>;
}

export default StringComp;