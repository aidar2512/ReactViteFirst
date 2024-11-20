import React from 'react';

const PersonCard = () => {
    const [message, setMessage] = useState('');
    const [position, setPosition] = useState('Менеджер');
    const person = {
        name: "Айдар Айдар",
        position: "Менеджер",
        company: "Apple",
        age: 20,
        city: "Нью-Йорк",
        experience: "5 лет"
    };

    const handleClick = () => {
        setMessage('Сообщение: Должность изменена!');
        
        setPosition((prevPosition) => {
            if (prevPosition === 'Менеджер') {
                return 'Старший менеджер'; 
            } else if (prevPosition === 'Старший менеджер') {
                return 'Директор'; 
            } else {
                return prevPosition; 
            }
        });
    };

    return (
        <div>
            <h2>{person.name}</h2>
            <p>Должность: {person.position}</p>
            <p>Компания: {person.company}</p>
            <p>Возраст: {person.age}</p>
            <p>Город: {person.city}</p>
            <p>Опыт: {person.experience}</p>
            {message && <p>{message}</p>}
            <button onClick={handleClick}>Повысить в должности</button>
        </div>
    );
};

export default PersonCard;
