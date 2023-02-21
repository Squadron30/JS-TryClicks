let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function clickhere(){
	count += 1
	countEl.innerText = count
}

function save(){
	let countstr = count + " - "
	saveEl.textContent += countstr
	countEl.textcontent = 0
	count = 0
}
