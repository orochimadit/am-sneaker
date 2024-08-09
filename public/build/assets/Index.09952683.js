import{u as o,R as e,H as d,L as s}from"./app.9014b251.js";import{L as u}from"./Web.ce4ec3d7.js";import{C as E}from"./CardCategory.4abcabad.js";import{C as c}from"./CardProduct.8801218c.js";import"./FormatPrice.72b07cf2.js";function g(){const{sliders:a}=o().props;return e.createElement(e.Fragment,null,e.createElement("div",{className:"container",style:{marginTop:"80px"}},e.createElement("div",{className:"fade-in"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-10"},e.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-bs-ride":"carousel"},e.createElement("div",{className:"carousel-inner"},a.map((r,n)=>e.createElement("div",{className:`${n==0?"active carousel-item":"carousel-item"}`,key:n},e.createElement("img",{src:r.image,className:"d-block img-carousel rounded-3"})))),e.createElement("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev"},e.createElement("i",{className:"fa fa-long-arrow-alt-left carousel-custom text-dark shadow"}),e.createElement("span",{className:"visually-hidden"},"Previous")),e.createElement("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next"},e.createElement("i",{className:"fa fa-long-arrow-alt-right carousel-custom text-dark shadow"}),e.createElement("span",{className:"visually-hidden"},"Next"))))))))}function N({testimonial:a}){return e.createElement("div",{className:"col-md-4 mb-4"},e.createElement("div",{className:"card border-0 h-100 shadow-sm rounded-3"},e.createElement("div",{className:"card-body text-center"},e.createElement("p",{className:"card-text"},'"',a.message,'"'),e.createElement("h6",{className:"card-title mt-3"},e.createElement("strong",null,a.name)),e.createElement("p",{className:"text-muted mb-0"},a.job_title))))}function h(){const{sliders:a,categories:r,products:n,bestSellers:i}=o().props,m=[{name:"John Doe",message:"Produk ini sangat bagus dan sangat membantu dalam pekerjaan sehari-hari saya. Saya sangat merekomendasikannya!",job_title:"Software Engineer"},{name:"Jane Smith",message:"Layanan pelanggan yang sangat responsif dan produk berkualitas tinggi. Sangat puas dengan pembelian saya.",job_title:"Product Manager"},{name:"Alice Johnson",message:"Pengalaman belanja yang sangat menyenangkan. Produk dikirim dengan cepat dan sesuai deskripsi.",job_title:"UI/UX Designer"}];return e.createElement(e.Fragment,null,e.createElement(d,null,e.createElement("title",null,"Geek Store - Where Developer Shopping")),e.createElement(u,null,e.createElement("div",{className:"content-wrapper"},e.createElement("div",{className:"container mt-5 mb-5 pt-5"},e.createElement("div",{className:"fade-in"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row justify-content-between mb-3"},e.createElement("div",{className:"col-md-6 col-6 text-start"},e.createElement("h4",null,e.createElement("strong",null,"Kategori"))),e.createElement("div",{className:"col-md-6 col-6 text-end"},e.createElement(s,{href:"/categories",className:"text-dark"},e.createElement("strong",null,"See More ",e.createElement("i",{className:"fa fa-long-arrow-alt-right"}))))),e.createElement("div",{className:"row justify-content-center mb-4"},r.map((t,l)=>e.createElement(E,{category:t,key:l}))),e.createElement("div",{className:"row justify-content-center mb-4"},e.createElement(g,{sliders:a})),e.createElement("div",{className:"row justify-content-between mb-3"},e.createElement("div",{className:"col-md-6 col-6 text-start"},e.createElement("h4",null,e.createElement("strong",null,"Produk Terakhir"))),e.createElement("div",{className:"col-md-6 col-6 text-end"},e.createElement(s,{href:"/products",className:"text-dark"},e.createElement("strong",null,"See More ",e.createElement("i",{className:"fa fa-long-arrow-alt-right"}))))),e.createElement("div",{className:"row mb-5"},n.map((t,l)=>e.createElement(c,{product:t,key:l}))),e.createElement("div",{className:"row justify-content-between mb-3"},e.createElement("div",{className:"col-md-6 col-6 text-start"},e.createElement("h4",null,e.createElement("strong",null,"Best Sellers"))),e.createElement("div",{className:"col-md-6 col-6 text-end"},e.createElement(s,{href:"/best-sellers",className:"text-dark"},e.createElement("strong",null,"See More ",e.createElement("i",{className:"fa fa-long-arrow-alt-right"}))))),e.createElement("div",{className:"row mb-5"},i.map((t,l)=>e.createElement(c,{product:t,key:l}))),e.createElement("div",{className:"row justify-content-center mb-5"},e.createElement("div",{className:"col-md-12"},e.createElement("h4",{className:"text-center"},e.createElement("strong",null,"What Our Customers Say")),e.createElement("div",{className:"row justify-content-center mt-4"},m.length>0?m.map((t,l)=>e.createElement(N,{testimonial:t,key:l})):e.createElement("p",{className:"text-center text-muted"},"No testimonials available at the moment.")))))))))))}export{h as default};
