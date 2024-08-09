import{u as y,r as s,R as e,H as S,d as z}from"./app.9014b251.js";import{L as C}from"./Account.89e49319.js";import{R as P}from"./quill.snow.77e2f9af.js";import{S as x}from"./sweetalert2.all.1ebe5f78.js";function F(){const{errors:l,categories:E}=y().props,[n,p]=s.exports.useState(""),[o,b]=s.exports.useState(""),[i,N]=s.exports.useState(""),[d,f]=s.exports.useState(""),[v,D]=s.exports.useState(""),[c,m]=s.exports.useState([{size:"",price:0}]),g=()=>{m([...c,{size:"",price:0}])},h=t=>{let a=[...c];a.splice(t,1),m(a)},u=(t,a)=>{let r=[...c];r[t][a.target.name]=a.target.value,m(r)},w=async t=>{t.preventDefault(),z.Inertia.post("/account/products",{title:n,category_id:o,description:i,weight:d,discount:v,product_sizes:c},{onSuccess:()=>{x.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(S,null,e.createElement("title",null,"Create Product - Ammshoes Store")),e.createElement(C,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shopping-bag"})," Add New Product")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:w},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Title"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:t=>p(t.target.value),placeholder:"Enter Title Product"})),l.title&&e.createElement("div",{className:"alert alert-danger"},l.title),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Category"),e.createElement("select",{className:"form-select",value:o,onChange:t=>b(t.target.value)},e.createElement("option",{value:""},"-- Select Category --"),E.map(t=>e.createElement("option",{value:t.id,key:t.id},t.name)))),l.category_id&&e.createElement("div",{className:"alert alert-danger"},l.category_id)),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Weight (Gram)"),e.createElement("input",{type:"number",className:"form-control",value:d,onChange:t=>f(t.target.value),placeholder:"Enter Weight (Gram)"})),l.phone&&e.createElement("div",{className:"alert alert-danger"},l.weight))),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Description"),e.createElement(P,{theme:"snow",rows:"5",value:i,onChange:t=>N(t)})),l.description&&e.createElement("div",{className:"alert alert-danger"},l.description),e.createElement("hr",null),e.createElement("div",{className:"row mt-3 mb-5"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"alert alert-warning"},e.createElement("i",{className:"fa fa-info-circle"}),"  add size and price for you product.")),c.map((t,a)=>e.createElement("div",{className:"row",key:a},e.createElement("div",{className:"col-md-5"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Size"),e.createElement("input",{type:"text",name:"size",value:t.size||"",onChange:r=>u(a,r),className:"form-control",placeholder:"Enter Size"}))),e.createElement("div",{className:"col-md-5"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Price"),e.createElement("input",{type:"number",name:"price",value:t.price||"",onChange:r=>u(a,r),className:"form-control",placeholder:"Enter Price"}))),a?e.createElement("div",{className:"col-md-2"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold text-white"},"."),e.createElement("button",{type:"button",className:"btn btn-danger btn-md border-0 shadow-sm w-100",onClick:()=>h(a)},e.createElement("i",{className:"fa fa-trash"})))):null)),l.product_sizes&&e.createElement("div",{className:"alert alert-danger"},l.product_sizes),e.createElement("div",{className:"col-md-12"},e.createElement("button",{type:"button",className:"btn btn-primary btn-md border-0 shadow-sm",onClick:()=>g()},e.createElement("i",{className:"fa fa-plus-circle"})))),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{F as default};
