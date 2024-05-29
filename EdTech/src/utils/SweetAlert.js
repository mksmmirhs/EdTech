import Swal from "sweetalert2";

function SweetAlert(message, icon) {
  Swal.fire({
    icon,
    text: message,
  });
}

export default SweetAlert;
