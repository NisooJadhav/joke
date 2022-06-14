const url = "https://icanhazdadjoke.com/"
const text = document.querySelector("p")

document.querySelector("button").addEventListener('click', () => {
    fetchJoke();
});

const fetchJoke = async () => {
    text.innerText = "loading..."
    try {
        const res = await fetch(url, {
            headers: {
                Accept: 'application/json',
            }
        })

        if (!res.ok) {
            throw new Error('error')
        }
        const data = await res.json()
        text.innerHTML=data.joke;
    }
    catch (e) {
        console.error(e.message)
        text.innerHTML = "something went wrong..."
    }
}