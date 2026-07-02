async function submitPasscode() {
    try {
        // Pointing directly to the server's backend IP address
        const response = await fetch('http://127.0.0.1:5000/api/verify-passcode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ passcode: inputCode })
        });
        
        if (!response.ok) {
            const data = await response.json();
            alert(data.message || "Incorrect Passcode!");
            resetPasscode();
            return;
        }

        const data = await response.json();
        if (data.success) {
            changeScreen('screen-lock', data.nextScreen);
        }
    } catch (err) {
        alert("Connection bridge failed! Please ensure your Node terminal is still active and running.");
        resetPasscode();
    }
}