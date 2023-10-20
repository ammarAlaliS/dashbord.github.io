const btn = document.getElementById("btn");
const sidebar = document.getElementById('sidebar');

export function inicializarBoton() {
    let isClosed = true;  

    if (btn) {
        btn.addEventListener('click', () => {
            isClosed = !isClosed;

            if (isClosed) {
                sidebar.classList.add('close');
            } else {
                sidebar.classList.remove('close');
            }
        });
    } else {
        console.error("No se encontró el botón con el ID 'btn'");
    }
}

inicializarBoton();
