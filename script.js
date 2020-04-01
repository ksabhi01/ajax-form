$(document).ready(function(){
			$("#submit-button").click(function(){
				$.ajax({
					url: "https://reqres.in/api/users",
					type : "POST",
					data: {
						name: $("#name").val(),
						email: $("#email").val(),
						passwordd: $("#pswd").val(),
					},
					
					success: function(response){
						console.log(response);
						$("#result").html("Thank You  "+response.name +"  For Submission"+ "<br>" + response.email+"<br>"+response.passwordd);
						$("#input-form").css({
						'display': 'none',
					});
					$("#result").css({
							'display':'block',
						});
					}
				});
				});
			});