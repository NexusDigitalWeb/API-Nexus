export const getQuestions = async () => {
    try {
        const response = await fetch('https://nexusdigitalservices.fly.dev/questions')
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log("Error question fetch:", error);
    }
}