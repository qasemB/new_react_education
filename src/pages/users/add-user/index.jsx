import { useState } from 'react';

export default function AddUserPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the data to an API
        alert('User added successfully!');
        // Clear form
        setFormData({ name: '', email: '', phone: '', website: '' });
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">افزودن کاربر</h1>
            
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">نام</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="نام خود را وارد کنید"
                    />
                </div>
                
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">ایمیل</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="ایمیل خود را وارد کنید"
                    />
                </div>
                
                <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">شماره موبایل</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="شماره موبایل خود را وارد کنید"
                    />
                </div>
                
                <div className="mb-8">
                    <label htmlFor="website" className="block text-gray-700 font-medium mb-2">وب سایت</label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="وبساید خود را وارد کنید"
                    />
                </div>
                
                <div className="flex justify-center">
                    <button 
                        type="submit" 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md"
                    >
                       ثبت
                    </button>
                </div>
            </form>
        </div>
    );
}