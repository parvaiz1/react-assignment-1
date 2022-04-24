// var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
// let table = document.getElementById('table-data');

// $(function(){
//     let result = [];
//     $.ajax({
//         type: "GET",
//         url,
//         contentType: "application/json; charset=utf-8",
//         success: function(res){
//             // console.log('Response', res);
//             if(res){
//                 result = res;
//                 let getTabelRow = '';
//                 res.forEach((item,i) => {
//                     getTabelRow += `<tr class="data-row" id=${item.id}>
//                                 <td class="column1">${item.id}</td>
//                                 <td class="column2">${item.firstName}</td>
//                                 <td class="column3">${item.lastName}</td>
//                                 <td class="column4">${item.email}</td>
//                                 <td class="column5">${item.phone}</td>
//                             </tr>`;
//                 })
//                 $("#table-data table tbody").html(getTabelRow);

//                 createRow(res);
//             }else{
//                 $("#table-data table tbody").html('<p>Facing technical issue</p>');
//             }
//         },
//         error: function(err){
//             console.log('Error', err);
//             $("#table-data table tbody").html('<p>Facing technical issue</p>');
//         }
//     });

//     $("#search-box").keyup(function(){
//         let tableRow = '';
//         result.forEach((item, i) => {
//             let searchValue = item.firstName.toLowerCase();
//             if(searchValue.match(this.value.toLowerCase())){
//                 tableRow += `<tr class="data-row" id=${item.id}>
//                     <td class="column1">${item.id}</td>
//                     <td class="column2">${item.firstName}</td>
//                     <td class="column3">${item.lastName}</td>
//                     <td class="column4">${item.email}</td>
//                     <td class="column5">${item.phone}</td>
//                 </tr>`;
//             }
//             $("#table-data table tbody").html(tableRow);
//             createRow(result);
//         });
//     });

//     function createRow(res){
//         $("#table-data tbody tr").click(function(){
//             $("#table-data tbody tr.active").removeClass('active');
//             this.classList = 'active';
//             let getActiveRow = res.find(item => item.id == this.id);
//             console.log("getActiveRow", getActiveRow);
//             let detailHTML = `<div><b>User selected:</b> ${getActiveRow.firstName + ' ' + getActiveRow.lastName}</div>
//             <div>
//                 <b>Description: </b>
//                 <textarea cols="50" rows="5" readonly>
//                 ${getActiveRow.description}
//                 </textarea>
//             </div>
//             <div><b>Address:</b> ${getActiveRow.address.streetAddress}</div>
//             <div><b>City:</b> ${getActiveRow.address.city}</div>
//             <div><b>State:</b> ${getActiveRow.address.state}</div>
//             <div><b>Zip:</b> ${getActiveRow.address.zip}</div>`;
//             console.log("detailHTML", detailHTML);
//             $("#info-content").html(detailHTML).css({display: 'block'});
//         });
//     }
// })