    let btn = document.querySelector("#btn"); 
    let sidebar = document.querySelector(".slidebar");
    let container = document.querySelector('.container');
    btn.onclick = function() {
        sidebar.classList.toggle("active");
        container.classList.toggle('large-container');
    }
