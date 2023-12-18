const getServices = async () => {
    try {
        const response = await fetch('https://nexus-qh2b.onrender.com/services');
        const data = await response.json();

        if (response.status === 404) return data.error.message;
        if (response.ok) return data.services;
    } catch (error) {
        console.error(error);
    }
};

export default getServices;