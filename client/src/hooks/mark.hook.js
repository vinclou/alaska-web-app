import {useState, useCallback} from 'react';
import marked from 'marked';

export const useMark = () => {

    const readmePath  = require("../pages/posts/post1.md")
    const readmePath2 = require("../pages/posts/post2.md")
    const readmePath3 = require("../pages/posts/post3.md")

    useEffect(() => {

        fetch(readmePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              markdown: marked(text)
            })
          })

    }, []);


    return { login, logout, token, userId }
}