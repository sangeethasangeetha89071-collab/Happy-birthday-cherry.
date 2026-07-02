const btn = document.getElementById("generateBtn");
const status = document.getElementById("status");

btn.onclick = async () => {

    status.innerHTML = "Generating Video... Please Wait ⏳";

    try{

        const response = await fetch("http://localhost:5000/generate-video",{
            method:"POST"
        });

        if(!response.ok){
            throw new Error("Generation failed");
        }

        const blob = await response.blob();

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;

        a.download = "CherryBirthday.mp4";

        a.click();

        status.innerHTML = "✅ Video Generated Successfully";

    }
    catch(err){

        console.log(err);

        status.innerHTML = "❌ Error Generating Video";

    }

};