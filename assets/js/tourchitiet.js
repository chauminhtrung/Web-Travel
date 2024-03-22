app.controller("tourCtrl", function ($scope, $routeParams) 
{
 $scope.id = $routeParams.id;
 $scope.tourct = $scope.$parent.cards.find(item => item.Src ===  $scope.id);


 $scope.add2 = function() {
  if($scope.$parent.check == false) {
    Swal.fire({
      title: "Không Thành Công!",
      text: "bạn cần phải đăng nhập !!!!",
      icon: "error"
    });
  }
  else {
    let index2 = $scope.$parent.carditems.findIndex(item => item.Name ===   $scope.tourct.Name);
    if(index2 == -1 ) {
      $scope.$parent.carditems.push($scope.tourct);
      for (let index = 0; index <  $scope.$parent.carditems.length; index++) { 
        $scope.$parent.Tongtien+=$scope.$parent.carditems[index].Price*$scope.$parent.carditems[index].Sl;
      }
      document.getElementById("badgeCount").textContent =
      $scope.$parent.carditems.length;
      Swal.fire({
          title: "Thành Công!",
          text: "bạn đã thêm tour thành công!",
          icon: "success"
        });
    }
    else {
      $scope.$parent.carditems[index2].Sl++;
      for (let index = 0; index <  $scope.carditems.length; index++) { 
        $scope.$parent.Tongtien+=$scope.$parent.carditems[index].Price*$scope.$parent.carditems[index].Sl;
      }
      Swal.fire({
        title: "Thành Công!",
        text: "bạn đã có tour "+ $scope.tourct.Name  + " trong giỏ hàng!",
        icon: "success"
      });
    }

  }

 
  }

 
  

//   for (let index = 0; index <  $scope.$parent.carditems.length; index++) {
//     $scope.$parent.Tongtien+=$scope.$parent.carditems[index].Price;
//     if($scope.tourct.Name === $scope.$parent.carditems[index].Name ) {
//       Swal.fire({
//         title: "Chú Ý!",
//         text: "Sản phầm này đã có trong giỏ hàng của bạn!",
//         icon: "error"
//       });
//       break;
//     }
//     else {
//       $scope.$parent.carditems.push($scope.tourct);
//       document.getElementById("badgeCount").textContent =
//       $scope.$parent.carditems.length;
//       Swal.fire({
//           title: "Thành Công!",
//           text: "bạn đã thêm tour thành công!",
//           icon: "success"
//         });
//       break;
//     }
   
//  }



});
