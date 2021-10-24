const bubble = document.getElementById("bubble")
const cat = document.getElementById("cat")
const reload = document.getElementById("reload")
const gifs = [
            "source/images/gati-100.gif", "source/images/gati-yass.gif", 
            "source/images/gati-great.gif", "source/images/gati-win.gif", 
            "source/images/gati-awe.gif", "source/images/gati-wow.gif"]

window.addEventListener("load", function() {
    const loader = this.document.getElementById("loader")
    loader.className += " hidden"
})

reload.addEventListener("click", function() {
    window.location.reload();
})

fetch("https://opensheet.vercel.app/124kEA4HsZhu5nAV9xQ1iq-0ob9GqFwHU72JYHDSlY2o/shoutout")
.then(res => res.json())
.then(data => { 
    console.log(data)
    const randomShout = data[Math.floor(Math.random()*data.length)];
    const randomCat = gifs[Math.floor(Math.random()*gifs.length)]
    console.log(randomShout)
    bubble.style.backgroundColor = `${randomShout.backgroundcolor}`
    //bubble.style.borderColor = `${randomShout.color}`
    bubble.style.color = `${randomShout.color}`
    bubble.innerHTML = `
    <div>${randomShout.text}</div>
    `
    cat.innerHTML = `
    <img src="${randomCat}" class="cat" alt="animated cat illustration celebrating"/>
    `
})
