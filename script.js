// Products
function buyAction(){
    confirmation = confirm("Comprar produto ?")
    if(confirmation == true){
        alert("Compra efetuada com sucesso!")
    } else{
        alert("Compra cancelada!")
    }
}