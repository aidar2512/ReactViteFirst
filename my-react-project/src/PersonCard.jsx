import React from 'react';

const PersonCard = () => {
    const person = {
        name: "Айдар Айдар",
        position: "Менеджер",
        company: "Apple",
        age: 20,
        city: "Нью-Йорк",
        experience: "5 лет"
    };

    const handleClick = () => {
        setMessage('Сообщение: Вы нажали кнопку!');
    };

    return (
        <div>
            <h2>{person.name}</h2>
            <p>Должность: {person.position}</p>
            <p>Компания: {person.company}</p>
            <p>Возраст: {person.age}</p>
            <p>Город: {person.city}</p>
            <p>Опыт: {person.experience}</p>
            <button onClick={handleClick}>Кнопка</button>
        </div>
    );
};

export default PersonCard;
