var mapContainer = document.getElementById('map1'), // 지도를 표시할 div 
		    mapOption = {
		        center: new kakao.maps.LatLng(37.5774399007191, 126.97717471211033), // 지도의 중심좌표
		        level: 5, // 지도의 확대 레벨
		        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
		    }; 

		// 지도를 생성한다 
		var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 지도에 마커를 생성하고 표시한다
		var marker = new kakao.maps.Marker({
		    position: new kakao.maps.LatLng(37.5774399007191, 126.97717471211033), // 마커의 좌표
		    map: map // 마커를 표시할 지도 객체
		});

        //========

        var mapContainer = document.getElementById('map2'), // 지도를 표시할 div 
		    mapOption = {
		        center: new kakao.maps.LatLng(37.56514, 126.97905), // 지도의 중심좌표
		        level: 5, // 지도의 확대 레벨
		        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
		    }; 

		// 지도를 생성한다 
		var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 지도에 마커를 생성하고 표시한다
		var marker = new kakao.maps.Marker({
		    position: new kakao.maps.LatLng(37.56682, 126.97865), // 마커의 좌표
		    map: map // 마커를 표시할 지도 객체
		});