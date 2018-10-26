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
    methods: {
      addNote: function() {
        var self = this;
        var payload = {
          title: 'Only Natural Pet® EasyDefense™ Flea & Tick Pet Wipes',
          description: 'Wipes'
        };
        axios.post('/api/notes', payload)
          .then(function(res) {
            self.notes = res.data;
            self.clear();
            // self.notes.push({
            //   id: 99,
            //   title: self.title,
            //   description: self.description
            // });
          })
          .catch(function(err) {
          });
      }
    }
  });
  console.log(ubVue);
})();