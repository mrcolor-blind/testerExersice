async function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const url = `http://localhost:8080/add?num1=${num1}&num2=${num2}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const res = await response.json();
        document.getElementById("result").innerText = "Result: " + res.result;

    } catch (error) {
        console.error(error.message);
    }

}

async function subs() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const url = `http://localhost:8080/sub?num1=${num1}&num2=${num2}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const res = await response.json();
        document.getElementById("result").innerText = "Result: " + res.result;

    } catch (error) {
        console.error(error.message);
    }
}

function resetFields(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    //document.getElementById("operator").value = "+";
    document.getElementById("result").innerText = "Result: ";

}
