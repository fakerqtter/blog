$(document).ready(function() {
  $('img').not('.no-fancybox').each(function() {
    if ($(this).parent().hasClass('fancybox')) return;
    if ($(this).parents().addBack().hasClass('nofancybox')) return;
    var alt = this.alt;
    if (alt) $(this).after('<span class="caption">' + alt + '</span>');
    $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" title="' + alt + '" class="fancybox"></a>');
  });
  $(this).find('.fancybox').each(function(){
    $(this).attr('rel', 'article');
  });
});
$(document).ready(function() {
  $("a[href$='.jpeg' i],a[href$='.jpg' i],a[href$='.png' i],a[href$='.gif' i],a[href$='.webp' i]").attr('data-fancybox', 'gallery').fancybox({
    helpers : {
      title: { type: 'inside'}
    }
  });
});
