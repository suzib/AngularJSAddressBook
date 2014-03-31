 $(document).ready(function() {

	$('.contact-list').on('click', '.edit', function() {
		var $this = $(this);
		editKey = $this.parents('.person').attr('data-key');
		$('.contact-details-' + editKey).addClass('hide');
		$('.edit-contact-' + editKey).removeClass('hide');
	});

	$('.contact-list').on('click', '.save', function() {
		var $this = $(this);
		editKey = $this.parents('.person').attr('data-key');
		$('.contact-details-' + editKey).removeClass('hide');
		$('.edit-contact-' + editKey).addClass('hide');
	});
  
 });
