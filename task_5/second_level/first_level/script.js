<script>
function click1() {
    let quantity = document.getElementsByName("cost")[0].value;
    
    let productPrice = document.querySelector('select[name="product"]').value;

    let totalPrice = quantity * productPrice;

    document.getElementById("result").innerHTML = totalPrice + " р.";

    return false;
}
</script>
