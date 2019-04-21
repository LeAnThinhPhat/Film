$(document).ready(function () {
    setTimeout(()=>{
        $('#search').keyup(()=>myFunction())})
    },2000)
   
function myFunction() {
    $("td").remove();
    $("tr").remove();
    var find = $('#search').val();
    console.log(find);
    $.getJSON('https://api.fimplus.io/cm/hd1/v1/search/' + find, (data) => {
        console.log(data);
        var table = $("#table");
        var x = 0;// make easy to put id for table row in id posterx and namex
        for (let i = 0; i < data.results.length; i++) {
            var poster = data.results[i].poster;
            var name = data.results[i].knownAs;
            // each row have four film
            if ((i % 4) == 0) {     //create the first film of the row
                table.append(`<tr id="poster${x}"> <td> <img id="${i}" class="poster"></td></tr>`);
                table.append(`<tr id="name${x}" class="nameSearch"><td>` + name + "</td></tr>");
                x++;
            } else
                if ((i % 4) < 4) {//create the others film of the row
                    let rowPoster = $(`#poster${x - 1}`);
                    let rowName = $(`#name${x - 1}`);
                    rowPoster.append(`<td> <img id="${i}" class="poster"></td>`);
                    rowName.append("<td>" + name + "</td>");
                }
            // add img to id="i"
            $("#" + i).attr('src', poster)

            console.log(poster);
            console.log(name);
        }
    })
};
