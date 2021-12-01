var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 6) {
        counter = 1;
    }
}, 3000);

const note = document.querySelectorAll('.info-panel a')
const navLink = document.querySelectorAll('.info')
var makeActive;
for (let i = 0; i < note.length; i++) {
    note[i].addEventListener('mouseenter', function () {
        note[i].style.fontWeight = '700'
    })
    note[i].addEventListener('mouseleave', function () {
        note[i].style.fontWeight = ''
    })

    note[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });

}

// {/* <script type="text/javascript">
//     function copy_text() {
//         document.getElementById("pilih").select();
//         document.execCommand("copy");
//         alert("Text berhasil dicopy");
//     }
// </script> */}

function kirim(){
    var email = document.forms['dataucapan']['email'].value;
    var ucapan = document.forms['dataucapan']['ucapan'].value;        
                                            
    var tabel = document.getElementById("databel");
    var baris = tabel.insertRow(1);
    var kol1 = baris.insertCell(0);
    var kol2 = baris.insertCell(1);
            
    kol1.innerHTML = email;
    kol2.innerHTML = ucapan;
   }