"use client"

import React, { createContext, useState, useContext } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    // Menambahkan tugas
    const addTodo = (description) => {
        setTodos([...todos, { description, completed: false }]);
    };

    // Mengubah status tugas
    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    // Menghapus tugas
    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    // Memfilter tugas
    const filteredTodos = () => {
        switch (filter) {
            case 'completed':
                return todos.filter(todo => todo.completed);
            case 'not_completed':
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    };

    return (
        <TodoContext.Provider value={{ todos: filteredTodos(), addTodo, toggleTodo, deleteTodo, filter, setFilter }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => {
    return useContext(TodoContext);
};