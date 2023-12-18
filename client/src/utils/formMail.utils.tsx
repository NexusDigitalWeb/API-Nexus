import { mail } from "@/components/fomr-mail/form.interfaces";

export const sendEmail = async (email: string) => {
    try {
        console.log(email);
        
        const response = await fetch(
            `https://nexus-qh2b.onrender.com/emails/send-email`,
            {
                method: "POST",
                body: JSON.stringify({email}),
                headers: {
                    "Content-Type": `application/json`,
                }
            }
        )

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            return data
        } else {
            throw new Error(data.msg);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export default sendEmail
