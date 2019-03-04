function search() {

   $("#towns li").css('font-weight','normal');

   let searchVal = $('#searchText').val();
 
   let towns = $(`#towns li:contains(${searchVal})`).css('font-weight', 'bold');

   let count = towns.length;

   $('#result').text(`${count} matches found.`);
   
}