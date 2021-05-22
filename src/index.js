import "./style.css"
angular.module('Pack', [])
  .controller('Pack&Pack', ["$scope","$http",function(s,h) {
      s.nombre="";
      s.buscar="";
      s.tablas=[];
      s.datos={};
      s.mensaje=""; 
            h({
              method:"GET",
              url:"http://localhost:3099/BringAllTheData",
              }).then(function successCallback (data){
              s.tablas=data.data
              })       
      s.addPost = ()=>{
          h({
            method: 'POST',
            url: 'http://localhost:3099/NewUser',
            data: { Name:s.datos.Name,
              Mail:s.datos.Mail,
              Telephone:s.datos.Telephone,
              Password:s.datos.Password,
              Age:s.datos.Age,
              Gender:s.datos.Gender,
              Hobby:s.datos.Hobby, }
           }).then(function successCallback (data){
              console.log(data.data)
              s.mensaje=data.message
              s.datos = {}
              s.table()
      })
      }
      s.table = ()=>{
        h({
          method:"GET",
          url:"http://localhost:3099/BringAllTheData",
         }).then(function successCallback (data){
          s.tablas=data.data
          })   
      }
      s.eliminiar= (tabla)=>{
          var a = tabla._id
        h({
            url: "http://localhost:3099/Delete"+ a,
            method:"delete",}).then(function successCallback (data){
            s.table()
            }, (err) => {
              console.log("rejected with", err);
              alert(err.message)
          })
      }
  }]);
