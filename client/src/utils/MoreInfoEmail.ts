const getMoreInfo = async (email: string) => {
  try {
    const response = await fetch(
      "https://nexus-qh2b.onrender.com/emails/send-email",
      {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getMoreInfo;
