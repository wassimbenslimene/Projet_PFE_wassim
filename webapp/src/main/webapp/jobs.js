
  $(document).ready(function() {
      $(".btn-ajax").click(function(){
          $button = $(this);
          if(typeof $button.data("action") !== undefined){
            $.get("/ajax?action=" + $button.data("action"), function(data){
                $button.find("span")
                .attr("title", data)
                .tooltip('_fixTitle')
				        .tooltip('show');
                setTimeout(function(){
                  $button.find("span")
                  .attr('title', '')
                  .attr("data-original-title", '')
				          .tooltip('hide');
                }, 3000);
                
            });
          }
      });
  });
