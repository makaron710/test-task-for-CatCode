$(document).ready(function () {
  $("#address").suggestions({
    token: "6396be27c6bcd0808d12d1f6036736ef40250441",
    type: "ADDRESS",
    onSelect: function(suggestion) {
        console.log(suggestion);
    }
  });
})