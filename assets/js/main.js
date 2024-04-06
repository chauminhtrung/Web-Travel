function myfunc($scope, $http) {
  $scope.cards = [];
  $scope.carditems = [];
  $scope.usernameeee = "a";
  $scope.Item = [];
  $scope.begin = 0;
  $scope.check =  false;
  $scope.login = [{Username:"minhtrungchau123@gmail.com",Password:"123"},{Username:"minhtrungchau@gmail.com",Password:"123"}];
  $scope.Regisuer = [];
  $scope.User={};

      $scope.pagecount = Math.ceil($scope.cards.length / 4);
          $scope.first = function () {
            $scope.begin = 0;
          };
          $scope.pre = function () {
            if ($scope.begin > 0) {
              $scope.begin -= 4;
            }
          };
          $scope.next = function () {
          
              $scope.begin += 4;
            
          };
          $scope.last = function () {
            $scope.begin = ($scope.pagecount - 1) * 4;
          };



  $scope.Hosocanhan = function() {
    $scope.usernamecn = $scope.User.Username;
    $scope.passwordcn = $scope.User.Password;
  }

  $scope.forgotpass = function() {
    $scope.usernameforgot = $scope.User.Username;
    $scope.passwordold = $scope.User.Password;

  }

  $scope.index = -1;
  
  $scope.Regis = function() {
    let username = document.getElementById("email").value
    let password = document.getElementById("password").value
    let password2 = document.getElementById("password2").value

    if(username == "" || password == "" || password2 == "") {
      Swal.fire({     
        title: "bạn đã đăng nhập không thành công!",
        text: "Không được để trống các trường dữ liệu!",
        icon: "error",
      });
      return;
    }

    if(password != password2) {
      Swal.fire({     
        title: "bạn đã đăng nhập không thành công!",
        text: "Password1 và Password2 không giống!",
        icon: "error",
      });
      return;
    }
    else {

      Swal.fire({
        title: "Thành Công!",
        text: "bạn đã đăng ký thành công!",
        icon: "success"
      });
      let a = document.getElementById("RegisD");
      a.setAttribute("href", "#!regissucc");
      $scope.login.push($scope.Regisuer)

    }

  }


  $scope.fogot = function() { 
    let usernameforgot = document.getElementById("usernameforgot").value;
    let passwordforgot = document.getElementById("passwordforgot").value;
    let passwordforgot2 = document.getElementById("passwordforgot2").value;
    console.log(usernameforgot + " " + passwordforgot + " " +passwordforgot2 );
    if(usernameforgot == "" || passwordforgot == "" || passwordforgot2 == "") {
      Swal.fire({     
        title: "không thành công!",
        text: "Không được để trống các trường dữ liệu!",
        icon: "error",
      });
      return;
    }

    if(passwordforgot != passwordforgot2) {
      Swal.fire({     
        title: "không thành công!",
        text: "Password1 và Password2 không giống!",
        icon: "error",
      });
      return;
    }
    else {
      for (let index = 0; index <= $scope.login.length; index++) {
        if( $scope.login[index].Username == usernameforgot) {
          Swal.fire({
            title: "Thành Công!",
            text: "bạn đã tái tạo thành công!",
            icon: "success"
          });
          $scope.login[index].Password = passwordforgot;
            break;
        }
        else {
          Swal.fire({     
            title: "không thành công!",
            text: "Không thể tìm thấy tên đăng nhập !!!",
            icon: "error",
          });
        }
      }
    

  }
}





  $scope.Dangxuat = function() {
    $scope.check =  false;
    let a = document.getElementById("LoginD");
    let btnLogin = document.getElementById("btnLogin");
    let btnRegis = document.getElementById("btnRegis");
    let btnlogout = document.getElementById("btnlogout");
    let Nameuser = document.getElementById("Nameuser");
    
    btnLogin.classList.remove("visually-hidden");
    btnRegis.classList.remove("visually-hidden");
    btnlogout.classList.add("visually-hidden");
    Nameuser.classList.add("visually-hidden");
    Swal.fire({
      title: "Thành Công!",
      text: "bạn đã đăng xuất thành công!",
      icon: "success"
    });
  }
  $scope.Login = function() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
 
    for (let index = 0; index < $scope.login.length; index++) {
        if( $scope.login[index].Username == username && $scope.login[index].Password ==  password ) {
          $scope.User = $scope.login[index];
          Swal.fire({
            title: "Thành Công!",
            text: "bạn đã đăng nhập thành công!",
            icon: "success"
          });
          let a = document.getElementById("LoginD");
          let btnLogin = document.getElementById("btnLogin");
          let btnRegis = document.getElementById("btnRegis");
          let btnlogout = document.getElementById("btnlogout");
          let Nameuser = document.getElementById("Nameuser");
          
          Nameuser.classList.remove("visually-hidden");
          btnLogin.classList.add("visually-hidden");
          btnRegis.classList.add("visually-hidden");
          btnlogout.classList.remove("visually-hidden");
          
          a.setAttribute("href", "#!loginsucc");
          $scope.check =  true;
          break;
        }
        else {
          Swal.fire({
            icon: "error",
            title: "bạn đã đăng nhập không thành công!",
            text: "Có thể, Password hoặc Username không đúng!",
          });
        
        }
      
    }
  }
  $scope.Tongtien = 0;
  $scope.add = function (index) {
    if($scope.check == false) {
      Swal.fire({
        title: "Không Thành Công!",
        text: "bạn cần phải đăng nhập !!!!",
        icon: "error"
      });
    }
    else {
      $scope.index = index;
      $scope.Tongtien = 0;
      $scope.Item = angular.copy($scope.cards[$scope.index]);
  
      let index2 = $scope.carditems.findIndex(item => item.Name ===  $scope.Item.Name);
      if(index2 == -1 ) {
        $scope.carditems.push($scope.Item);
        for (let index = 0; index <  $scope.carditems.length; index++) { 
          $scope.Tongtien+=$scope.carditems[index].Price*$scope.carditems[index].Sl;
        }
        document.getElementById("badgeCount").textContent =
        $scope.carditems.length;
        Swal.fire({
            title: "Thành Công!",
            text: "bạn đã thêm tour thành công!",
            icon: "success"
          });
      }
      else {
        $scope.carditems[index2].Sl++;
        for (let index = 0; index <  $scope.carditems.length; index++) { 
          $scope.Tongtien+=$scope.carditems[index].Price*$scope.carditems[index].Sl;
        }
        Swal.fire({
          title: "Thành Công!",
          text: "bạn đã có tour "+ $scope.Item.Name  + " trong giỏ hàng!",
          icon: "success"
        });
      }
    }
  };

  $scope.Remove = function(indexrm) {
    $scope.indexrm = indexrm;
    $scope.carditems.splice($scope.indexrm, 1);
    let a =  $scope.carditems.length;
    document.getElementById("badgeCount").textContent = a;
    Swal.fire({
      title: "Thành Công!",
      text: "bạn đã xóa tour thành công!",
      icon: "success"
    });
    $scope.Tongtien = 0;
    for (let index = 0; index <  $scope.carditems.length; index++) {
      $scope.Tongtien+=$scope.carditems[index].Price*$scope.carditems[index].Sl;
       
      
    }

    if( a == 0) {
      document.getElementById("badgeCount").textContent = "";
    }
  
  }

  $http.get("tours.json").then(function (response) {
    $scope.cards = response.data;

    $scope.MienBac = function () {
      $scope.cards = response.data;
      let cardmienbac = [];
      for (let index = 0; index < $scope.cards.length; index++) {
        if ($scope.cards[index].Loca === "MienBac") {
          cardmienbac.push($scope.cards[index]);
        }
      }
      $scope.cards = cardmienbac;
    };

    $scope.prop = "";

    $scope.MienTay = function () {
      $scope.cards = response.data;
      let cardmientay = [];
      for (let index = 0; index < $scope.cards.length; index++) {
        if ($scope.cards[index].Loca === "MienTay") {
          cardmientay.push($scope.cards[index]);
        }
      }
      $scope.cards = cardmientay;
    };

    $scope.MienNam = function () {
      $scope.cards = response.data;
      let cardmiennam = [];
      for (let index = 0; index < $scope.cards.length; index++) {
        if ($scope.cards[index].Loca === "MienNam") {
          cardmiennam.push($scope.cards[index]);
        }
      }
      $scope.cards = cardmiennam;
    };

    $scope.MienTrung = function () {
      $scope.cards = response.data;
      let cardMienTrung = [];
      for (let index = 0; index < $scope.cards.length; index++) {
        if ($scope.cards[index].Loca === "MienTrung") {
          cardMienTrung.push($scope.cards[index]);
        }
      }
      $scope.cards = cardMienTrung;
    };

    $scope.ChauA = function () {
      $scope.cards = response.data;
      let cardChauA = [];
      for (let index = 0; index < $scope.cards.length; index++) {
        if ($scope.cards[index].Loca === "ChauA") {
          cardChauA.push($scope.cards[index]);
        }
      }
      $scope.cards = cardChauA;
    };

    $scope.ChauAu = function () {
      $scope.cards = response.data;
      let cardChauAu = [];
      for (let index = 0; index < $scope.cards.length; index++) {
        if ($scope.cards[index].Loca === "ChauAu") {
          cardChauAu.push($scope.cards[index]);
        }
      }
      $scope.cards = cardChauAu;
    };

    $scope.VungTau = function () {
      $scope.cards = response.data;
      let cardVungTau = [];
      for (let index = 0; index < $scope.cards.length; index++) {
        if ($scope.cards[index].Name === "Vũng Tàu (Miền Nam)") {
          cardVungTau.push($scope.cards[index]);
        }
      }
      $scope.cards = cardVungTau;
    };

    $scope.DaLat = function () {
      $scope.cards = response.data;
      let cardDaLat = [];
      for (let index = 0; index < $scope.cards.length; index++) {
        if ($scope.cards[index].Name === "Đà Lạt (Miền Trung)") {
          cardDaLat.push($scope.cards[index]);
        }
      }
      $scope.cards = cardDaLat;
    };

    $scope.All = function () {
      $scope.cards = response.data;
    };
  });

  $scope.sortby = function () {
    let x = document.getElementById("sortby").value;
    if (x === "Thấp - Cao Giá") {
      $scope.prop = "Price";
    }
    if (x === "Cao - Thấp Giá") {
      $scope.prop = "-Price";
    }
    if (x === "Đánh giá cao") {
      $scope.prop = "-Rate";
    }
    if (x === "Đánh giá trung bình") {
      $scope.prop = "Rate";
    }
    if (x === "Mới Nhất") {
      $scope.prop = "";
    }
  };

  $scope.tours = [
    {
      Name: "Tour Sài Gòn",
      Img: "saigon2.jpg",
      rate: "5.0",
      Price: "$$",
      Quanity: "5 Tour",
    },
    {
      Name: "Tour Miền Tây",
      Img: "tourmientay.jpg",
      rate: "5.0",
      Price: "$$",
      Quanity: "12 Tour",
    },
    {
      Name: "Tour Phú Quốc",
      Img: "tourphuquoc.jpg",
      rate: "5.0",
      Price: "$$",
      Quanity: "4 Tour",
    },
    {
      Name: "Tour Đà Lạt",
      Img: "saigon2.jpg",
      rate: "5.0",
      Price: "$$",
      Quanity: "4 Tour",
    },
    {
      Name: "Tour Nước Ngoài",
      Img: "tournuocngoai.jpg",
      rate: "5.0",
      Price: "$$",
      Quanity: "8 Tour",
    },
    {
      Name: "Tour Miền Bắc",
      Img: "tourmienbac.jpg",
      rate: "5.0",
      Price: "$$",
      Quanity: "5 Tour",
    },
    {
      Name: "Tour Miền Trung",
      Img: "tourmientrung.jpg",
      rate: "5.0",
      Price: "$$",
      Quanity: "5 Tour",
    },
  ];

  $scope.blogs = [
    {
      Title: "DU LỊCH",
      Name: "Di chuyển bằng đường hàng không trong thời kỳ COVID-19",
      NameUser: "Minh Trung",
      Date: "May 24",
      Comment: "No Comment",
      Img: "01.jpg",
      ImgUser: "user1.png",
    },
    {
      Title: "GIẢI TRÍ",
      Name: "10 Bảo Tàng Đẳng Cấp Thế Giới Bạn Có Thể Ghé Thăm",
      NameUser: "Xuân Trường",
      Date: "Apr 28",
      Comment: "4 Comment",
      Img: "02.jpg",
      ImgUser: "user2.png",
    },
    {
      Title: "DU LỊCH",
      Name: "7 lời khuyên dành cho du khách một mình ở Châu Phi ​",
      NameUser: "Hoàng Long",
      Date: "Apr 28",
      Comment: "2 Comment",
      Img: "03.jpg",
      ImgUser: "user3.png",
    },
  ];

  $scope.product = {};
  $scope.index2 = -1;
  $scope.total = 0;
  $scope.tax = 0;

  $scope.Edit = function (index) {
    $scope.index2 = index;
    $scope.product = angular.copy($scope.carditems[$scope.index2]);
    const input = document.getElementById(
      "Sl" + $scope.carditems[$scope.index2].chitiet
    );
    if (input.value == 0) {
      $scope.carditems.splice($scope.index2, 1);
      document.getElementById("badgeCount").textContent =
        "";
    } else {
      $scope.carditems[$scope.index2].Sl = input.value;
    }
    $scope.Tongtien = 0;
    for (let index = 0; index <  $scope.carditems.length; index++) { 
      $scope.Tongtien+=$scope.carditems[index].Price*$scope.carditems[index].Sl;
    }
  };
}

var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", { templateUrl: "forms/about.html" })
    .when("/about", { templateUrl: "forms/tour.html" })
    .when("/blog", { templateUrl: "forms/blog.html" })
    .when("/cart", { templateUrl: "forms/cart.html" })
    .when("/tour", { templateUrl: "forms/alltour.html" })
    .when("/login", { templateUrl: "forms/login.html" })
    .when("/reg", { templateUrl: "forms/regis.html" })
    .when("/loginsucc", { templateUrl: "forms/alltour.html" })
    .when("/regissucc", { templateUrl: "forms/login.html" })
    .when("/alltour/:id", {
      templateUrl: "/ASM/forms/tourchitiet.html",
      controller: "tourCtrl",
    })
    .otherwise({
      templateUrl: "forms/about.html",
    });
});
app.run(function ($rootScope) {
  $rootScope.$on("routeChangeSuccess", function () {
    $rootScope.loading = false;
  });
  $rootScope.$on("routeChangeError", function () {
    $rootScope.loading = false;
    alert("lỗi ko truy cập được template");
  });
});
app.controller("myctrl", myfunc);

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$(".owl-carousel").trigger("play.owl.autoplay", [1900]);
