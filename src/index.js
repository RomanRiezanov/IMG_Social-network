import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const dialogs = [
  { id: 1, name: 'Irina Pchelnikova', status: 'online' },
  { id: 2, name: 'Oleg Motyka', status: 'online' },
  { id: 3, name: 'Vadim Tkachenko', status: 'online' },
  { id: 4, name: 'Anatolii Kozina', status: 'online' },
  { id: 5, name: 'Artur Nebotov', status: 'online' },
  { id: 6, name: 'Vladislav Nazarenko', status: 'online' },
  { id: 7, name: 'Andrey Tkachenko', status: 'online' },
  { id: 8, name: 'Nikita Tovstiy', status: 'online' },
];

export const messagesData = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Yo!' },
];

export const postsData = [
  { id: 1, message: 'Hi, how are you?', likes: 7 },
  { id: 2, message: "It's my first post", likes: 11 },
  { id: 3, message: "What's up guys", likes: 25 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
