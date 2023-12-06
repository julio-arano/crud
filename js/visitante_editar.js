console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        //fecha:"",
        nombre:"",
        apellido:"",
        ciudad:"",
        pais:"",
        imagen:"",
        email:"",
        whatsapp:"",
        comentario:"",
        url:'https://julioarano.pythonanywhere.com/personas/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id
                    //this.fecha=data.fecha
                    this.nombre=data.nombre;
                    this.apellido=data.apellido;
                    this.ciudad=data.ciudad;
                    this.pais=data.pais;
                    this.imagen=data.imagen;
                    this.email=data.email;
                    this.whatsapp=data.whatsapp;
                    this.comentario=data.comentario;
                    })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let  persona = {
                //fecha: this.fecha,
                nombre: this.nombre,
                apellido: this.apellido,
                ciudad: this.ciudad,
                pais: this.pais,
                imagen: this.imagen,
                email: this.email,
                whatsapp: this.whatsapp,
                comentario: this.comentario,
            }
            var options = {
                body: JSON.stringify(persona),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./visitantes.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
