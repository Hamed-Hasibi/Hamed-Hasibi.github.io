var bundleProductDisplayAction={productState:{available:!0,soldOut:"",onSale:"",showUnitPrice:"",productId:"",product_handle:""},_hideErrorMessage:function(){},_setProductState:function(evt){var variant=evt.detail.variant;if(this.productState.productId=evt.detail.product.id,this.productState.product_handle=evt.detail.product.handle,!variant){this.productState.available=!1;return}this.productState.available=!0,this.productState.soldOut=!variant.available,this.productState.onSale=variant.compare_at_price>variant.price,this.productState.showUnitPrice=!!variant.unit_price},_updateStoreAvailabilityContent:function(evt){},_updateAddToCart:function(evt){if(!this.productState.available){this._disableAddToCart(DT_THEME.strings.unavailable),jQuery("#bundle_chk_"+this.productState.productId).prop("checked",!1),this._updatePriceValueHidden(evt);return}if(this.productState.soldOut){this._disableAddToCart(DT_THEME.strings.soldOut),jQuery("#bundle_chk_"+this.productState.productId).prop("checked",!1),this._updatePriceValueHidden(evt);return}this._enableAddToCart(DT_THEME.strings.addToCart),jQuery("#bundle_chk_"+this.productState.productId).prop("checked",!0),this._updatePriceValueHidden(evt)},_updatePriceValueHidden:function(evt){var variant=evt.detail.variant;if(variant)var varientPrice=variant.price,varientId=variant.id;else var varientPrice="",varientId="";jQuery("#bundle_product_price_"+this.productState.productId).val(varientPrice),jQuery("#bundle_product_price_"+this.productState.productId).attr("data-varient-id",varientId),jQuery("#bundle_chk_"+this.productState.productId).focus(),computeTotalDiscount()},_disableAddToCart:function(text){jQuery(".dt_AddToCart").html(text),jQuery(".dt_AddToCart").prop("disabled",!0)},_enableAddToCart:function(text){jQuery(".dt_AddToCart").prop("disabled",!1),jQuery(".dt_AddToCart").html(text)},_updateLiveRegion:function(item){},_updatePriceComponentStyles:function(evt){},_updateAvailability:function(evt){bundleProductDisplayAction._hideErrorMessage(),bundleProductDisplayAction._setProductState(evt),bundleProductDisplayAction._updateStoreAvailabilityContent(evt),bundleProductDisplayAction._updateAddToCart(evt),bundleProductDisplayAction._updateLiveRegion(evt),bundleProductDisplayAction._updatePriceComponentStyles(evt)},_updateMedia:function(evt){var variant=evt.detail.variant,mediaId=variant.featured_media.id,sectionMediaId="product-thumb-media-"+mediaId,sectionProductThumbMediaId=sectionMediaId,sectionProductGalleryTop="product-gallery-media-"+mediaId;bundleProductDisplayAction._switchMedia(sectionProductGalleryTop),bundleProductDisplayAction._setActiveThumbnail(sectionMediaId)},_switchMedia:function(sectionMediaId){},_setActiveThumbnail:function(sectionMediaId){},_updatePrice:function(evt){var variant=evt.detail.variant,productId=evt.detail.product.id;document.querySelector("#sale-price-"+productId)&&(document.querySelector("#sale-price-"+productId).innerHTML=theme.Currency.formatMoney(variant.price,theme.moneyFormat)),document.querySelector("#old-price-"+productId)&&(document.querySelector("#old-price-"+productId).innerHTML=theme.Currency.formatMoney(variant.compare_at_price,theme.moneyFormat))},_updateSKU:function(evt){var variant=evt.detail.variant,sku=document.querySelector(".dT_ProductSkuText");sku&&(sku.innerHTML=variant.sku)}},computeTotalDiscount=function(){var a_price=[],disCountPercentage=DT_DISCOUNT,isAllBundleProductChecked=!0,totalProductItem=0;bundleProductIds.forEach(element=>{var productId=element;if(jQuery("#bundle_chk_"+productId).is(":checked")){var productPrice=jQuery("#bundle_product_price_"+productId).val();productPrice!=""?(productPrice=productPrice*1,a_price.push(productPrice)):isAllBundleProductChecked=!1}else isAllBundleProductChecked=!1;var totalProducPrice=a_price.reduce((a,b)=>a+b,0);isAllBundleProductChecked==!1?jQuery(".dT_totalBundleOriginalPrice").hide():(jQuery(".dT_totalBundleOriginalPrice").html(theme.Currency.formatMoney(totalProducPrice,theme.moneyFormat)),jQuery(".dT_totalBundleOriginalPrice").show()),isAllBundleProductChecked==!0&&(disCountPercentage=parseInt(disCountPercentage),totalProducPrice=totalProducPrice-totalProducPrice*(disCountPercentage/100)),jQuery(".dT_totalBundleSalePrice").html(theme.Currency.formatMoney(totalProducPrice,theme.moneyFormat))})};class doBundleProductSwatch{constructor(container,productJsonId,originalProductSelectorId,singleOptionSelector){this.eventHandlers={};var productTemp=$("#"+productJsonId).html(),product=JSON.parse(productTemp);this.container=container,this.productId=product.id;var productJson=product;this.variants=new dT_slate.Variants({container,product:productJson,originalSelectorId:originalProductSelectorId,enableHistoryState:!1,singleOptionSelector:".single-option-selector"}),this.eventHandlers.updateAvailability=bundleProductDisplayAction._updateAvailability.bind(this),this.eventHandlers.updateMedia=bundleProductDisplayAction._updateMedia.bind(this),this.eventHandlers.updatePrice=bundleProductDisplayAction._updatePrice.bind(this),this.eventHandlers.updateSKU=bundleProductDisplayAction._updateSKU.bind(this),this.container.addEventListener("variantChange",this.eventHandlers.updateAvailability),this.container.addEventListener("variantImageChange",this.eventHandlers.updateMedia),this.container.addEventListener("variantPriceChange",this.eventHandlers.updatePrice),this.container.addEventListener("variantSKUChange",this.eventHandlers.updateSKU)}}(function($2){"use strict";var hideAllVairentOptions=function(){jQuery(".dT_varientBWrap").is(":visible")&&jQuery(".dT_varientBWrap").slideUp()};$2(document).on("click",function(e){$2(e.target).closest(".dT_bundleSelector").length===0&&hideAllVairentOptions()}),document.querySelector(".dT_bundleOptions"),document.querySelector(".dT_bundleSelector")&&($2(document).on("click",".dT_bundleProductToggle",function(event){event.preventDefault();var self=jQuery(this),bundleProductHandle=self.attr("data-bundle-product-handle"),bundleProductId=self.attr("data-bundle-product-id");hideAllVairentOptions(),jQuery(".dT_varientOptions_"+bundleProductId).is(":visible")?jQuery(".dT_varientOptions_"+bundleProductId).slideUp():jQuery(".dT_varientOptions_"+bundleProductId).slideDown()}),$2(document).on("change",".dT_bundleCheck",function(event){event.preventDefault();var self=jQuery(this),bundleProductHandle=self.attr("data-product-handle"),bundleProductId=self.attr("data-product-id");computeTotalDiscount()}),bundleProductIds.forEach(element=>{var productId=element;new doBundleProductSwatch(document.getElementById("dT_bundle-product-"+productId),"dT_BundleProductJson-"+productId,"#bundle_productSelect_"+productId,".single-option-selector")}),computeTotalDiscount())})(jQuery);
//# sourceMappingURL=/cdn/shop/t/3/assets/dT_bundle.js.map?v=76915261480420889091641369025
