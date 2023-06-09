import Swal from "sweetalert2"

export default class AlertService{

    toastAlert(state:string){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: state==="success"?"success":"error",
            title: state==="success"? 'Added in successfully':"Bir hata oluştu"
          })
    }


}