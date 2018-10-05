$(document).ready(function(){
	console.log('Hi from ajax')

	$('#add-940').submit(function(e){
		e.preventDefault();

        console.log('This is just before the ajax call')
        var url = $(this).attr('action')
        console.log("URL:",url)
		$.ajax({
			url:$(this).attr('action'),
			method: 'PUT',
			data: $(this).serialize()
		}).done(function(res){
            console.log('success', res)
            window.location.href = "/profile/measure-i1631"
		}).fail(function(err){
			console.log('error', err)
		})
    })
    
    $('#add-1631').submit(function(e){
		e.preventDefault();

        console.log('This is just before the ajax call')
        var url = $(this).attr('action')
        console.log("URL:",url)
		$.ajax({
			url:$(this).attr('action'),
			method: 'PUT',
			data: $(this).serialize()
		}).done(function(res){
            console.log('success', res)
            window.location.href = "/profile/measure-i1634"
		}).fail(function(err){
			console.log('error', err)
		})
    })
    
    $('#add-1634').submit(function(e){
		e.preventDefault();

        console.log('This is just before the ajax call')
        var url = $(this).attr('action')
        console.log("URL:",url)
		$.ajax({
			url:$(this).attr('action'),
			method: 'PUT',
			data: $(this).serialize()
		}).done(function(res){
            console.log('success', res)
            window.location.href = "/profile/measure-i1639"
		}).fail(function(err){
			console.log('error', err)
		})
    })
    
    $('#add-1639').submit(function(e){
		e.preventDefault();

        console.log('This is just before the ajax call')
        var url = $(this).attr('action')
        console.log("URL:",url)
		$.ajax({
			url:$(this).attr('action'),
			method: 'PUT',
			data: $(this).serialize()
		}).done(function(res){
            console.log('success', res)
            window.location.href = "/profile/measure-av19"
		}).fail(function(err){
			console.log('error', err)
		})
    })
    
    $('#add-19').submit(function(e){
		e.preventDefault();

        console.log('This is just before the ajax call')
        var url = $(this).attr('action')
        console.log("URL:",url)
		$.ajax({
			url:$(this).attr('action'),
			method: 'PUT',
			data: $(this).serialize()
		}).done(function(res){
            console.log('success', res)
            window.location.href = "/profile/final"
		}).fail(function(err){
			console.log('error', err)
		})
	})

})