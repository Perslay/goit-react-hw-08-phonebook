"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[165],{165:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var s=a(3),n=a(591),r=a(99);const c=e=>e.contacts.items,l=e=>e.contacts.isLoading,o=e=>e.contacts.error,i=(0,r.Mz)([c,e=>e.filter.status],((e,t)=>e.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())))));var d=a(708),m=a(903),_=a(809);const h="ContactForm_form__dhl+T",x="ContactForm_formBox__cXiHe",p="ContactForm_label__-cVXI",u="ContactForm_input__Bl93P",j="ContactForm_button__eSwX9";var C=a(579);const N=()=>{const e=(0,_.Ak)(),t=(0,_.Ak)(),a=(0,s.wA)(),n=(0,s.d4)(c);return(0,C.jsxs)("form",{className:h,onSubmit:e=>{e.preventDefault();const t=e.currentTarget,s=t[0].value,r=t[1].value;n.some((e=>e.name===s))?alert(s+" is already in contacts."):a((0,m.IP)({name:s,phone:r})),t.reset()},children:[(0,C.jsxs)("div",{className:x,children:[(0,C.jsx)("label",{className:p,htmlFor:e,children:"Name"}),(0,C.jsx)("input",{className:u,type:"text",name:"name",id:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+((['\\s\\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsxs)("div",{className:x,children:[(0,C.jsx)("label",{className:p,htmlFor:t,children:"Number"}),(0,C.jsx)("input",{className:u,type:"tel",name:"number",id:t,pattern:"^\\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\\W*\\d){0,13}\\d$",title:"Phone number must start with +, be at least 3 digits and can contain spaces, dashes",required:!0})]}),(0,C.jsx)("button",{className:j,type:"submit",children:"Add contact"})]})};var b=a(349);const v="Filter_filter__vxThR",f="Filter_input__N7T3z",A=()=>{const e=(0,_.Ak)(),t=(0,s.wA)();return(0,C.jsxs)("div",{className:v,children:[(0,C.jsx)("p",{children:"Find contacts by name"}),(0,C.jsx)("input",{className:f,onChange:e=>{const a=e.target.value;t((0,b.R)(a))},type:"text",name:"filter",id:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+((['\\s\\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})},F="Contact_itemContainer__ydaqD",k="Contact_text__Wq-3f",y="Contact_paragraph__gC7bF",g="Contact_button__F+kJb",w=e=>{let{contact:t}=e;const a=(0,s.wA)();return(0,C.jsxs)("div",{className:F,children:[(0,C.jsxs)("div",{className:k,children:[(0,C.jsx)("p",{className:y,children:t.name}),(0,C.jsx)("p",{className:y,children:t.phone})]}),(0,C.jsx)("button",{className:g,type:"button",onClick:()=>a((0,m.MO)(t.id)),children:"Delete"})]})},z="ContactList_list__csErn",L="ContactList_listItem__SptUx",Z="ContactList_error__uCB2f",q=e=>{let{error:t}=e;const a=(0,s.d4)(i);return(0,C.jsxs)("div",{children:[t&&(0,C.jsx)("p",{className:Z,children:"Failed to fetch data from the server"}),(0,C.jsx)("ul",{className:z,children:a.map((e=>(0,C.jsx)("li",{className:L,children:(0,C.jsx)(w,{contact:e})},e.id)))})]})},B="Contacts_appContainer__64XIb",P="Contacts_firstHeading__KfJXq",X="Contacts_secondHeading__Px0xm",I=()=>{const e=(0,s.d4)(l),t=(0,s.d4)(o);return(0,C.jsxs)("div",{children:[(0,C.jsx)(n.m,{children:(0,C.jsx)("title",{children:"Contacts"})}),e&&!t&&(0,C.jsx)(d.a,{}),(0,C.jsxs)("div",{className:B,children:[(0,C.jsx)("h1",{className:P,children:"Phonebook"}),(0,C.jsx)(N,{}),(0,C.jsx)("h2",{className:X,children:"Contacts"}),(0,C.jsx)(A,{}),(0,C.jsx)(q,{error:t})]})]})}}}]);
//# sourceMappingURL=165.a296e0f9.chunk.js.map