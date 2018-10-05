$(document).ready(function(){
	console.log('Hi from ajax')

	$('#edit-sight').submit(function(e){
		e.preventDefault();

		console.log('This is just before the ajax call')
		$.ajax({
			url:$(this).attr('action'),
			method: 'PUT',
			data: formData
		}).done(function(res){
			console.log('success', res)
			window.location = '/profile/pastsight'
		}).fail(function(err){
			console.log('error', err)
		})
	})

})