import React from 'react'

const About =  () =>
    <div className="content-section">
        <h1>News4u - Customize your news feed!</h1>
        <h2><em>A Flatiron Online Bootcamp Portfolio Project with Rails and React/Redux</em></h2>

        <p>The News4u app lets users retrieve headlines and stories from different news sources.
        News is retrieved from <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI.org</a>.
        News sources available through News4u app are limited to English.
        </p>      
        <p><a href="https://unsplash.com/@rawpixel" target="_blank" rel="noopener noreferrer">Photo by @rawpixel on Unsplash</a></p>
        <p>Anyone can sign up (no current validation of email). Or for a quick try, use one of the following logins (password 'test')
            <ul>
                <li>waltercronkite@domain.com</li>
                <li>jonstewart@domain.com</li>
                <li>aaronrodgers@domain.com</li>
                <li>avi@domain.com</li>  
            </ul>                                  
        </p>
        <p>Stay informed!</p>   
    </div>
;

export default About;  