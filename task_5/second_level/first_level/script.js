function click1() {
    let quantity = document.getElementById("cost").value; 
    
    let productPrice = document.querySelector('select[name="product"]').value; 

    let totalPrice = quantity * productPrice; 

    document.getElementById("result").innerHTML = totalPrice + " р."; 

    return false; 
}
