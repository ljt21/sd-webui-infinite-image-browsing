import{c3 as t}from"./index-00b4fcdc.js";const c=async()=>(await t.value.get("/db/basic_info")).data,d=async()=>(await t.value.get("/db/expired_dirs")).data,p=async()=>{await t.value.post("/db/update_image_data",{},{timeout:1/0})},u=async(a,s)=>(await t.value.post("/db/match_images_by_tags",{...a,folder_paths:(a.folder_paths_str??"").split(/,|\n/).map(e=>e.trim()).filter(e=>e),cursor:s})).data,g=async a=>(await t.value.post("/db/add_custom_tag",a)).data,i=async a=>(await t.value.post("/db/toggle_custom_tag_to_img",a)).data,_=async a=>{await t.value.post("/db/remove_custom_tag",a)},m=async a=>(await t.value.post("/db/search_by_substr",a)).data,r="/db/extra_paths",b=async a=>{await t.value.post(r,a)},l=async a=>{await t.value.delete(r,{data:a})},y=async a=>(await t.value.post("/db/get_image_tags",{paths:a})).data,v=()=>t.value.post("/db/rebuild_index"),h=a=>t.value.post("/db/batch_update_image_tag",a);export{b as a,c as b,d as c,g as d,_ as e,m as f,u as g,y as h,h as i,v as j,l as r,i as t,p as u};