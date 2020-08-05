import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

const Routes = ()=>{
    //as propriedades no react são como atributos no html
    /*o Route "concatena" os caminhos, ou seja, se o usuario chamar /study ele
     * carregara a rota '/' e a rota '/study'. O exact elimina isso para o path '/'*/

    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} ></Route>
            <Route path="/study" component={TeacherList} ></Route>
            <Route path="/give-classes" component={TeacherForm} ></Route>
        </BrowserRouter>
    );
}
export default Routes;