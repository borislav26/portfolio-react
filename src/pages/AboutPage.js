import React from 'react';

import Hero from './../components/Hero'
import Content from './../components/Content'
function AboutPage(props){


    return (
        <div>
            <Hero title={props.title}/>

            <Content>
                    <p>Hello, my name is Borislav Petric and I am Junior Java software developer at Heliant d.o.o</p>
            </Content>
        </div>
    )
}


export default AboutPage;