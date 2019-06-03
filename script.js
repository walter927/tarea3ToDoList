$(document).ready(function(){
	$("#agregar").click(function(){
		agregarTarea();
	});
	function agregarTarea(){
		var hora = new Date().getTime();
		var texto= $("#input").val();
		$("#tareas").append(""+
			"<li id='"+hora+"'><span class=\'dropper\' data-id='"+hora+"'>"+texto+"</span></li>");
		$("#input").val('');
	}
	$(document).on('click','.dropper',function(){
		var id = $(this).attr('data-id');
		$("#"+id).remove();
	});
});