function hello(id){
				
				
				var fruit=['Hà Nguyên Anh','Nguyễn Thị Huế','Thắng 2','Thắng','Tiến','Anh Tiến','Việt Tùng','Dự','Tiệp','Chị Thùy','Huy Bean','Đình Nam','Phong','Tiến Lùi','Ngọc Tú','Huy Anh','Khôi','2'];
				for (let i = 0; i < fruit.length; i++) {
					if ($('#hihi'+id).html()==fruit[i]) {
					$('#album-view').append('<img id="huy" src="image/'+fruit[i]+'.jpg"/>');
					break;
					}
				}
				
				$('img').each(function(index){
					$(this).click(function(){
							$('#modal-view').append('<img src="'+$(this).attr('src')+'"/>').removeClass('hidden').html();
							$('#album-view').html('');
							
							
					});
				});	
				$('#modal-view').click(function(){
					$(this).addClass('hidden');
					$(this).html('')
				});

			};
