// Hide all elements with class="containerTab" excepl one matching clickable grid column
function openTab(B1) {

    var i, X;
     X = document.getElementsByClassName("containerTab");

     for (i = 0; i < X.length; i++){
         X[i].getElementsByClassName.display = "none";
     }
     document.getElementById(tabName).style.display = "block"
}