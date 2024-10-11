"use client"

import React, { useState } from 'react';
import { useTodo } from '../_context/TodoContext';
import Button from './Button';

const TodoList = () => {
    const { todos, addTodo, toggleTodo, deleteTodo, filter, setFilter } = useTodo();
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
        if (input) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">TODO List</h1>
            <div className="flex flex-col sm:flex-row mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border rounded-full p-2 flex-grow mb-2 sm:mb-0 sm:mr-2"
                    placeholder="Masukkan deskripsi tugas"
                />
                <Button color="#0D92F4" onClick={handleAddTodo}>Tambah</Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-center items-center mb-4">
                <Button color="#F3C623" onClick={() => setFilter('all')}>Semua</Button>
                <Button color="#347928" onClick={() => setFilter('completed')}>Selesai</Button>
                <Button color="#EC8305" onClick={() => setFilter('not_completed')}>Belum Selesai</Button>
                <p className="text-sm font-semibold">Filter: {filter === "completed" ? "Selesai" : filter === "not_completed" ? "Belum Selesai" : "Semua"}</p>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li 
                        key={index} 
                        className="flex flex-col sm:flex-row justify-between items-center mb-2 py-4 px-6 border rounded shadow-sm"
                    >
                        <span>
                            {todo.description} ({todo.completed ? 'Selesai' : 'Belum Selesai'})
                        </span>
                        <div className="space-x-2 mt-2 sm:mt-0">
                            <Button color="#624E88" onClick={() => toggleTodo(index)}>
                                {todo.completed ? 'Belum Selesai' : 'Selesai'}
                            </Button>
                            <Button color="#B8001F" onClick={() => deleteTodo(index)}>Hapus</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;