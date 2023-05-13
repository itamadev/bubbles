import React, { useState, useEffect } from 'react';
import { Bubble } from '../components/Bubble';
import { Form } from '../components/Form';
import { HiPlus } from 'react-icons/hi';

const Dashboard: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const initialFormData = { name: '', language: 'golang' };
    const [bubbles, setBubbles] = useState([
        {
            name: 'Bubble 1',
            language: 'python',
            description: 'This is the description for Bubble 1.',
            imageUrl: 'https://source.unsplash.com/random/800x800',
            status: 'green',
            url: 'https://example.com',
        },
        {
            name: 'Bubble 2',
            language: 'golang',
            description: 'This is the description for Bubble 2.',
            imageUrl: 'https://source.unsplash.com/random/800x800',
            status: 'red',
            url: 'https://example.com',
        },
    ]);

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleSubmitForm = async (data: { name?: string; language?: any; description?: string; status?: string; url?: string; }) => {
        const response = await fetch('/api/bubbles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const newBubble = await response.json();
        setBubbles([...bubbles, newBubble]); // use the spread operator to create a new array with the added item
        handleCloseForm();
    };

    useEffect(() => {
        async function fetchBubbles() {
            const response = await fetch('/api/bubbles');
            const bubbles = await response.json();
            setBubbles(bubbles);
        }
        fetchBubbles();
    }, []);

    return (
        <div className="bg-gray-100 py-10 min-h-screen">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-4">Code Bubbles</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {bubbles.map((bubble, index) => (
                        <Bubble key={index} {...bubble} />
                    ))}
                </div>
            </div>
            <button className="fixed bottom-4 right-4 bg-teal-500 text-white rounded-full p-4 hover:bg-teal-800 transition-all duration-300"
                onClick={() => setShowForm(true)}>
                <HiPlus size={24} />
            </button>
            {showForm && (
                <div className="absolute top-0 left-0 h-full w-full bg-gray-500 bg-opacity-50 z-20 flex items-center justify-center">
                    <Form initialData={initialFormData} onSubmit={handleSubmitForm} onCancel={handleCloseForm} />
                </div>
            )}
        </div>
    );
};

export default Dashboard;
