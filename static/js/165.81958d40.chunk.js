"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[165],{165:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var s=a(3),n=a(367),r=a(99);const c=e=>e.contacts.items,o=e=>e.contacts.isLoading,l=e=>e.contacts.error,i=(0,r.Mz)([c,e=>e.filter.status],((e,t)=>e.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())))));var d=a(253),m=a(903),h=a(344);const _="ContactForm_form__dhl+T",p="ContactForm_formBox__cXiHe",x="ContactForm_label__-cVXI",u="ContactForm_input__Bl93P",j="ContactForm_button__eSwX9";var C=a(579);const b=()=>{const e=(0,h.Ak)(),t=(0,h.Ak)(),a=(0,s.wA)(),n=(0,s.d4)(c);return(0,C.jsxs)("form",{className:_,onSubmit:e=>{e.preventDefault();const t=e.currentTarget,s=t[0].value,r=t[1].value;n.some((e=>e.name===s))?alert(s+" is already in contacts."):a((0,m.IP)({name:s,phone:r})),t.reset()},children:[(0,C.jsxs)("div",{className:p,children:[(0,C.jsx)("label",{className:x,htmlFor:e,children:"Name"}),(0,C.jsx)("input",{className:u,type:"text",name:"name",id:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+((['\\s\\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsxs)("div",{className:p,children:[(0,C.jsx)("label",{className:x,htmlFor:t,children:"Number"}),(0,C.jsx)("input",{className:u,type:"tel",name:"number",id:t,pattern:"^\\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\\W*\\d){0,13}\\d$",title:"Phone number must start with +, be at least 3 digits and can contain spaces, dashes",required:!0})]}),(0,C.jsx)("button",{className:j,type:"submit",children:"Add contact"})]})};var N=a(349);const f="Filter_filter__vxThR",v="Filter_input__N7T3z",A=()=>{const e=(0,h.Ak)(),t=(0,s.wA)();return(0,C.jsxs)("div",{className:f,children:[(0,C.jsx)("p",{children:"Find contacts by name"}),(0,C.jsx)("input",{className:v,onChange:e=>{const a=e.target.value;t((0,N.R)(a))},type:"text",name:"filter",id:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+((['\\s\\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})},k="Contact_itemContainer__ydaqD",F="Contact_text__Wq-3f",g="Contact_paragraph__gC7bF",y="Contact_button__F+kJb",w=e=>{let{contact:t}=e;const a=(0,s.wA)();return(0,C.jsxs)("div",{className:k,children:[(0,C.jsxs)("div",{className:F,children:[(0,C.jsx)("p",{className:g,children:t.name}),(0,C.jsx)("p",{className:g,children:t.phone})]}),(0,C.jsx)("button",{className:y,type:"button",onClick:()=>a((0,m.MO)(t.id)),children:"Delete"})]})},z="ContactList_list__csErn",L="ContactList_listItem__SptUx",Z="ContactList_error__uCB2f",q=e=>{let{error:t}=e;const a=(0,s.d4)(i);return(0,C.jsxs)("div",{children:[t&&(0,C.jsx)("p",{className:Z,children:"Failed to fetch data from the server"}),(0,C.jsx)("ul",{className:z,children:a.map((e=>(0,C.jsx)("li",{className:L,children:(0,C.jsx)(w,{contact:e})},e.id)))})]})},B="Contacts_appContainer__64XIb",P="Contacts_firstHeading__KfJXq",X="Contacts_secondHeading__Px0xm",I=()=>{const e=(0,s.d4)(o),t=(0,s.d4)(l);return(0,C.jsxs)("main",{children:[(0,C.jsxs)(n.mg,{children:[(0,C.jsx)("title",{children:"Contacts"}),(0,C.jsx)("meta",{name:"description",content:"Welcome to the contacts page of the online phonebook. Save and manage names and phone numbers."}),(0,C.jsx)("meta",{name:"keywords",content:"contact, contacts, phonebook, phonenumber"})]}),e&&!t&&(0,C.jsx)(d.a,{}),(0,C.jsxs)("div",{className:B,children:[(0,C.jsx)("h1",{className:P,children:"Phonebook"}),(0,C.jsx)(b,{}),(0,C.jsx)("h2",{className:X,children:"Contacts"}),(0,C.jsx)(A,{}),(0,C.jsx)(q,{error:t})]})]})}}}]);
//# sourceMappingURL=165.81958d40.chunk.js.map