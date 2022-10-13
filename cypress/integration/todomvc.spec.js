/// <reference types="cypress">

import { beforeEach } from "mocha"
import { describe } from "mocha"
import { TodoPage } from "./page-object/todo-page"

describe('todo action', ()=>{
    const todoPage = new TodoPage()
    beforeEach(() =>{
        todoPage.navigate()
        todoPage.addTodo('Clean room')
        
    })

    it('should be able to add ro do to the liste',()=>{

       // todoPage.validateTodoText(0,'clean room')
        cy.get('.toggle').should('not.be.checked')
        
    })

    it('should be able to mark to do as complet',()=>{ 
        cy.get('.toggle').click()
        cy.get('label').should('have.css','text-decoration-line','line-through')

        
    })

    it('should clean the list',()=>{
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants','li')
        
    })
})

