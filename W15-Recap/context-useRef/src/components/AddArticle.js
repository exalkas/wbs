import React, {useState, useContext} from "react";
import { ArticleContext } from "./context";

export default function AddArticle() {

    const {saveArticle} = useContext(ArticleContext)

    const [article, setArticle] = useState()

    const handleChange = e => {

        console.log('Text is from ', e.target.id, 'and value is', e.target.value)

        const object = {
            "name last": 'sldakf'
        }

        console.log(object['name last'])

        setArticle({
            ...article,
            [e.target.id]: e.target.value // computed object property name
        })

        console.log('article is', article)
    }

    const handleClick = () => {
        saveArticle(article)
    }

    return (
        <div>
            <input type="text" id="title" onChange={handleChange} placeholder="Type the title"/>
            <input type="text" id="body" onChange={handleChange} placeholder="Type the Body"/>

            <div>
                <button onClick={handleClick}>Add article</button>
            </div>
        </div>
    )
}