import * as React from  'react';
import  Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';


export default  function(){
    return (
       <div>
        <h1>example 1 </h1>
           <Layout>
               <Header>header</Header>
               <Content>content</Content>
               <Footer>footer</Footer>
           </Layout>
       </div>
    )
}