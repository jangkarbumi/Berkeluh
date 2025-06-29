const input = document.querySelector('.input');
const boxKeluhan = document.querySelector('.container-box');
const keyStorage = "DATA_APP";

function saveData() {
    const items = [];
    for(let i=0;i<boxKeluhan.children.length;i++) {
        items.push(boxKeluhan.children[i].textContent);
    }
    localStorage.setItem(keyStorage, JSON.stringify(items));
}

function loadData() {
    const dataKeluhan = localStorage.getItem(keyStorage);
    if(dataKeluhan) {
        const itemKeluhan = JSON.parse(dataKeluhan);
        for(let i = 0; i < itemKeluhan.length; i++) {
            const isiKeluhan = document.createElement('div');
            isiKeluhan.classList.add('isi');
            isiKeluhan.textContent = itemKeluhan[i];
            boxKeluhan.appendChild(isiKeluhan);
        }
    }
}

function tambahKeluhan() {
    if(input.value !== "") {
        const isiKeluhan = document.createElement('div');
        isiKeluhan.classList.add('isi');
        isiKeluhan.textContent = input.value;
        boxKeluhan.appendChild(isiKeluhan);
        input.value = "";
        saveData()
    }
}

function hapusKeluhan(event) {
    if(event.target.classList.contains('isi')) {
        event.target.remove();
        saveData();
    }
}


loadData()
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        tambahKeluhan();
    }
});

boxKeluhan.addEventListener('dblclick', hapusKeluhan);