import Swal from "sweetalert2"

export const Welcome = () => {
    Swal.fire({
        title: 'Bienvenido a WIOR Insumos Hospitalarios',
        timer: 1500,
        showConfirmButton: false
    })
}