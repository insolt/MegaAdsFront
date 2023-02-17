import React, {SyntheticEvent, useState} from "react";
import './AddForm.css'
import {Btn} from "../common/btn";
import {geocode} from "../../utils/geocoding";

export const AddForm = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        url: '',
        address: '',
    })

    const updateForm = (key: string, value: string | number) => {
        setForm(prev => ({
            ...prev,
            [key]: value,
        }))
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true)

        try {
            const {lat, lon} = await geocode(form.address);
            const res = await fetch('http://localhost:3001/ad', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({...form, lat, lon})
            })
            const data = await res.json();
            setId(data.id);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <p>Adding advert...</p>
    }

    if (id) {
        return <h2>Twoje ogloszenie"{form.name}" zostalo poprawnie dodane do serwisu pod id={id}</h2>
    }

    return (
            <form className="add-form" onSubmit={handleSubmit}>
                <h1>Add new advert</h1>
                <p>
                    <label>
                        Nazwa: <br/>
                        <input
                            type="text"
                            name="name"
                            required
                            maxLength={99}
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Description: <br/>
                        <textarea
                            name="description"
                            maxLength={999}
                            value={form.description}
                            onChange={e => updateForm('description', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Price: <small><i>(jesli nie chcesz wyswietlac ceny, pozostaw zero)</i></small><br/>
                        <input
                            type="number"
                            name="price"
                            required
                            maxLength={99}
                            value={form.price}
                            onChange={e => updateForm('price', Number(e.target.value))}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        URL: <br/>
                        <input
                            type="text"
                            name="url"
                            maxLength={99}
                            value={form.url}
                            onChange={e => updateForm('url', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Address: <br/>
                        <textarea
                            name="address"
                            maxLength={999}
                            value={form.address}
                            onChange={e => updateForm('address', e.target.value)}
                        />
                    </label>
                </p>
                <Btn text="Add"/>
            </form>
    )
}