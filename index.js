/** 
 * Creates the todo list in the DOM
 */
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Charger les tâches depuis le localStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Fonction pour sauvegarder les tâches
    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    // Fonction pour créer un élément de tâche
    const createTodoElement = (todo) => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-lg';
        
        const div = document.createElement('div');
        div.className = 'flex items-center gap-2';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'w-5 h-5 text-blue-500';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked;
            saveTodos();
            if (todo.completed) {
                span.classList.add('line-through', 'text-gray-500');
            } else {
                span.classList.remove('line-through', 'text-gray-500');
            }
        });

        const input = document.createElement('input');
        input.className = "bg-gray-50 focus:bg-white";
        input.value = todo.text;
        if (todo.completed) {
            input.classList.add('line-through', 'text-gray-500');
        }

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&times;';
        deleteButton.className = 'text-red-500 hover:text-red-700 text-xl';
        deleteButton.addEventListener('click', () => {
            todos = todos.filter(t => t !== todo);
            saveTodos();
            li.remove();
        });

        div.appendChild(checkbox);
        div.appendChild(input);
        li.appendChild(div);
        li.appendChild(deleteButton);
        
        
        return li;
    };

    // Afficher les tâches existantes
    todos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    // Gérer l'ajout de nouvelles tâches
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const text = todoInput.value.trim();
        if (text) {
            const todo = {
                text,
                completed: false
            };
            
            todos.push(todo);
            saveTodos();
            
            todoList.appendChild(createTodoElement(todo));
            todoInput.value = '';
        }
    });
});
