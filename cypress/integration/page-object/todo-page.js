export class TodoPage{
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')

    }
    addTodo(todoText){
        cy.get('.new-todo').type(todoText + "{enter}")
    }
    /*
    validateTodoText(todoIndex,expextedText){
        //cy.get('.todo-list li :nth-child(${todoIndex + 1 }) lavel').should('have.text', 'expextedText')
        cy.get('.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()')
    } */
}