(function() {
  var ubVue = new Vue({
    el: '#ubVue',
    data: {
      title: 'Only Natural Pet® EasyDefense™ Flea & Tick Pet Wipes',
      description: 'Wipes',
      notes: []
    },
    created: function() {
      var self = this;
      axios.get('http://localhost:3300/api/notes')
        .then(function(res) {
          self.notes = res.data;
        })
        .catch(function(err) {
          self.notes = [];
        });
    },
  });
  console.log(ubVue);
})();