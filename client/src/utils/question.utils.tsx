export const getQuestions = async () => {
    try {
        const response = await fetch('https://nexus-qh2b.onrender.com/questions')
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log("Error question fetch:", error);
    }
}