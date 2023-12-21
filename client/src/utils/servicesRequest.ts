export const getServices = async () => {
    try {
        const response = await fetch('https://nexus-qh2b.onrender.com/services');
        const data = await response.json();

        if (response.status === 404) return data.error.message;
        if (response.ok) return data.services;
    } catch (error) {
        console.error(error);
    }
};

export const getServiceById = async (id: string | string[]) => {
    try {
        const response = await fetch(`https://nexus-qh2b.onrender.com/services/${id}`);
        const data = await response.json();
        
        if (response.status === 404) return data.error.message;
        if (response.ok) return data.service;
    } catch (error) {
        console.error(error);
    }
};