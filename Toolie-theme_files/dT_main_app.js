var scrollToCollectionTop=function(){$("html, body").animate({scrollTop:0},1e3)},collectionFilterPostInit=function(){var sectionId="collection-template";dt_initQuickShop(sectionId),dt_activateQuickShop(),scrollToCollectionTop(),loadSPRXHR()},collectionFilterPostInitTemp=function(){var sectionId="collection-template";dt_initQuickShop(sectionId),dt_activateQuickShop(),loadSPRXHR()},loadSPRXHR=function(){document.querySelector(".spr-badge")&&(SPR.registerCallbacks(),SPR.initRatingHandler(),SPR.initDomEls(),SPR.loadProducts(),SPR.loadBadges())},showHideClearFilter=function(){var constraint=dTCollectionFilter.getConstraint();constraint.length>0?$(".dT_ClearAll").css("display","block"):$(".dT_ClearAll").css("display","none")},resetGrid=function(){},doProductGridWishListPersistent=function(class_element){var dTCompareListOther=dTCompareList;window.dTCompareListOther=dTCompareListOther,dTCompareListOther.setListLocalStorageKey("dt-product-compare-list",","),new Vue({el:class_element,delimiters:["${","}"],data:{},computed:{},methods:{isInWishList:function(handle){return dTWhistList.isAddedIntoList(handle)},isInCompareList:function(handle){return dTCompareListOther.isAddedIntoList(handle)},compareItemCount:function(){var items=dTCompareListOther.getWishlist();return items.length}}})},doCollectionWishListPersistent=function(){doProductGridWishListPersistent(".dT_VProdWrapper")},doCollectionWishListPersistentOther=function(){doProductGridWishListPersistent(".dT_VProdWrapperOther")},doProductSingleWishListPersistent=function(){doProductGridWishListPersistent(".dT_VProdWishList")},setWishListCount=function(){if(document.querySelector(".dt-wishlist-cnt")){var items=dTWhistList.getWishlist(),cnt=items.length,elementList=document.querySelectorAll(".dt-wishlist-cnt");elementList.forEach(element=>{cnt>0?(element.innerHTML=cnt,element.style.display="block"):element.innerHTML=0})}};const dT_AddToCart=function(frm){dTGeneral.loadingAxiosAddToCartCreation(),axios.post("/cart/add.js",frm).then(response=>{window.dTGeneral.closeMiniCart(),window.dTGeneral.showMiniCart()}).catch(error=>{})},dT_QuickAddToCart=function(frm){dTGeneral.loadingAxiosAddToCartCreation(),axios.post("/cart/add.js",frm).then(response=>{$.magnificPopup.close(),window.dTGeneral.showMiniCart()}).catch(error=>{})},dT_AddToCartOther=function(frm){dTGeneral.loadingAxiosAddToCartCreation(),axios.post("/cart/add.js",frm).then(response=>{Shopify.moveAlong()}).catch(error=>{})},setWhishListLoaingClass=function(el){el.removeClass("dT-icon-add-wlist-loaded"),el.addClass("dT-icon-add-wlist-loading")},setWhishListLoadedClass=function(el){setTimeout(function(){el.removeClass("dT-icon-add-wlist-loading"),el.addClass("dT-icon-add-wlist-loaded")},3e3),el.attr("href","/pages/wishlist"),el.removeClass("dT_WhishListAddBtn");var viewMyWishList=DT_THEME.strings.viewMyWishList==""?DT_THEME.strings.viewMyWishList:"View My WishList";el.find("span").html(viewMyWishList)},specialReloadWhishListGrid=function(){},setCompareListLoaingClass=function(el){el.removeClass("dT-icon-add-compare-loaded"),el.addClass("dT-icon-add-compare-loading")},setCompareListLoadedClass=function(el){setTimeout(function(){el.removeClass("dT-icon-add-compare-loading"),el.addClass("dT-icon-add-compare-loaded")},3e3),el.attr("href","/pages/compare"),el.removeClass("dT_compareListAddBtn")};var dT_WishListGrid,whishListReload=function(){dT_WishListGrid.getList(),dT_WishListGrid.isEmpty()};function getWishList(){dT_WishListGrid=new Vue({el:"#dT_WishListGrid",delimiters:["${","}"],data:{wishListRecords:[],isNoRecords:!1,wishListRecordsTemplate:[{id:"",product_title:"",product_handle:"",product_image:"",vendor:"",type:"",money_price:"",price_min:"",price_max:"",available:"",price_varies:"",variant_id:"",variant_title:"",sku:"",quantity:"1",product_url:""}]},computed:{wishList:function(){var Records=dTWhistList.getWishListRecords();return this.wishListRecords=Records,this.wishListRecords},isEmpty:function(){return!1}},mounted:function(){this.getList(),this.isEmpty()},methods:{getList:function(){var Records=dTWhistList.getWishListRecords();return this.wishListRecords=Records,this.wishListRecords},isEmpty:function(){return this.wishListRecords.length>0?(typeof this.wishListRecords=="object"&&(this.wishListRecords[0].id==""?this.isNoRecords=!0:this.isNoRecords=!1),this.isNoRecords):(this.isNoRecords=!0,this.isNoRecords)},remove:function(productHandle){console.log("remove from wish list "+productHandle);try{var p2=Promise.resolve(1);p2.then(function(value){return dTGeneral.openWhishListRemovePreload(),dTWhistList.removeWhishlist(productHandle),value+1}).then(function(value){setTimeout(function(){var items=dTWhistList.getWishlist(),cnt=items.length;return console.log("wish list count "+cnt),cnt<=0&&window.location.reload(),whishListReload(),dTGeneral.closeWhishListRemovegPreload(),$("#row_"+productHandle).remove(),setWishListCount(),value+1},5e3)}).then(function(value){return value+1}).then(function(value){return value+1})}catch{}finally{}}}})}function getCompareList(){var dT_CompareListGrid=new Vue({el:"#dT_CompareListGrid",delimiters:["${","}"],data:{compareListRecords:[],isNoRecords:!1,wishListRecordsTemplate:[{id:"",product_title:"",product_handle:"",product_image:"",vendor:"",type:"",money_price:"",price_min:"",price_max:"",available:"",price_varies:"",variant_id:"",variant_title:"",sku:"",quantity:"1",product_url:""}]},computed:{createContact:function(){},resetForm:function(){}},mounted:function(){this.getList(),this.isEmpty()},methods:{getList:function(){var Records=dTCompareList.getCompareListRecords();return this.compareListRecords=Records,this.compareListRecords},isEmpty:function(){return this.compareListRecords.length>0?(typeof this.compareListRecords=="object"&&(this.compareListRecords[0].id==""?this.isNoRecords=!0:this.isNoRecords=!1),this.isNoRecords):(this.isNoRecords=!0,this.isNoRecords)},remove:function(productHandle){try{var p2=new Promise(function(resolve,reject){resolve(1)});p2.then(function(value){return dTGeneral.openCompareListRemovePreload(),value+1}).then(function(value){return dTCompareList.removeWhishlist(productHandle),dTCompareList.setupGrid("","compareList"),value+1}).then(function(value){return dTGeneral.closeCompareListRemovegPreload(),value+1}).then(function(value){return $(".record-"+productHandle).remove(),compareListReload(),value+1})}catch{}finally{}}}}),compareListReload=function(){dT_CompareListGrid.getList(),dT_CompareListGrid.isEmpty()}}const dTUpStream=function(){},recomendatedProductPostInit=function(){var sectionId="collection-template";dt_initQuickShop(sectionId),dt_activateQuickShop(),scrollToCollectionTop()},loadProductRecommendationsIntoSection=function(){var productRecommendationsSection=document.querySelector(".product-recommendations");if(productRecommendationsSection!==null){var productId=productRecommendationsSection.dataset.productId,limit=productRecommendationsSection.dataset.limit,requestUrl="/recommendations/products?section_id=product-recommendations&limit="+limit+"&product_id="+productId,request=new XMLHttpRequest;request.open("GET",requestUrl),request.onload=function(){if(request.status>=200&&request.status<300){var container=document.createElement("div");container.innerHTML=request.response,productRecommendationsSection.parentElement.innerHTML=container.querySelector(".product-recommendations").innerHTML,recomendatedProductPostInit()}},request.send()}};document.addEventListener("shopify:section:load",function(event){event.detail.sectionId==="product-recommendations"&&loadProductRecommendationsIntoSection()}),function($2){"use strict";if($2(document).on("click",".dT_WhishListAddBtn",function(event){event.preventDefault();var self=jQuery(this),productHandle=self.attr("data-product_handle"),addToWishList=Promise.resolve("addToWishList");addToWishList.then(function(value){return dTGeneral.openWhishListAddingPreload(),setWhishListLoaingClass(self),"addToWishList"}).then(function(value){return dTWhistList.updateWishlist(productHandle),"addToWishList"}).then(function(value){dTGeneral.closeWhishListAddingPreload(),setWhishListLoadedClass(self),setWishListCount()}).catch(function(){})}),document.querySelector(".dT_WishListGrid")){var gridWishList=Promise.resolve("gridWishList");gridWishList.then(function(value){return dTGeneral.openCompareListRemovePreload(),dTWhistList.setupGrid("","wishList"),"gridWishList"}).then(function(value){setTimeout(function(){return getWishList(),whishListReload(),dTGeneral.closeCompareListRemovegPreload(),"gridWishList"},3e3)}).then(function(value){}).catch(function(err){console.log("dT_WishListGrid error"+err)})}$2(document).on("click",".dT_RemoveWhishList",function(event){event.preventDefault();var self=jQuery(this),productHandle=self.attr("data-product_handle");$2(this).closest("tr").remove(),Promise.all([dTGeneral.openWhishListRemovePreload(),dTWhistList.removeWhishlist(productHandle),dTGeneral.closeWhishListRemovegPreload(),specialReloadWhishListGrid()]).then(values=>{})}),document.querySelector(".dT_VProdWishList")&&doProductSingleWishListPersistent();var a_vueProductGrid=[".dT_VProdWrapper",".dT_VProdWrapperOther",".dT_VProdWrapperHot",".dT_VRelatedProducts",".dT_VProdRecommendations"];a_vueProductGrid.forEach(function(element,index){document.querySelector(element)&&doProductGridWishListPersistent(element)}),document.querySelector(".dT_vProdWrap")&&$2(".dT_vProdWrap").each(function(i,el){var className=el.className,a_className=className.split(" ").map(string=>string.trim()),a_class=[];a_className.forEach(function(item,index){item.trim()!=""&&a_class.push(item.trim())});var className="."+a_class.join("."),className=className.trim();doProductGridWishListPersistent(className)}),loadProductRecommendationsIntoSection(),dTCompareList.setListLocalStorageKey("dt-product-compare-list",","),$2(document).on("click",".dT_compareListAddBtn",function(event){event.preventDefault();var self=jQuery(this),productHandle=self.attr("data-product_handle"),items=dTCompareList.getWishlist();items.length==4?alert(DT_THEME.strings.minCompareProduct):Promise.all([dTGeneral.openCompareListAddingPreload(),setCompareListLoaingClass(self),dTCompareList.updateWishlist(productHandle),dTGeneral.closeCompareListRemovegPreload(),setCompareListLoadedClass(self)]).then(values=>{})}),$2(document).on("click",".dT_compareListLink",function(event){event.preventDefault();var self=jQuery(this),productHandle=self.attr("data-product_handle"),compareUrl=self.attr("href"),items=dTCompareList.getWishlist();items.length<=1?alert(DT_THEME.strings.minCompareProductNav):window.location.href=compareUrl}),document.querySelector(".dT_CompareListGrid")&&dTCompareList.setupGrid(getCompareList,"compareList"),$2(document).on("click",".dT_RemoveCompareList",function(event){event.preventDefault();var self=jQuery(this),productHandle=self.attr("data-product_handle");$2(".record-"+productHandle).remove(),Promise.all([dTGeneral.openCompareListRemovePreload(),dTCompareList.removeWhishlist(productHandle),dTGeneral.closeCompareListRemovegPreload(),getCompareList()]).then(values=>{})}),$2(document).on("click",".dT_CollectionFilter",function(event){event.preventDefault();var self=jQuery(this),constraintValue=self.attr("data-value");self.hasClass("active")?self.removeClass("active"):self.addClass("active"),dTCollectionFilter.updateConstraint(constraintValue),dTCollectionFilter.updateCollectionGrid(),showHideClearFilter()}),$2(document).on("click",".dT_ClearAll",function(event){event.preventDefault();var self=jQuery(this);dTCollectionFilter.resetConstraint(),$2(".dT_CollectionFilter").removeClass("active"),dTCollectionFilter.updateCollectionGrid(),showHideClearFilter()}),$2(document).on("click",".dT_Pagination",function(event){event.preventDefault();var self=jQuery(this),paginationURL=self.attr("href"),a_params={};dTCollectionFilter.updateCollectionGrid(a_params,paginationURL),showHideClearFilter()}),$2(document).on("change",".dT_SortBy",function(event){event.preventDefault();var self=jQuery(this),urlFilter=new URL(window.location.href),search_params=urlFilter.searchParams;search_params.set("sort_by",this.value),urlFilter.search=search_params.toString();var collectionFilterURL=urlFilter.toString(),a_params={};dTCollectionFilter.updateCollectionGrid(a_params,collectionFilterURL),showHideClearFilter()});var dTProductDealTimerStart=function(){document.querySelector(".dT_dealTimer")&&$2(".dT_dealTimer").each(function(index){var productID=$2(this).attr("data-itemID"),targetTime=$2(this).attr("data-time");$2(".lof-clock-"+productID+"-detail").lofCountDown({TargetDate:targetTime,DisplayFormat:"<ul class='list-inline'><li class='day'>%%D%%<span>Days</span></li><li class='hours'>%%H%%<span>Hours</span></li><li class='mins'>%%M%%<span>Min</span></li><li class='seconds'>%%S%%<span>Sec</span></li></ul>",FinishMessage:"Expired"})})};showHideClearFilter(),dTProductDealTimerStart(),$2(document).on("click",".dT_AddToCartBtn",function(event){event.preventDefault();var frmData=$2(".shopify-product-form").serialize();dT_AddToCart(frmData)}),$2(document).on("click",".dT_QuickAddToCartBtn",function(event){event.preventDefault();var productVarientId=$2(this).attr("data-product-varient-id");$2(".dT_quickProductVarientId").val(productVarientId);var frmData=$2(".shopify-product-quick-form").serialize();dT_QuickAddToCart(frmData)}),$2(document).on("submit","#bundleAddToCartFrmId",function(event){event.preventDefault();const setShopifyQue=function(){Shopify.queue=[],Shopify.isBundleDiscount=!0,bundleProductIds.forEach(element=>{var productId=element,productVarientId=$2("#bundle_product_price_"+productId).attr("data-varient-id");productVarientId!=""&&$2("#bundle_chk_"+productId).is(":checked")?Shopify.queue.push({variantId:productVarientId}):Shopify.isBundleDiscount=!1})},applyBundleDiscount=function(discount_code){Shopify.isBundleDiscount==!0&&axios.get("/discount/"+discount_code,{}).then(function(response){})},doBundleAddToCart=function(){setShopifyQue(),Shopify.moveAlong=function(){if(Shopify.queue.length){var request=Shopify.queue.shift(),frmData="id="+request.variantId+"&quantity=1";dT_AddToCartOther(frmData)}else finalBundleCallBack()},Shopify.moveAlong()},finalBundleCallBack=function(){var mainProductId=BUNDLE_MAIN_PRODUCT_ID;applyBundleDiscount("DT-DISCOUNT-"+mainProductId),window.dTGeneral.showMiniCart()};Promise.resolve(doBundleAddToCart()).then(function(){})});var hideDT_SearchResultSection=function(){$2(".dT_PredictiveSearchResult_Section").css("display","none")},showDT_SearchResultSection=function(){$2(".dT_PredictiveSearchResult_Section").css("display","block")};$2(document).on("click",".dT_SearchClose",function(event){event.preventDefault();var self=jQuery(this);$2("#SearchInput").val(""),$2("#SearchInput").focus(),hideDT_SearchResultSection(),self.css("display","none")}),$2(document).click(function(){hideDT_SearchResultSection()}),$2(".dT_TopStickySearchBtn").click(function(ev){ev.preventDefault(),$2("#dT_top-sticky").slideDown("slow"),scrollToCollectionTop()}),$2(".dT_TopStickySearchCloseBtn").click(function(ev){ev.preventDefault(),$2("#dT_top-sticky").slideUp("slow")}),setWishListCount()}(jQuery);
//# sourceMappingURL=/cdn/shop/t/3/assets/dT_main_app.js.map?v=104683983802296481371641369028
