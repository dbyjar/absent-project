"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[828],{1828:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const s={data:function(){return{columns:[{name:"created at",class:""},{name:"name",class:""},{name:"email",class:""},{name:"role",class:""}]}}};const n=(0,a(1900).Z)(s,(function(){var e=this,t=e._self._c;return t("div",[t("Tools",{on:{click:function(t){return e.$router.push({name:"user-create"})}}}),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("Box",[t("BaseTable",{attrs:{config:{namespace:"employee",params:{user_id:1}},columns:e.columns},scopedSlots:e._u([{key:"default",fn:function(a){var s=a.rows;return e._l(s,(function(a){return t("base-table-row",{key:a.id},[t("base-table-column",[e._v(e._s(e.formatDate(a.created_at)))]),e._v(" "),t("base-table-column",[e._v(e._s(a.name))]),e._v(" "),t("base-table-column",[e._v(e._s(a.email))]),e._v(" "),t("base-table-column",[e._v(e._s(a.user_role.name))]),e._v(" "),t("base-table-column",{staticClass:"text-end",attrs:{"overflow-visible":""}},[t("action-tool",{attrs:{withoutDetail:""},on:{edit:function(t){return e.edit(a.id)},remove:function(t){return e.remove(a.id)}}})],1)],1)}))}}])})],1)],1)])],1)}),[],!1,null,null,null).exports}}]);