import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';

function DevForm({ onSubmit }) {
    const [github_username, setGithubUsername] = useState('')
    const [techs, setTechs] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords

                setLatitude(latitude)
                setLongitude(longitude)

            },
            (err) => {
                console.log(err)
            },
            {
                timeout: 30000,
            }
        )
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        })

        setGithubUsername('')
        setTechs('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <TextField 
                    name="github_username"
                    id="username_github"
                    label="Usuário do Github"
                    required
                    value={github_username}
                    autoFocus
                    onChange={e => setGithubUsername(e.target.value)}
                />
            </div>

            <div className="input-block">
                <TextField
                    name="techs"
                    id="techs"
                    label="Tecnologias"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <TextField
                        type="number"
                        name="latitude"
                        id="latitude"
                        label="Latidude"
                        required
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <TextField
                        type="number"
                        name="longitude"
                        label="Longitude"
                        id="longitude"
                        required value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm