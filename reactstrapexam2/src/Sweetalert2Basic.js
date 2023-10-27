import { Button } from 'reactstrap';
import Swal from 'sweetalert2';
function Sweetalert2Basic(){
    const deleteAlert = ()=>{
        Swal.fire({
            title:"정말삭제하시겠습니까",
            icon:"question",
            showCancelButton:true,
            confirmButtonText:'넹',
            cancelButtonText:'넹니오',
            timer: 1000,
            timerProgressBar:true
        }).then((res)=>{
            if(res.value){
                document.getElementById("deleteID").remove();
                Swal.fire('Deleted','삭제완료','success')
            }
        }

        )
        
    }
    const  confirm = ()=> {
        Swal.fire("삭제했습니다.").then(result=>{console.log(result.value);
        })
    }

    return(
        <div>
            <Button onClick={deleteAlert}>삭제</Button>
            <h1 id='deleteID'> 삭제대상</h1>
        </div>
    )
}
export default Sweetalert2Basic;