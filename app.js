async function sendLocationData() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            const locationData = {
                latitude,
                longitude,
                email: "ykkumawat2022@gmail.com",
            };

            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(locationData),
                });

                if (response.ok) {
                    console.log("Location data sent successfully!");
                } else {
                    console.error("Failed to send location data.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

sendLocationData();
