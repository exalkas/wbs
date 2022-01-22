import React, {useState, useContext} from "react";
import Article from './Article'
import {ArticleContext} from './context'

export default function Articles() {

    const {articles} = useContext(ArticleContext) 

    return (
        <div>
            {
                articles.map(item => <Article item={item} item1='3' item3='4'/>) // item prop that is passed to Article
            }
        </div>)
}