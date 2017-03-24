'use strict';

var SimplePaginateMixin =
  {


       getInitialState: function() {
           return {
             _page: 0
           }
       },

      paginate: function(data, perPage, _page)
       {

           // if we got no data -> return empty array
            if(data.length < 1) return null;
  
           // define the start
            var start = (_page * perPage);
            var end = start + perPage;

           // only get the last data in there
            var retArr = data.slice(start, end);

           // return the array
            return retArr;

       },


      onPageSelect: function(_page, clickEvent)
       {

           // change _page state
            this.setState({ _page: _page });

       }



 };


module.exports = SimplePaginateMixin;
