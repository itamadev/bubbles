import React, { useRef, useEffect, useState } from 'react';

interface FormProps {
    initialData: {};
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

export const Form: React.FC<FormProps> = ({ initialData, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState(initialData);
    const formRef = useRef<HTMLFormElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);


    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // prevent default form submission behavior
        onSubmit(formData);
    };

    const handleCloseForm = () => {
        onCancel();
    };

    const handleInputChange = (event: { target: { id: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    };


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                onCancel();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onCancel]);


    return (
        <div ref={wrapperRef} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-100 py-4 px-6">
                <h2 className="text-lg font-bold">Add Code Bubble</h2>
            </div>
            <form className="p-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter Name"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="status">
                        Language
                    </label>
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="language"
                        onChange={handleInputChange}
                    >
                        <option value="golang">Golang</option>
                        <option value="python">Python</option>
                    </select>
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-2 rounded"
                        onClick={handleCloseForm}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
